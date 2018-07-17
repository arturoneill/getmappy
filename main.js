$('.statefill').hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$('.statefill').mouseleave(function(e) {
  $('#info-box').css('display','none');
});



$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

var changeColor = function(path){

  if(yield.value < 6){
    path.style.fill = 'green';
  } else if(yield.value >= 6 && obj.value <= 9){
    path.style.fill = 'orange';
  } else if(yield.value > 9){
   path.style.fill = 'red';
  }

};


// Create an object:
var statedata = {
    
    yield : 180,
    id       : AL,
    yieldReport : function() {
       return this."Yield: " + this.yield;
    }
};
// Display data from the object:
document.getElementById("demo").innerHTML = person.yieldReport();

