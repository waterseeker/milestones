$(document).ready(function() {
// #1 nice message alert
$(function () {
  function NiceMessage() {
    alert("Isn't this a nice message?");
  }
  function createNiceMessageButton() {
    var $btn = $('<button />', {
      type: 'button',
      text: 'This is the nice message button',
      id: 'btn_nicemessage',
      class: 'button'
    }).click(NiceMessage);
    return $btn;
  }
  $('body').append(createNiceMessageButton());
});

//#2 alert text box function and click event
  
$('#alertButton').click(function(){
    var field = document.getElementById('input').value;
    alert(field);
});

//#3 mouseover and mouseout on div colorChangey
$('#colorChangey').mouseover(function() {
  this.style.backgroundColor = 'green'
    });
    
$('#colorChangey').mouseout(function() {
    this.style.backgroundColor = 'yellow';
    });
//#4 change color of p 
$('#random').click(function() {
   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#random').css('color', randomColorChange);
    });

//#5 create a div and a button that appends your name inside the div
function nameDiv() {
    var $div = $('<div />', {
      type: 'div',
      id: 'nameDiv'
    });
    $('body').append($div);
    return $div;
  }
  

  function nameSpan() {
    var $span = $('<span />', {
      type: 'span',
      text: 'Wayne Burris',
      id: 'nameSpan'
    });
    return $span;
  }


$(function () {
  function addName() {
    var div = nameDiv();
    $(div).append(nameSpan());
  }
  function nameButton() {
    var $btn = $('<button />', {
      type: 'button',
      text: 'This is the name button',
      id: 'nameButton'
    }).click(addName);
    return $btn;
  }
  $('body').append(nameButton()); 
});

//#6

var friends = ["Rachel", "Jon", "Lauren", "Kayla", "John", "Tom", "Leah", "Lael", "Brittany", "Alexandra"];

$("#liButton").click (function() {
  var aFriend = friends.shift();
  var li = $('<li/>');
  li.text(aFriend);
  var listOfFriends = $('#nameList');
  listOfFriends.append(li);
});



});//end of document.ready