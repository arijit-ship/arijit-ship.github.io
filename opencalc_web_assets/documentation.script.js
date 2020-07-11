function loadHowWorks(){

    // var txt1 = "The underlying workflow is pretty straight forward. It takes the input as a string and evaluates it."

    // document.getElementById("informationText").style.cssText = "font-size:20px;"
    // document.getElementById("informationText").innerHTML = txt1;
    // document.getElementById("NavL2").style.cssText = "background-color: white; color: white;"

        var fileReader = new FileReader(); 
    fileReader.onload = function (e) { 
        var fileContents = document.getElementById("informationText");
    //filecontents is a div in the html that displays the file.
        fileContents.innerText = fileReader.result; 
    } 
    fileReader.readAsText("howitworks.documentation.txt[0]"); 
    //see the link above to see where the variable fileTobeRead comes from.
 
}


