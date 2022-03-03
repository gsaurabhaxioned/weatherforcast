
let weather = {
    apikey:"99c8f5a43ff2ca350e86b61742e15d3e",
    fetchweatherinfo: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apikey).then(
            (response) => {
                return response.json();
            }
        ).then(
            (data) => {
                this.getweatherinfo(data);
            }
        )
    },
    getweatherinfo : function(data){
        let cityname = data.name,
        degree = data.wind.deg,
        weather = data.weather[0].main,
        humidity = data.main.humidity,
        wind_speed = data.wind.speed;

        document.querySelector(".cityname").innerHTML = cityname;
        document.querySelector(".temprature").innerHTML = degree+"&#176;C";
        document.querySelector(".description").innerHTML = "weather: "+weather;
        document.querySelector(".humidity").innerHTML = "humidity: "+humidity+"%";
        document.querySelector(".wind").innerHTML ="wind speed: "+wind_speed+"km/hr";
    }

}

document.querySelector(".search-icon").addEventListener('click',()=>{
    let city = document.querySelector('.searchbar').value;
    weather.fetchweatherinfo(city);
});

document.querySelector(".searchbar").addEventListener('keyup',(event)=>{
    if(event.key === "Enter"){
    let city = document.querySelector('.searchbar').value;
    weather.fetchweatherinfo(city);
    }
});


window.onload = weather.fetchweatherinfo("mumbai");









