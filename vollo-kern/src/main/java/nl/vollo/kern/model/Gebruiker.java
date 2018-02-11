package nl.vollo.kern.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "gebruikers")
@XmlRootElement
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = true)
public class Gebruiker extends DomainObject {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "vollo_seq")
    @SequenceGenerator(name = "vollo_seq", sequenceName = "vollo_seq", allocationSize = 1)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Version
    @Column(name = "version")
    private int version;

    @Column(nullable = false)
    private String gebruikersnaam;

    @Column(nullable = false)
    private String wachtwoord;

    @ManyToOne(targetEntity = Medewerker.class)
    @JoinColumn(name = "medewerker_id", foreignKey = @ForeignKey(name = "geb_mdw_fk"))
    private Medewerker medewerker;

    @ManyToOne(targetEntity = Ouder.class)
    @JoinColumn(name = "ouder_id", foreignKey = @ForeignKey(name = "geb_oud_fk"))
    private Ouder ouder;

    public Gebruiker() {
        super(DomainEntity.gebruiker);
    }
}
