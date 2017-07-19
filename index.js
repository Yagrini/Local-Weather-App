$(document).ready(function(){

		  if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
  			
			lat = position.coords.latitude;
			long = position.coords.longitude;
		    tempswap=true;
   			 var api="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=73acbe7fe3f09db31014c1dd3df405d5";
   			 $.getJSON(api,function(data)
   			 {
   			 	celsius = data.main.temp - 273,15;
   			 	fahrenheit = celsius * 1.8 + 32;
   			 	weatherType =data.weather[0].description;
   			 	windspeed = data.wind.speed;
   			 	city = data.name;
   			 	d2 = new Date(); hor = d2.getHours();
   			 	
				if(weatherType==="clear sky" && hor<20 && hor>6) $("body").css("background-image",'url("http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/02/More-Sky-Wallpapers-4.jpg")');
   			 	else if(weatherType==="clear sky" && (hor>=20 || hor<=6)) $("body").css("background-image",'url("https://cdn.pixabay.com/photo/2017/03/23/16/29/night-2168794_960_720.jpg")');
   			 	else if(weatherType==="few clouds" && hor<20 && hor>6) $("body").css("background-image",'url("http://nicubunu.ro/pictures/photoblog/sky02.jpg")');
   			 	else if(weatherType==="few clouds" && (hor>=20 || hor<=6)) $("body").css("background-image",'url("http://awesomwallpaper.com/img2/208D89B2B2EDA0F1/cold-clouds-stormy-sky.jpg")');
   			 	else if(weatherType==="scattered clouds" && hor<20 && hor>6) $("body").css("background-image",'url("http://tboltkid.com/trailjournal/wp-content/uploads/2013/11/cape-of-storms-south-africa-4.jpg")');
   			 	else if(weatherType==="scattered clouds" && (hor>=20 || hor<=6)) $("body").css("background-image",'url("https://bdn-data.s3.amazonaws.com/uploads/2013/02/4101-600x399.jpg")');
   			 	else if(weatherType==="broken clouds" && hor<19 && hor>6) $("body").css("background-image",'url("http://cdn.c.photoshelter.com/img-get2/I0000BTnyK29yLdg/fit=1000x750/010092.jpg")');
   			 	else if(weatherType==="broken clouds" && (hor>=19 || hor<=6)) $("body").css("background-image",'url("http://img01.deviantart.net/b98a/i/2011/034/9/b/night_clouds_by_midnightkisses1993-d38n1ie.jpg")');
   			 	else if(weatherType==="shower rain" || weatherType==="rain") $("body").css("background-image",'url("http://allswalls.com/images/clouds-rain-heavy-rain-dark-cloud-wallpaper-1.jpg")');
   			 	else if(weatherType==="thunderstorm" && hor<17 && hor>7) $("body").css("background-image",'url("http://www.beachcamera.com/blog/wp-content/images/stormphotography/storm-clouds-south-dakota.jpg")');
   			 	else if(weatherType==="thunderstorm" && (hor>=17 || hor<=7)) $("body").css("background-image",'url("https://s-media-cache-ak0.pinimg.com/originals/00/65/ab/0065abb3977b006a2912277d73b8f3d4.jpg")');
   			 	else if(weatherType==="snow" && hor<17 && hor>7) $("body").css("background-image",'url("http://wallpapersin4k.net/wp-content/uploads/2017/02/Snow-Day-Movie-Wallpapers-3.jpg")');
   			 	else if(weatherType=="snow" && (hor>=17 || hor<=7)) $("body").css("background-image",'url("http://wallpapercave.com/wp/IhhsYyn.jpg")');
   			 	else if(weatherType==="mist") $("body").css("background-image",'url("https://i.imgur.com/bKrmQkd.jpg")');   			 
   			 
   			 	$("#city").html(city);
   			 	$("#ctemp").html(Math.round(celsius));
   			 	$("#temp").html(" °C");
   			 	$("#wind").html("Wind speed: "+windspeed+" m/s");
   			 	$("#wtype").html(weatherType);
   			 	$("#date").html(getdate());
   			 	$("#div0").html("Weather App");
   			 	
   			 	$("#by").html("by - <a href='https://codepen.io/Yagrini/'>Youness Lagrini</a>");
});
   			
  			$("#temp").on('click',function()
			 {
			 	if(tempswap) 
			 	{
			 		$("#ctemp").html(Math.round(fahrenheit));
			 		$("#temp").html(" °F");
			 		tempswap=false;
			 	}
			 	else
			 	{
			 		$("#ctemp").html(Math.round(celsius));
			 		$("#temp").html(" °C");
			 		tempswap=true;
			 	}
			});
			});
			}
	   
});
function getdate()
{
	d1 = new Date();
	jour=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	mois=new Array("January","Fébruary","March","April","May","June","July","August","September","October","November","December");
	if(d1.getDate()%10==1) d=d1.getDate()+"st";
	else if(d1.getDate()%10==2) d=d1.getDate()+"nd";
	else if(d1.getDate()%10==3) d=d1.getDate()+"rd";
	else d=d1.getDate()+"th";
	return jour[d1.getDay()]+","+d+" "+mois[d1.getMonth()]+","+d1.getFullYear();
}