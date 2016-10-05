document.addEventListener("DOMContentLoaded", function(event) { 
  
  //create a nice message button
var btn = document.createElement("button");
var text = document.createTextNode("Nice Message Here");
btn.appendChild(text);
document.body.appendChild(btn);
btn.class = 'button';

//event listener for button click
btn.addEventListener('click', function() {
    alert ("Isn't this a nice message?")});

//event listener for button click on alertButton
alertButton.addEventListener('click', function() {
    var field = document.getElementById("input").value;
    alert(field)
    });
    

//alert text box message function
function alertContents() {
                var field = document.getElementById("input").value;
                alert(field);
                };

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

//create a name in span button
var btn2 = document.createElement("button");
    btn2.innerHTML = "Create a span in a div";
    document.body.appendChild(btn2);
    btn2.class = 'button';

    

//create an empty div
var div2 = document.createElement("div");
    div2.id = div2;
    document.body.appendChild(div2);
    div2.style.borderColor = "black";
    div2.style.border = 'solid';
    div2.style.height = '5em';
    div2.style.width = '5em'
    div2.style.backgroundColor ="yellow";

    //create a span containing my name on button click
    btn2.onclick = function() {
        var nameSpan = document.createElement('span');
        nameSpan.id = nameSpan;
        nameSpan.innerHTML = "Wayne Burris";
        document.getElementById(div2).appendChild(nameSpan);
        };

var friends = ["Rachel", "Jon", "Lauren", "Kayla", "John", "Tom", "Leah", "Lael", "Brittany", "Alexandra"];

//.shift() will remove the first item from the array and return it

    var liButton = document.getElementById("liButton");
    liButton.onclick = function() {
        var output = friends.shift();
        var nameList = document.getElementById("nameList");
        var newListItem = document.createElement('li');
        newListItem.innerHTML = output;
        nameList.appendChild(newListItem);
            
    };

});//end of DOMContentLoaded