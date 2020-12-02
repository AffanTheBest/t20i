var interval = setInterval(function() {
    var dest = new Date("Dec 2 , 2020 09:10:00").getTime();
  var current = new Date().getTime();
  var diff = dest - current;
  var days = Math.floor( diff / (1000*24*60*60));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("remaining-time").innerHTML = days + "days : " + hours + "Hrs : " +  minutes + "Mins : " + seconds +"Sec";
  if(diff < 0){
      document.getElementById("remaining-time").style.display = "none";
      document.getElementById("next-heading").style.display = "none";
  }
   } , 1000);

function main() {
    document.getElementById('video1').style.display="none";
    document.getElementById('video2').style.display="none";
    video1.pause();
    video2.pause();
    video.currentTime = video1.duration;
    video.play();
    document.getElementById('dropdown').innerText = "Quality (1080P)";
}


if(Hls.isSupported())
{
var video = document.getElementById('video');
var hls = new Hls();
hls.loadSource('https://sonydai.akamaized.net/hls/live/2022316/DAI12ME/master.m3u8?hdnea=exp=1606966095~acl=/*~hmac=fd2d2e63623b39989c07da36de4e73cf62633bc4623793e1aec41a56d222239c');
hls.attachMedia(video);
hls.on(Hls.Events.MANIFEST_PARSED,function()
{
    video.play();
});
}
else if (video.canPlayType('application/vnd.apple.mpegurl'))
{
video.src = 'https://sonydai.akamaized.net/hls/live/2022316/DAI12ME/master.m3u8?hdnea=exp=1606966095~acl=/*~hmac=fd2d2e63623b39989c07da36de4e73cf62633bc4623793e1aec41a56d222239c';
video.addEventListener('canplay',function()
{
    video.play();
});
}

if(Hls.isSupported())
{
var video1 = document.getElementById('video1');
var hls = new Hls();
hls.loadSource('https://sonydai.akamaized.net/hls/live/2022316/DAI12ME/master.m3u8?hdnea=exp=1606966095~acl=/*~hmac=fd2d2e63623b39989c07da36de4e73cf62633bc4623793e1aec41a56d222239c');
hls.attachMedia(video1);
hls.on(Hls.Events.MANIFEST_PARSED,function()
{
    video1.play();
});
}
else if (video1.canPlayType('application/vnd.apple.mpegurl'))
{
video1.src = 'https://sonydai.akamaized.net/hls/live/2022316/DAI12ME/master.m3u8?hdnea=exp=1606966095~acl=/*~hmac=fd2d2e63623b39989c07da36de4e73cf62633bc4623793e1aec41a56d222239c';
video1.addEventListener('canplay',function()
{
    video1.play();
});
}

if(Hls.isSupported())
{
var video2 = document.getElementById('video2');
var hls = new Hls();
hls.loadSource('https://sonydai.akamaized.net/hls/live/2022316/DAI12ME/master.m3u8?hdnea=exp=1606966095~acl=/*~hmac=fd2d2e63623b39989c07da36de4e73cf62633bc4623793e1aec41a56d222239c');
hls.attachMedia(video2);
hls.on(Hls.Events.MANIFEST_PARSED,function()
{
    video2.play();
});
}
else if (video2.canPlayType('application/vnd.apple.mpegurl'))
{
video2.src = 'https://sonydai.akamaized.net/hls/live/2022316/DAI12ME/master.m3u8?hdnea=exp=1606966095~acl=/*~hmac=fd2d2e63623b39989c07da36de4e73cf62633bc4623793e1aec41a56d222239c';
video2.addEventListener('canplay',function()
{
    video2.play();
});
}

function one(){
    if(document.getElementById('video').style.display != "none"){
        console.log('Already 1080P');
    }else{
        document.getElementById('video2').style.display = "none";
        document.getElementById('video1').style.display = "none";
        document.getElementById('video').style.display = "block";
        document.getElementById('dropdown').innerText = "Quality (1080P)";
        video1.pause();
        video2.pause();
        video.currentTime = video.duration - 4;
        video.play();
        console.log('Switched to 1080p');
    }
}

function seven(){
    if(document.getElementById('video1').style.display != "none"){
        console.log('Already 720P');
    }else{
        document.getElementById('video').style.display = "none";
        document.getElementById('video2').style.display = "none";
        document.getElementById('video1').style.display = "block";
        document.getElementById('dropdown').innerText = "Quality (720P)";
        video.pause();
        video2.pause();
        video1.currentTime = video1.duration - 4;
        video1.play();
        console.log('Switched to 720p');
        
    }
}

function four(){
    if(document.getElementById('video2').style.display != "none"){
        console.log('Already 480P');
    }else{
        document.getElementById('video').style.display = "none";
        document.getElementById('video1').style.display = "none";
        document.getElementById('video2').style.display = "block";
        document.getElementById('dropdown').innerText = "Quality (480P)";
        video.pause();
        video1.pause();
        video2.currentTime = video2.duration - 4;
        video2.play();
        console.log('Switched to 480p');
    }
}

var loadalert = window.setTimeout(myFun , 60000);
function myFun(){
    if(confirm("Please join our Telegram channel for updates.")){
        window.open("tg://resolve?domain=@LiveODI");
    }else{
        window.open("tg://resolve?domain=@LiveODI");
    }
}
