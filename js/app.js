var trenutnaVaja = 1;
var trenutnaVrstica = 0;
var napakeVaja = 0;
var napakeProc = 0;
var udarciVaja = 0;
var udarciMin = 0;
var ure = 0;
var minute = 0;
var sekunde = 0;
var opravljeneVaje = 0;
var vseUre = 0;
var vseMinute = 0;
var vseSekunde = 0;
var skupniUdarciMin = 0;
var vsiUdarci = 0;
var vseNapake = 0;
var vseNapakeProc = 0;

var zacetekVaje = 0;
var zacetekVaj = 0;

var izbraneVaje = 0;
var konecVaje = 0;

var casovnaFunkcija = setInterval(osveziCas, 250);

function osveziCas(){
    if (zacetekVaj != 0){
        var tmp = new Date().getTime();

        if (konecVaje == 0){
            if (zacetekVaje != 0){
                var casVaje = tmp - zacetekVaje;
                ure = Math.floor(casVaje / 3600000);
                casVaje = casVaje - (ure * 3600000);
                minute = Math.floor(casVaje / 60000);
                casVaje = casVaje - (minute * 60000);
                sekunde = Math.floor(casVaje / 1000);
            }

            var casVaj = tmp - zacetekVaj;
            vseUre = Math.floor(casVaj / 3600000);
            casVaj = casVaj - (vseUre * 3600000);
            vseMinute = Math.floor(casVaj / 60000);
            casVaj = casVaj - (vseMinute * 60000);
            vseSekunde = Math.floor(casVaj / 1000);
        }
    }

    posodobi();
}

function izracunUdarcevMin(u, m, s, udarci){
    var tmp = (u * 3600) + (m * 60) + s;
    return Math.round(((udarci / tmp) * 60));
}

function reset(){
    trenutnaVaja = 1;
    trenutnaVrstica = 0;
    napakeVaja = 0;
    napakeProc = 0;
    udarciVaja = 0;
    udarciMin = 0;
    ure = 0;
    minute = 0;
    sekunde = 0;
    konecVaje = 0;
    zacetekVaje = 0;

    opravljeneVaje = 0;
    vseUre = 0;
    vseMinute = 0;
    vseSekunde = 0;
    skupniUdarciMin = 0;
    vsiUdarci = 0;
    vseNapake = 0;
    vseNapakeProc = 0;
    zacetekVaj = 0;

    document.getElementById("trenutnaVaja").innerHTML = trenutnaVaja;
    document.getElementById("naloga").innerHTML = trenutnaVaja;
    document.getElementById("napakeVaja").innerHTML = napakeVaja;
    document.getElementById("napakeProc").innerHTML = napakeProc;
    document.getElementById("udarciVaja").innerHTML = udarciVaja;
    document.getElementById("udarciMin").innerHTML = udarciMin;
    document.getElementById("ure").innerHTML = ure;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("sekunde").innerHTML = sekunde;

    document.getElementById("opravljeneVaje").innerHTML = opravljeneVaje;
    document.getElementById("vseUre").innerHTML = vseUre;
    document.getElementById("vseMinute").innerHTML = vseMinute;
    document.getElementById("vseSekunde").innerHTML = vseSekunde;
    document.getElementById("skupniUdarciMin").innerHTML = skupniUdarciMin;
    document.getElementById("vsiUdarci").innerHTML = vsiUdarci;
    document.getElementById("vseNapake").innerHTML = vseNapake;
    document.getElementById("vseNapakeProc").innerHTML = vseNapakeProc;
}

function posodobi(){
    document.getElementById("trenutnaVaja").innerHTML = trenutnaVaja;
    document.getElementById("naloga").innerHTML = trenutnaVaja;
    document.getElementById("napakeVaja").innerHTML = napakeVaja;
    document.getElementById("napakeProc").innerHTML = napakeProc;
    document.getElementById("udarciVaja").innerHTML = udarciVaja;
    document.getElementById("udarciMin").innerHTML = udarciMin;
    document.getElementById("ure").innerHTML = ure;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("sekunde").innerHTML = sekunde;

    document.getElementById("opravljeneVaje").innerHTML = opravljeneVaje;
    document.getElementById("vseUre").innerHTML = vseUre;
    document.getElementById("vseMinute").innerHTML = vseMinute;
    document.getElementById("vseSekunde").innerHTML = vseSekunde;
    document.getElementById("skupniUdarciMin").innerHTML = skupniUdarciMin;
    document.getElementById("vsiUdarci").innerHTML = vsiUdarci;
    document.getElementById("vseNapake").innerHTML = vseNapake;
    document.getElementById("vseNapakeProc").innerHTML = vseNapakeProc;
}

function izberiVaje(a){
    izbraneVaje = a;
    document.getElementById("asdf").classList.remove("active");
    document.getElementById("asdfa").classList.remove("active");
    document.getElementById("predtest").classList.remove("active");
    if (a == 0){
        document.getElementById("asdf").classList.add("active");
    }
    else if (a == 1){
        document.getElementById("asdfa").classList.add("active");
    }
    else {
        document.getElementById("predtest").classList.add("active");
    }
    reset();
    naloziVajo(izbraneVaje, trenutnaVaja-1);
    oznaciVrstico(trenutnaVrstica);
}

function naloziVaje(vaje){
    var nalozi;
    if (vaje == 0){
        nalozi = asdf;
    }
    else if (vaje == 1){
        nalozi = asdfa;
    }
    else if (vaje == 2){
        nalozi = predtest;
    }

    return nalozi;
}

function preveriVaje(vaje){
    return vaje.length;
}

function naloziVajo(vaje, vaja){
    var tmp = naloziVaje(vaje);
    var nalozi = tmp[vaja];

    document.getElementById("prva").innerHTML = nalozi[0];
    document.getElementById("druga").innerHTML = nalozi[1];
    document.getElementById("tretja").innerHTML = nalozi[2];

    return nalozi;
}

function konecNabora(){
    document.getElementById("prva").innerHTML = "Čestitamo!";
    document.getElementById("druga").innerHTML = "Zaključili ste vse vaje iz izbranega nabora!";
    document.getElementById("tretja").innerHTML = "";
}

function oznaciVrstico(vrstica){
    document.getElementById("prva").classList.remove("text-success");
    document.getElementById("druga").classList.remove("text-success");
    document.getElementById("tretja").classList.remove("text-success");

    if (vrstica == 0){
        document.getElementById("prva").classList.add("text-success");
    }
    else if (vrstica == 1){
        document.getElementById("druga").classList.add("text-success");
    }
    else {
        document.getElementById("tretja").classList.add("text-success");
    }
}

function naloziVrstico(vaje, vaja, vrstica){
    var tmp = naloziVajo(vaje, vaja);
    if (vrstica == 0){
        return tmp[0];
    }
    else if (vrstica == 1){
        return tmp[1];
    }
    else{
        return tmp[2];
    }
}

function preveriVrstico(a, b){
    if (a == b){
        return true;
    }
}

function preveriVnos(){
    if (zacetekVaj == 0){
        zacetekVaj = new Date().getTime();
    }
    if (zacetekVaje == 0){
        zacetekVaje = new Date().getTime();
    }
    if (konecVaje == 0){
        var vnos = document.getElementById("vnos").value;
        oznaciVrstico(trenutnaVrstica);
        var vrstica = naloziVrstico(izbraneVaje, trenutnaVaja-1, trenutnaVrstica);
        
        if (vnos == vrstica.substring(0,vnos.length)){
        }
        else{
            vnos = vrstica.substring(0, vnos.length-1);
            document.getElementById("vnos").value = vnos;
            napakeVaja++;
            vseNapake++;

        }
        udarciVaja++;
        vsiUdarci++;
        napakeProc = Math.round((napakeVaja / udarciVaja) * 10000) / 100;
        napakeProc = napakeProc.toFixed(2);
        vseNapakeProc = Math.round((vseNapake / vsiUdarci) * 10000) / 100;
        vseNapakeProc = vseNapakeProc.toFixed(2);
        udarciMin = Math.round((udarciVaja / ((ure * 3600) + (minute * 60) + sekunde)) * 60);
        skupniUdarciMin = Math.round((vsiUdarci / ((vseUre * 3600) + (vseMinute * 60) + vseSekunde)) * 60);

        if (preveriVrstico(vnos, vrstica)){
            document.getElementById("vnos").value = vnos.substring(0, 0);
            if (trenutnaVrstica == 2){
                trenutnaVrstica = 0;
                opravljeneVaje++;
                if ((trenutnaVaja + 1) > preveriVaje(naloziVaje(izbraneVaje))){
                    konecNabora();
                    konecVaje = 1;

                }
                else{
                    trenutnaVaja++;                    
                    zacetekVaje = 0;
                    naloziVajo(izbraneVaje, trenutnaVaja-1);
                    udarciVaja = 0;
                    napakeVaja = 0;
                    napakeProc = 0;
                }
            }
            else{
                trenutnaVrstica++;
            }
            oznaciVrstico(trenutnaVrstica);
        }
    }

    posodobi();
}