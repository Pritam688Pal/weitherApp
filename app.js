q = "50bd1351ea8449a193e123226252805";
const btn = document.querySelector("button");
const lat = document.querySelector("#latitude");
const lan = document.querySelector("#Longitude");
const city = document.querySelector(".city_name");
const temp = document.querySelector(".temp_val");
const condition = document.querySelector(".condition_val");
let url = "https://api.weatherapi.com/v1/current.json?key=50bd1351ea8449a193e123226252805&q="

btn.addEventListener("click",()=>{
    let defalt = lat.value+','+lan.value;
    
    fetch(url+defalt)
        .then(res => res.json())
        .then(data => {
            city.innerHTML = data.location.name + ',' + data.location.region ;
            condition.innerHTML = data.current.condition.text;
            temp.innerHTML = data.current.temp_c;
            btn.innerHTML = "Reset";
            console.log(data);
        })
})






