# fb2-hjemmeside

Dette _repoet_ er _kilden_ til hjemmesiden for Sameiet Folke Bernadottesvei 2, [fb2.no](fb2.no/). Styret i FB2 skal alltid være eiere av dette prosjektet, og holde sidene oppdatert ved å gjøre endringer her.

I dette dokumentet kan du lese om hvordan _repo_-et henger sammen med hjemmesiden, hvordan den kan oppdateres og hvordan siden fungerer.

## Automatisk oppdatering

Takket være _GitHub actions_ vil hjemmesidene bli automatisk oppdatert når dette repoet endres. Helt presist er det endringer i _branch_-en som heter _master_, som vil føre til at hjemmesidene oppdateres. Det er riktignok bare filene i mappen fb2.no som kopieres over til hjemmesiden, så denne filen (README.md) finnes kun her.

Vi bruker [git](https://git-scm.com/) og GitHub fordi det gir oss gode verktøy for å foreslå, diskutere og sette i verk endringer. Hvordan man kan gjøre det er beskrevet senere i dokumentet, og forhåpentligvis kan vi gjøre denne beskrivelsen god nok til at personer som ikke bruker git hver dag kan være med å bidra.

### Nettsiden beta.fb2.no

Nettsiden [beta.fb2.no](beta.fb2.no/) kan brukes til å sjekke om en endring ser riktig ut før den legges ut på hovedsiden. Dette gjøres gjerne når noen (typisk et styremedlem) foreslår en endring på hjemmesiden som ikke er helt triviell, og man ønsker å sjekke at resultatet blir bra. Hvis man vil legge til en side i menyen, endre på en lenke, et bilde eller en tabell, er det lurt å sjekke at resultatet blir bra før man godtar endringen.

Helt konkret må da en administrator manuelt kjøre en GitHub Action kalt 'Deploy to beta.fb2.no' som deployer en spesifikk branch til [beta.fb2.no](beta.fb2.no) ved å navigere til Action-fanen i menyen over, velge 'Deploy to beta.fb2.no', trykke 'Run workflow' og så velge den branch man ønsker å teste på beta.fb2.no i nedtrekksmenyen.

## Hvordan endre på siden

Endringer på hjemmesiden bør gjøres via en såkalt Pull Request.

Den enkleste måten å gjøre det, er følgende:

- Hvis du ikke er en del av styret/administratorene må du lage en _fork_ av prosjektet. Siden de som endrer hjemmesiden vanligvis er i styret, vil resten av beskrivelsen anta at du er i styret, og at en _fork_ ikke er nødvendig.
- Gå til den filen du ønsker å endre. Antageligvis finner du den ved å først klikke på fb2.no i fil-oversikten, og så klikke deg frem til den adressen du ønsker å endre, og så på filen `index.md`.
- Klikk på den lille blyanten (når musen er over den, vil det stå _Edit this file_) for å redigere filen.
- Når du er ferdig, rull ned til bunnen der overskriften _Commit changes_ lar deg skrive inn en melding / beskrivelse av endringen.
- Skriv inn en kort tittel som beskriver endringen. Denne linjen skal helst ikke inneholde noe punktum selv om den kan være en setning.
- Dersom du trenger mer plass til å beskrive endringen, legg det til i feltet under (_Add an optional extended description..._). Her skal du skrive en eller flere setninger (med riktig tegnsetting) som vil hjelpe en fremtidig leser å forstå hva endringen er. For små endringer er ikke dette nødvendig.
- Velg _Create a new **branch** for this commit and start a pull request_, velg et logisk navn, og trykk _Commit changes_.
- Trykk _Create Pull Request_ på den neste siden.

Når en _Pull Request_ har blitt laget, vil Styret kunne gå inn og kommentere eller godkjenne endringen. Typisk vil en administrator trykke _Merge Pull Request_ slik at _master_ blir oppdatert med den foreslåtte endringen. Da vil det, siden _master_ har blitt endret, automatisk starte en _GitHub action_ som fører til at hjemmesiden oppdateres.

## Hvordan fungerer sidene?

Dette er beskrevet på [en egen side](https://fb2.no/om-nettstedet/). Dersom du skal legge til en side eller liknende, kan det være lurt å lese denne siden først.
