package nl.vollo.events.kern

import nl.vollo.events.Event

class OphalenRandomAdressen(
        val woonplaats: String,
        val aantal: Int
): Event(TOPIC) {
    companion object {
        const val TOPIC = "nl.vollo.events.kern.OphalenRandomAdressen"
    }
}
