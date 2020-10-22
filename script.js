let cpu_amd = document.querySelector('#cpu_amd');
let cpu_intel = document.querySelector('#cpu_intel');
let label_intel = document.querySelector("#label_intel");
let next_cpu_intel = document.querySelector("#next_cpu_intel");
let next_cpu_amd = document.querySelector("#next_cpu_amd");
let mother = document.querySelector("#mother");
let ram = document.querySelector("#ram");
let hdd = document.querySelector("#hdd");
let ssd_yes = document.querySelector("#ssd_yes");
let ssd_no = document.querySelector("#ssd_no");
let monitor = document.querySelector("#monitor");
let myszka = document.querySelector("#myszka");
let klawiatura = document.querySelector("#klawiatura");
let system = document.querySelector("#system");
let colors = document.querySelector("#colors");
let delivery = document.querySelector("#delivery");
let comments = document.querySelector("#comments");
let procki;
ssd_yes.value = 0;
let procki_intel;
let procki_amd;
let external_text = "";
let zestaw = document.querySelector("#zestaw");
let p_price = document.querySelector("#p_price")
let price = 0;
let xd = document.querySelector("#xd");
let zmiana = 0;
let p_cpu = document.querySelector("#p_cpu");
let p_mother = document.querySelector("#p_mother");
let p_ram = document.querySelector("#p_ram");
let p_hdd = document.querySelector("#p_hdd");
let p_ssd = document.querySelector("#p_ssd");
let p_external = document.querySelector("#p_external");
let p_colors = document.querySelector("#p_colors");
let p_data = document.querySelector("#p_data");
let p_comments = document.querySelector("#p_comments");

let value10;
value10 = localStorage.getItem('pp10');
let preloader = document.querySelector("#preloader");

let resecik = document.querySelector("#reset");
resecik.addEventListener("click", function() {
    zmiana = 0;
    window.location.reload();
    localStorage.clear();
    sessionStorage.clear();
    ssd_yes.value = 0;
    ssd_no.value = 0;
    document.querySelector(".xd").style.display = "none";
});

setTimeout(function() {
    preloader.classList.add('preloader_hide');
    preloader.addEventListener('transitionend', function() {
        this.classList.add("#preloader_hidden");
        this.classList.remove("#preloader_hide");
        this.style.zIndex = "-1";
    })
}, 1000);


document.querySelector("#intel").style.display = "none";
document.querySelector("#amd").style.display = "none";


cpu_amd.addEventListener('click', function() {
    document.querySelector("#intel").style.display = "none";
    document.querySelector("#amd").style.display = "inline";
    procki = 1;

})
cpu_intel.addEventListener('click', function() {
    document.querySelector("#amd").style.display = "none";
    document.querySelector("#intel").style.display = "inline";
    procki = 2;

})
ssd_no.addEventListener("click", function() {
    ssd_no.value == 1
    price -= 300;
})

ssd_yes.addEventListener("click", function() {
    ssd_yes.value == 1
    price += 300;
})

ssd_yes.value == 0 ? ssd_text = "nie" : ssd_text = "tak - 300 PLN";


monitor.addEventListener('click', function() {
    external_text = "monitor - 600 PLN "
    price += 600;
})
myszka.addEventListener('click', function() {
    external_text += " myszka - 60 PLN "
    price += 60;
})
klawiatura.addEventListener('click', function() {
    external_text += " klawiatura - 50 PLN "
    price += 50;
})
system.addEventListener('click', function() {
    external_text += " system - 400 PLN "
    price += 400;
})

function konfiguracja() {
    document.querySelector(".xd").style.display = "block";
    switch (next_cpu_intel.value) {
        case "0":
            procki_intel = "Intel Pentium - 400 PLN";
            price += 400;
            break;
        case "1":
            procki_intel = "Intel Core i3 - 500 PLN"
            price += 500;
            break;
        case "2":
            procki_intel = "Intel Core i5 - 600 PLN"
            price += 600;
            break;
        case "3":
            procki_intel = "Intel Core i7 - 900 PLN"
            price += 900;
            break;
        case "4":
            procki_intel = "Intel Core i9 - 1000 PLN"
            price += 1000;
            break;

        default:
            procki_intel = ""
            break;


    }
    switch (next_cpu_amd.value) {
        case "0":
            procki_amd = "AMD Ryzen 3 - 300 PLN";
            price += 300;
            break;
        case "1":
            procki_amd = "AMD Ryzen 5 - 500 PLN"
            price += 500;
            break;
        case "2":
            procki_amd = "AMD Ryzen 9 - 1000 PLN"
            price += 1000;
            break;
        default:
            procki_amd = ""
            break;


    }
    switch (mother.value) {
        case '0':
            mother_text = 'Firmy A; 4 sloty RAM; obsługa dysków m.2 - 500 PLN';
            price += 500;
            break;
        case '1':
            mother_text = 'Firmy B; 6 slotów RAM; obsługa portu USB C - 700 PLN';
            price += 700;
            break;
        case '2':
            mother_text = 'Firmy C; 8 slotów RAM; dwa gniazda CPU - 1000 PLN';
            price += 1000;
            break;
        default:
            mother_text = 'nie wybrano';
            break;
    }
    switch (ram.value) {
        case '0':
            ram_text = '4 GB - 200 PLN';
            price += 200;
            break;
        case '1':
            ram_text = '8 GB - 400 PLN';
            price += 400;
            break;
        case '2':
            ram_text = '16 GB - 800 PLN';
            price += 800;
            break;

        default:
            ram_text = 'nie wybrano';
            break;
    }
    switch (hdd.value) {
        case '0':
            hdd_text = '256 GB - 50 PLN';
            price += 50;
            break;
        case '1':
            hdd_text = ' 1 TB - 200 PLN';
            price += 200;
            break;
        case '2':
            hdd_text = '2 TB - 250 PLN';
            price += 250;
            break;

        default:
            hdd_text = 'nie wybrano';
            break;
    }
    kolor = colors.value;
    zestaw.style.display = "flex";
    p1 = document.createElement("p");

    localStorage.setItem('pp11', procki_amd);
    let value11 = localStorage.getItem('pp11');

    localStorage.setItem('pp12', procki_intel);
    let value12 = localStorage.getItem('pp12');

    if (procki == 1) {
        pcpu = document.createTextNode(value11)

    } else {
        pcpu = document.createTextNode(value12)
    }
    p1.appendChild(pcpu);
    p_cpu.appendChild(p1);


    localStorage.setItem('pp2', mother_text);
    let value2 = localStorage.getItem('pp2');

    p2 = document.createElement("p");
    pmother = document.createTextNode(value2);
    p2.appendChild(pmother);
    p_mother.appendChild(p2);

    localStorage.setItem('pp3', ram_text);
    let value3 = localStorage.getItem('pp3');

    p3 = document.createElement("p");
    pram = document.createTextNode(value3);
    p3.appendChild(pram);
    p_ram.appendChild(p3);

    localStorage.setItem('pp4', hdd_text);
    let value4 = localStorage.getItem('pp4');

    p4 = document.createElement("p");
    phdd = document.createTextNode(value4);
    p4.appendChild(phdd);
    p_hdd.appendChild(p4);

    localStorage.setItem('pp5', ssd_text);
    let value5 = localStorage.getItem('pp5');

    p5 = document.createElement("p");
    pssd = document.createTextNode(value5);
    p5.appendChild(pssd);
    p_ssd.appendChild(p5);

    localStorage.setItem('pp6', external_text);
    let value6 = localStorage.getItem('pp6');

    p6 = document.createElement("p");
    pexternal = document.createTextNode(value6);
    p6.appendChild(pexternal);
    p_external.appendChild(p6);

    localStorage.setItem('pp7', JSON.stringify(kolor));
    let value7 = localStorage.getItem('pp7');

    p7 = document.createElement("p");
    pcolors = document.createTextNode(value7);
    p7.appendChild(pcolors);
    p_colors.appendChild(p7);
    document.querySelector("#f2").style.border = "7px solid" + kolor;

    localStorage.setItem('pp8', JSON.stringify(delivery.value));
    let value8 = localStorage.getItem('pp8');

    p8 = document.createElement("p");
    pdata = document.createTextNode(value8);
    p8.appendChild(pdata);
    p_data.appendChild(p8);

    localStorage.setItem('pp9', comments.value);
    let value9 = localStorage.getItem('pp9');

    p9 = document.createElement("p");
    pcomments = document.createTextNode(value9);
    p9.appendChild(pcomments);
    p_comments.appendChild(p9);

    localStorage.setItem('pp10', JSON.stringify(price));
    value10 = localStorage.getItem('pp10');

    p10 = document.createElement("p");
    pprice = document.createTextNode(value10);
    p10.appendChild(pprice);
    p_price.appendChild(p10);




    zmiana = 1;

}
window.onload = function() {
    if (value10 != null || value10 != this.undefined) {
        document.querySelector(".xd").style.display = "block";
        p_cpu.innerHTML += localStorage.getItem('pp12');
        p_cpu.innerHTML += localStorage.getItem('pp11');
        p_mother.innerHTML += localStorage.getItem('pp2');
        p_ram.innerHTML += localStorage.getItem('pp3');
        p_hdd.innerHTML += localStorage.getItem('pp4');
        p_ssd.innerHTML += localStorage.getItem('pp5');
        p_external.innerHTML += localStorage.getItem('pp6');
        p_colors.innerHTML += localStorage.getItem('pp7');
        p_data.innerHTML += localStorage.getItem('pp8');
        p_comments.innerHTML += localStorage.getItem('pp9');
        p_price.innerHTML += localStorage.getItem('pp10');
    }
};









let x = 1;