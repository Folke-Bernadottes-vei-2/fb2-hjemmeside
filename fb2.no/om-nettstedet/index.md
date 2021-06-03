Om nettstedet
=============

Dette nettstedet ble bygget i 2020 til 2021 for å erstatte det gamle Google Sites-baserte nettstedet. Målene var å lage et nettsted som

* ikke er avhengig av noen eksterne tjenester
* inneholder nesten alt som den gamle siden hadde
* er enkelt å utvide
* er enkelt å endre
* har en offentlig tilgjengelig revisjons-historie
* ser bra ut på datamaskin, nettbrett og telefoner
* ikke inneholder for mye krimskrams og komplekse løsninger

Per 3. april 2021 må jeg, nåværende og avtroppende styreleder Pål, si at jeg antageligvis har lykkes bare delvis.
På grunn av min begrensede tilfredshet når det gjelder brukevennlighet for nye styre-medlemmer og -ledere, er det nødvndig å skrive noen ord om hvordan jeg har tenkt at dette 
skal fungere.

Etter en beskrivelse av strukturen, følger informasjon om hva man skal gjøre hvis man skal oppdatere hjemmesiden.

Om strukturen på nettstedet
---------------------------

I roten av nettstedet finnes filen `index.html`, som er den filen som lastes inn når noen peker nettleseren sin på [https://fb2.no/](https://fb2.no/).
Denne filen starter et script som laster inn både menyen til venstre, og selve innholdet på siden.
Hvis du har en veldig treg datamaskin eller nett-forbindelse, kan du antageligvis se teksten *Laster inn* et øyeblikk før menyen og innholdet viser seg.

### Menyen

Menyen er en tekst-fil som heter [`menu.txt`](/menu.txt), og den følger et relativt enkelt format.
Klikk gjerne på [lenken](/menu.txt) for å se hvordan filen ser ut.

Formatet er viktig, siden skriptet gjør tekst-filen om til HTML med lenker og formatering, og det er ikke veldig flink til å håndtere en feil-formatert fil.
Heldigvis er ikke formatet spesielt avansert, og så lenge man klarer å gjøre det riktig, vil menyen fungere som den skal.

Hver side som skal vises i menyen, har en linje i tekst-filen.
Hver linje er delt opp i to felt, adskilt med et kolon.
Teksten før kolonet er *innholdet* i menyen, mens feltet etter kolonet er *adressen* til den tilsvarende siden.
Legg merke til at hver adresse slutter med en skrå-strek.
Det er fordi adressen svarer til en *mappe*, og denne mappen inneholder alle filnene for den tilsvarende *siden*.

Tomme linjer blir ignorert når menyen bygges, men det er lurt å ha tomme linjer noen steder for at det skal være lettere å se hvordan menyen er strukturert.

Dersom en linje starter med en *tabulator*, vil meny-elementet for denne linjen rykkes inn.
Idéen er at man bruker dette til å legge noen sider under andre sider.
Mest tydelig er kanskje hvordan mange sider er organisert under Nyttig Informasjon, og sidene er faktisk sortert alfabetisk.

Det er imidlertid ikke noen automatikk som passer på at adressene passer med innrykk og innhold i linjene.
Det er de som vedlikeholder filen `menu.txt`, som må se til at sidene er ordnet på en ryddig måte.
Dette er litt slitsomt, kanskje, men man får også fleksibilitet dersom man ønsker å flytte ting litt rundt.

### Innholdet

Innholdet på hver side er i filen [index.md](/index.md), som er en tekst-fil formatert med [Markdown](https://en.wikipedia.org/wiki/Markdown).
Hvis du klikker på lenken, vil bokstaver som *æ*, *ø* og *å* se rare ut, og det er fordi web-serveren ikke gir klar beskjed om at filen er i UTF-8.
Heldigvis er det ikke meningen at du skal se på slike filer direkte, de vil alltid bli konvertert til HTML før de vises på de ulike sidene.

### Filen(e) index.html

Jeg har forklart hvordan `index.html` i roten av nettstedet blir brukt som et startpunkt for å laste ned og bygge siden fra filene på hoved-siden.
Faktisk finnes det en `index.html` for hver side, og alle disse filene er identiske, for de gjør den samme jobben - last ned `index.md` og `menu.txt` og bygg siden fra disse.
Det betyr at man ikke trenger å skrive en ny `index.html` når man skal lage en ny side. Det holder å kopiere en hvilken som helst annen `index.html` til en ny mappe.

Hvor bor hjemmesiden, og hvordan kommer den til nettleseren din?
----------------------------------------------------------------

Filene til fb2.no ligger på servere eid av [PRO ISP](https://www.proisp.no/), der vi leier web-hotell, og nettleseren din henter ganske enkelt sidene rett fra Sandnes.

Disse filene er imidlertid bare en kopi av originalene, som spores ved hjelp av [Git](https://no.wikipedia.org/wiki/Git).
Revisjons-kontroll-systemet Git er et populært verktøy for samarbeid i små og store grupper, og egner seg godt for hjemmesiden vår (synes jeg, Pål, avtroppende styreleder).
Akkurat nå er kilden til hjemmesiden [et GitHub-prosjekt](https://github.com/Folke-Bernadottes-vei-2/fb2-hjemmeside), og det er i dette prosjektet vi koordinerer endringer.

Hvordan endrer man sidene?
--------------------------

En endring av sidene skjer i flere steg, der noen av disse kan gjøres på én gang av administratorene av siden.

Dette er beskrevet på [prosjekt-siden på GitHub](https://github.com/Folke-Bernadottes-vei-2/fb2-hjemmeside), sammen med resten av kilden, under listen med filer.
