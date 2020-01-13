# Pohjalaisten tanssikerhon nettisivut
Nettisivut ovat elossa väliaikaisessa osoitteessa: https://musing-ardinghelli-ad83b1.netlify.com

Sisällön tuottajan tarvitsee lukea ainoastaan kohdat "Ohjeet sisällön tuottajille" ja "Tietokantojen muokkaus", **eli ohjeiden määrästä huolimatta luettavaa ei oikeasti ole paljon.** Lukemista kannattaa jatkaa vain, jos haluaa syventää tietoa tai jos on kiinnostunut kehittämään nettisivuja muulla tavalla kuin sisältöä tuottamalla.

Ainakin yhden hallituksessa kannattaa lukea "Yleiset useassa kohtaa sivua esiintyvät tiedot" kohtaan asti. Tässä kohdassa kerrotaan ilmoittautumislomakelinkin päivittämisestä.

## Ohjeet sisällön tuottajille
Suurin osa sivujen sisällöstä löytyy kansiosta [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content). Tiedostot ovat .md muodossa, eli ovat muotoa Markdown. Markdown on erittäin helppo tapa kirjoittaa muotoiltua tekstiä. Yleensä idean nappaa pelkästään katsomalla jo kirjoitettuja .md tiedostoja. Tarkempia ohjeita markdownin kirjoittamiseen voi halutessa lukea sivulta https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Eli [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content) kansion tiedostoja muokkaamalla päivitetään nettisivujen sisältöä. Ohjeet muokkaukseen:

  1. kirjaudu sisään potin tunnareilla \*
  2. valitse .md tiedosto, jota haluat muokata
  3. klikkaa kynän kuvaa, joka on auenneen dokumentin oikealla yläpuolella (Edit this file)
  4. tee haluamasi muokkaus
  5. kun olet valmis, paina nappulaa "Commit changes" (muut kirjoituskenttälaatikot saavat jäädä tyhjiksi)

Muutokset tulevat nettisivuille muutaman minuutin kuluttua. Muista uudelleen päivittää sivut.

\* On mahdollista muokata nettisivuja myös omilla tunnuksilla. Kerro tunnuksesi projektin omistajalle @Gredu , niin sinut voidaan lisätä kehittäjäryhmään, jolloin päivityksesi hyväksytään automaattisesti ilman tarkistusta. Oikeastaan on suositeltavampaa, että muokkaukset tehtäisiin omilla tunnuksilla. Tällöin nähdään kuka on tehnyt mitkäkin muutokset.

### Tietokantojen muokkaus
Sisältö löytyy `content` kansion sisältä, mutta tietokantamainen sisältö `data` kansiosta. Tietokannoissa oleva tieto liittyy yleensä asioihin, joita voi listata.

Tietokanta on kirjoitettu .json muodossa, joka on yhtä helppo ymmärtää kuin Markdown. Syntaksin yleensä ymmärtää jo vain katsomalla tiedostoa. Ongelma jsonin kanssa on vain se, että sitä on helppo kirjoittaa vahingossa väärin. Jos sivut eivät päivity .json tiedoston muokkauksen jälkeen, on todennäköistä, että olet tehnyt kirjoitusvirheen. Jos virheeseen on epäilys, kopioi koko .json tiedosto [tarkastajaan](https://jsonlint.com/), joka katsoo mahdolliset kirjoitusvirheet.

Lista tietokannoista:

  - [board.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/board.json) - hallituksen jäsenet
  - [oldBoard.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/oldBoard.json) - edeltävät hallituksen jäsenet
  - [events.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/events.json) - tapahtumat ja tiedotteet
  - [courses.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/courses.json) - kurssiajat ja lajit
  - [prices/](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/prices) - kurssien hinnat omissa tiedostoissa

On erityisen tärkeää, että päivämääriä muokattaessa pidetään aikaformaatti muodossa `YYYY-MM-DD`. Näin kone ymmärtää tapahtumien keskinäisen suhteen, eli mitkä ovat ennen toisia.

**Tätä edemmäs ei sisällöntuottajien välttämättä tarvitse lukea!***

### Monipuolisempaa sisällön esilletuontia
Kansiossa `content` on siis kaikki kirjoitus, joka ei ole tietokantamainen. Tässä kansiossa pärjää aika pitkälle pelkästään Markdownilla, mutta jos haluaa lisätä mediaa tai jotain muuta monimutkaisempaa, voi käyttää .md tiedostojen seassa Hugon lyhyitä ohjelmapätkiä (shortcodes). Näiden avulla voi upottaa mm. Youtube- tai Vimeo-videoita tekstiin. Lyhyitä ohjelmapätkiä voi myös tehdä itse tai pyytää, jos on tarve jollekin erikoisemmalle.

Täydet ohjeet löytyvät [Hugon sivuilta](https://gohugo.io/content-management/shortcodes/).

Esimerkiksi Youtuben upottaminen tapahtuu seuraavasti:
```
{{< youtube id="GcpiJZKgW8s" class="media">}}
```
Sisällön tuottajille hyödyllisiä lyhyitä koodipätkiä:

  - `{{% address %}}` - lisää Bottan osoitteen
  - `{{% bank %}}` - lisää pankkitiedot
  - `{{< footnote >}} tekstiä välissä {{< /footnote >}}` - pienentää välissä olevan tekstin, tarkoitettu alaviitteille
  - `{{< link facebook|whatsapp|signin >}}` - antaa linkin valitsemalle parametrille

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
Saa lähettää koodia tälle projektille. Tässä muutamia keskenjääneitä ajatuksia ja ideoita projektille.

#### Tiedotukset ja kurssitiedot suoraan Google kalenterista
Tiedotus ja kurssiaikataulu merkitään tällä hetkellä .json tiedostoihin, joka ei ole kovin käyttäjäystävällinen. Olisi hyvä, jos sisällöntuottajat voisivat luoda tapahtumia, tiedotuksia ja kurssiaikatauluja suoraan Googlen kalenteriin, josta nettisivu ottaa tarvitsemansa tiedot.

#### Viestin lähetys formilla
Nettisivuilla näkyy tällä hetkellä kaikkien sähköpostit, mutta olisi parempi, jos olisi oma viestin lähetys-sivut, mistä sähköpostia voi lähettää kullekin hallituksen jäsenelle ilman, että lähettäjän tarvitsee tietää sähköpostia. Viesti tulisi siis suoraan sähköpostiin. Sähköposti saa tulla ilmi silloin, kun hallituslainen lähettää takaisin sähköpostia.

Netlify tukee tätä ominaisuutta, mutta ei ole varmaa miten helppoa näiden tuunaaminen on mahdollisesti sellaiselle tanssikerhon hallitukselle, jossa ei istu yhtäkään nörttiä. Eli ei saa tulla ongelmia viestien lähetysten kanssa, kun uusi hallitus aloittaa toimintansa.

#### Kurssiaikataulu paremmin kurssisivuilla
Kurssiaikataulu näyttää hyvältä pieneltä ruudulta, mutta isolla ruudulla se on liian kapea. Lisäksi olisi hyvä, jos kurssiaikataulusta hieman pimennetään (tai jollain muulla tavalla) ne lajit, jotka ovat jo menneet. Näin käyttäjän on helppompi nähdä suoraan, mikä laji on tulossa seuraavaksi.
