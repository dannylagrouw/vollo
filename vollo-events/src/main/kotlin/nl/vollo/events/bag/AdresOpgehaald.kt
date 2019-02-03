package nl.vollo.events.bag

import nl.vollo.events.Event

class AdresOpgehaald(
        val postcode: String,
        val huisnummer: String,
        val domainEntity: String,
        val domainId: Long,
        val openbareRuimte: String,
        val woonplaats: String,
        val gemeente: String,
        val provincie: String,
        val lon: Double,
        val lat: Double
) : Event(TOPIC) {
    companion object {
        const val TOPIC = "nl.vollo.events.bag.AdresOpgehaald"
    }
}