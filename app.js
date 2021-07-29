var news = document.getElementById("news")
fatch("")
.then((data) => data.json())
.then((json)=>getdata(json))

function getdata(json)

{
      
    var data = json.articles;
    var card = "";
    for (let json of data)

{
    news.innerHTML+= <div class="card" style="width: 50rem;">
    <img src="${json.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
    
}
}
