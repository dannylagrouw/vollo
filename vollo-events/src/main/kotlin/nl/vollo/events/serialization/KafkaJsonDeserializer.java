package nl.vollo.events.serialization;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import nl.vollo.events.Event;
import org.apache.kafka.common.errors.SerializationException;
import org.apache.kafka.common.serialization.Deserializer;

import java.util.Map;

/**
 * Generic JSON deserializer.
 */
public class KafkaJsonDeserializer implements Deserializer<Event> {

  private ObjectMapper objectMapper;

  /**
   * Default constructor needed by Kafka
   */
  public KafkaJsonDeserializer() {
  }

  @Override
  public void configure(Map<String, ?> props, boolean isKey) {
      System.out.println(props);
      this.objectMapper = new ObjectMapper();
      this.objectMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

  }

  @Override
  public Event deserialize(String ignored, byte[] bytes) {
    if (bytes == null || bytes.length == 0) {
      return null;
    }

    try {
      return objectMapper.readValue(bytes, Event.class);
    } catch (Exception e) {
      throw new SerializationException(e);
    }
  }

  @Override
  public void close() {

  }
}