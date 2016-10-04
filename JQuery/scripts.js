$(document).ready(function() {

    //create a nice message button
var btn = document.createElement("button");
var text = document.createTextNode("Nice Message Here");
btn.style.margin = '20px';
btn.style.display = 'inline';
btn.appendChild(text);
document.body.appendChild(btn);
    //event listener for button click
btn.addEventListener('click', function() {
    alert ("Isn't this a nice message?")});

//mouseover and mouseout on div colorChangey
$( "#colorChangey" ).mouseover(function() {
  this.style.backgroundColor = 'green'
    });
    
$("#colorChangey").mouseout = function() {
    this.style.backgroundColor = 'yellow';
    };
//get random color
var getRandomColor = function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};//end of getRandomColor

//assign random color to .random when it is clicked
$('.random').click(function(){
  $(this).color(getRandomColor);
});

});//end of document.ready