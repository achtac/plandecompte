
recherche = document.getElementById('rechercher');
re = document.getElementById('re');

recherche1 = document.getElementById('rechercher1');
re1 = document.getElementById('re1');





persons = [
    {
        Nom:"452",
        Libelle:"banque"
    },
     {
       Nom:"401",
       Libelle:"client"
    },
    
{
     Nom:  "Capital",
      Libelle: "10"
},
 {

Nom: "Réserves",
Libelle:"11"
     },
     {
 Nom:  "Report à nouveau",
 Libelle: "11"
     },

{
 Nom:  "Résultat net de l’exercice",
 Libelle: "13"
},

{
     Nom:  "Subventions d’investissement",
      Libelle: "14"
},
{
     Nom:  "Provisions réglementées et fonds assimilés",
      Libelle: "15"
},
{
     Nom:  "Emprunts et dettes assimilés",
      Libelle: "16"
},
{
     Nom:  "Dettes de location-acquisition",
      Libelle: "17"
},
{
     Nom:  "Dettes liées à des participations et comptes de liaison des établissements et sociétés en participation",
      Libelle: "18"
},
{
     Nom:  "Provisions pour risques et charges",
      Libelle: "19"
},
{
     Nom:  "Capital ",
      Libelle: "10"
},
{
     Nom:  "Capital social",
      Libelle: "101"
},
{
     Nom:  "Capital souscrit, non appelé",
      Libelle: "1011"
},
{
     Nom:  "Capital souscrit appelé, non versé",
      Libelle: "1012"
},
{
     Nom:  "Capital souscrit, appelé, versé non amorti",
      Libelle: "1013"
},
{
     Nom:  "Capital souscrit, appelé versé amorti ",
      Libelle: "1014"
},
{
     Nom:  "Capital souscrit soumis à des conditions particulières",
      Libelle: "1018"
},
{
     Nom:  "Capital par dotation",
      Libelle: "102"
},
{
     Nom:  "Dotation initiale",
      Libelle: "1021"
},
{
     Nom:  "Dotations complémentaires",
      Libelle: "1022"
},
{
     Nom:  "Autres dotations",
      Libelle: "1023"
},
{
     Nom:  "CAPITAL PERSONNEL",
      Libelle: "103"
},
{
     Nom:  "COMPTE DE L’EXPLOITANT",
      Libelle: "104"
},
{
     Nom:  "Apports temporaires",
      Libelle: "1041"
},
{
     Nom:  "Opérations courantes",
      Libelle: "1042"
},
{
     Nom:  "Rémunérations, impôts et autres charges personnelles",
      Libelle: "1043"
},
{
     Nom:  "Prélèvement d’autoconsommation",
      Libelle: "1047"
},
{
     Nom:  "Autres prélèvements",
      Libelle: "1048"
},
{
     Nom:  "PRIMES LIEES AU CAPITAL SOCIAL",
      Libelle: "105"
},
{
     Nom:  "Primes d’émission",
      Libelle: "1051"
},
{
     Nom:  "Primes d’apport",
      Libelle: "1052"
},
{
     Nom:  "Primes de fusion",
      Libelle: "1053"
},
{
     Nom:  "Prime de conversion ",
      Libelle: "1054"
},
{
     Nom:  "Autres primes",
      Libelle: "1058"
},
{
     Nom:  "ECARTS DE REEVALUATION",
      Libelle: "106"
},
{
     Nom:  "Ecarts de réévaluation légale",
      Libelle: "1061"
},
{
     Nom:  "Ecart de réévaluation libre",
      Libelle: "1062"
},
{
     Nom:  "Apporteurs, capital souscrit, non appelé",
      Libelle: "109"
},
{
     Nom:  "RESERVES",
      Libelle: "11"
},
{
     Nom:  "RESERVE LEGALE",
      Libelle: "111"
},
{
     Nom:  "RESERVES STATUAIRES OU CONTRACTUELLES",
      Libelle: "112"
},
{
     Nom:  "Réserves règlementées",
      Libelle: "113"
},
{
     Nom:  "Réserves de plus-values nettes à long terme",
      Libelle: "1131"
},
{
     Nom:  "Réserves d’attribution gratuite d’actions au personnel salarié et aux dirigeants",
      Libelle: "1132"
},
{
     Nom:  "Réserves consécutives à l’octroi de subventions d’investissement",
      Libelle: "1133"
},
{
     Nom:  "Réserves des valeurs mobilières donnant accès au capital",
      Libelle: "1134"
},
{
     Nom:  "Autres réserves règlementées",
      Libelle: "1138"
},
{
     Nom:  "Autres Réserves",
      Libelle: "118"
},
{
     Nom:  "Réserves facultatives",
      Libelle: "1181"
},
{
     Nom:  "Réserves diverses",
      Libelle: "1188"
},
{
     Nom:  "REPORT A NOUVEAU",
      Libelle: "12"
},
{
     Nom:  "Report à nouveau créditeur",
      Libelle: "121"
},
{
     Nom:  "Report à nouveau débiteur",
      Libelle: "129"
},
{
     Nom:  "Perte nette à payer",
      Libelle: "1291"
},

{
     Nom:  "Perte amortissements réputés différés",
      Libelle: "1292"
},
{
     Nom:  "RESULTAT NET DE L’EXERCICE",
      Libelle: "13"
},
{
     Nom:  "Résultat en instance d’affection",
      Libelle: "130"
},
{
     Nom:  "Résultat en instance d’affectation : Bénéfice",
      Libelle: "1301"
},
{
     Nom:  "Résultat en instance d’affectation, perte",
      Libelle: "1301"
},
{
     Nom:  "RESULTAT NET : BENEFICE",
      Libelle: "131"
},
{
     Nom:  "MARGE COMMERCIALE (M .C) ",
      Libelle: "132"
},
{
     Nom:  " VALEUR AJOUTEE (V.A) ",
      Libelle: "133"
},
{
     Nom:  "EXCEDENT BRUT D’EXPLOITATION (E.B.E) ",
      Libelle: "134"
},
{
     Nom:  "RESULTAT D’EXPLOITATION (R.E.)",
      Libelle: "135"
},
{
     Nom:  "RESULTAT FINANCIER (R.F.)",
      Libelle: "136"
},
{
     Nom:  "RESULTAT DES ACTIVITES ORDINAIRES(R.A.O) ",
      Libelle: "137"
},
{
     Nom:  "RESULTAT HORS ACTIVITES ORDINAIRES (R.H.A.O) ",
      Libelle: "138"
},
{
     Nom:  "Résultat de fusion",
      Libelle: "1381"
},
{
     Nom: "Résultat d’apport partiel d’actif",
      Libelle: "1382"
},
{
     Nom:  "Résultat de scission",
      Libelle: "1383"
},
{
     Nom:  "Résultat de liquidation",
      Libelle: "1384"
},
{
     Nom:  "RESULTAT NET : PERTE",
      Libelle: "139"
},
{
     Nom:  "SUBVENTION D’INVESTISSEMENT",
      Libelle: "14"
},
{
     Nom:  "SUBVENTIONS D’EQUIPEMENT",
      Libelle: "141"
},
{
     Nom:  "Etat",
      Libelle: "1411"
},
{
     Nom:  "Régions",
      Libelle: "1412"
},
{
     Nom:  "Départements",
      Libelle: "1413"
},
{
     Nom:  "Communes et collectivités publiques décentralisées",
      Libelle: "1414"
},
{
     Nom:  "Entreprises publiques et mixtes",
      Libelle: "1415"
},
{
     Nom:  "Entreprises et organismes privées",
      Libelle: "1416"
},
{
     Nom:  "Organismes internationaux",
      Libelle: "1417"
},
{
     Nom:  "Autres",
      Libelle: "1418"
},
{
     Nom:  "AUTRES SUBVENTIONS D’INVESTISSEMENT",
      Libelle: "148"
},
{
     Nom:  "PROVISIONS REGLEMENTEES ET FONDS ASSIMILES",
      Libelle: "15"
},
{
     Nom:  "AMORTISSEMENTS DEROGATOIRES",
      Libelle: "151"
},
{
     Nom:  "PLUS-VALUES DE CESSION A REINVESTIR",
      Libelle: "152"
},
{
     Nom:  "FONDS REGLEMENTS",
      Libelle: "153"
},
{
     Nom:  "Fonds national",
      Libelle: "1531"
},
{
     Nom:  "Prélèvements pour le budget",
      Libelle: "1532"
},
{
     Nom:  "PROVISIONS SPECIALES DE REEVALUATION ",
      Libelle: "154"
},
{
     Nom:  "PROVISIONS REGLEMENTEES RELATIVES AUX IMMOBILISATIONS",
      Libelle: "155"
},
{
     Nom:  "Reconstitution des gisements miniers et pétroliers",
      Libelle: "1551"
},
{
     Nom:  "PROVISIONS REGLEMENTEES RLATIVES AUX STOCK",
      Libelle: "1561"
},
{
     Nom: "Hausse de prix",
      Libelle: "1561"
},
{
     Nom:  "Fluctuation des cours",
      Libelle: "1562"
},
{
     Nom:  "PROVISIONS POUR INVESTISSEMENT",
      Libelle: "157"
},
{
     Nom:  "AUTRES PROVISIONS ET FONDS REGLEMENTES",
      Libelle: "158"
},
{
     Nom:  "EMPRUNTS ET DETTES ASSIMILES",
      Libelle: "16"
},
{
     Nom: "EMPRUNTS OBLIGATAIRES",
      Libelle: "161"
},
{
     Nom:  "Emprunts obligataires ordinaires  ",
      Libelle: "1611"
},
{
     Nom:  "Emprunts obligataires convertibles en action",
      Libelle: "1612"
},
{
     Nom:  "Emprunts obligataires remboursables en actions ",
      Libelle: "1613"
},
{
     Nom:  "Autres emprunts obligataires",
      Libelle: "1618"
},
{
     Nom:  "EMPRUNTS ET DETTES AUPRES DES ETABLISSEMENTS DE CREDIT",
      Libelle: "162"
},
{
     Nom:  "AVANCES RECUES DE L’ETAT",
      Libelle: "163"
},
{
     Nom:  "AVANCES RECUES ET COMPTES COURANTS BLOQUES",
      Libelle: "164"
},
{
     Nom:  "DEPOTS ET CAUTIONNEMENTS RECUS",
      Libelle: "165"
},
{
     Nom:  "Dépôts ",
      Libelle: "1651"
},
{
     Nom:  "Cautionnements",
      Libelle: "1652"
},
{
     Nom: "Intérêts courus",
      Libelle: "166"
},
{
     Nom:  "Sur emprunts obligataires",
      Libelle: "1661"
},
{
     Nom:  "Sur emprunts et dettes auprès des établissements de crédit",
      Libelle: "1662"
},
{
     Nom:  "Sur avances reçues de l’Etat ",
      Libelle: "1663"
},
{
     Nom:  "Sur avances reçues et comptes courants bloqués ",
      Libelle: "1664"
},
{
     Nom:  "Sur dépôts et cautionnements reçus",
      Libelle: "1665"
},
{
     Nom:  "Sur avances assorties de conditions particulières",
      Libelle: "1667"
},
{
     Nom:  "Sur autres emprunts et dettes",
      Libelle: "1668"
},
{
     Nom:  "Avances assorties de Conditions particulières ",
      Libelle: "167"
},
{
     Nom:  "Avances bloquées pour augmentation du capital",
      Libelle: "1671"
},
{
     Nom:  "Avances conditionnées par l’Etat",
      Libelle: "1672"
},
{
     Nom: "Avances conditionnées par les autres organismes africains",
      Libelle: "1673"
},
{
     Nom:  "Avances conditionnées par les organismes internationaux",
      Libelle: "1674"
},
{
     Nom:  "AUTRES EMPRUNTS ET DETTES",
      Libelle: "168"
},
{
     Nom:  "Rentes viagères capitalisées",
      Libelle: "1681"
},
{
     Nom:  "Billets de fonds",
      Libelle: "1682"
},
{
     Nom:  "Dettes consécutives à des titres empruntés",
      Libelle: "1683"
},
{
     Nom:  "Emprunts participatifs",
      Libelle: "1684"
},
{
     Nom:  "Participation des travailleurs aux bénéfices",
      Libelle: "1685"
},
{
     Nom:  "Emprunts et dettes contractés auprès des  autres tiers",
      Libelle: "1686"
},
{
     Nom:  "DETTES DE LOCATION ACQUISITION",
      Libelle: "17"
},
{
     Nom:  "DETTES DE LOCATION ACQUISITION/ CREDIT-BAIL IMMOBILIER",
      Libelle: "172"
},
{
     Nom:  "DETTES DE LOCATION ACQUISITION/ CREDIT-BAIL MOBILIER",
      Libelle: "173"
},
{
     Nom:  "DETTES DE LOCATION ACQUISITION/ LOCATION-VENTE",
      Libelle: "174"
},
{
     Nom:  "INTERETS COURUS",
      Libelle: "176"
},
{
     Nom:  "Sur dettes de location acquisition/ crédit-bail immobilier",
      Libelle: "1762"
},
{
     Nom:  "Sur dettes de location acquisition/ crédit-bail mobilier",
      Libelle: "1763"
},
{
     Nom:  "Sur dettes de location acquisition/ location-vente",
      Libelle: "1764"
},
{
     Nom:  "Sur autres dettes de location acquisition",
      Libelle: "1768"
},
{
     Nom:  "AUTRES DETTES DE LOCATION ACQUISITION",
      Libelle: "178"
},
{
     Nom:  "DETTES LIEES A DES PARTICIPATIONS ET COMPTES DE LIAISON DES ETABLISSEMENTS ET SOCIETES EN PARTICIPATION",
      Libelle: "18"
},
{
     Nom:  "DETTES LIEES A DES PARTICIPATIONS",
      Libelle: "181"
},
{
     Nom:  "Dettes liées à des participations (groupe)",
      Libelle: "1811"
},
{
     Nom:  "Dettes liées à des participations (hors groupe) ",
      Libelle: "1812"
},
{
     Nom:  "DETTES LIEES A DES SOCIETES EN PARTICIPATION",
      Libelle: "182"
},
{
     Nom:  "INTERETS COURUS SUR DETTES LIEES A DES PARTICIPATIONS",
      Libelle: "183"
},
{
     Nom:  "COMPTES PERMANENTS BLOQUES DES ETABLISSEMENTS ET SURCCURSALES",
      Libelle: "184"
},
{
     Nom: "COMPTES PERMANENTS NON BLOQUES DES ETABLISSEMENTS ET SURCCURSALES",
      Libelle: "185"
},
{
     Nom:  "COMPTES DE LIAISON CHARGES",
      Libelle: "186"
},
{
     Nom:  "COMPTES DE LIAISONS PRODUITS",
      Libelle: "187"
},
{
     Nom:  "COMPTES DE LIAISON DES SOCIETES EN PARTICIPATION",
      Libelle: "188"
},
{
     Nom:  "PROVISIONS POUR RISQUES ET CHARGES",
      Libelle: "19"
},
{
     Nom:  "PROVISIONS POUR LITIGES",
      Libelle: "191"
},
{
     Nom: "PROVISIONS POUR GARANTIES DONNEES AUX CLIENTS",
      Libelle: "192"
},
{
     Nom:  "PROVISIONS POUR PERTES SUR MARCHES A ACHEVEMENT FUTUR",
      Libelle: "193"
},
{
     Nom:  "PROVISIONS POUR PERTE DE CHANGE",
      Libelle: "194"
},
{
     Nom:  "PROVISIONS POUR IMPOTS",
      Libelle: "195"
},
{
     Nom:  "PROVISIONS POUR PENSIONS ET OBLIGATIONS SIMILAIRES ",
      Libelle: "196"
},
{
     Nom:  "Provisions pour pensions et obligations similaires-engagement de retraite",
      Libelle: "1961"
},
{
     Nom:  "Actif du régime de retraite",
      Libelle: "1962"
},
{
     Nom:  "PROVISIONS POUR RESTRUCTURATION",
      Libelle: "197"
},
{
     Nom:  "AUTRES PROVISIONS POUR RISQUES ET CHARGES",
      Libelle: "198"
},
{
     Nom:  "Provisions pour amendes et pénalités",
      Libelle: "1981"
},
{
     Nom:  "Provisions pour propre assureur",
      Libelle: "1983"
},
{
     Nom:  "Provisions pour démantèlement et remise en état",
      Libelle: "1984"
},
{
     Nom:  "Provisions pour droits à réduction ou avantage en nature (Chèques, cadeaux, cartes de fidélité…) ",
      Libelle: "1985"
},
{
     Nom:  "Provisions pour divers risques et charges",
      Libelle: "1988"
}



];


if(recherche.value != ""){
    re.classList.add("recherche");
re.onclick =  () =>{
      document.getElementById('elem').innerHTML = "";
 const yu = recherche.value;

  result = persons.filter(item =>  item.Libelle.includes(yu));


      
  
  result.map((elem) =>{
          
    ty =  "<li>" + elem.Nom + " " + elem.Libelle + "</li><br>";

      document.getElementById('elem').innerHTML += ty;
         

  });
  if(recherche.value == ""){
document.getElementById('elem').innerHTML ="veuillez entrer la recherche" ;


}
}}




if(recherche1.value != ""){
    re1.classList.add("recherche");
re1.onclick =()=>{
       document.getElementById('elem1').innerHTML = "";
 const yu1 = recherche1.value;
  result1 = persons.filter(item1 =>  item1.Nom.toLowerCase().includes(yu1));
      
  
  result1.map((elem1) =>{
      ta =  "<li>" + elem1.Nom + " " + elem1.Libelle + "</li><br>";
      document.getElementById('elem1').innerHTML += ta;
         

  });
}}





begin = document.getElementById('begin');
con = document.getElementById('con');

numero = document.getElementById('number');
libelle = document.getElementById('libelle');

numo = document.getElementById('numo');
libello = document.getElementById('libello');

begin.onclick = function() {
    con.style.height = "10px";
    begin.style.display = "none";
    con.style.transition = "0.5s all";
    nomauthor.style.display ="none";

}

numero.onclick = function() {
     
    numo.style.marginTop="-558px";
    // libello.style.display="none";
    numo.style.transition="0.5s all";
    numero.style.marginTop="-758px";
    libelle.style.marginTop="-758px";

   

}


libelle.onclick = function() {
     
    libello.style.marginTop="-558px";
    numo.style.display="none";
  libelle.style.transition="0.5s all";
    numero.style.marginTop="-758px";
    libelle.style.marginTop="-758px";


   

}
option = document.getElementById("option");

retour.onclick = ()  => {
 
    con.style.height = "750px";
    begin.style.display = "block";
    con.style.transition = "0.5s all";
        numo.style.display="block";
    numo.style.marginTop="558px";
        numero.style.marginTop="0px";
            libelle.style.marginTop="0px";

}
retour1.onclick = ()  => {
 
  
    con.style.height = "750px";
    begin.style.display = "block";
    con.style.transition = "0.5s all";
        numo.style.display="block";
    numo.style.marginTop="558px";
        numero.style.marginTop="0px";
            libelle.style.marginTop="0px";
            libello.style.marginTop = "0px";

}