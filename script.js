


// TAŞ



function oyunSecimTas() {
    var baslik = document.getElementById("baslik");
    var tas = document.getElementById("tas");
    var kagit = document.getElementById("kagit");
    var makas = document.getElementById("makas");
    var loading = document.getElementById("loading");
    
    baslik.style.display = "none";
    tas.style.display = "none";
    kagit.style.display = "none";
    makas.style.display = "none";
    loading.style.display = "unset";

    setTimeout(oyunSecimTasSonuc, 4000);
}

function oyunSecimTasSonuc() {
    var rakipSecimListe = ["taş", "kağıt", "makas"];
    var rakipSecim = rakipSecimListe[Math.floor(Math.random() * rakipSecimListe.length)];
    var loading = document.getElementById("loading");
    var yaziSonuc = document.getElementById("yazi-sonuc");
    var yaziSen = document.getElementById("yazi-sen");
    var yaziRakip = document.getElementById("yazi-rakip");
    var butonYenidenOyna = document.getElementById("buton-yeniden-oyna");

    loading.style.display = "none";

    if(rakipSecim == rakipSecimListe[0]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "dodgerblue";
        yaziSonuc.innerHTML = "Berabere";
        
        yaziSen.innerHTML = "SEN: Taş";
        yaziRakip.innerHTML = "RAKİP: Taş";

        butonYenidenOyna.style.display = "unset";
    }

    else if(rakipSecim == rakipSecimListe[1]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "red";
        yaziSonuc.innerHTML = "Yenildin";

        yaziSen.innerHTML = "SEN: Taş";
        yaziRakip.innerHTML = "RAKİP: Kağıt";

        butonYenidenOyna.style.display = "unset";
    }

    else if(rakipSecim == rakipSecimListe[2]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "lime";
        yaziSonuc.innerHTML = "Kazandın";

        yaziSen.innerHTML = "SEN: Taş";
        yaziRakip.innerHTML = "RAKİP: Makas";

        butonYenidenOyna.style.display = "unset";
    }

    else {
        alert("Hata, Yapımcıyla İletişime Geçin");
    }
}



// KAĞIT



function oyunSecimKagit() {
    var baslik = document.getElementById("baslik");
    var tas = document.getElementById("tas");
    var kagit = document.getElementById("kagit");
    var makas = document.getElementById("makas");
    var loading = document.getElementById("loading");
    
    baslik.style.display = "none";
    tas.style.display = "none";
    kagit.style.display = "none";
    makas.style.display = "none";
    loading.style.display = "unset";

    setTimeout(oyunSecimKagitSonuc, 4000);
}

function oyunSecimKagitSonuc() {
    var rakipSecimListe = ["taş", "kağıt", "makas"];
    var rakipSecim = rakipSecimListe[Math.floor(Math.random() * rakipSecimListe.length)];
    var loading = document.getElementById("loading");
    var yaziSonuc = document.getElementById("yazi-sonuc");
    var yaziSen = document.getElementById("yazi-sen");
    var yaziRakip = document.getElementById("yazi-rakip");
    var butonYenidenOyna = document.getElementById("buton-yeniden-oyna");

    loading.style.display = "none";

    if(rakipSecim == rakipSecimListe[0]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "lime";
        yaziSonuc.innerHTML = "Kazandın";
        
        yaziSen.innerHTML = "SEN: Kağıt";
        yaziRakip.innerHTML = "RAKİP: Taş";

        butonYenidenOyna.style.display = "unset";
    }

    else if(rakipSecim == rakipSecimListe[1]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "dodgerblue";
        yaziSonuc.innerHTML = "Berabere";

        yaziSen.innerHTML = "SEN: Kağıt";
        yaziRakip.innerHTML = "RAKİP: Kağıt";

        butonYenidenOyna.style.display = "unset";
    }

    else if(rakipSecim == rakipSecimListe[2]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "red";
        yaziSonuc.innerHTML = "Yenildin";

        yaziSen.innerHTML = "SEN: Kağıt";
        yaziRakip.innerHTML = "RAKİP: Makas";

        butonYenidenOyna.style.display = "unset";
    }

    else {
        alert("Hata");
    }
}



// MAKAS



function oyunSecimMakas() {
    var baslik = document.getElementById("baslik");
    var tas = document.getElementById("tas");
    var kagit = document.getElementById("kagit");
    var makas = document.getElementById("makas");
    var loading = document.getElementById("loading");
    
    baslik.style.display = "none";
    tas.style.display = "none";
    kagit.style.display = "none";
    makas.style.display = "none";
    loading.style.display = "unset";

    setTimeout(oyunSecimKagitMakas, 4000);
}

function oyunSecimKagitMakas() {
    var rakipSecimListe = ["taş", "kağıt", "makas"];
    var rakipSecim = rakipSecimListe[Math.floor(Math.random() * rakipSecimListe.length)];
    var loading = document.getElementById("loading");
    var yaziSonuc = document.getElementById("yazi-sonuc");
    var yaziSen = document.getElementById("yazi-sen");
    var yaziRakip = document.getElementById("yazi-rakip");
    var butonYenidenOyna = document.getElementById("buton-yeniden-oyna");

    loading.style.display = "none";

    if(rakipSecim == rakipSecimListe[0]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "red";
        yaziSonuc.innerHTML = "Yenildin";
        
        yaziSen.innerHTML = "SEN: Makas";
        yaziRakip.innerHTML = "RAKİP: Taş";

        butonYenidenOyna.style.display = "unset";
    }

    else if(rakipSecim == rakipSecimListe[1]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "lime";
        yaziSonuc.innerHTML = "Kazandın";

        yaziSen.innerHTML = "SEN: Makas";
        yaziRakip.innerHTML = "RAKİP: Kağıt";

        butonYenidenOyna.style.display = "unset";
    }

    else if(rakipSecim == rakipSecimListe[2]) {
        yaziSonuc.style.display = "unset";
        yaziSen.style.display = "unset";
        yaziRakip.style.display = "unset";

        yaziSonuc.style.color = "dodgerblue";
        yaziSonuc.innerHTML = "Berabere";

        yaziSen.innerHTML = "SEN: Makas";
        yaziRakip.innerHTML = "RAKİP: Makas";

        butonYenidenOyna.style.display = "unset";
    }

    else {
        alert("Hata");
    }
}



// YENİDEN OYNA



function yenidenOyna() {
    location.reload();
}