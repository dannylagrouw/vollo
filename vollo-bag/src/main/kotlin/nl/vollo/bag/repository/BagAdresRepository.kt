package nl.vollo.bag.repository

import nl.vollo.bag.model.BagAdres
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface BagAdresRepository : JpaRepository<BagAdres, String> {
    fun findFirstByPostcodeAndHuisnummer(postcode: String, huisnummer: String): Optional<BagAdres>

//    @Query("""
//        select a from BagAdres a where a.woonplaats = :woonplaats order by function('random')
//    """)
    @Query(value = """
        select * from bag_adres a where a.woonplaats = :woonplaats order by random() limit :aantal
    """, nativeQuery = true)
    fun findRandomByWoonplaats(
            @Param("woonplaats") woonplaats: String,
            @Param("aantal") aantal: Int): List<BagAdres>
}
