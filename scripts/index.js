// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,append,fetchdata} from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();




fetchdata("in")


  var sidebar =document.getElementById("sidebar").children;
 console.log(sidebar);

  function csearch(){
      countrycontent(this.id);
      console.log(this.id);
  }

  for(let x of sidebar){
      x.addEventListener("click",csearch);
    //   console.log(x)
  }

  let countrycontent=(id)=>{
  
    fetchdata(id);
  }



document.getElementById("search_input").addEventListener("keypress",function(e){
   if(e.key==="Enter"){
    window.location="search.html";
    let query=document.getElementById("search_input").value;
    localStorage.setItem("news",JSON.stringify(query));
   }
  
})