package nl.vollo.bag.events.listeners

import mu.KotlinLogging
import nl.vollo.bag.repository.BagAdresRepository
import nl.vollo.events.EventService
import nl.vollo.events.bag.AdresOpgehaald
import nl.vollo.events.kern.AdresOpgeslagen
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class OnAdresOpgeslagen {

    @Autowired
    private lateinit var bagAdresRepository: BagAdresRepository

    @Autowired
    private lateinit var eventService: EventService

    @KafkaListener(topics = [AdresOpgeslagen.TOPIC])
    fun receive(event: AdresOpgeslagen) {
        log.info("id: ${event.domainId} ${event.domainEntity} ${event.postcode}/${event.huisnummer}")
        bagAdresRepository.findFirstByPostcodeAndHuisnummer(event.postcode, event.huisnummer)
                .map {
                    eventService.send(AdresOpgehaald(
                            event.postcode,
                            event.huisnummer,
                            event.domainEntity,
                            event.domainId,
                            it.openbareRuimte!!,
                            it.woonplaats!!,
                            it.gemeente!!,
                            it.provincie!!,
                            it.lon!!,
                            it.lat!!
                    ))
                }
    }

}