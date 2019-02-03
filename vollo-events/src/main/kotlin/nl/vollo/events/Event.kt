package nl.vollo.events

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import nl.vollo.events.kern.LeerlingOpgehaald
import nl.vollo.events.testdata.LeerlingFotoVerkregen
import java.util.*

@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, property = "_topic", include = JsonTypeInfo.As.EXISTING_PROPERTY)
@JsonSubTypes(
        JsonSubTypes.Type(LeerlingOpgehaald::class),
        JsonSubTypes.Type(LeerlingFotoVerkregen::class))
abstract class Event(
    val _topic: String
) {
    val _id = UUID.randomUUID().toString()
    var _relatedId: String? = null

    fun relatedTo(event: Event) {
        _relatedId = event._id
    }

    fun isRelatedTo(event: Event) = event._id == _relatedId
}
