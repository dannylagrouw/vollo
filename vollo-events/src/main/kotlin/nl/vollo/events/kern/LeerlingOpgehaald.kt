package nl.vollo.events.kern

import nl.vollo.events.Event

class LeerlingOpgehaald() : Event {
    override val _topic = TOPIC;
    var id: Long? = null
    var geslacht: String? = null

    companion object {
        const val TOPIC = "nl.vollo.events.kern.LeerlingOpgehaald"
    }
}