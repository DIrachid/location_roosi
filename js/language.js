var english = document.getElementById("english");
var francais = document.getElementById("francais");
var accueil = document.getElementById("accueil");
var notre_agence=document.getElementById("notre-agence");
var nos_voiture=document.getElementById("nos-voiture");
var contact_contact=document.getElementById("contact-contact");
var title_1=document.getElementById("title-1");
var title_2=document.getElementById("title-2");
var btn_1=document.getElementById("btn-1");
var strong_1=document.getElementById("strong-1");
var jour_1=document.getElementById("jour-1");
var jour_2=document.getElementById("jour-2");
var jour_3=document.getElementById("jour-3");
var luggage_1=document.getElementById("luggage-1");
var doors_1=document.getElementById("doors-1");
var passeneger_1=document.getElementById("passenger-1");
var jour_1a=document.getElementById("jour-1a");
var jour_2a=document.getElementById("jour-2a");
var jour_3a=document.getElementById("jour-3a");
var luggage_1a=document.getElementById("luggage-1a");
var doors_1a=document.getElementById("doors-1a");
var passeneger_1a=document.getElementById("passenger-1a");
var jour_1b=document.getElementById("jour-1b");
var jour_2b=document.getElementById("jour-2b");
var jour_3b=document.getElementById("jour-3b");
var luggage_1b=document.getElementById("luggage-1b");
var doors_1b=document.getElementById("doors-1b");
var passeneger_1b=document.getElementById("passenger-1b");
var jour_1c=document.getElementById("jour-1c");
var jour_2c=document.getElementById("jour-2c");
var jour_3c=document.getElementById("jour-3c");
var luggage_1c=document.getElementById("luggage-1c");
var doors_1c=document.getElementById("doors-1c");
var passeneger_1c=document.getElementById("passenger-1c");
var jour_1d=document.getElementById("jour-1d");
var jour_2d=document.getElementById("jour-2d");
var jour_3d=document.getElementById("jour-3d");
var luggage_1d=document.getElementById("luggage-1d");
var doors_1d=document.getElementById("doors-1d");
var passeneger_1d=document.getElementById("passenger-1d");
var jour_1e=document.getElementById("jour-1e");
var jour_2e=document.getElementById("jour-2e");
var jour_3e=document.getElementById("jour-3e");
var luggage_1e=document.getElementById("luggage-1e");
var doors_1e=document.getElementById("doors-1e");
var passeneger_1e=document.getElementById("passenger-1e");
var strong_2=document.getElementById("strong-2");
var par_1=document.getElementById("par-1");
var h3_1=document.getElementById("h3-1");
var h3_2=document.getElementById("h3-2");
var h3_3=document.getElementById("h3-3");
var span_1=document.getElementById("span-1");
var h1_1=document.getElementById("h1-1");
var par_2=document.getElementById("par-2");
var par_3=document.getElementById("par-3");
var par_4=document.getElementById("par-4");
var par_5=document.getElementById("par-5");
var rent=document.getElementById("rent");
var rent1=document.getElementById("rent1");
var rent2=document.getElementById("rent2");
var rent3=document.getElementById("rent3");
var rent4=document.getElementById("rent4");
var rent5=document.getElementById("rent5");
var bt1=document.getElementById("bt1");
var h1_11=document.getElementById("h1-11");
var bt2=document.getElementById("bt2");
var h1_cars=document.getElementById("h1-cars");
var p_par=document.getElementById("p-par");
var a_search=document.getElementById("a-search");
var h1_contact=document.getElementById("h1-contact");
var a_search1=document.getElementById("a-search1");
var h2_what=document.getElementById("h2-what");
var p_opa=document.getElementById("p-opa");
var a_white=document.getElementById("a-white");
var h2_about=document.getElementById("h2-about");
var p_far=document.getElementById("p-far");
var h2_quick=document.getElementById("h2-quick");
var h2_res=document.getElementById("h2-res");
var h2_supp=document.getElementById("h2-supp");
var h2_comp=document.getElementById("h2-comp");
var about1=document.getElementById("about1");
var test1=document.getElementById("test1");
var terms1=document.getElementById("terms1");
var contact1=document.getElementById("contact1");
var privacy1=document.getElementById("privacy1")
var about2=document.getElementById("about2");
var test2=document.getElementById("test2");
var terms2=document.getElementById("terms2");
var contact2=document.getElementById("contact2");
var privacy2=document.getElementById("privacy2")
var about3=document.getElementById("about3");
var test3=document.getElementById("test3");
var terms3=document.getElementById("terms3");
var contact3=document.getElementById("contact3");
var privacy3=document.getElementById("privacy3")
var about4=document.getElementById("about4");
var test4=document.getElementById("test4");
var terms4=document.getElementById("terms4");
var contact4=document.getElementById("contact4");
var privacy4=document.getElementById("privacy4");
var f_name=document.getElementById("f-name");
var l_prenom=document.getElementById("l-name");



english.onclick=()=>{
    setlanguage("english");
}
francais.onclick=()=>{
    setlanguage("francais");
}
function setlanguage(getlanguage){
    var XMLHttpRequestObject = false;
    if(getlanguage==="francais"){
        f_name.placeholder="Nom";
        l_prenom.placeholder="Preneom";
        about1.innerHTML="à propos de nous";
        test1.innerHTML="témoignages";
        terms1.innerHTML="conditions ";
        privacy1.innerHTML="intimité";
        contact1.innerHTML="Nous contacter";
        about2.innerHTML="à propos de nous";
        test2.innerHTML="témoignages";
        terms2.innerHTML="conditions";
        privacy2.innerHTML="intimité";
        contact2.innerHTML="Nous contacter";
        about3.innerHTML="à propos de nous";
        test3.innerHTML="témoignages";
        terms3.innerHTML="conditions";
        privacy3.innerHTML="intimité";
        contact3.innerHTML="Nous contacter";
        about4.innerHTML="à propos de nous";
        test4.innerHTML="témoignages";
        terms4.innerHTML="conditions";
        privacy4.innerHTML="intimité";
        contact4.innerHTML="Nous contacter";
        h2_quick.innerHTML="Liens rapides";
        h2_res.innerHTML="Ressources ";
        h2_supp.innerHTML="Support";
        h2_comp="Compagnie";
        h1_cars.innerHTML="voitures disponibles";
        p_par.innerHTML="Située au centre de la ville, Rossi tours vous propose un ensemble de prestationsde transport pour votre confort et tranquillité";
        a_search.innerHTML="chercher des voitures";
        h1_contact.innerHTML="Contactez-nous";
        a_search1.innerHTML="chercher des voitures";
        h2_what.innerHTML="Qu'est-ce que tu attends?";
        p_opa.innerHTML="";
        a_white.innerHTML="Louez une voiture maintenant";
        h2_about.innerHTML="À propos de nous";
        p_far.innerHTML="Loin loin, derrière le mot montagnes, loin des pays Vokalia et Consonantia, vivent les textes aveugles.";
       accueil.innerHTML="Accueil";
       notre_agence.innerHTML="Notre Agence";
       nos_voiture.innerHTML="Nos Voitures / Tarifs";
       contact_contact.innerHTML="Contact";
       title_1.innerHTML="<strong>Louer une voiture</strong> est à portée de main.";
       title_2.innerHTML="Vous pouvez facilement profiter de notre promo pour louer une voiture.";
       btn_1.innerHTML="Rencontrez-les maintenant";
       strong_1.innerHTML="Annonces de voitures";
       jour_1.innerHTML="<strong>$389.00</strong><span >/</span>1 jour - 3 jours";
       jour_2.innerHTML="<strong>$389.00</strong><span >/</span>4 jours - 6 jours";
       jour_3.innerHTML="<strong>$389.00</strong><span >/</span>7 jours - 14 jours";
       luggage_1.innerHTML="Bagage";
       doors_1.innerHTML="Portes";
       passeneger_1.innerHTML="Passage";
       jour_1a.innerHTML="<strong>$389.00</strong><span >/</span>1 jour - 3 jours";
       jour_2a.innerHTML="<strong>$389.00</strong><span >/</span>4 jours - 6 jours";
       jour_3a.innerHTML="<strong>$389.00</strong><span >/</span>7 jours - 14 jours";
       luggage_1a.innerHTML="Bagage";
       doors_1a.innerHTML="Portes";
       passeneger_1a.innerHTML="Passage";
       jour_1b.innerHTML="<strong>$389.00</strong><span >/</span>1 jour - 3 jours";
       jour_2b.innerHTML="<strong>$389.00</strong><span >/</span>4 jours - 6 jours";
       jour_3b.innerHTML="<strong>$389.00</strong><span >/</span>7 jours - 14 jours";
       luggage_1b.innerHTML="Bagage";
       doors_1b.innerHTML="Portes";
       passeneger_1b.innerHTML="Passage";
       jour_1c.innerHTML="<strong>$389.00</strong><span >/</span>1 jour - 3 jours";
       jour_2c.innerHTML="<strong>$389.00</strong><span >/</span>4 jours - 6 jours";
       jour_3c.innerHTML="<strong>$389.00</strong><span >/</span>7 jours - 14 jours";
       luggage_1c.innerHTML="Bagage";
       doors_1c.innerHTML="Portes";
       passeneger_1c.innerHTML="Passage";
       jour_1d.innerHTML="<strong>$389.00</strong><span >/</span>1 jour - 3 jours";
       jour_2d.innerHTML="<strong>$389.00</strong><span >/</span>4 jours - 6 jours";
       jour_3d.innerHTML="<strong>$389.00</strong><span >/</span>7 jours - 14 jours";
       luggage_1d.innerHTML="Bagage";
       doors_1d.innerHTML="Portes";
       passeneger_1d.innerHTML="Passage";
       jour_1e.innerHTML="<strong>$389.00</strong><span >/</span>1 jour - 3 jours";
       jour_2e.innerHTML="<strong>$389.00</strong><span >/</span>4 jours - 6 jours";
       jour_3e.innerHTML="<strong>$389.00</strong><span >/</span>7 jours - 14 jours";
       luggage_1e.innerHTML="Bagage";
       doors_1e.innerHTML="Portes";
       passeneger_1e.innerHTML="Passage";
       strong_2.innerHTML="Comment ça marche?";
       par_1.innerHTML="Étapes faciles pour commencer";
       h3_1.innerHTML="Sélectionnez une voiture";
       h3_2.innerHTML="Remplir le formulaire";
       h3_3.innerHTML="Paiement";
       span_1.innerHTML="Vidéo Comment ça marche";
       h1_1.innerHTML="Pourquoi nous choisir?"
       par_2.innerHTML="Gaz & assurance inclus";
       par_3.innerHTML="Tous les emplacements louer";
       par_4.innerHTML="Nettoyage inclus";
       par_5.innerHTML="Assistance en ligne 24 heures sur 24, 7 jours sur 7";
        rent.innerHTML="Louer maintenant"
        rent1.innerHTML="Louer maintenant"
        rent2.innerHTML="Louer maintenant"
        rent3.innerHTML="Louer maintenant"
        rent4.innerHTML="Louer maintenant"
        rent5.innerHTML="Louer maintenant"
        bt1.innerHTML="Cherches des voitures";
        h1_11.innerHTML="cet été, allez au-delà";
        bt2.innerHTML="Obtenir plus d-info"


    }else if(getlanguage==="english"){
        f_name.placeholder="First name";
        l_prenom.placeholder="Last name";
        about1.innerHTML="About Us";
        test1.innerHTML="Testimonials";
        terms1.innerHTML="Terms of Service ";
        privacy1.innerHTML="Privacy";
        contact1.innerHTML="Contact Us";
        about2.innerHTML="About Us";
        test2.innerHTML="Testimonials";
        terms2.innerHTML="Terms of Service";
        privacy2.innerHTML="Privacy";
        contact2.innerHTML="Contact Us";
        about3.innerHTML="About Us";
        test3.innerHTML="Testimonials";
        terms3.innerHTML="Terms of Service";
        privacy3.innerHTML="Privacy";
        contact3.innerHTML="Contact Us";
        about4.innerHTML="About Us";
        test4.innerHTML="Testimonials";
        terms4.innerHTML="Terms of Service";
        privacy4.innerHTML="Privacy";
        contact4.innerHTML="Contact Us";
        h2_quick.innerHTML="Quick Links";
        h2_res.innerHTML="Resources";
        h2_supp.innerHTML="Support";
        h2_comp="Company";
        h1_cars.innerHTML="available cars";
        p_par.innerHTML="find car rentals at over 29.000 locations in 120 countries";
        a_search.innerHTML="search for cars";
        h1_contact.innerHTML="Contact us";
        a_search1.innerHTML="search for cars";
        h2_what.innerHTML="what are you waiting for?";
        p_opa.innerHTML="";
        a_white.innerHTML="Rent a car now";
        h2_about.innerHTML="About us";
        p_far.innerHTML="Located in the center of the city, Rossi tours offers a range of transport services for your comfort and tranquility.";
       
        accueil.innerHTML="Home";
        notre_agence.innerHTML="Our Agency";
       nos_voiture.innerHTML="Our Cars / Tarids";
       contact_contact.innerHTML="Contact";
       title_1.innerHTML="<strong>Rent a car</strong> is within your finger tips.";
       title_2.innerHTML="You can easily avail our promo for renting a car.";
       btn_1.innerHTML="Meet them now";
       strong_1.innerHTML="Car Listings";
       jour_1.innerHTML="<strong>$389.00</strong><span>/</span>1 day - 3 days";
       jour_2.innerHTML="<strong>$389.00</strong><span>/</span>4 days - 6 days";
       jour_3.innerHTML="<strong>$389.00</strong><span>/</span>7 days - 14 days";
       luggage_1.innerHTML="Luggage";
       doors_1.innerHTML="Doors";
       passeneger_1.innerHTML="Passenger";
       jour_1a.innerHTML="<strong>$389.00</strong><span>/</span>1 day - 3 days";
       jour_2a.innerHTML="<strong>$389.00</strong><span>/</span>4 days - 6 days";
       jour_3a.innerHTML="<strong>$389.00</strong><span>/</span>7 days - 14 days";
       luggage_1a.innerHTML="Luggage";
       doors_1a.innerHTML="Doors";
       passeneger_1a.innerHTML="Passenger";
       jour_1b.innerHTML="<strong>$389.00</strong><span>/</span>1 day - 3 days";
       jour_2b.innerHTML="<strong>$389.00</strong><span>/</span>4 days - 6 days";
       jour_3b.innerHTML="<strong>$389.00</strong><span>/</span>7 days - 14 days";
       luggage_1b.innerHTML="Luggage";
       doors_1b.innerHTML="Doors";
       passeneger_1b.innerHTML="Passenger";
       jour_1c.innerHTML="<strong>$389.00</strong><span>/</span>1 day - 3 days";
       jour_2c.innerHTML="<strong>$389.00</strong><span>/</span>4 days - 6 days";
       jour_3c.innerHTML="<strong>$389.00</strong><span>/</span>7 days - 14 days";
       luggage_1c.innerHTML="Luggage";
       doors_1c.innerHTML="Doors";
       passeneger_1c.innerHTML="Passenger";
       jour_1d.innerHTML="<strong>$389.00</strong><span>/</span>1 day - 3 days";
       jour_2d.innerHTML="<strong>$389.00</strong><span>/</span>4 days - 6 days";
       jour_3d.innerHTML="<strong>$389.00</strong><span>/</span>7 days - 14 days";
       luggage_1d.innerHTML="Luggage";
       doors_1d.innerHTML="Doors";
       passeneger_1d.innerHTML="Passenger";
       jour_1e.innerHTML="<strong>$389.00</strong><span>/</span>1 day - 3 days";
       jour_2e.innerHTML="<strong>$389.00</strong><span>/</span>4 days - 6 days";
       jour_3e.innerHTML="<strong>$389.00</strong><span>/</span>7 days - 14 days";
       luggage_1e.innerHTML="Luggage";
       doors_1e.innerHTML="Doors";
       passeneger_1e.innerHTML="Passenger";
       strong_2.innerHTML="Who it works?";
        par_1.innerHTML="Easy steps to get you started";
        h3_1.innerHTML="Select a car";
        h3_2.innerHTML="Fill up form";
        h3_3.innerHTML="Payment";
        span_1.innerHTML="Video how it works";
        h1_1.innerHTML="Why choose us?"
        par_2.innerHTML="Gas & insurance included";
        par_3.innerHTML="Any Locations Rent";
        par_4.innerHTML="Cleaning included";
        par_5.innerHTML="Online 24 / 7 Support";
        rent.innerHTML="Rent Now";
        rent1.innerHTML="Rent Now";
        rent2.innerHTML="Rent Now";
        rent3.innerHTML="Rent Now";
        rent4.innerHTML="Rent Now";
        rent5.innerHTML="Rent Now";
        bt1.innerHTML="Search for cars";
        h1_11.innerHTML="this summer, go beyond"
        bt2.innerHTML="get more info";
    }
}