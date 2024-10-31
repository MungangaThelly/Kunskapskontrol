# Kunskapskontrol
Kontaktlista applikation
/* Uppgiften
Uppgiften går ut på att ta fram en kontaktlista applikation. Uppgiften är uppdelad I tre delar.
Läs alla delar innan du börjar!
Deluppgift 1: Struktur
Skapa strukturen för applikationen. HTML struktur och element väljer du till viss del.
Nedanför följer en kravlista på minimumkrav för HTML strukturen:
● Komponenterna som skapar nya kontakter, ska bestå av
○ Ett textfält där användaren kan ange namn
○ Ett textfält där användaren kan ange telefonnummer
○ En knapp för att skapa ny kontakt
● kontaktlista, ska bestå av
○ Flera kontakter (om användaren har lagt till kontakter, annars tom)
○ Ifyllda textfält för både namn och telefonnummer. Bägge fälten skall vara
disabled, som default.
○ Förutom kontaktuppgifterna, ska det även finnas knappar kopplade till
kontakten för att
■ Ändra kontaktuppgifter
■ Radera kontakt


Deluppgift 2: Interaktion
Implementera lämplig funktionalitet i applikationen med hjälp av JavaScript. Utgå från
följande scenarion
● Scenario 1 (Skapa kontakt)
○ Användaren skriver in namn och telefonnummer i respektive fält
○ Användaren klickar på knappen för att skapa
○ Kontakten läggs till kontaktlistan
● Scenario 2 (Redigera kontakt)
○ Kontaktens båda textfält är låsta som default, dvs uppgifterna går inte att
redigera (disabled)
○ Användaren klickar på ‘Ändra’- knappen för att redigera en tillagd kontakt
○ Kontaktuppgifterna går nu att redigera
○ Användaren redigerar kontaktuppgifterna
○ Användaren klickar igen på samma knapp för att spara uppgifterna.
○ Kontaktens textfält blir låsta, och går ej att redigera.
○ Man skall kunna repetera denna process flera gånger om.
● Scenario 3 (Radera kontakt)
○ Användaren klickar på ‘radera’-knappen, som tar bort kontakten från listan
Deluppgift 3: Design (ej obligatorisk)
Applicera ett lämpligt ramverk och/eller egenskriven CSS för att få en snygg design på din
applikation. Förslagsvis kör du ett ramverk så som bootstrap.

G
Deluppgifterna ovan är korrekt utförda och din applikation fungerar bra utifrån den interaktion
som beskrivs i deluppgift 2.
VG
Förutom att du uppnått kraven för G har du även implementerat följande funktionalitet:
● Användaren ska ej kunna skapa en kontakt utan att fylla i bägge textfält.
● En befintlig kontakt skall ej kunna ändras till en tom kontakt utan uppgifter. En
kontakt som haft information får således inte bli en kontakt utan information.
● Visa lämpliga felmeddelanden om man försöker skapa/spara tomma kontakter.
Meddelandet skall visas via HTML:en. Dvs alert meddelanden är inte tillåtna.
● Skriv om koden till funktioner. Koden som raderar kontakt, ändrar kontakt, validerar
kontakt skall skrivas om till funktioner. Dessa funktioner skall skapas utanför eventet,
dvs i “global scopet”, och anropas där det lämpar sig.
● Skapa en ny knapp “Radera lista”, som raderar alla kontakter i listan. Kan placeras
bredvid “Skapa” knappen.
*/