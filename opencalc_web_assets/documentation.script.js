var textAboutVersion = "<h3>Version:	v1.0.2020.6</h3><p><i>You might face a lot of issues in this version. Currently under development.</i></p>"


var textHowWorks = "The backbone of the program is pretty straight forward. It takes a string given by the user as <i>.innerHTML</i> and then passes it through a function called <mark>mathExpressionHandler()</mark>.<br><mark>mathExpressionHandler()</mark> converts the <mark><i>HTML string</i></mark> to more digestible form by removing or adding targeted part of the raw input string and making it a valid string. After that, the output of <mark>mathExpressionHandler()</mark>, which is essentially another string, goes through another function called <mark>mathEval()</mark>. The core part of <mark>mathEval()</mark> is the in-built function <mark><i>eval()</i></mark> which evaluates valid string.<br><br>There is an in-between part. For the operations where trigonometric functions are involved, the argument can be in <i>degree or radian</i>. MathJS library takes arguments in radian by default. So if the user selects arguments in <i>degree</i>, the output of <mark>mathExpressionHandler()</mark> is sent to another function called <mark>argumentHandler()</mark> which converts the argument into <i>radian</i>[As the user gives the arguments in <i>degree</i>]."

var textIssue = "This is the very first version of this project & I already found some Issues. Hope I will fix them in the next version. You can contribute to the project by fixing them or by suggesting any issues or fixes.<br><br><b>Issue #1 Division by zero Error</b><br><br><mark>X/0</mark> returns <mark>Infinite</mark> instead of <mark>NaN</mark>[ X = Any number except <mark>0</mark>].<br>Issue in MathJS library itself. Need a solution to bypass this.<br><br><b>Issue #2 Trigonometric function argument in degree Error</b><br><br>The function <mark>argumentHandler()</mark> is so broken. I don't know how to fix it. All it should do is replace the argument of trigonometric functions with <mark>argument*dtr</mark> when <i>Deg</i> button is selected in the UI. But this function will NOT work if the input string has multiple same trigonometric functions with the same argument. For example, <mark><i>sin(45)+sin(45)</mark></i>. The function <mark>argumentHandler()</mark> should convert this string into <mark><i>sin(45*dtr)+sin(45*dtr)</i></mark>.But instead what it does is <mark><i>sin(45*dtr*dtr)+sin(45)</mark></i> (As there are two <i>sine</i> functions).<br><mark><i>dtr =  math.pi/180</i>.<br><br><b>Issue #3 <mark>cos 0[in degree]</mark> returns an infinitesimally small number instead of <mark><i>0</i></mark></b><br><br>Probably because of the coefficient <mark><i>dtr</i></mark> to converts the argument from <i>degree</i> to <i>radian</i>.<br><mark><i>dtr =  math.pi/180</i></mark><br><br><b>Issue #4 Avoiding <mark><i>eval()</i></mark> & designing a math parser</b><br><br>At this moment the program depends on <mark><i>function eval()</i></mark>to evaluate the string. However I found that the <mark><i>function eval()</i></mark> is so 'dangerous' and we should avoid it. Also I'd like to design my own math expression parser, but for now I'm ignoring it.<br><br><b>Issue #5 Implementing backspace/delete function in <mark>Clear</mark>button </b><br><br>For now <mark>Clear</mark>button erases everything from display. Click & hold should clear the display and single click should delete one character."


var textHistoryDtls = "No fixes are provided until now. You can help us to improve this project."


function VersionInfo(){


    document.getElementById("NavL2").style = "background-color:#f8f8f8";
    document.getElementById("NavL3").style = "background-color:#f8f8f8";
    document.getElementById("NavL4").style = "background-color:#f8f8f8";

    
    document.getElementById("informationText").style.cssText = "font-size:15px;font-family: 'Nanum Gothic Coding', monospace;"
    document.getElementById("informationText").innerHTML = textAboutVersion;
    document.getElementById("NavL1").style.cssText = "background-color:#e7e7e7 ;color: white;"
    

}



function loadHowWorks(){

    document.getElementById("NavL1").style = "background-color:#f8f8f8";
    document.getElementById("NavL3").style = "background-color:#f8f8f8";
    document.getElementById("NavL4").style = "background-color:#f8f8f8";

    

    document.getElementById("informationText").style.cssText = "font-size:15px;font-family: 'Nanum Gothic Coding', monospace;"
    document.getElementById("informationText").innerHTML = textHowWorks;
    document.getElementById("NavL2").style.cssText = "background-color:#e7e7e7 ;color: white;"
    
    
   
 
}

function loadIssue(){

    document.getElementById("NavL1").style = "background-color:#f8f8f8";
    document.getElementById("NavL2").style = "background-color:#f8f8f8";
    document.getElementById("NavL4").style = "background-color:#f8f8f8";



    

    document.getElementById("informationText").style.cssText = "font-size:15px;font-family: 'Nanum Gothic Coding', monospace;"
    document.getElementById("informationText").innerHTML = textIssue;
    document.getElementById("NavL3").style.cssText = "background-color: #e7e7e7; color: white;"
    
}

function loadHistoryDtls(){

    document.getElementById("NavL1").style = "background-color:#f8f8f8";
    document.getElementById("NavL2").style = "background-color:#f8f8f8";
    document.getElementById("NavL3").style = "background-color:#f8f8f8";

    document.getElementById("informationText").style.cssText = "font-size:15px;font-family: 'Nanum Gothic Coding', monospace;"
    document.getElementById("informationText").innerHTML = textHistoryDtls;
    document.getElementById("NavL4").style.cssText = "background-color: #e7e7e7; color: white;"
}


