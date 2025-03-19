'use strict';

const input = document.getElementById("input");
const search = document.getElementById("search");
const output = document.getElementById("outputField");
const api_key = "39c2bb2b";

search.addEventListener("click", async (e) => {
    e.preventDefault();
    output.innerHTML = "";
    let data;
    try{
        const result = await fetch(`http://www.omdbapi.com/?t=${input.value.trim()}&apikey=${api_key}&`);
        data = await result.json();
        console.log(data);
    } catch(err){
        alert("err" + err.message);
        console.log(err);
    }
    const card = document.createElement("div");
    card.classList.add("movieCard");

    const img = document.createElement("img");
    if(data["Poster"] == "N/A"){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
    } else {
        img.src = data['Poster'];
    }
    img.classList.add("movieCardimg");

    const title = document.createElement("h1");
    title.classList.add("movieCardtitle");
    title.textContent = data['Title'];

    const date = document.createElement("p");
    date.classList.add("movieCardrelease");
    date.textContent = data["Released"];

    card.append(img, title, date);
    output.appendChild(card)

})

