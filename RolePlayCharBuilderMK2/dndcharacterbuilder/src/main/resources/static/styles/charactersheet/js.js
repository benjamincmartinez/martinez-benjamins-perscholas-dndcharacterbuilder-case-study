
function calculate(){
    let lvl = document.getElementById('lvl').textContent;
    if(lvl > 0){
        let profref = Math.ceil(lvl/4);
        document.getElementById('proficiencybonus').textContent = (profref + 1);
    }
}

function calculateStatBonuses(){
    for(let i = 0; i < document.getElementsByClassName('stat').length; i++){
        if(document.getElementsByClassName('stat')[i].value > 0){
            let statbonus = document.getElementsByClassName('stat')[i].value;
            document.getElementsByClassName('stat')[i].nextSibling.textContent = Math.floor((statbonus - 10) * 0.5);
        }
    }
}

function calculateSenses(){
	let total = Math.floor((document.getElementById('WISDOM').value - 10) * 0.5);
    
    if(document.getElementById('perception').className == 'proficiencyCircleProficient'){
        let lvl = document.getElementById('lvl').value;
        if(lvl > 0){
            total += (Math.ceil(lvl/4) + 1);
        }
    }
    if(document.getElementById('perception').className == 'proficiencyCircleExpert'){
        let lvl = document.getElementById('lvl').value;
        if(lvl > 0){
            total += (Math.ceil(lvl/4) + 1) * 2;
        }
    }
    document.getElementById('passperc').textContent = (total + 10);
    
    total = Math.floor((document.getElementById('INTELLIGENCE').value - 10) * 0.5);
    
    if(document.getElementById('investigation').className == 'proficiencyCircleProficient'){
        let lvl = document.getElementById('lvl').value;
        if(lvl > 0){
            total += (Math.ceil(lvl/4) + 1);
        }
    }
    if(document.getElementById('investigation').className == 'proficiencyCircleExpert'){
        let lvl = document.getElementById('lvl').value;
        if(lvl > 0){
            total += (Math.ceil(lvl/4) + 1) * 2;
        }
    }
    document.getElementById('passinv').textContent = (total + 10);

    total = Math.floor((document.getElementById('WISDOM').value - 10) * 0.5);
    
    if(document.getElementById('insight').className == 'proficiencyCircleProficient'){
        let lvl = document.getElementById('lvl').value;
        if(lvl > 0){
            total += (Math.ceil(lvl/4) + 1);
        }
    }
    if(document.getElementById('insight').className == 'proficiencyCircleExpert'){
        let lvl = document.getElementById('lvl').value;
        if(lvl > 0){
            total += (Math.ceil(lvl/4) + 1) * 2;
        }
    }
    document.getElementById('passins').textContent = (total + 10);
}

function noviceCalc(e){

    let statreference = document.getElementById(e.className);
    if(statreference.value > 0){
        e.value = Math.floor((statreference.value - 10) * 0.5) ;
    }
    e.textContent = e.value;
}

function proficientCalc(e){
    let lvl = document.getElementById('lvl').value;
    if(lvl > 0){
        e.value = Math.ceil(lvl/4) + 1;
    }
    let statreference = document.getElementById(e.className);
    if(statreference.value > 0){
        e.value += Math.floor((statreference.value - 10) * 0.5) ;
    }
    e.textContent = e.value;
}

function expertCalc(e){
    let lvl = document.getElementById('lvl').value;
    if(lvl > 0){
        e.value = (Math.ceil(lvl/4) + 1) * 2;
    }
    let statreference = document.getElementById(e.className);
    if(statreference.value > 0){
        e.value += Math.floor((statreference.value - 10) * 0.5) ;
    }
    e.textContent = e.value;
}

function expandClassMenu(){
    document.getElementById('ct').hidden = true;
    document.getElementById('classui').hidden = false;
    //document.getElementById('lc').hidden = false;
}

function collapseClassMenu(){
    document.getElementById('classui').hidden = true;
    document.getElementById('ct').hidden = false;
}

function randomizeStats(){
    for (let i = 0; i < document.getElementsByClassName('stat').length; i++){
        document.getElementsByClassName('stat')[i].value = Math.round(Math.random() * 15) + 3;
    }
}
function setup(){
    for(let i = 0; i < document.getElementsByClassName('proficiencyCircleNone').length; i++){
        let pc = document.getElementsByClassName('proficiencyCircleNone')[i].id;
        document.getElementById(pc).addEventListener('click', event =>{
            if(document.getElementById(pc).className == 'proficiencyCircleNone'){
                document.getElementById(pc).className = 'proficiencyCircleProficient';
                document.getElementById(pc).nextSibling.textContent = 'Proficient';
                proficientCalc(document.getElementById(pc + "Value"));
            }
            else if(document.getElementById(pc).className == 'proficiencyCircleProficient'){
                document.getElementById(pc).className = 'proficiencyCircleExpert';
                document.getElementById(pc).nextSibling.textContent = 'Expert';
                expertCalc(document.getElementById(pc + "Value"));
            }
            else if(document.getElementById(pc).className == 'proficiencyCircleExpert'){
                document.getElementById(pc).className = 'proficiencyCircleNone';
                document.getElementById(pc).nextSibling.textContent = 'None';
                noviceCalc(document.getElementById(pc + "Value"));
            }
        })
    }
    for(let i = 0; i < document.getElementsByClassName('section').length; i++){
        document.getElementsByClassName('section')[i].addEventListener('onmouseover', event=>{
            
        })
    }
}