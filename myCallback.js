'use strict';
/* TIMES */
//text showing total time at the top
let totalTime = document.querySelector('.totalTime');
function jsondata( wakaTime ){
    totalTime.innerText = wakaTime.data.grand_total.human_readable_total;
}

//text showing todays time 
let todaysT = document.querySelector('.todaysTime');
function todaysTime( wakaTime ){
    todaysT.innerText = wakaTime.data[364].grand_total.text;
}


/* BOXES */
//boxes / contributions container / box maker 
let lastDay = document.querySelector('.lastDay');
let id = 1;

function boxes(){
    let boxes = '<div class="box" id="id'+ `${id}"` +' ></div>';
    lastDay.insertAdjacentHTML('afterend', boxes);
    id++;
}
while( id<=363 ){
    boxes();
}

// color of the box determined by time/ colour object
// let box = document.querySelector('.box');
let lightestColour = 'rgb(255,235,238)';
let lightColour1 = 'rgb(255,194,205)';
let lightColour2 = 'rgb(255,153,172)';
let mediumColour1 = 'pink';
let mediumColour2 = 'rgb(255,92,122)';
let darkColour = 'rgb(184,0,34)';


// function to create colours based on amount of time coded the previous day
let arr = [];
function colourDecider(wakaTime){
    for( let i=0; i<364; i++ ){
        arr.push(wakaTime.data[i].grand_total.total_seconds);
    }
    
    // console.log(arr)
    
    for(let i=1; i<arr.length; i++){
        let box = document.getElementById(`id${i}`);
       
        if( wakaTime.data[i].grand_total.total_seconds <=0 ){
            box.style.backgroundColor = 'transparent';
            box.innerText = wakaTime.data[i].range.date;

        }else if( wakaTime.data[i].grand_total.total_seconds >0 && wakaTime.data[i].grand_total.total_seconds <60){
            box.style.backgroundColor = lightestColour;  
            box.innerText = wakaTime.data[i].range.date;

        } else if( wakaTime.data[i].grand_total.total_seconds>=60 && wakaTime.data[i].grand_total.total_seconds < 3600){
            box.style.backgroundColor = lightColour1;  
            box.innerText = wakaTime.data[i].range.date;
        
        }else if ( wakaTime.data[i].grand_total.total_seconds>=3600 && wakaTime.data[i].grand_total.total_seconds<7200 ){
            box.style.backgroundColor = lightColour2;  
            box.innerText = wakaTime.data[i].range.date; 
           
        }else if ( wakaTime.data[i].grand_total.total_seconds>=7200 && wakaTime.data[i].grand_total.total_seconds<10800 ){
            box.style.backgroundColor = mediumColour1;  
            box.innerText = wakaTime.data[i].range.date;
            
        }else if ( wakaTime.data[i].grand_total.total_seconds>=10800 && wakaTime.data[i].grand_total.total_seconds<14400 ){
            box.style.backgroundColor = mediumColour2; 
            box.innerText = wakaTime.data[i].range.date;
        }else{
            box.style.backgroundColor = darkColour; 
            box.innerText = wakaTime.data[i].range.date;
        }
    }
}

colourDecider();

