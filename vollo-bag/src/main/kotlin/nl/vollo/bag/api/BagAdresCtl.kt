package nl.vollo.bag.api

import nl.vollo.bag.model.BagAdres
import nl.vollo.bag.repository.BagAdresRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/bag-adres")
class BagAdresCtl {

    @Autowired
    private lateinit var bagAdresRepository: BagAdresRepository

    @GetMapping
    fun getBagAdres(
            @RequestParam(name = "postcode") postcode: String,
            @RequestParam(name = "huisnummer") huisnummer: String): ResponseEntity<BagAdres> =
            bagAdresRepository.findFirstByPostcodeAndHuisnummer(postcode, huisnummer)
                    .map { a -> ResponseEntity.ok(a) }
                    .orElse(ResponseEntity.notFound().build())

    @GetMapping("/random/{woonplaats}/{aantal}")
    fun getRandomBagAdressen(
            @PathVariable(name = "woonplaats") woonplaats: String,
            @PathVariable(name = "aantal") aantal: Int
    ): ResponseEntity<List<BagAdres>> =
        ResponseEntity.ok(
                bagAdresRepository.findRandomByWoonplaats(woonplaats, aantal)
        )

    @GetMapping("/random/{woonplaats}/{aantal}/csv", produces = ["text/csv"])
    fun getRandomBagAdressenCsv(
            @PathVariable(name = "woonplaats") woonplaats: String,
            @PathVariable(name = "aantal") aantal: Int
    ): ResponseEntity<String> =
            ResponseEntity.ok(
                    bagAdresRepository.findRandomByWoonplaats(woonplaats, aantal)
                            .map { adres -> "${adres.openbareRuimte}|" +
                                    "${adres.huisnummer}|" +
                                    "${if (adres.huisnummerToevoeging == null) "" else adres.huisnummerToevoeging}|" +
                                    "${adres.postcode}|" +
                                    "${adres.woonplaats}|" +
                                    "${adres.lon}|" +
                                    "${adres.lat}" }
                            .joinToString("\n")
            )

}