// build a js script using JQuery to add a toggle botton that changes any page to dark-mode when pressed.
// try your "dark-mode.js" on index1.html, index2.html and index3.html without changing the html files!
 
let pageNum  = ""; 

if(sessionStorage.getItem("Page") === null){
   sessionStorage.setItem("Page","html1");    
}
pageNum = sessionStorage.getItem("Page");
  
if(pageNum == "html1"){
   pageButton("id='btn2'>Index 2","id='btn3'>Index 3");
   html1();
   $(document).attr("title", "Index 1"); 
}else if(pageNum == "html2"){ 
   pageButton("id='btn1'>Index 1","id='btn3'>Index 3");
   html2();
   $(document).attr("title", "Index 2");   
}else if(pageNum == "html3"){ 
   pageButton("id='btn1'>Index 1","id='btn2'>Index 2");     
   html3();
   $(document).attr("title", "Index 3"); 
}     

let toggle = 0;
$("h1").text("White Mode"); 
$("#btn").text("White Mode ☀️");    
     
    $("#btn1").click(function (){       
       sessionStorage.setItem("Page","html1")  
       location.replace("./index.html") 
       html1()          
    })
    $("#btn2").click(function (){            
       sessionStorage.setItem("Page","html2")        
       location.replace("./index2.html") 
       html2()  
    })
    $("#btn3").click(function (){               
       sessionStorage.setItem("Page","html3")       
       location.replace("./index3.html")    
       html3()    
    })
 
function pageButton(page1,page2){
   $("body").append("<div id='nav'></div>");    
   $("#nav").append(`<button ${page1}</button>`); 
   $("#nav").append(`<button ${page2}</button>`);      
}               

function html1(){ 
$("#btn").click(function () { 
  if(!toggle){  
   toggle = 1;
  
   $("#btn").text("Dark Mode 🌑");
   $("h1").text("Dark Mode")   
   $("body").css("background-color","black");
   $("h1").css("color" ,"white").css("background-color","black")
  .css("background-color","black").css("border","solid 2px white")
 }else{
    toggle = 0;
    $("#btn").text("Wihte Mode ☀️");       
    $("h1").text("Wihte Mode");
    $("body").css("background-color","white");
    $("h1").css("color" ,"black").css("background-color","white")
   .css("background-color","white").css("border","solid 2px black") 
 }
})
} 

function html2(){  
 $("#btn").click(function () { 
   if(!toggle){   
      toggle = 1;
       
      $("#btn").text("Dark Mode 🌑")
      $("h1").text("Dark Mode"); 
      $("body").css("background-color","black"); 
      $("body").css("color" ,"white")
   }else{
      toggle = 0
      $("#btn").text("White Mode ☀️") 
      $("h1").text("White Mode"); 
      $("body").css("color" ,"black")
      $("body").css("background-color","white"); 
   }
 })
}
 
function html3(){        
   //build header   
   $("body").append("<header></header>");
   $("body header").append("<div class='container'></div>");
   $("header .container").append("<h1>White Mode</h1>");
   $(".container").append("<button id='btn'>White Mode ☀️</button>"); 
  
   //build main
   $("body").append("<main></main>");
   $("main").append("<div class='container'></div>");
   $("main .container").append("<h2>Lorem Very Much?</h2>");
   $("main .container").append("<p>Full_Stack - Full_Stack - Full_Stack - Full_Stack - Full_Stack</p>");
   $("main .container").append("<p>***** Full_Stack - Full_Stack - Full_Stack - Full_Stack *****</p>");
   
   //build footer
   $("body").append("<footer></footer>");
   $("footer").append("<div class='container'></div>");
   $("footer .container").append("<p>footer</p>"); 
  
let toggleColor = 
   {colors: [],
   a: ["White Mode ☀️","White Mode","black","white"], 
   b: ["Dark Mode 🌑","Dark Mode","white","black"],                     
   c: ["Yellow Mode","Yellow Mode","yellow","grey"],
   d: ["Mixed Mode","Mixed Mode","blue","#6ecf77"],                    
   color(changeColor){                     
   switch(changeColor){                        
      case 0:                             
         return this.colors = this.a                            
      case 1:
         return this.colors = this.b;                            
      case 2:  
         return this.colors = this.c;                              
      case 3:  
         return this.colors = this.d;                              
   }                  
  }                   
 }; 
   
$("#btn").click(function () {     
    toggleColor.color(++toggle % 4)     
    $("#btn").text(toggleColor.colors[0])  // ("Dark Mode 🌑");       
    $("h1").text(toggleColor.colors[1]);
    $("body").css("color" ,toggleColor.colors[2])
    $("body").css("background-color",toggleColor.colors[3]); 
})
} 
