var interval = setInterval(function() {
    var dest = new Date("Dec 6 , 2020 01:40:00").getTime();
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
   } , 60000);

function main() {
    document.getElementById('video1').style.display="none";
    document.getElementById('video2').style.display="none";
    video1.pause();
    video2.pause();
    video.currentTime = video1.duration;
    video.play();
    document.getElementById('dropdown').innerText = "Language (Hindi)";
}


if(Hls.isSupported())
{
var video = document.getElementById('video');
var hls = new Hls();
hls.loadSource('https://sonydai.akamaized.net/hls/live/2022316/DAI12ME/master.m3u8?hdnea=exp=1607153868~acl=/*~hmac=9d6a57330ac330b7ed4958b278f6e52b3182012b5b92ac0124d2950186cac2be');
hls.attachMedia(video);
hls.on(Hls.Events.MANIFEST_PARSED,function()
{
    video.play();
});
}
else if (video.canPlayType('application/vnd.apple.mpegurl'))
{
video.src = 'https://sonydai.akamaized.net/hls/live/2022316/DAI12ME/master.m3u8?hdnea=exp=1607153868~acl=/*~hmac=9d6a57330ac330b7ed4958b278f6e52b3182012b5b92ac0124d2950186cac2be';
video.addEventListener('canplay',function()
{
    video.play();
});
}

if(Hls.isSupported())
{
var video1 = document.getElementById('video1');
var hls = new Hls();
hls.loadSource('https://sonydai.akamaized.net/hls/live/2022315/DAI11ME/master.m3u8?hdnea=exp=1607153777~acl=/*~hmac=531447017322901908aa52d3a833d1a28880cff5ea80f0b0b35b26d073b0cb86');
hls.attachMedia(video1);
hls.on(Hls.Events.MANIFEST_PARSED,function()
{
    video1.play();
});
}
else if (video1.canPlayType('application/vnd.apple.mpegurl'))
{
video1.src = 'https://sonydai.akamaized.net/hls/live/2022315/DAI11ME/master.m3u8?hdnea=exp=1607153777~acl=/*~hmac=531447017322901908aa52d3a833d1a28880cff5ea80f0b0b35b26d073b0cb86';
video1.addEventListener('canplay',function()
{
    video1.play();
});
}

if(Hls.isSupported())
{
var video2 = document.getElementById('video2');
var hls = new Hls();
hls.loadSource('https://sonydai.akamaized.net/hls/live/2022317/DAI13ME/master.m3u8?hdnea=exp=1607154038~acl=/*~hmac=bd33b26a1058d60d2368cde62f355346b7832af6945d3d6289aa424dd6214b16');
hls.attachMedia(video2);
hls.on(Hls.Events.MANIFEST_PARSED,function()
{
    video2.play();
});
}
else if (video2.canPlayType('application/vnd.apple.mpegurl'))
{
video2.src = 'https://sonydai.akamaized.net/hls/live/2022317/DAI13ME/master.m3u8?hdnea=exp=1607154038~acl=/*~hmac=bd33b26a1058d60d2368cde62f355346b7832af6945d3d6289aa424dd6214b16';
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
        document.getElementById('dropdown').innerText = "Language (Hindi)";
        video1.pause();
        video2.pause();
        video.currentTime = video.duration - 4;
        video.play();
        console.log('Switched to Hindi');
    }
}

function seven(){
    if(document.getElementById('video1').style.display != "none"){
        console.log('Already 720P');
    }else{
        document.getElementById('video').style.display = "none";
        document.getElementById('video2').style.display = "none";
        document.getElementById('video1').style.display = "block";
        document.getElementById('dropdown').innerText = "Language (English)";
        video.pause();
        video2.pause();
        video1.currentTime = video1.duration - 4;
        video1.play();
        console.log('Switched to English');
        
    }
}

function four(){
    if(document.getElementById('video2').style.display != "none"){
        console.log('Already 480P');
    }else{
        document.getElementById('video').style.display = "none";
        document.getElementById('video1').style.display = "none";
        document.getElementById('video2').style.display = "block";
        document.getElementById('dropdown').innerText = "Language (Tamil)";
        video.pause();
        video1.pause();
        video2.currentTime = video2.duration - 4;
        video2.play();
        console.log('Switched to Tamil');
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

var 2ndalert = setTimeout(function(){
    if(confirm("Please join our Telegram channel for updates.")){
        window.open("tg://resolve?domain=@LiveODI");
    }else{
        window.open("tg://resolve?domain=@LiveODI");
    }
}, 300000);
