package nl.vollo.events.serialization

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import nl.vollo.events.Event
import org.apache.kafka.common.errors.SerializationException
import org.apache.kafka.common.serialization.Deserializer

/**
 * Generic JSON deserializer.
 */
/**
 * Default constructor needed by Kafka
 */
class KafkaJsonDeserializer : Deserializer<Event> {

    private var objectMapper: ObjectMapper? = null

    override fun configure(props: Map<String, *>, isKey: Boolean) {
        println(props)
        this.objectMapper = ObjectMapper()
        this.objectMapper!!.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)

    }

    override fun deserialize(ignored: String, bytes: ByteArray?): Event? {
        if (bytes == null || bytes.size == 0) {
            return null
        }

        try {
            return objectMapper!!.readValue(bytes, Event::class.java)
        } catch (e: Exception) {
            throw SerializationException(e)
        }

    }

    override fun close() {

    }
}