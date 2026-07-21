const startButton = document.getElementById("startButton");

const welcome = document.getElementById("welcome");

const main = document.getElementById("main");

const music = document.getElementById("music");



// Botón de entrada

startButton.addEventListener("click",()=>{


    welcome.style.display="none";


    main.classList.remove("hidden");


    music.play().catch(()=>{});


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});






// CONTADOR DE TIEMPO JUNTOS


function updateCounter(){


    const start = new Date("2026-05-21T00:00:00");


    const now = new Date();



    let difference = now - start;



    if(difference < 0){

        difference = 0;

    }




    const days = Math.floor(

        difference/(1000*60*60*24)

    );




    const hours = Math.floor(

        (difference%(1000*60*60*24))

        /(1000*60*60)

    );





    const minutes = Math.floor(

        (difference%(1000*60*60))

        /(1000*60)

    );






    const seconds = Math.floor(

        (difference%(1000*60))

        /1000

    );





    document.getElementById("timeTogether").innerHTML=


    `

    💗 ${days} días

    <br><br>

    🕐 ${hours} horas

    <br>

    💕 ${minutes} minutos

    <br>

    ✨ ${seconds} segundos


    `;



}



setInterval(updateCounter,1000);


updateCounter();








// CORAZONES Y MOÑITOS FLOTANDO


function createLove(){


    const element=document.createElement("div");


    element.className="heart";



    const things=[

        "❤️",

        "🎀",

        "💗",

        "🌸",

        "✨"

    ];



    element.innerHTML=

    things[Math.floor(Math.random()*things.length)];





    element.style.left=

    Math.random()*100+"vw";




    element.style.fontSize=

    (20+Math.random()*30)+"px";




    element.style.animationDuration=

    (5+Math.random()*6)+"s";




    document.body.appendChild(element);




    setTimeout(()=>{


        element.remove();


    },10000);



}



setInterval(createLove,400);









// EFECTO AL TOCAR LA PANTALLA


document.addEventListener("click",(e)=>{


    const heart=document.createElement("div");


    heart.className="heart";


    heart.innerHTML="💖";


    heart.style.left=e.clientX+"px";


    heart.style.top=e.clientY+"px";


    heart.style.position="fixed";



    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },3000);



});









// ZOOM BONITO DE FOTOS


document.querySelectorAll(".gallery img")

.forEach(img=>{


img.addEventListener("click",()=>{


    if(img.classList.contains("zoom")){


        img.classList.remove("zoom");


        img.style.transform="";


    }


    else{


        img.classList.add("zoom");


        img.style.transform=

        "scale(1.5)";

    }



});



});









// REGALO FINAL


function surprise(){


    const message=document.getElementById("surprise");



    message.innerHTML=

    `

    💖🎀

    Gracias por llegar a mi vida.

    <br><br>

    Espero seguir creando miles de recuerdos contigo.

    <br><br>

    Te amo muchísimo mi flaquita hermosa.

    🐱💗

    `;



    for(let i=0;i<30;i++){


        setTimeout(()=>{


            createLove();



        },i*100);



    }



}
