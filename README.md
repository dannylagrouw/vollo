# vollo

npm install angular/flex-layout-builds --save
mvn spring-boot:run -Dspring-boot.run.arguments=--genereer-testdata

### TODO

- andere slf4j implementatie
- db 1x per test init
- rest test met spring
- alle tests ook met mocks
- angular tests
- web en backend als modules in 1 project
- 401 -> naar loginpagina
  x charts
- trends voor scores - trends in backend berekenen en meesturen - minitrends op groeppagina
  x scores in tabel op leerlingpanel
  x leerlingpanel kunnen sluiten
- leerlingpanel: klik op naam: open schermvullend
- notities
- importeren
- nl locale, date format
- verplaats liquibase.properties naar subprojecten

### Kafka

cd /usr/local/kafka
bin/zookeeper-server-start.sh config/zookeeper.properties && bin/kafka-server-start.sh config/server.properties

bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic nl.vollo.kern.LeerlingOpgehaald
bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic nl.vollo.testdata.LeerlingFotoVerkregen

bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic nl.vollo.events.kern.LeerlingOpgehaald
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic nl.vollo.events.testdata.LeerlingFotoVerkregen
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic nl.vollo.events.kern.LeerlingOpgehaald --from-beginning

#### Kafka config

Toevoegen aan server.properties:
`delete.topic.enable=true`
`listeners=PLAINTEXT://localhost:9092`

### PostgreSQL

- `create schema vollo_testdata;`
