
# Pohjalaisten tanssikerhon nettisivut

Nettisivut ovat on julkaistu osoitteessa http://pohjalaiset.fi/tanssikerho

Sisällön tuottajille on oma CMS sivustonsa, missä sisältö voi muokata helposti. Ohjeiden avulla nettisivujen sisältöä on mahdollista muokata myös versionhallinnan kautta.

Tällä hetkellä CMS ei ole kehitteillä, koska odotamme osoitteen muutosta. CMS toimii, mutta ei ole taattua, että toimivat varmasti. Kaikkia asioita ei CMS:stä pysty muuttamaan, koska CMS kehitys on pysäytetty. Ohjeet sivujen muokkaamiseen Githubin kautta onnistuu, ja ohjeet lukevat alla.

Sisällön tuottajille riittää, että lukee kohdat "Ohjeet sisällön tuottajille" ja "Tietokantojen muokkaus". Lukemista kannattaa jatkaa vain, jos haluaa syventää tietoa, tai jos on kiinnostunut kehittämään nettisivuja muulla tavalla kuin sisältöä tuottamalla.

## Ohjeet sisällön tuottajille

Suurin osa sivujen sisällöstä löytyy kansiosta [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content) ja kansiosta [data](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/data).

Kansiossa `content` tiedostot ovat tyyppiä Markdown. Kansiossa `data` tiedostot ovat tyyppiä JSON. Näiden päätteet ovat .md ja .json.

Tiedostot `content`-kansiossa edustavat kirjoitettua tekstiä ja `data` tietokantaa. Voidaan ajatella, että kaikki esseemäinen kirjoitus on `content`-kansiossa ja kaikki listattavat asiat löytyvät `data`-kansiosta.

### Sisällön muokkaus

Markdown on helppo tapa kirjoittaa muotoiltua tekstiä. Yleensä idean nappaa pelkästään katsomalla jo kirjoitettuja .md tiedostoa. Tarkempia ohjeita Markdownin kirjoittamiseen voi halutessa lukea sivulta https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Eli [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content) kansion tiedostoja muokkaamalla päivitetään nettisivujen kirjoitettua (esseemäistä) sisältöä. Ohjeet muokkaukseen:

  1. kirjaudu sisään potin tunnareilla \*
  2. valitse .md tiedosto, jota haluat muokata
  3. klikkaa kynän kuvaa, joka on auenneen dokumentin oikealla yläpuolella (Edit this file)
  4. tee haluamasi muokkaus
  5. kun olet valmis, paina nappulaa "Commit changes" (muut kirjoituskenttälaatikot saavat jäädä tyhjiksi)

Muutokset eivät tule suoraan nettisivuille. Kaikki muutokset tarkistetaan ennen julkaisua.

\* On mahdollista muokata nettisivuja myös omilla tunnuksilla. Kerro tunnuksesi projektin omistajalle @Gredu , niin sinut voidaan lisätä kehittäjäryhmään, jolloin päivityksesi hyväksytään automaattisesti ilman tarkistusta.

Jokaisen .md tiedoston alussa on kolme viivaa `---`. Älä välitä näistä viivoista tai muuta mitään, mikä on viivojen välissä.

Vinkkinä vielä, kuinka löytää oikea tiedosto mitä muokata. Mene nettisivuille ja katso osoiterivin loppupäätä, esim. jos osoite on: http://pohjalaiset.fi/tanssikerho/blogi/tanssilajit nähdään tästä, että loppupää on `/blogi/tanssilajit`. Tästä voi arvata, että tähän sivuun vaikuttaa tiedosto `/content/blogi/tanssilajit.md`.

### Tietokantojen muokkaus

Tietokantamainen sisältö löytyy [data](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/data) kansiosta.

Tietokanta on kirjoitettu .json muodossa. Tämänkin kirjoitustavan (syntaksin) ymmärtää yleensä jo vain katsomalla tiedostoa. JSONin kanssa on oltava varovainen, sillä vaikka se on helppo ymmärtää, on se myös helppo kirjoittaa vahingossa väärin. Jos virheeseen on epäilys, kopioi koko .json tiedosto sisältö [tarkastajaan](https://jsonlint.com/), joka katsoo mahdolliset kirjoitusvirheet.

Yleinen virhe JSONin kanssa on ylimääräinen pilkku: listan viimeisimpään kohtaan ei tule pilkkua.

Selitys tietokantojen merkityksistä:

  - [board.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/board.json) - hallituksen jäsenet
  - [oldBoard.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/oldBoard.json) - edeltävät hallituksen jäsenet
  - [events.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/events.json) - tapahtumat ja tiedotteet
  - [courses.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/courses.json) - kurssiajat ja lajit
  - [courseMeta.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/courseMeta.json) - kurssien alkamisajat ja loppumisajat, sekä kurssien opettajat
  - [prices/](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/prices/) - kurssien hinnat

On erityisen tärkeää, että päivämääriä muokattaessa pidetään aikaformaatti muodossa `YYYY-MM-DD`. Näin kone ymmärtää tapahtumien keskinäisen suhteen, eli mitkä ovat ennen toisia.

**Tätä edemmäs ei sisällöntuottajien tarvitse lukea!** Näillä ohjeilla ja päättelykyvyillä pitäisi pärjätä jo aika pitkälle. Seuraavissa aliotsikoissa käydään vähän tarkemmin yleisimmät skenaariot, mitä ehkä vastaan voi tulla.

#### Tiedotteen muokkaaminen

Tiedote on tiedostossa [content/tiedote.md](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/content/tiedote.md). Tiedoston alussa on kohta `draft: true | false`. Jos on `true` tiedotus ei ole näkyvillä ja vastaavasti `false` niin tiedote näkyy.

Tiedote tulee etusivulle ja se on nostettu erittäin näkyvälle paikalle. Tästä syystä tiedotetta kannattaa käyttää ainoastaan tärkeissä asioissa.

#### Uuden tapahtuman luominen

Tapahtumat ovat tiedostossa [events.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/events.json). Ei ole väliä mihin kohtaan uuden tapahtuman tiedostossa laittaa, mutta on suositeltavaa, että ne laitetaan oikeassa aika järjestyksessä. Koneelle sillä ei ole mitään väliä, mutta ihmisille tapahtumien lukeminen sekavassa järjestyksessä voi olla hankalaa.

#### Ilmoittautumislinkin päivittäminen

Ilmoittautumislinkki päivitetään tiedostoon [config.yaml](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/config.yaml). Linkki laitetaan kohtaan `address` ja lainausmerkkien väliin.

#### Hallitussivun päivittäminen

Hallituksen jäsenet löytyvät tietokannasta [board.json](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/data/board.json). Kuvan saa henkilölle laittamalla kuvan kansioon [board](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/static/img/board) ja viittaamalla siihen kentästä `pictures` board.json tiedostossa. Kuvan tulee olla kooltaan 214px x 220px tai samassa kuvasuhteessa.

### Monipuolisempaa sisällön esilletuontia

Kansio [content](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/content) sisältää kaikki esseemäinen kirjoitus Markdown muodossa. Markdown tiedostoon on mahdollista kirjoittaa sekaan Hugon omia merkintöjä (shortcodes, koodipätkä). Näiden avulla voi upottaa mm. Youtube- tai Vimeo-videoita tekstiin. Lyhyitä ohjelmapätkiä voi myös tehdä itse tai pyytää, jos on tarve jollekin erikoisemmalle sisällön esilletuomiselle.

Ohjeet Hugon omille koodeille [Hugon sivuilta](https://gohugo.io/content-management/shortcodes/).

Esimerkiksi Youtuben upottaminen tapahtuu seuraavasti:
```
{{< youtube id="GcpiJZKgW8s" class="media">}}
```
On olemassa kuitenkin muutamia itse tehtyjä koodipätkiä, joiden käytöstä ei tietenkään lue mitään Hugon sivuilla. Sisällön tuottajille on olemassa seuraavia koodipätkiä:

  - `{{% address %}}` - lisää Bottan osoitteen
  - `{{% bank %}}` - lisää pankkitiedot
  - `{{< footnote >}} tekstiä välissä {{< /footnote >}}` - pienentää välissä olevan tekstin, tarkoitettu alaviitteille
  - `{{< link facebook|whatsapp|signin >}}` - antaa linkin valitsemalle argumentille
  - `{{< twoColumnImage imgPlacemenet="left|right" height="n" src="url" >}}` - kuva ja teksti kahdessa sarakkeessa, src osoittaa kansioon https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/static/img/picture jossa on `mobile` ja `desktop` kansiot, kummassakin oltava saman nimiset kuvat, height kertoo kuvan pituuden

On tärkeää huomata, että koodipätkien kanssa on käytettävä oikeaa merkkiä: `%` tai `< >`. Merkkki `%` kertoo, että renderöidään, ja `< >`-merkkiyhdistelmässä ei renderöidä Markdownia. Se kumpi valitaan selviää lähinnä vain itse koodia katsomalla tai juurikin tätä dokumenttia lukemalla.

### Yleiset useassa kohtaa sivua esiintyvät tiedot

Yleisesti esiintyvät tiedot löytyvät projektin juurella olevasta tiedostosta [config.yaml](https://github.com/pohjalaisten-tanssikerho/web-page/blob/master/config.yaml) kohdasta params. Tästä tiedostossa on seuraavat kentät:

  - `address` - yhdistyksen osoite
  - `signin` - ilmoittautumislinkki
  - `bank` - pankkitiedot
  - `links` - yleisesti käytettyjä linkkejä

Tiedosto `config.yaml` on kirjoitettu yaml:lla, jonka syntaksi on myös aika helppo.

## Ohjeet kehittäjille

Sivut on rakennettu Hugolla, joka on staattinen sivugeneraattori. Hugo on hyvin dokumentoitu omilla [kotisivuilla](https://gohugo.io), mutta dokumentaatiosta voi olla vaikea oppia. Alkuun pääsemiseksi kannattaa tutustua Hugon [opetusvideoihin Youtubessa](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3).

<!-- Julkaisussa käytetään [Netlify](https://www.netlify.com/) palvelua. Käytännössä aina kun versionhallintasivuun työnnetään päivityksiä, Netlify rakentaa siitä uudet nettisivut ja julkaisee ne. -->

Projekti käyttää [SCSS:ssää](https://sass-lang.com/), joka on CSS esiprosessoija. SASS tiedostot löytyvät kansiosta [assets/sass/](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/assets/sass).

Pyrkimys on, että sivut näyttävät hyviltä 320px ja 1920px (full hd) välillä. Näiden ulkopuolelle kuuluvia laitteita ei tueta.

### Suositeltu tapa kehittää sivuja

Kloonaa projekti paikalliselle koneelle. Hugon pystyy ajamaan nettisivut paikallisesti omalla palvelimellaan. Paikallisella palvelimella on se etu, että sivuihin tehdyt muutokset näkyvät välittömästi.

Esimerkiksi jos git ja Hugo on asennettu, voi projektin hakea, ja palvelimen käynnistää seuraavasti:
```bash
git clone https://github.com/pohjalaisten-tanssikerho/web-page.git
cd web-page
hugo server
```
Jos muita palvelimia ei ole ajossa tällä hetkellä, näkyvät sivut osoitteessa http://localhost:1313

Älä tee muutoksia `public`-kansioon, jonka Hugo rakentaa silloin kun annetaan `hugo` komento. `public`-kansio sisältää nettisivujen julkaistavan osan.

### Shortcodes

Kansiossa [shortcodes](https://github.com/pohjalaisten-tanssikerho/web-page/tree/master/layouts/shortcodes) löytyy kasa itse tehtyjä "funktioita" tai koodipätkiä.

### Projektin periaatteita

On muistettava, että sivua päivittävät myös ne henkilöt, joilla ei ole ohjelmointitaustaa tai kiinnostusta mitään kiinnostusta ohjelmoimiseen. Tämän takia kehittäjän on tehtävä sisällön tuotannosta mahdollisimman yksinkertaista. Sisällön tuottajalta voidaan ainoastaan olettaa ymmärtävän Markdownia ja hieman jsonia, sekä yamlia. Olisi hyvä, jos heidän ei tarvitsisi koskaan koskea shortcodeihin tai layoutteihin. Esimerkiksi kaikkialla yleisesti esiintyvä tieto laitetaan tiedostoon `config.yaml` ja käytetään shortcodeja niiden hakemiseen. Näin sisällöntuottajan täytyy käsitellä vain `config.yaml` tiedostoa, eikä hänen tarvitse koskaan kurkistaa shortcodeihin. Lisäksi tieto pysyy samassa paikassa helposti käsiteltävänä.

### Projektin kieli

Ohjelmoinnissa käytetään englantia, eli muuttajat ja funktioiden nimet englanniksi. Keskustelu voidaan käydä suomeksi tai englanniksi. Git otsikko-kommentit mieluiten englanniksi noudattaen [hyviä kommenttiasu sääntöjä](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53). Lyhyesti samat ohjeet:

  - käytä imperatiivimuotoa (käskymuoto)
  - kirjoitetaan kuin otsikko (iso alkukirjain, ei pistettä loppuun)

### Kesken jääneitä kehitysideoita ja suunnitelmia

Saa lähettää koodia tälle projektille. Tässä muutamia kesken jääneitä ajatuksia ja ideoita projektille.

#### Tiedotukset ja kurssitiedot suoraan Google kalenterista

Tiedotus ja kurssiaikataulu merkitään tällä hetkellä .json tiedostoihin, mikä ei ole kovin käyttäjäystävällinen. Olisi hyvä, jos sisällöntuottajat voisivat luoda tapahtumia, tiedotuksia ja kurssiaikatauluja suoraan Googlen kalenteriin, josta nettisivu ottaa tarvitsemansa tiedot.

**Tämä toiminnallisuus on osittain tehty!** Kehitys jätettiin kesken, koska Google kalenterin käyttö voi olla yhtä hankalaa kuin CMS. Mieluiten tehdään CMS:llä, koska SEO ei välttämättä tykkää, että tieto tulee "jäljessä". On siis vaikeampi indeksoida nettisivun sisältöä.

Tähän liittyvä koodi on kuitenkin jätetty, jos sittenkin muutetaan mieltä, ja halutaan tapahtumat ja kurssiaikataulut Googlen kalenteriin.

#### Viestin lähetys formilla

Nettisivuilla näkyy tällä hetkellä kaikkien sähköpostit, mutta olisi parempi, jos olisi oma viestin lähetys-sivut, mistä sähköpostia voi lähettää kullekin hallituksen jäsenelle ilman, että lähettäjän tarvitsee tietää sähköpostia. Viesti tulisi siis suoraan sähköpostiin. Sähköposti saa tulla ilmi silloin, kun hallituslainen lähettää takaisin sähköpostia.

Netlify tukee tätä ominaisuutta, mutta ei ole varmaa miten helppoa näiden tuunaaminen on sellaiselle tanssikerhon hallitukselle, jossa ei istu yhtäkään nörttiä. Ei saisi tulla ongelmia viestien lähetysten kanssa, kun uusi hallitus aloittaa toimintansa.

#### Kurssiaikataulu paremmin kurssisivuilla

Kurssiaikataulu näyttää hyvältä pieneltä ruudulta, mutta isolla ruudulla se on liian kapea. Lisäksi olisi hyvä, jos kurssiaikataulusta hieman pimennetään (tai jollain muulla tavalla) ne lajit, jotka ovat jo menneet. Näin käyttäjän on helppompi nähdä suoraan, mikä laji on tulossa seuraavaksi.

Yksi idea saada tästä hyvän näköinen on käyttää kahta saraketta, johon on jo kirjoitettu koodipätkä. Tarvitaan siis vain neljä kappaletta kuvia.
