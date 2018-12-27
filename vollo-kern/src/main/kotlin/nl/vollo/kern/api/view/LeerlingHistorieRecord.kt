package nl.vollo.kern.api.view

import nl.vollo.kern.model.GroepLeerling
import nl.vollo.kern.model.Inschrijving
import java.util.*

class LeerlingHistorieRecord(val omschrijving: String, val datumBegin: Date, val datumEinde: Date?) {
    constructor(groep: GroepLeerling) : this("Groep ${groep.groep.naam}", groep.datumBegin, groep.datumEinde)
    constructor(inschrijving: Inschrijving) : this("Inschrijving", inschrijving.datumInschrijving, inschrijving.datumUitschrijving)
}
