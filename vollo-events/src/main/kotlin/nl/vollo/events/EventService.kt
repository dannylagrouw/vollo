package nl.vollo.events

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.kafka.core.KafkaTemplate
import org.springframework.stereotype.Service

@Service
class EventService {

    @Autowired
    private lateinit var kafkaTemplate: KafkaTemplate<String, Event>;

    fun <T: Event> send(event: T) {
        kafkaTemplate.send(event._topic, event)
    }
}