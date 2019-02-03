package nl.vollo.events.kern

import nl.vollo.events.Event

class AdresOpgeslagen(
        val postcode: String,
        val huisnummer: String,
        val domainEntity: String,
        val domainId: Long
) : Event(TOPIC) {
    companion object {
        const val TOPIC = "nl.vollo.events.kern.AdresOpgeslagen"
    }
}