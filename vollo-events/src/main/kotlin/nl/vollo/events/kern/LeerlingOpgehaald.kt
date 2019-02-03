package nl.vollo.events.kern

import nl.vollo.events.Event

class LeerlingOpgehaald : Event(TOPIC) {
    var id: Long? = null
    var geslacht: String? = null

    companion object {
        const val TOPIC = "nl.vollo.events.kern.LeerlingOpgehaald"
    }
}