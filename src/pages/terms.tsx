import * as React from "react";
import { Col, Container } from "react-grid-system";
import { HorizontalSpacer } from "../components/spacers";
import { Body } from "../components/typography";

const TermsPage = () => {
  return (
    <>
      <HorizontalSpacer spacing={15} />
      <Container>
        <Col md={9} xs={12}>
          <Body>
            Informationen om fonder på denna webbplats är
            marknadsföringsmaterial och utgör inte investeringsrådgivning. Se
            till att konsultera en rådgivare innan du investerar och bekanta dig
            med dina investerarrättigheter i prospektet, faktablad för fonden
            och information om hantering av klagomål.
            <HorizontalSpacer spacing={3} />
            Danske Bank erbjuder inte investeringsrådgivningstjänster
            (”investeringsrådgivningstjänster”) eller värdepappersförmedling och
            andra mäklar- eller handelstjänster (”mäklartjänster”) till personer
            med hemvist i USA, s.k. US Persons, enligt definitionen nedan, och
            materialet på denna webbplats är inte avsett för distribution till
            eller användning av sådana personer. Ingenting i materialet på denna
            webbplats ska tolkas som ett erbjudande om
            investeringsrådgivningstjänster eller mäklartjänster till en person
            med hemvist i USA.
            <HorizontalSpacer spacing={3} />
            I samband med investeringsrådgivningstjänster innebär en US Person
            en fysisk person med hemvist i USA, eller ett företag eller annat
            bolag som är bildat eller organiserat i USA, dock ej
            offshore-filialer eller agenturer som tillhör en person med hemvist
            i USA som bedriver verksamhet av berättigade affärsskäl och anlitas
            och regleras som ett försäkringsbolag eller bank, eller en filial
            till en utländsk enhet som är belägen i USA, eller en stiftelse vars
            förvaltare är en US Person, om inte en s.k. non-US Person, dvs. en
            person som saknar hemvist i USA, har eller delar rätten till
            investeringsbeslut, eller ett dödsbo för vilket en person med
            hemvist i USA är dödsboförvaltare eller boutredningsman, om inte
            dödsboet styrs av utländsk lag och en non-US Person har eller delar
            rätten till investeringsbeslut, eller ett konto som inte är kopplat
            till diskretionär förvaltning och som innehas till förmån för en
            person med hemvist i USA eller ett konto kopplat till diskretionär
            förvaltning och som innehas av en amerikansk mäklare eller
            förvaltare, om inte detta innehas till förmån för en person utan
            hemvist i USA, eller enheter som organiserats eller bildats i syfte
            att kringgå amerikanska värdepapperslagar. Termen ”US Person”
            omfattar inte en person som inte befann sig i USA vid den tidpunkt
            då personen blev en investeringsrådgivningskund till Danske Bank.
            <HorizontalSpacer spacing={3} />
            När det gäller mäklartjänster är en US Person en kund som befinner
            sig i USA, förutom en kund som var bosatt utanför USA vid den
            tidpunkt då hans eller hennes relation med Danske Bank etablerades
            och som – när personen är i USA – varken är (i) en amerikansk
            medborgare (inklusive dubbel medborgare i USA och ett annat land),
            (ii) en person med permanent uppehållstillstånd (dvs. ”innehavare av
            grönt kort”), och inte heller (iii) en person som befinner sig USA
            annat än tillfälligt.
          </Body>
        </Col>
      </Container>
      <HorizontalSpacer spacing={15} />
    </>
  );
};
export default TermsPage;
