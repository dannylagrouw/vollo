package nl.vollo.events.bag

import nl.vollo.events.Event

class RandomAdressenOpgehaald(
        val adressenCsv: String
) : Event(TOPIC) {
    companion object {
        const val TOPIC = "nl.vollo.events.bag.RandomAdressenOpgehaald"
    }
}