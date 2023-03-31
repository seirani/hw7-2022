var video = document.querySelector("video");
var speed = 1;

// Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Auto play is set to false")
	video.loop = false;
	console.log("Loop is set to false")
	video.load();
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

//Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	speed = speed - (speed * 0.1);
	video.playbackRate = speed;
	console.log("Slow down video");
	console.log("Speed is " + speed);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	speed = speed / 0.9;
	video.playbackRate = speed;
	console.log("Speed up video");
	console.log("Speed is " + speed);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	var time = document.querySelector("video").currentTime;
	if ((time + 10) > video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime = time + 10;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
});

// Mute Button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerText = "Unmute";
		console.log("Mute");
	} else {
		video.muted = false;
		document.getElementById("mute").innerText = "Mute";
		console.log("Unmute");
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function(){
	console.log("The current value is " + video.volume);
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
	video.volume = volume / 100;
	console.log("The current value is " + video.volume);
});

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.setAttribute("class", "oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
	video.removeAttribute("class", "oldSchool");
});
