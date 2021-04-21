# fb2-hjemmeside

Dette *repoet* er *kilden* til hjemmesiden for Sameiet Folke Bernadottesvei 2, [fb2.no](fb2.no/). Styret i FB2 skal alltid være eiere av dette prosjektet, og holde sidene oppdatert ved å gjøre endringer her.

I dette dokumentet kan du lese om hvordan *repo*-et henger sammen med hjemmesiden, hvordan den kan oppdateres og hvordan siden fungerer.

## Automatisk oppdatering

Takket være *GitHub actions* vil hjemmesidene bli automatisk oppdatert når dette repo-et endres. Helt presist er det endringer i *branch*-en som heter *master*, som vil føre til at hjemmesidene oppdateres. Det er riktignok bare filene i mappen fb2.no som kopieres over til hjemmesiden, så denne filen (README.md) finnes kun her.

Vi bruker [git](https://git-scm.com/) og GitHub fordi det gir oss gode verktøy for å foreslå, diskutere og sette i verk endringer. Hvordan man kan gjøre det er beskrevet senere i dokumentet, og forhåpentligvis kan vi gjøre denne beskrivelsen god nok til at personer som ikke bruker git hver dag, kan være med å bidra.

### Nettsiden beta.fb2.no

Nettsiden [beta.fb2.no](beta.fb2.no/) kan brukes til å sjekke om en endring ser riktig ut før den legges ut på hovedsiden. Dette gjøres gjerne når noen (typisk et styremedlem) foreslår en endring på hjemmesiden som ikke er helt triviell, og man ønsker å sjekke at resultatet blir bra. Hvis man vil legge til en side i menyen, endre på en lenke, et bilde eller en tabell, er det lurt å sjekke at resultatet blir bra før man godtar endringen.

Helt konkret må da en administrator manuelt kjøre en GitHub Action kalt 'Deploy to beta.fb2.no' som deployer en spesifikk branch til [beta.fb2.no](beta.fb2.no) ved å navigere til Action-fanen i menyen over, velge 'Deploy to beta.fb2.no', trykke 'Run workflow' og så velge den branch man ønsker å teste på beta.fb2.no i nedtrekksmenyen.

## Hvordan endre på siden

Endringer på hjemmesiden bør gjøres via en såkaldt Pull Request.

Den enkleste måten å gjøre det, er følgende:

* Hvis du ikke er en del av styret/administratorene må du lage en *fork* av prosjektet. Siden de som endrer hjemmesiden vanligvis er i styret, vil resten av beskrivelsen anta at du er i styret, og at en *fork* ikke er nødvendig.
* Gå til den filen du ønsker å endre. Antageligvis finner du den ved å først klikke på fb2.no i fil-oversikten, og så klikke deg frem til den adressen du ønsker å endre, og så på filen `index.md`.
* Klikk på den lille blyanten (når musen er over den, vil det stå *Edit this file*) for å redigere filen.
* Når du er ferdig, rull ned til bunnen der overskriften *Commit changes* lar deg skrive inn en melding / beskrivelse av endringen.
* Skriv inn en kort tittel som beskriver endringen. Denne linjen skal helst ikke inneholde noe punktum selv om den kan være en setning.
* Dersom du trenger mer plass til å beskrive endringen, legg det til i feltet under (*Add an optional extended description...*). Her skal du skrive en eller flere setninger (med riktig tegnsetting) som vil hjelpe en fremtidig leser å forstå hva endringen er. For små endringer er ikke dette nødvendig.
* Velg *Create a new **branch** for this commit and start a pull request*, velg et logisk navn, og trykk *Commit changes*.
* Trykk *Create Pull Request* på den neste siden.

Når en *Pull Request* har blitt laget, vil Styret kunne gå inn og kommentere eller godkjenne endringen. Typisk vil en administrator trykke *Merge Pull Request* slik at *master* blir oppdatert med den foreslåtte endringen. Da vil det, siden *master* har blitt endret, automatisk starte en *GitHub action* som fører til at hjemmesiden oppdateres.

## Hvordan fungerer sidene?
Dette er beskrevet på [en egen side](https://fb2.no/om-nettstedet/). Dersom du skal legge til en side eller liknende, kan det være lurt å lese denne siden først.