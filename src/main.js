

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
let u1Base = 0.1;
let u2Base = 1;
let u3Base = 5;
let u4Base = 10;
let u5Base = 100;

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

clickableKebab.addEventListener('click', function (){
    click();
});

function update(){
    kebabsLabel.innerText = ((kebabs*100)%100 !== 0)? 'Twoje kebaby: ' + kebabs.toFixed(2) : 'Twoje kebaby: ' + kebabs;
    kpsLabel.innerText = 'Kebabów na sekundę: ' + kps.toFixed(2);
    kpcLabel.innerText = 'Kebabów na kliknięcie: ' + kpc.toFixed(2);
}

function click(){
    add(kpc);
    checkPrices();
    update();
}

function add(){
    kebabs += kpc;
}

function pay(i){
    kebabs -= i;
}

function upgrade(i){
        if(i===1){
            if(kebabs >= u1Cost){
                pay(u1Cost);
                u1Level++;
                u1Cost = (u1Cost * 1.3).toFixed(0);
                recalculateKPS();
                upgrade1Cost.innerText = '(koszt: ' + u1Cost + ')';
                upgrade1Level.innerText = '[Level ' + u1Level + ' - ' + (u1Level * u1Base).toFixed(1) + 'kps]';
            }
        }
        else if(i===2){
            if(kebabs >= u2Cost){
                pay(u2Cost);
                u2Level++;
                u2Cost = (u2Cost * 1.3).toFixed(0);
                upgrade2Cost.innerText = '(koszt: ' + u2Cost + ')';
                upgrade2Level.innerText = '[Level ' + u2Level + ' - ' + (u2Level * u2Base).toFixed(0) + 'kps]';
            }
        }
        else if(i===3){
            if(kebabs >= u3Cost){
                pay(u3Cost);
                u3Level++;
                u3Cost = (u3Cost * 1.3).toFixed(0);
                upgrade3Cost.innerText = '(koszt: ' + u3Cost + ')';
                upgrade3Level.innerText = '[Level ' + u3Level + ' - ' + (u3Level * u3Base).toFixed(0) + 'kps]';
            }
        }
        else if(i===4){
            if(kebabs >= u4Cost){
                pay(u4Cost);
                u4Level++;
                u4Cost = (u4Cost * 1.3).toFixed(0);
                upgrade4Cost.innerText = '(koszt: ' + u4Cost + ')';
                upgrade4Level.innerText = '[Level ' + u4Level + ' - ' + (u4Level * u4Base).toFixed(0) + 'kps]';
            }
        }
        else if(i===5){
            if(kebabs >= u5Cost){
                pay(u5Cost);
                u5Level++;
                u5Cost = (u5Cost * 1.3).toFixed(0);
                upgrade5Cost.innerText = '(koszt: ' + u5Cost + ')';
                upgrade5Level.innerText = '[Level ' + u5Level + ' - ' + (u5Level * u5Base).toFixed(0) + 'kps]';
            }
        }
    recalculateKPS();
    recalculateKPC();
    checkPrices();
    update();
}

upgrade1Div.addEventListener('click', function(){
    upgrade(1);
});
upgrade2Div.addEventListener('click', function(){
    upgrade(2);
});
upgrade3Div.addEventListener('click', function(){
    upgrade(3);
});
upgrade4Div.addEventListener('click', function(){
    upgrade(4);
});
upgrade5Div.addEventListener('click', function(){
    upgrade(5);
});

function recalculateKPS(){
    kps = u1Level * u1Base + u2Level * u2Base + u3Level * u3Base + u4Level * u4Base + u5Level * u5Base;
}

function recalculateKPC(){
    if(kps !== 0)
        kpc = 1 + +(u1Level * u1Base) + +(0.1 * kps).toFixed(2);
    else
        kpc = 1;
}

function recalculateKebabs(){
    kebabs += kps;
}

function checkPrices(){
    if(kebabs >= u1Cost){
        upgrade1Div.style.background = 'red';
        upgrade1Div.style.cursor = 'pointer';
        upgrade1Level.style.cursor = 'pointer';
        upgrade1Cost.style.cursor = 'pointer';
    } else {
        upgrade1Div.style.background = 'black';
        upgrade1Div.style.cursor = 'unset';
        upgrade1Level.style.cursor = 'unset';
        upgrade1Cost.style.cursor = 'unset';
    }
    if(kebabs >= u2Cost){
        upgrade2Div.style.background = 'red';
        upgrade2Div.style.cursor = 'pointer';
        upgrade2Level.style.cursor = 'pointer';
        upgrade2Cost.style.cursor = 'pointer';
    } else {
        upgrade2Div.style.background = 'black';
        upgrade2Div.style.cursor = 'unset';
        upgrade2Level.style.cursor = 'unset';
        upgrade2Cost.style.cursor = 'unset';
    }
    if(kebabs >= u3Cost){
        upgrade3Div.style.background = 'red';
        upgrade3Div.style.cursor = 'pointer';
        upgrade3Level.style.cursor = 'pointer';
        upgrade3Cost.style.cursor = 'pointer';
    } else {
        upgrade3Div.style.background = 'black';
        upgrade3Div.style.cursor = 'unset';
        upgrade3Level.style.cursor = 'unset';
        upgrade3Cost.style.cursor = 'unset';
    }
    if(kebabs >= u4Cost){
        upgrade4Div.style.background = 'red';
        upgrade4Div.style.cursor = 'pointer';
        upgrade4Level.style.cursor = 'pointer';
        upgrade4Cost.style.cursor = 'pointer';
    } else {
        upgrade4Div.style.background = 'black';
        upgrade4Div.style.cursor = 'unset';
        upgrade4Level.style.cursor = 'unset';
        upgrade4Cost.style.cursor = 'unset';
    }
    if(kebabs >= u5Cost){
        upgrade5Div.style.background = 'red';
        upgrade5Div.style.cursor = 'pointer';
        upgrade5Level.style.cursor = 'pointer';
        upgrade5Cost.style.cursor = 'pointer';
    } else {
        upgrade5Div.style.background = 'black';
        upgrade5Div.style.cursor = 'unset';
        upgrade5Level.style.cursor = 'unset';
        upgrade5Cost.style.cursor = 'unset';
    }

}

setInterval(() => {
    recalculateKPS();
    recalculateKPC();
    recalculateKebabs();
    checkPrices();
    update();
}, 1000);

update();