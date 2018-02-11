package nl.vollo.kern.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "rollen")
@XmlRootElement
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = true)
public class Rol extends DomainObject {

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
    private String rolnaam;

    @ManyToOne(targetEntity = Gebruiker.class)
    @JoinColumn(name = "gebruiker_id", foreignKey = @ForeignKey(name = "rol_geb_fk"))
    private Gebruiker gebruiker;

    public Rol() {
        super(DomainEntity.rol);
    }
}
