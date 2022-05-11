//initialse the variable 
let songIndex=0;
let audioElement=new Audio("1.mp3");
let masterPlay=document.getElementById("masterplay");
let myProgressbar = document.getElementById("myprogress");

let songsItem=Array.from(document.getElementsByClassName("song"));


let songs=[ 
    { name:"Choli Ke Peeche Kya Hai", filePath:"spotify/1.mp3"},

    { name:"Choli Ke Peeche Kya Hai", filePath:"spotify/2.mp3"},
    { name:"Mehboob Mere          ", filePath:"spotify/3.mp3"},
    { name:"Aur Tum Aaye", filePath:"spotify/4.mp3"}, 
    { name:"Chat Deni Maar Deli ", filePath:"spotify/5.mp3"},
    { name:"Chori Khele PUBG ", filePath:"spotify/6.mp3"},
    { name:"Dil Ka Aalam", filePath:"spotify/1.mp3"},
    { name:"Dil Maang Raha Hai Mohlat", filePath:"spotify/1.mp3"},
    { name:"Choli Ke Peeche Kya Hai", filePath:"spotify/1.mp3"},


    { name:"Choli Ke Peeche Kya Hai", filePath:"spotify/1.mp3"},
    { name:"Choli Ke Peeche Kya Hai", filePath:"spotify/1.mp3"},

    { name:"Choli Ke Peeche Kya Hai", filePath:"spotify/1.mp3"}
]  

songsItem.forEach((element ,i)=> {   
    console.log(i);
    element.getElementsByClassName("change1")[0].innerText=songs[i].name;

    
});

//play and pause click
masterPlay.addEventListener('click',()=>{ 
    if(audioElement.pause ||audioElement.currentTime<=0)
    { 
        audioElement.play(); 

        masterPlay.classList.remove('mas');
        masterPlay.classList.add('mas1')
     // x= document.getElementById("masterplay");
     // x.src="F:\event\spotify\stop-button-55-1137403.png";
    } 
    else{ 
        audioElement.pause();
       // masterPlay.classList.remove("mast");
       // masterPlay.classList.add("fa fa fa");
    }
}) 

audioElement.addEventListener('timeupdate', ()=> 

{ 

progrss= parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressbar.value=progrss;
} 
) 
myProgressbar.addEventListener('change',()=>{ 
    audioElement.currentTime = myProgressbar.value * audioElement.duration/ 100 ; 
})  



const makesallplay=()=>{ 
    element.target.classList.add("mas1");

    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{ 
        element.target.classList.add("song2");
        element.target.classList.remove("mas1");

    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{ 
 element.addEventListener('click',(e)=>{ 

    console.log(e.target); 
    makesallplay();
    e.target.classList.remove("song2");
    e.target.classList.add("mas1"); 
    audioElement.src='spotify/3.mp3' 
    audioElement.currentTime=0;
    audioElement.play();
 })



});



