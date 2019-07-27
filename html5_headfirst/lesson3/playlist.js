window.onload = init;

// button object has an onclick property
function init() {
    var button = document.getElementById("addButton");
    button.onclick  = handleButtonClick;
    loadPlaylist();
}

// below function is called a handler because it handles an event
function handleButtonClick() {
    var textInput = document.getElementById('songTextInput');
    var songName = textInput.value;
    if (songName == ""){
        alert("Please enter a song");
    } else {
        alert("Adding " + songName);
    }
    // create list item to hold song entered
    var li = document.createElement("Li");
    li.innerHTML = songName;
    var ul = document.getElementById('playlist');
    // inserts the list variable created into the unordered list
    ul.appendChild(li);
    save(songName);
}
