// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

 let url=  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
 
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
      document.getElementById("results").innerHTML=null;
      data.forEach(function(el){
         let div =document.createElement("div");
         div.setAttribute("id","news");
         div.addEventListener("click",function(){
             window.location="news.html";
             localStorage.setItem("detailed_news",JSON.stringify(el));
         })
         
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

  document.getElementById("in").addEventListener("click",function(){
     
    let url=  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
 
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

  })
  document.getElementById("us").addEventListener("click",function(){
    let url=  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`
 
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

})
document.getElementById("ch").addEventListener("click",function(){
    let url=  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`
 
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

})
document.getElementById("uk").addEventListener("click",function(){
    let url=  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`
 
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

})
document.getElementById("nz").addEventListener("click",function(){
    let url=  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`
 
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
   

})

document.getElementById("search_input").addEventListener("keypress",function(e){
   if(e.key==="Enter"){
    window.location="search.html";
    let query=document.getElementById("search_input").value;
    localStorage.setItem("news",JSON.stringify(query));
   }
  
})