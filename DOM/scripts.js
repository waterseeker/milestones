document.addEventListener("DOMContentLoaded", function(event) { 
  
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
var div = document.getElementById('colorChangey');
    div.onmouseover = function() {
    this.style.backgroundColor = 'green';
    };
    
    div.onmouseout = function() {
    this.style.backgroundColor = 'yellow';
    };

var getRandomColor = function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};//end of getRandomColor

//assign random color to .random when it is clicked
var random = document.getElementById('random')
    random.onclick = function() {
        this.style.color = getRandomColor();
    };

});//end of DOMContentLoaded