var wordoforigin = '';
var scoreoforigin = '';
var highoforigin = '';
function Scater() {
  while (true){
    randomize = getRandomInt(30);
    if (Math.floor(randomize)>3) {
      break;
    }
  }
  $.ajax({
    type: "GET",
    url:  "php/send",
    data:{randomize:randomize},
    success: function(data){
      wordoforigin = '';
      console.log(data);
      vdata = data;
      vres = scateringword(vdata);
      $('#word').html(vres);
      wordoforigin= vdata;
      definiton(vdata);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      definiton('Using');
    }
  });
}
function renderform() {
  $.ajax({
    type: "GET",
    url:  "php/renderform",
    success: function(data){
      $('#bodyoftablemain').html(data);
      $('.buttonplacer').html('<label >Answear :</label><input id="inputer" ></input><button onclick="Scater()">Refresh</button><button onclick="submitanswear()">Submit</button>');
      Scater();

     },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      alert('Something Wrong Refresh Page');
    }
  });
}
function submitanswear(){
  vanswear = document.getElementById('inputer').value.trim();
  if (vanswear == wordoforigin.trim()){
    alert('your Answear is Correct');
    vvar = 100;
    Scater();
    vscore = scoreoforigin;
    vhighscore = highoforigin;
    scoreoforigin = Math.floor(vscore+vvar);
    document.getElementById('playerscore').textContent = 'Your Score : '+scoreoforigin;
    if (scoreoforigin > highoforigin) {
      document.getElementById('highscore').textContent = 'High Score : '+scoreoforigin;
    }
    document.getElementById('inputer').value = '';
  }
  else{
    alert('your Answear is Incorrect');
    document.getElementById('playerscore').textContent = 'Your Score : '+'0';
    Scater();
    document.getElementById('inputer').value = '';
  }
}
function definiton(theword){
  $.ajax({
    type: "GET",
    url:  "https://googledictionaryapi.eu-gb.mybluemix.net/?define="+theword+"&lang=en",
    success: function(data){
      console.log(data);
      vdata = data.meaning.noun[0];
      vdata = vdata.definition;
      $('#definiton').html(vdata);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      $('#definiton').html('definition not found try using other word');
    }
  });

}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function scateringword(vwordorigin){
  vword = vwordorigin;
  vcount = Math.floor(vwordorigin.length);
  word1 = '';
  word2 = '';
  key1 = '';
  key2='';
  for (i=0;i<vcount;i++){
      key1 = Math.floor(vwordorigin.length-1);
      while (true){
        key2 = getRandomInt(key1);
        if (Math.floor(key2)>3) {
          break;
        }
      }
      word1 = vword.substring(0, Math.floor(key2+1));
      word2 = vword.substring(Math.floor(key2+1), key1);
      vword = word2+word1;
  }
  return vword;
}
