package nl.vollo.kern.api;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.log4j.Log4j2;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateUtils;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.security.auth.login.LoginContext;
import javax.security.auth.login.LoginException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import java.util.Date;
import java.util.List;

@Api(value = "Authenticatie")
@Stateless
@Path("/auth")
@Log4j2
public class LoginCtl {

    @PersistenceContext(unitName = "vollo-kern-persistence-unit")
    private EntityManager em;

    @ApiOperation(value = "Inloggen.")
    @POST
    @Path("/login")
    @Consumes("application/json")
    public Response login(LoginData loginData, @Context HttpServletResponse response) {
        try {
            LoginContext loginContext = new LoginContext("VolloSecurityContext", new PassiveCallbackHandler(loginData.getGebruikersnaam(), loginData.getWachtwoord()));
            loginContext.login();
            TypedQuery<String> query = em.createQuery("select r.rolnaam from Rol r where r.gebruiker.gebruikersnaam = :gebruikersnaam", String.class);
            query.setParameter("gebruikersnaam", loginData.getGebruikersnaam());
            List<String> rollen = query.getResultList();
            String token = Jwts.builder()
                    .setSubject(loginData.getGebruikersnaam())
                    .claim("rollen", StringUtils.join(rollen, ","))
                    .setExpiration(DateUtils.addDays(new Date(), 30))
                    .setIssuer("Vollo")
                    .signWith(SignatureAlgorithm.HS512, "TODO geheim")
                    .compact();
            Cookie cookie = new Cookie("vollo-token", token);
            cookie.setHttpOnly(true);
            response.addCookie(cookie);
            return Response.ok().build();
        } catch (LoginException e) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }

    static class LoginData {
        private String gebruikersnaam;
        private String wachtwoord;

        public String getGebruikersnaam() {
            return gebruikersnaam;
        }

        public void setGebruikersnaam(String gebruikersnaam) {
            this.gebruikersnaam = gebruikersnaam;
        }

        public String getWachtwoord() {
            return wachtwoord;
        }

        public void setWachtwoord(String wachtwoord) {
            this.wachtwoord = wachtwoord;
        }
    }
}
