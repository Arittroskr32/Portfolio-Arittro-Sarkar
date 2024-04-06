let name_txt;
let email_txt;
let subject_txt;
let main_txt;
let text_arr=[]
let message=0;
let list

//locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//type string 1
var typed = new Typed('#portfolio_text', {
    strings: ['Portfolio', 'Portfolio'],
    typeSpeed: 200,
    startDelay: 3000,
    cursorChar: '.'
});

// type string 2
var typed = new Typed('#page2_text', {
    strings: ['I am a frontend developer', 'For other details read my CV'],
    typeSpeed: 70,
    startDelay: 6000,
    cursorChar: '.'
});


let a= document.querySelector(".nav-up-down")
let containermsg=document.querySelector(".allmsg");


//menubar option
document.querySelector(".menubar").addEventListener('click',()=>{
    a.style.opacity=1;
    a.style.zIndex = 100;
    a.style.top =0;
})

//cross btn click
document.querySelector(".cross").addEventListener('click',()=>{
    a.style.opacity=0;
    a.style.zIndex = -5;
    a.style.top = "-100%";
})


//send btn all things
document.querySelector("#send_btn").addEventListener("click",()=>{
        name_txt= document.querySelector("#name").value;
        email_txt= document.querySelector("#email").value;
        subject_txt= document.querySelector("#subject").value;
        main_txt= document.querySelector("#main_text").value;
        text_arr[message]={
            name: name_txt,
            email: email_txt,
            subject: subject_txt,
            main: main_txt
        }
    
    
        if(name_txt!="" && email_txt!="" && subject_txt!="" && main_txt!=""){
            message++;
            document.querySelector(".messageopt > h4").innerHTML= message
            list= document.querySelector(".text-container")
            list.innerHTML = list.innerHTML+ `<div class="container1">
                <h3>Name : <span>${name_txt}</span></h3>
                <h3>Email : <span>${email_txt}</span></h3>
                <h3>Subject : <span>${subject_txt}</span></h3>
                <h4>Text : <span>${main_txt}</span></h4>
            </div>`
        }
        
})


//messageopt things
document.querySelector(".messageopt > i").addEventListener("click",()=>{
    containermsg.style.right=0;
})


//cross btn 2 
document.querySelector(".cross2").addEventListener("click",()=>{
    containermsg.style.right= "200%";
})


// loader in the first 
var loader=document.querySelector("#loader")
setTimeout(() => {
    loader.style.top="-100%"
}, 3000);



