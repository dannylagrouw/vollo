package nl.vollo.bag

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.KotlinModule
import nl.vollo.events.EventConfig
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Import
import org.springframework.web.client.RestTemplate

@SpringBootApplication
@Import(EventConfig::class)
class VolloBagBoot {

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            runApplication<VolloBagBoot>(*args)
        }
    }

    @Bean
    fun restTemplate(builder: RestTemplateBuilder): RestTemplate {
        // Do any additional configuration here
        return builder.build()
    }

    @Bean
    fun objectMapper(): ObjectMapper {
        return ObjectMapper().registerModule(KotlinModule())
    }
}

