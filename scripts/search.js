// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
 
 import {navbar,fetchdata} from "../components/navbar.js";
 document.getElementById("navbar").innerHTML=navbar();

 let query=JSON.parse(localStorage.getItem("news"));
 console.log(query);

 let url =`https://masai-mock-api.herokuapp.com/news?q=${query}`;

 fetch(url)
 .then(function(res){
     return res.json();
 })
 .then(function(res){
     console.log(res.articles);
     append(res.articles)
 })
 .catch(function(err){
     console.log(err);
 })

 function append(data){
    data.forEach(function(el){
       let div =document.createElement("div");
       div.setAttribute("id","news");
       
       let img=document.createElement("img");
       img.src=el.urlToImage;

  let h3=document.createElement("h3");
  h3.innerText=el.description;
       var div2=document.createElement("div");
      

       let p=document.createElement("p");
       p.innerText=el.content;

       div2.append(h3,p);
       div.append(img,div2);

       document.getElementById("results").append(div);
      
    })
}