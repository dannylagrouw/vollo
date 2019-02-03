package nl.vollo.bag.events.listeners

import mu.KotlinLogging
import nl.vollo.bag.repository.BagAdresRepository
import nl.vollo.events.EventService
import nl.vollo.events.bag.RandomAdressenOpgehaald
import nl.vollo.events.kern.OphalenRandomAdressen
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class OnOphalenRandomAdressen {

    @Autowired
    private lateinit var bagAdresRepository: BagAdresRepository

    @Autowired
    private lateinit var eventService: EventService

    @KafkaListener(topics = [OphalenRandomAdressen.TOPIC])
    fun receive(event: OphalenRandomAdressen) {
        log.info("id: ${event.woonplaats} ${event.aantal}")
        eventService.send(RandomAdressenOpgehaald(
                bagAdresRepository.findRandomByWoonplaats(event.woonplaats, event.aantal)
                        .map { adres -> "${adres.openbareRuimte}|" +
                                "${adres.huisnummer}|" +
                                "${if (adres.huisnummerToevoeging == null) "" else adres.huisnummerToevoeging}|" +
                                "${adres.postcode}|" +
                                "${adres.woonplaats}|" +
                                "${adres.lon}|" +
                                "${adres.lat}" }
                        .joinToString("\n")
        ).apply { relatedTo(event) })
    }

}