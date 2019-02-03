package nl.vollo.bag.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "bag_adres")
class BagAdres {

    @Column(name = "openbareruimte")
    var openbareRuimte: String? = null

    @Column(name = "huisnummer")
    var huisnummer: String? = null

    @Column(name = "huisletter")
    var huisletter: String? = null

    @Column(name = "huisnummertoevoeging")
    var huisnummerToevoeging: String? = null

    @Column(name = "postcode")
    var postcode: String? = null

    @Column(name = "woonplaats")
    var woonplaats: String? = null

    @Column(name = "gemeente")
    var gemeente: String? = null

    @Column(name = "provincie")
    var provincie: String? = null

    @Id
    @Column(name = "object_id")
    var objectId: String? = null

    @Column(name = "object_type")
    var objectType: String? = null

    @Column(name = "nevenadres")
    var nevenadres: String? = null

    @Column(name = "x")
    var x: Double? = null

    @Column(name = "y")
    var y: Double? = null

    @Column(name = "lon")
    var lon: Double? = null

    @Column(name = "lat")
    var lat: Double? = null

}