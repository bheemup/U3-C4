// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let code =JSON.parse(localStorage.getItem("detailed_news"));
console.log(code)




function append(data){
    
       let div =document.createElement("div");
       
       let img=document.createElement("img");
       img.src=data.urlToImage;
       img.style="height:450px; width:600px"

  let h3=document.createElement("h4");
  h3.innerText=data.description;
       var div2=document.createElement("div");
       div.setAttribute("class","news")

       let p=document.createElement("p");
       p.innerText=data.content;

       div2.append(h3,p);
       div.append(img,div2);

       document.getElementById("detailed_news").append(div);
      
   
}

append(code)

