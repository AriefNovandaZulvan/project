function Scater() {
  randomize = getRandomInt(20);
  $.ajax({
    type: "GET",
    url:  "php/send",
    data:{randomize:randomize},
    success: function(data){
      console.log(data);
      vdata = data;
      vres = scateringword(vdata);
      $('#word').html(vdata);
      definiton(vdata);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      definiton('Using');
    }
  });
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
function scateringword(vres){
  for (i=0;i<vres.length;i++){
      
  }
}
