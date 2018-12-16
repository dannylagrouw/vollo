package nl.vollo.events

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import nl.vollo.events.kern.LeerlingOpgehaald
import nl.vollo.events.testdata.LeerlingFotoVerkregen

@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, property = "_topic", include = JsonTypeInfo.As.EXISTING_PROPERTY)
@JsonSubTypes(
        JsonSubTypes.Type(LeerlingOpgehaald::class),
        JsonSubTypes.Type(LeerlingFotoVerkregen::class))
interface Event {
    val _topic: String;
}
