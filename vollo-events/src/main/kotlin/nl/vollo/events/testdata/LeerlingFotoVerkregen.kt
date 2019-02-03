package nl.vollo.events.testdata

import nl.vollo.events.Event

class LeerlingFotoVerkregen : Event(TOPIC) {
    var id: Long? = null
    var foto: ByteArray? = null

    companion object {
        const val TOPIC = "nl.vollo.events.testdata.LeerlingFotoVerkregen"
    }
}