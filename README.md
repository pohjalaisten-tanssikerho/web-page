# Pohjalaisten tanssikerhon nettisivut
Nettisivut ovat elossa väliaikaisessa osoitteessa: https://musing-ardinghelli-ad83b1.netlify.com

## Sisällön tuottajille
Suurin osa sivujen sisällöstä löytyy kansiosta [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content). Tiedostot ovat .md muodossa, eli ovat muotoa Markdown. Markdown on erittäin helppo tapa kirjoittaa muotoiltua tekstiä. Yleensä idean nappaa pelkästään katsomalla jo kirjoitettuja .md tiedostoja. Tarkempia ohjeita markdownin kirjoittamiseen voi halutessa lukea sivulta https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Eli [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content) kansion tiedostoja muokkaamalla päivitetään nettisivujen sisältöä. Ohjeet muokkaukseen:

  1. kirjaudu sisään potin tunnareilla \*
  2. valitse .md tiedosto, jota haluat muokata
  3. klikkaa kynän kuvaa, joka on auenneen dokumentin oikealla yläpuolella (Edit this file)
  4. tee haluamasi muokkaus
  5. kun olet valmis, paina nappulaa "Commit changes" (muut kirjoituskenttälaatikot saavat jäädä tyhjiksi)

Muutokset tulevat nettisivuille muutaman minuutin kuluttua. Muista uudelleen päivittää sivut.

\* On mahdollista muokata nettisivuja myös omilla tunnuksilla. Kerro tunnuksesi projektin omistajalle @Gredu , niin sinut voidaan lisätä kehittäjäryhmään, jolloin päivityksesi hyväksytään automaattisesti ilman tarkistusta. Oikeastaan on suositeltavampaa, että muokkaukset tehtäisiin omilla tunnuksilla. Tällöin nähdään kuka on tehnyt mitkäkin muutokset.

### Monipuolisempaa sisällön esilletuontia
Markdownilla pääsee jo pitkälle, mutta jos haluaa lisätä mediaa tai jotain muuta monimutkaisempaa, voi käyttää .md tiedostojen seassa Hugon lyhyitä ohjelmapätkiä (shortcodes). Näiden avulla voi upottaa mm. Youtube- tai Vimeo-videoita tekstiin. Lyhyitä ohjelmapätkiä voi myös tehdä itse tai pyytää, jos on tarve jollekin erikoisemmalle.

Lisää ohjeita tästä aiheesta löytyy [Hugon sivuilta](https://gohugo.io/content-management/shortcodes/).

### Tietokantojen muokkaus
Sisältö löytyy `content` kansion sisältä, mutta tietokantamainen sisältö `data` kansiosta. Tietokanta on kirjoitettu .json muodossa, joka on yhtä helppo ymmärtää kuin Markdown. Syntaksin yleensä ymmärtää jo vain katsomalla tiedostoa. Ongelma jsonin kanssa on vain se, että sitä on helppo kirjoittaa vahingossa väärin. Jos sivut eivät päivity .json tiedoston muokkauksen jälkeen, on todennäköistä, että olet tehnyt kirjoitusvirheen. Jos virheeseen on epäilys, kopioi koko .json tiedosto [tarkastajaan](https://jsonlint.com/), joka tarkastaa kirjoitusvirheet.

Lista tietokannoista:

  - [board.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/board.json) - hallituksen jäsenet
  - [oldBoard.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/oldBoard.json) - edeltävät hallituksen jäsenet
  - [events.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/events.json) - tapahtumat ja tiedotteet
  - [courses.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/courses.json) - kurssiajat ja lajit
  - [prices/](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/prices) - kurssien hinnat omissa tiedostoissa

On erityisen tärkeää, että päivämääriä muokattaessa pidetään aikaformaatti muodossa `YYYY-MM-DD`. Näin kone ymmärtää tapahtumien keskinäisen suhteen, eli mitkä ovat ennen toisia.

### Yleiset useassa kohtaa sivua esiintyvät tiedot
Yleisesti esiintyvät tiedot löytyvät projektin juurella olevassta tiedostosta [config.yaml](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/config.yaml) kohdasta params. Tästä tiedostosta löytyvät seuraavat:

  - `signin` - ilmoittautumislinkki
  - `bank` - pankkitiedot

Tiedosto `config.yaml` on kirjoitettu yaml:lla, jonka syntaksi on myös aika helppo.
