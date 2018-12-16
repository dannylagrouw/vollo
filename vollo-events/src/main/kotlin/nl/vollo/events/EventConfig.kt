package nl.vollo.events

import org.springframework.boot.autoconfigure.kafka.KafkaProperties
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.kafka.annotation.EnableKafka

@Configuration
@ComponentScan("nl.vollo.events")
@EnableKafka
class EventConfig {

//    @Bean
//    fun producerFactory(): ProducerFactory<String, Any> {
//        val configProps = HashMap<String, Any>();
//        configProps.put(
//                ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,
//                "localhost:2181");
//        configProps.put(
//                ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
//                StringSerializer::class.java);
//        configProps.put(
//                ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,
//                StringSerializer::class.java);
//        return DefaultKafkaProducerFactory(configProps);
//    }

//    @Bean
//    fun kafkaTemplate(producerFactory: ProducerFactory<String, Any>): KafkaTemplate<String, Any> {
//        return KafkaTemplate(producerFactory);
//    }
}