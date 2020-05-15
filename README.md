[![Maintainability](https://api.codeclimate.com/v1/badges/fdda56b2c070f9279bb4/maintainability)](https://codeclimate.com/github/vollo-lvs/vollo/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fdda56b2c070f9279bb4/test_coverage)](https://codeclimate.com/github/vollo-lvs/vollo/test_coverage)

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
  - ~~charts~~
- trends voor scores - trends in backend berekenen en meesturen - minitrends op groeppagina
  - ~~scores in tabel op leerlingpanel~~
  - ~~leerlingpanel kunnen sluiten~~
- leerlingpanel
  - (?) klik op naam: open schermvullend
  - historie: groepen, inschrijvingen
  - (?) of geintegreerde tijdslijn met groepen, inschrijvingen, scores, aantekeningen...
- ~~notities~~
  - niveau: persoonlijk, collega's, ouders
- testdata
  - ~~scores in voorgaande jaren~~
  - meerdere medewerkers per school
  - medewerker/groep historie
- refactor
  - /leerling/notities ipv /notities/leerling
  - views
  - toetsen koppelen aan scholen
  - component notities -> leerling-notities
- scoreoverzicht met alle scores in tabel
- importeren
- hibernate validations activeren
- nl locale, date format
- ~~spinner tijdens requests~~
- disable scherm tijdens requests?
- backend: vervang Date door Local/ZonedDates
- verplaats liquibase.properties naar subprojecten
- leerling/notities: badge met aantal
- leerling/notities/notitie: foto mdw ipv icon?

### Kafka

cd /usr/local/kafka
bin/zookeeper-server-start.sh config/zookeeper.properties && bin/kafka-server-start.sh config/server.properties

bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic nl.vollo.events.kern.LeerlingOpgehaald
bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic nl.vollo.events.kern.AdresOpgeslagen
bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic nl.vollo.events.testdata.LeerlingFotoVerkregen

bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic nl.vollo.events.kern.LeerlingOpgehaald
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic nl.vollo.events.kern.AdresOpgeslagen
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic nl.vollo.events.testdata.LeerlingFotoVerkregen
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic nl.vollo.events.bag.AdresOpgehaald
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic nl.vollo.events.kern.LeerlingOpgehaald --from-beginning
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic nl.vollo.events.kern.AdresOpgeslagen --from-beginning

#### Kafka config

Toevoegen aan server.properties:
`delete.topic.enable=true`
`listeners=PLAINTEXT://localhost:9092`

### PostgreSQL

```postgresql
create database vollo;
create user vollo password 'vollo';
grant all on database vollo to vollo;
create schema vollo_testdata;
create database vollo_bag;
create user vollo_bag password 'vollo_bag';
grant all on database  vollo_bag to vollo_bag;
```

### BAG Import

```bash
cd vollo-bag
wget https://data.nlextract.nl/bag/csv/bag-adressen-laatst.csv.zip
unzip bag-adressen-laatst.csv.zip
```

```postgresql
COPY bag_adres FROM 'bagadres.csv' DELIMITER ';' CSV HEADER;
```
