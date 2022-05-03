function navbar(){
    return `  <a id="news" href="index.html">News app</a>
    <input id="search_input" type="text" placeholder="Search News">`
}


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

function fetchdata(query){
     let url=  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`
  
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
}

   export {navbar,append,fetchdata};