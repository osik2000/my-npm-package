console.log("Hello World!")

let kebabs = 0;
let kps = 0;
let kpc = 1;

let u1Cost = 10;
let u2Cost = 100;
let u3Cost = 1000;
let u4Cost = 5000;
let u5Cost = 100000;
let u1Level = 0;
let u2Level = 0;
let u3Level = 0;
let u4Level = 0;
let u5Level = 0;




const kebabsLabel = document.querySelector('#kebabs');
const kpsLabel = document.querySelector('#kps');
const kpcLabel = document.querySelector('#kpc');
const upgrade1Div = document.querySelector('#upgrade1');
const upgrade1Cost = document.querySelector('#upgrade1 .upgradeCost');
const upgrade1Level = document.querySelector('#upgrade1 .upgradeLevel');
const upgrade2Div = document.querySelector('#upgrade2');
const upgrade2Cost = document.querySelector('#upgrade2 .upgradeCost');
const upgrade2Level = document.querySelector('#upgrade2 .upgradeLevel');
const upgrade3Div = document.querySelector('#upgrade3');
const upgrade3Cost = document.querySelector('#upgrade3 .upgradeCost');
const upgrade3Level = document.querySelector('#upgrade3 .upgradeLevel');
const upgrade4Div = document.querySelector('#upgrade4');
const upgrade4Cost = document.querySelector('#upgrade4 .upgradeCost');
const upgrade4Level = document.querySelector('#upgrade4 .upgradeLevel');
const upgrade5Div = document.querySelector('#upgrade5');
const upgrade5Cost = document.querySelector('#upgrade5 .upgradeCost');
const upgrade5Level = document.querySelector('#upgrade5 .upgradeLevel');
const clickableKebab = document.querySelector('#clickableKebab');



clickableKebab.addEventListener('click', function (e){
    click();
});

function update(){
    kebabsLabel.innerText = 'Twoje kebaby: ' + kebabs;
    kpsLabel.innerText = 'Kebabów na sekundę: ' + kps;
    kpcLabel.innerText = 'Kebabów na kliknięcie: ' + kpc;
}
update();

function click(){
    add(kpc);
    update();
}

function add(){
    kebabs += kpc;
}

function pay(i){
    kebabs -= i;
}

function upgrade(i){
        if(i==1){
            console.log("ulepszam upgrade 1, level:" + upgrade1Level.innerText);
            if(kebabs >= u1Cost){

                pay(u1Cost);
                u1Level++;
                u1Cost = u1Cost + (u1Cost * 30.0/100.0).toFixed(0);
                kps += 0.1.toFixed(2);
                upgrade1Cost.innerText = '(koszt: ' + u1Cost + ')';
                upgrade1Level.innerText = '[Level ' + u1Level + ']';
            }
        }
    update();
}

upgrade1Div.addEventListener('click', function(e){
    console.log("Upgrade 1");
    upgrade(1);
})

