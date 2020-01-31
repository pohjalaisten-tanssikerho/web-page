# Pohjalaisten tanssikerhon nettisivut
Nettisivut ovat elossa väliaikaisessa osoitteessa: https://musing-ardinghelli-ad83b1.netlify.com

Sisällön tuottajan tarvitsee lukea ainoastaan kohdat "Ohjeet sisällön tuottajille" ja "Tietokantojen muokkaus". Lukemista kannattaa jatkaa vain, jos haluaa syventää tietoa tai jos on kiinnostunut kehittämään nettisivuja muulla tavalla kuin sisältöä tuottamalla.

## Ohjeet sisällön tuottajille
Suurin osa sivujen sisällöstä löytyy kansiosta [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content) ja kansiosta [data](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/data).

Kansiossa `content` tiedostot ovat tyyppiä Markdown. Kansiossa `data` tiedostot ovat tyyppiä JSON. Näiden päätteet ovat .md ja .json.

Tiedostot `content`-kansiossa edustavat kirjoitettua tekstiä ja `data` tietokantaa. Voidaan ajatella, että kaikki esseemäinen kirjoitus on `content`-kansiossa ja kaikki listattavat asiat löytyvät `data`-kansiosta.

### Sisällön muokkaus
Markdown on erittäin helppo tapa kirjoittaa muotoiltua tekstiä. Yleensä idean nappaa pelkästään katsomalla jo kirjoitettuja .md tiedostoa. Tarkempia ohjeita Markdownin kirjoittamiseen voi halutessa lukea sivulta https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Eli [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content) kansion tiedostoja muokkaamalla päivitetään nettisivujen kirjoitettua (esseemäistä) sisältöä. Ohjeet muokkaukseen:

  1. kirjaudu sisään potin tunnareilla \*
  2. valitse .md tiedosto, jota haluat muokata
  3. klikkaa kynän kuvaa, joka on auenneen dokumentin oikealla yläpuolella (Edit this file)
  4. tee haluamasi muokkaus
  5. kun olet valmis, paina nappulaa "Commit changes" (muut kirjoituskenttälaatikot saavat jäädä tyhjiksi)

Muutokset tulevat nettisivuille muutaman minuutin kuluttua. Muista uudelleen päivittää sivut.

\* On mahdollista muokata nettisivuja myös omilla tunnuksilla. Kerro tunnuksesi projektin omistajalle @Gredu , niin sinut voidaan lisätä kehittäjäryhmään, jolloin päivityksesi hyväksytään automaattisesti ilman tarkistusta.

Jokaisen .md tiedoston alussa on kolme viivaa `---`. Älä välitä näistä viivoista tai muuta mitään, mikä on viivojen välissä.

Vinkkinä vielä, kuinka löytää oikea tiedosto mitä muokata. Katso osoiterivin loppupäätä, esim. jos osoite on: https://musing-ardinghelli-ad83b1.netlify.com/blogi/tanssilajit voi tästä nähdä, että loppupää on `/blogi/tanssilajit`. Tästä voi arvata, että tähän sivuun vaikuttaa tiedosto `/content/blogi/tanssilajit.md`.

### Tietokantojen muokkaus
Tietokantamainen sisältö löytyy [data](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/data) kansiosta.

Tietokanta on kirjoitettu .json muodossa. Tämänkin kirjoitustavan (syntaksin) ymmärtää yleensä jo vain katsomalla tiedostoa. Ongelma JSONin kanssa on vain se, että sitä on helppo kirjoittaa vahingossa väärin. Jos sivut eivät päivity .json tiedoston muokkauksen jälkeen, on todennäköistä, että olet tehnyt kirjoitusvirheen. Jos virheeseen on epäilys, kopioi koko .json tiedosto sisältö [tarkastajaan](https://jsonlint.com/), joka katsoo mahdolliset kirjoitusvirheet.

Yleisin virhe JSONin kanssa on, että on laittanut vahingossa ylimääräisiä pilkkuja. Minkä tahansa listauksen viimeisimpään kohtaan ei tule pilkkua.

Lista tietokannoista:

  - [board.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/board.json) - hallituksen jäsenet
  - [oldBoard.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/oldBoard.json) - edeltävät hallituksen jäsenet
  - [events.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/events.json) - tapahtumat ja tiedotteet
  - [courses.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/courses.json) - kurssiajat ja lajit
  - [courseMeta.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/courseMeta.json) - kurssien alkamisajat ja loppumisajat, sekä kurssien opettajat
  - [prices/](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/prices/) - kurssien hinnat omissa tiedostoissa

On erityisen tärkeää, että päivämääriä muokattaessa pidetään aikaformaatti muodossa `YYYY-MM-DD`. Näin kone ymmärtää tapahtumien keskinäisen suhteen, eli mitkä ovat ennen toisia.

**Tätä edemmäs ei sisällöntuottajien välttämättä tarvitse lukea!**

#### Uuden tapahtuman luominen
Tapahtumat ovat tiedostossa [events.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/events.json). Ei ole väliä mihin kohtaan uuden tapahtuman tiedostossa laittaa, mutta on suositeltavaa, että ne laitetaan oikeassa aika järjestyksessä. Koneelle sillä ei ole mitään väliä, mutta ihmisille se on.

#### Ilmoittautumislinkin päivittäminen
Ilmoittautumislinkki päivitetään tiedostoon [config.yaml](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/config.yaml). Linkki laitetaan kohtaan `address` ja lainausmerkkien väliin.

#### Hallitussivun päivittäminen
Hallituksen jäsenet löytyvät tietokannasta [board.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/board.json). Kuvan saa henkilölle laittamalla kuvan kansioon [board](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/static/img/board) ja viittaamalla siihen kentästä `pictures` board.json tiedostossa. Kuvan tulee olla 214px x 220px tai samassa suhteessa.

### Monipuolisempaa sisällön esilletuontia
Palataan takaisin kansioon [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content). Tässä kansiossa on siis kaikki Markdown tiedostot. Tämän projektin tapauksessa näihin tiedostoihin voi kirjoittaa muutakin kuin Markdownia. Kirjoittaa voi esimerkiksi Hugon lyhyitä koodiapätkiä (shortcodes). Näiden avulla voi upottaa mm. Youtube- tai Vimeo-videoita tekstiin. Lyhyitä ohjelmapätkiä voi myös tehdä itse tai pyytää, jos on tarve jollekin erikoisemmalle.

Ohjeet Hugon omille koodeille [Hugon sivuilta](https://gohugo.io/content-management/shortcodes/).

Esimerkiksi Youtuben upottaminen tapahtuu seuraavasti:
```
{{< youtube id="GcpiJZKgW8s" class="media">}}
```
Käyttökelpoisimmat koodipätkät on kuitenkin tehty itse. Sisällön tuottajat saattavat olla kiinnostuneita seuraavista koodipätkistä:

  - `{{% address %}}` - lisää Bottan osoitteen
  - `{{% bank %}}` - lisää pankkitiedot
  - `{{< footnote >}} tekstiä välissä {{< /footnote >}}` - pienentää välissä olevan tekstin, tarkoitettu alaviitteille
  - `{{< link facebook|whatsapp|signin >}}` - antaa linkin valitsemalle parametrille
  - `{{< twoColumnImage imgPlacemenet="left|right" height="n" src="url" >}}` - kuva ja teksti kahdessa sarakkeessa, src osoittaa kansioon https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/static/img/picture jossa on `mobile` ja `desktop` kansiot, kummassakin oltava saman nimiset kuvat, height kertoo kuvan pituuden

On tärkeää huomata, että koodipätkien kanssa on käytettävä oikeaa merkkiä: `%` tai `< >`. `%`-merkki kertoo, että renderöidään, ja `< >`-merkkiyhdistelmässä ei renderöidä Markdownia. Se kumpi valitaan selviää lähinnä vain itse koodia katsomalla tai juurikin tätä dokumenttia lukemalla.

### Yleiset useassa kohtaa sivua esiintyvät tiedot
Yleisesti esiintyvät tiedot löytyvät projektin juurella olevassta tiedostosta [config.yaml](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/config.yaml) kohdasta params. Tästä tiedostosta löytyvät seuraavat:

  - `address` - yhdistyksen osoite
  - `signin` - ilmoittautumislinkki
  - `bank` - pankkitiedot
  - `links` - yleisesti käytettyjä linkkejä

Tiedosto `config.yaml` on kirjoitettu yaml:lla, jonka syntaksi on myös aika helppo.

## Ohjeet kehittäjille
Sivut on rakennettu käyttäen Hugoa, joka on staattinen sivugeneraattori. Hugo on hyvin dokumentoitu omilla [kotisivuilla](https://gohugo.io), mutta siitä voi olla vaikea oppia. Alkuun pääsemiseksi kannattaa tutustua Hugon [opetusvideoihin Youtubessa](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3).

Julkaisussa käytetään [Netlify](https://www.netlify.com/) palvelua. Käytännössä aina kun versionhallintasivuun työnnetään päivityksiä, Netlify rakentaa siitä uudet nettisivut ja julkaisee ne.

Projekti käyttää [SCSS:ssää](https://sass-lang.com/), joka on CSS:n esiprosessoija. SASS tiedostot löytyvät kansiosta [assets/sass/](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/assets/sass).

Pyrkimys on, että sivut näyttävät hyviltä 320px - 1920px (full hd). Näiden ulkopuolelle kuuluvia laitteita ei tarvitse tukea.

### Suositeltu tapa kehittää sivuja
Kloonaa projekti paikalliselle koneelle. Hugon mukana tulee palvelin-ohjelma, jolla nettisivuja voi ajaa paikallisesti. Paikallisella palvelimella on se etu, että sivuihin tehdyt muutokset näkyvät välittömästi.

Esimerkiksi jos git ja Hugo on asennettu, voi projektin hakea, ja palvelimen käynnistää seuraavasti:
```bash
git clone https://github.com/pohjalaisten-tanssikerho/web-page.git
cd web-page
hugo server
```
Jos muita palvelimia ei ole ajossa tällä hetkellä, näkyvät sivut osoitteessa http://localhost:1313

Älä tee muutoksia `public`-kansioon, jonka Hugo rakentaa, kun pelkkä `hugo` komento annetaan. `public`-kansio on se kansio, joka laitetaan palvelimelle, että nettisivut näkyvät maailmalle.

### Shortcodes
Kansiossa [shortcodes](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/layouts/shortcodes) löytyy kasa itse tehtyjä "funktioita".

### Projektin periaatteita
On muistettava, että sivua päivittävät myös ne henkilöt, joilla ei ole ohjelmointitaustaa tai kiinnostusta ylipäätänsä ohjelmoimiseen. Tämän takia kehittäjän on tehtävä sisällön tuotannosta mahdollisimman yksinkertaista. Sisällön tuottajalta voidaan ainoastaan olettaa ymmärtävän Markdownia ja hieman jsonia, sekä yamlia. Olis hyvä, jos heidän ei tarvitsisi koskaan koskea shortcodeihin tai layoutteihin. Esimerkiksi kaikkialla yleisesti esiintyvä tieto laitetaan tiedostoon `config.yaml` ja käytetään shortcodeja niiden hakemiseen. Näin sisällöntuottajan täytyy käsitellä vain `config.yaml` tiedostoa, eikä hänen tarvitse koskaan kurkistaa shortcodeihin. Lisäksi tieto pysyy samassa paikassa helposti käsiteltävänä.

### Projektin kieli
Ohjelmoinnissa käytetään englantia, eli muuttajat ja funktioiden nimiet englanniksi. Keskustelu voidaan käydä suomeksi tai englanniksi. Git otsikko-kommentit mieluiten englanniksi noudattaen [näitä ohjeita](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53). Lyhyesti samat ohjeet:

  - käytä imperatiivimuotoa (käskymuoto)
  - kirjoitetaan kuin otsikko (iso alkukirjain, ei pistettä loppuun)

### Kesken jääneitä kehitysideoita ja suunnitelmia
Saa lähettää koodia tälle projektille. Tässä muutamia kesken jääneitä ajatuksia ja ideoita projektille.

#### Tiedotukset ja kurssitiedot suoraan Google kalenterista
Tiedotus ja kurssiaikataulu merkitään tällä hetkellä .json tiedostoihin, joka ei ole kovin käyttäjäystävällinen. Olisi hyvä, jos sisällöntuottajat voisivat luoda tapahtumia, tiedotuksia ja kurssiaikatauluja suoraan Googlen kalenteriin, josta nettisivu ottaa tarvitsemansa tiedot.

#### Viestin lähetys formilla
Nettisivuilla näkyy tällä hetkellä kaikkien sähköpostit, mutta olisi parempi, jos olisi oma viestin lähetys-sivut, mistä sähköpostia voi lähettää kullekin hallituksen jäsenelle ilman, että lähettäjän tarvitsee tietää sähköpostia. Viesti tulisi siis suoraan sähköpostiin. Sähköposti saa tulla ilmi silloin, kun hallituslainen lähettää takaisin sähköpostia.

Netlify tukee tätä ominaisuutta, mutta ei ole varmaa miten helppoa näiden tuunaaminen on mahdollisesti sellaiselle tanssikerhon hallitukselle, jossa ei istu yhtäkään nörttiä. Eli ei saa tulla ongelmia viestien lähetysten kanssa, kun uusi hallitus aloittaa toimintansa.

#### Kurssiaikataulu paremmin kurssisivuilla
Kurssiaikataulu näyttää hyvältä pieneltä ruudulta, mutta isolla ruudulla se on liian kapea. Lisäksi olisi hyvä, jos kurssiaikataulusta hieman pimennetään (tai jollain muulla tavalla) ne lajit, jotka ovat jo menneet. Näin käyttäjän on helppompi nähdä suoraan, mikä laji on tulossa seuraavaksi.
