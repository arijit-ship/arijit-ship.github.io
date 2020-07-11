/***
 * Logical part of the project "OpenCalc".
 * June, 2020
 * By 
 * ARIJIT DAS
 * ***********************************************
 * 
 * Open-source. You can fork this source code and help me to improve it.
 * 
 * This is my first time in JavaScript. 
 * Please note that I'm neither a professional programmer nor from the computer science field. 
 * But I love making & breaking things and playing with computers. I've written this code in my free time. 
 * So obviously this code might have been written in a stupid unprofessional way. Feel free to fix any issue.
 * Thank you so much.
 * ************************************************
 * 
 */

let display = document.getElementById("displayBtm");
displayTop = document.getElementById("displayTop")
buttons = document.querySelectorAll("button");
shift_button_val = document.getElementById("BtShift").value;
DegRad_button_val = document.getElementById("DegRad").value;
//var deg_on;
//
/*

function ShowDigit(){
  console.log(buttonText);
}

*/
function ShiftPressed(){

  //display.innerText = null;


  if(shift_button_val=="shift_off"){
    
    //Shift button properties--Flag value
    shift_button_val="shift_on";
    
    document.getElementById("BtShift").style.background="#ffc596";
    //Other buttons properties
    document.getElementById("BtFac").innerHTML=",";
    document.getElementById("BtLn").innerHTML="exp()";
    document.getElementById("BtLog").innerHTML="log<sub>y</sub>(X)";
    //document.getElementById("BtLog").innerHTML="log(base, X)";
    document.getElementById("BtSin").innerHTML="sin<sup>-1</sup>";
    document.getElementById("BtCos").innerHTML="cos<sup>-1</sup>";
    document.getElementById("BtTan").innerHTML="tan<sup>-1</sup>";
    document.getElementById("BtSinh").innerHTML="sinh<sup>-1</sup>";
    document.getElementById("BtCosh").innerHTML="cosh<sup>-1</sup>";
    document.getElementById("BtTanh").innerHTML="tanh<sup>-1</sup>";
    document.getElementById("BtnSqrt").innerHTML="<sup>y</sup>√(X)";
    document.getElementById("BtnPow").innerHTML="X<sup>y</sup>";

    //    Making "Deg|Rad" button disabled

   // document.getElementById("DegRad").disabled = true;



  }
  else if(shift_button_val=="shift_on") {
    shift_button_val="shift_off";
    document.getElementById("BtShift").style.background="#EFEFEF";

    //Other buttons properties
    document.getElementById("BtFac").innerHTML="X!";
    document.getElementById("BtLn").innerHTML="ln";
    document.getElementById("BtLog").innerHTML="log";
    document.getElementById("BtSin").innerHTML="sin";
    document.getElementById("BtCos").innerHTML="cos";
    document.getElementById("BtTan").innerHTML="tan";
    document.getElementById("BtSinh").innerHTML="sinh";
    document.getElementById("BtCosh").innerHTML="cosh";
    document.getElementById("BtTanh").innerHTML="tanh";
    document.getElementById("BtnSqrt").innerHTML="√";
    document.getElementById("BtnPow").innerHTML="X<sup>2</sup>";

  }
  
}



for(item of buttons){
  item.addEventListener('click',(e)=>{
  buttonText = e.target.innerText;

  if(buttonText=="Shift"){

    ShiftPressed();
  }
  else if(buttonText == "Deg    |    Rad"){
    //console.log("hello");
    DegRadSelector();
  }


  //This is done in such a stupid way. Can I use for loop inside if statement??!
  //If you have a better idea do it!
  else if(buttonText=="0"){
    displayTop.innerHTML = "";
    display.innerHTML+="0";
  }
  else if(buttonText=="1"){
    displayTop.innerHTML = "";
    display.innerHTML+="1";
  }
  else if(buttonText=="2"){
    displayTop.innerHTML = "";
    display.innerHTML+="2";
  }
  else if(buttonText=="3"){
    displayTop.innerHTML = "";
    display.innerHTML+="3";
  }
  else if(buttonText=="4"){
    displayTop.innerHTML = "";
    display.innerHTML+="4";
  }
  else if(buttonText=="5"){
    displayTop.innerHTML = "";
    display.innerHTML += "5";
  }
  else if(buttonText=="6"){
    displayTop.innerHTML = "";
    display.innerHTML+="6";
  }
  else if(buttonText=="7"){
    displayTop.innerHTML = "";
    display.innerHTML+="7";
  }
  else if(buttonText=="8"){
    displayTop.innerHTML = "";
    display.innerHTML+="8";
  }
  else if(buttonText=="9"){
    displayTop.innerHTML = "";
    display.innerHTML+="9";
  }
  else if(buttonText=="."){
    displayTop.innerHTML = "";
    display.innerHTML += ".";
  }
  else if(buttonText=="+"){
    displayTop.innerHTML = "";
    display.innerHTML += "+";
  }
  else if(buttonText=="-"){

    displayTop.innerHTML = "";
    display.innerHTML += "-";
  }
  else if(buttonText=="×"){
    displayTop.innerHTML = "";
    display.innerHTML += "×";
  }
  else if(buttonText=="/"){
    displayTop.innerHTML = "";
    display.innerHTML += "/";
  }
  else if(buttonText=="%"){
    displayTop.innerHTML = "";
    display.innerHTML+="%";
  }
  else if(buttonText=="("){
    displayTop.innerHTML = "";
    display.innerHTML+="(";
    // cursorHandler();
  }
  else if(buttonText==")"){
    display.innerHTML+=")";
  }
  else if(buttonText=="="){
    displayTop.innerHTML = "";
    display.innerHTML+="=";
    mathExpressionHandler();
  
  }

  else if(buttonText=="Clear"){
    //display.placeholder = "";
    display.innerHTML = "";
    displayTop.innerHTML = "";
    display.style.cssText = "font-size: 15pt; color: black;"
    displayTop.style.cssText = "font-size: 10pt; color: rgb(177, 177, 177);"
    
  }
  else if(buttonText=="X!"){

    displayTop.innerHTML = "";
    display.innerHTML += "fact(";
   // cursorPositionHandler("display",strLength-2);
   displayTop.innerHTML = "fact(X)";
    
  }
  else if(buttonText=="ln"){
    
    displayTop.innerHTML = "";
    display.innerHTML += "ln(";

   // cursorPositionHandler("display",strLength);
    
  }


  else if(buttonText=="log"){
    
    displayTop.innerHTML = "";
    display.innerHTML+="log(";
    //cursorPositionHandler("display",4);
    
  }

  else if(buttonText=="sin"){
    displayTop.innerHTML = "";
    display.innerHTML+="sin(";
    //cursorPositionHandler("display",4);
    
  }
  else if(buttonText=="cos"){

    displayTop.innerHTML = "";
    display.innerHTML+="cos(";
   
  }
  else if(buttonText=="tan"){

    displayTop.innerHTML = "";
    display.innerHTML+="tan(";
   
  }
  else if(buttonText=="sinh"){

    displayTop.innerHTML = "";
    display.innerHTML += "sinh(";
   
  }
  else if(buttonText=="cosh"){

    displayTop.innerHTML = "";
    display.innerHTML += "cosh(";
   
  }
  else if(buttonText=="tanh"){

    displayTop.innerHTML = "";
    display.innerHTML += "tanh(";
   
  }
  else if(buttonText=="√"){

    displayTop.innerHTML = "";
    display.innerHTML += "√(";
   
  }
  else if(buttonText=="Xy"){

    displayTop.innerHTML = "";
    display.innerHTML += "pow(";
    displayTop.innerHTML = "pow(X,y)";

   
  }

  else if(buttonText==","){

    displayTop.innerHTML = "";
    display.innerHTML += ",";
   
  }

  else if(buttonText=="exp()"){

    displayTop.innerHTML = "";
    display.innerHTML += "exp(";
   
  }
  else if(buttonText=="logy(X)"){

    //tips_string = "base, X"
    //tips_string.style.color = "red";

    displayTop.innerHTML = "";
    display.innerHTML += "log("; 
    displayTop.innerHTML = "log(y,X)";

  }
    
  else if(buttonText=="sin-1"){

    displayTop.innerHTML = "";
    // display.innerHTML+="arcsin(";
    display.innerHTML += "sin<sup>-1</sup>(";
  }
  else if(buttonText=="cos-1"){

    displayTop.innerHTML = "";
    // display.innerHTML+="arccos(";
    display.innerHTML += "cos<sup>-1</sup>(";
  }
  else if(buttonText=="tan-1"){

    displayTop.innerHTML = "";
    // display.innerHTML+="arctan(";
    display.innerHTML += "tan<sup>-1</sup>("
  }
  else if(buttonText=="sinh-1"){

    displayTop.innerHTML = "";
    //display.innerHTML+="artanh(";
    display.innerHTML += "sinh<sup>-1</sup>(";
  }
  else if(buttonText=="cosh-1"){

    displayTop.innerHTML = "";
    //display.innerHTML+="arcosh(";
    display.innerHTML += "cosh<sup>-1</sup>(";
  }
  else if(buttonText=="tanh-1"){

    displayTop.innerHTML = "";
    //display.innerHTML+="artanh(";
    display.innerHTML += "tanh<sup>-1</sup>("
  }
  else if(buttonText=="y√(X)"){

    displayTop.innerHTML = "";
    display.innerHTML += "nroot(";
    displayTop.innerHTML = "nroot(X,y)";

    // setCaretToPos(document.getElementById('display'), 7);
    // setSelectionRange(document.getElementById('display'),6,9);
  }


  else if(buttonText=="X2"){

    displayTop.innerHTML = "";
    display.innerHTML += "<sup>2</sup>";
    displayTop.innerHTML = "(X)<sup>2</sup>";

  }
  else if(buttonText=="Ans"){

    displayTop.innerHTML = "";
    AnsPressed();

  }


})
}


var input2;

// Defining DegRadSelector()

function DegRadSelector(){

  if(DegRad_button_val == "degOn"){

    DegRad_button_val = "radOn";
    document.getElementById("DegRad").innerHTML = "Deg&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<b>Rad</b>";
   


  }
  else if(DegRad_button_val == "radOn"){

    DegRad_button_val = "degOn";
    document.getElementById("DegRad").innerHTML = "<b>Deg&nbsp;&nbsp;&nbsp;&nbsp;</b>|&nbsp;&nbsp;&nbsp;&nbsp;Rad";
    
  }


}

//  Defining "mathExpressionHandler()"~~

function mathExpressionHandler(){

  //Regular expression

  reg_ln = /\b(ln)\b/g;
  reg_log = /\b(log)\b/g;
  reg_sin = /\b(sin)\b/g
  reg_cos = /\b(cos)\b/g  //  "\w" to match whole word
  reg_tan = /\b(tan)\b/g
  reg_sinh = /\b(sinh)\b/g
  reg_cosh = /\b(cosh)\b/g
  reg_tanh = /\b(tanh)\b/g

  reg_sqrt = /√/g;
  reg_power = /\b(pow)\b/g;
  reg_nroot = /\b(nroot)\b/g;
  reg_prod = /×/g;
  reg_fact = /\b(fact)\b/g;
  reg_percent = /%/g
  reg_exp = /exp[(]/g;


  //reg_exp = /\b(exp)\b/g;

  /*
  * Will not work with ".innerText"
  */
  
  // reg_arcsin = /\b(\w*sin-1\w*)\b/g
  // reg_arccos = /\b(\w*cos-1\w*)\b/g;
  // reg_arctan = /\b(\w*tan-1\w*)\b/g;

  // reg_asinh =  /\b(\w*sinh-1\w*)\b/g
  // reg_acosh =  /\b(\w*cosh-1\w*)\b/g
  // reg_atanh = /\b(\w*tanh-1\w*)\b/g;


/**
 * Regex for inverse trigonometric functions with "-1" in the superscript.
 */


  reg_arcsin = /sin<sup>-1<[/]sup>/g;
  reg_arccos = /cos<sup>-1<[/]sup>/g;
  reg_arctan = /tan<sup>-1<[/]sup>/g;

  reg_asinh =  /sinh<sup>-1<[/]sup>/g;
  reg_acosh =  /cosh<sup>-1<[/]sup>/g;
  reg_atanh =  /tanh<sup>-1<[/]sup>/g;

  // Regex for to the power "2"
  reg_supOp = /<sup>2<[/]sup>/g;
  reg_supClo = /<[/]sup>/g;
  
  raw_input_string = document.getElementById("displayBtm").innerHTML;

  //Conversion

   input_string = raw_input_string;
   
   input_string = input_string.replace(reg_sin,"math.sin");
   input_string = input_string.replace(reg_cos,"math.cos");
   input_string = input_string.replace(reg_tan,"math.tan");
   input_string = input_string.replace(reg_sinh,"math.sinh");
   input_string = input_string.replace(reg_cosh,"math.cosh");
   input_string = input_string.replace(reg_tanh,"math.tanh");

   
   input_string = input_string.replace(reg_log,"math.log")
   input_string = input_string.replace(reg_ln,"math.log")


    /* "sin" is already replaced with "math.sin" while executing "input_string = input_string.replace(reg_sin,"math.sin");"
    "sin-1" string contains the string "sin". Our regular expression is written in such way that it can NOT distinguish "sin-1" as a whole!! You can fix this to make it more efficient!!
    It'd be more beautiful if you can distinguish "sin" and sine inverse i.e. "sin-1" thru regular expression.
    */
   

   input_string = input_string.replace(reg_arcsin,"asin");
   input_string = input_string.replace(reg_arccos,"acos");
   input_string = input_string.replace(reg_arctan,"atan");
   

   input_string = input_string.replace(reg_asinh,"asinh");
   input_string = input_string.replace(reg_acosh,"acosh");
   input_string = input_string.replace(reg_atanh,"atanh");


   input_string = input_string.replace(reg_power,"math.pow");
   input_string = input_string.replace(reg_sqrt,"math.sqrt");
   input_string = input_string.replace(reg_nroot,"math.nthRoot");
   input_string = input_string.replace(reg_fact,"math.factorial")
   input_string = input_string.replace(reg_prod,"*");
   input_string = input_string.replace(reg_percent,"*(1/100)*");
   input_string = input_string.replace(reg_exp,"(math.e**");


   input_string = input_string.replace(reg_supOp,"**2");
   input_string = input_string.replace(reg_supClo,"");

   // Regex for matching trigonometric functions with argument
 
   if(DegRad_button_val == "radOn"){

    input_string = input_string;
    mathEval();

   }

   // If Degree button is on, then we have to convert all arguments of trigonometric functions to equivalent radian value of degree given by the user
   else if(DegRad_button_val == "degOn"){

    argumentHandler();
    //console.log("ok");

   }

}

//var argumentArray = [];

let dtr = math.pi/180;   //      "dtr" Degree to radian --> a constant number.

//      Defining "argumentHandler()" for trigonometric functions

/** 
* 
* The function "argumentHandler()" is so broken. I don't know how fix it. All it should do is replace the argument 
* of a trigonometric functions with "argument*dtr" when "Deg" button is selected in the UI. But this function
* will NOT work if the input string has  multiple same trigonometric functions with same argument. 
* For example, "sin(45)+sin(45)". The function "argumentHandler()" should convert this string into "sin(45*dtr)+sin(45*dtr)".
* But instead what it does is "sin(45*dtr*dtr)+sin(45)" (As there are two sine functions).
* 
*/

function argumentHandler(){

        //      Regex for trigonometric functions with "(argument" --> sin(45
        //      Seriously. REGEX ARE NOT EASY!!!!!! 

        reg_sin_arg = /\bsin\(\d+(\.\d+)?/g;
        reg_cos_arg = /\bcos\(\d+(\.\d+)?/g;
        reg_tan_arg = /\btan\(\d+(\.\d+)?/g;

        reg_sinh_arg = /\bsinh\(\d+(\.\d+)?/g;
        reg_cosh_arg = /\bcosh\(\d+(\.\d+)?/g;
        reg_tanh_arg = /\btanh\(\d+(\.\d+)?/g;
          
        //var argumentArray = [];

        //  sin
        sin_argumentArray = input_string.match(reg_sin_arg);

        if (sin_argumentArray  == null){
          l_sin = 0
          //console.log("sin null here")
        }
        else{
          l_sin = sin_argumentArray.length;
          //console.log(l)
        }
       
        for(i = 0;i < l_sin; i++){
         
          //      Replacing "sin(argument" with "sin(argument*dtr" and hence the argument part is converted into radian.
          //      This method will NOT work if the input string has two same trigonometric functions with the same argument.

          input_string = input_string.replace(sin_argumentArray[i], sin_argumentArray[i] + "*" + dtr);
          //console.log(input_string);

        }

        //    cos
        cos_argumentArray = input_string.match(reg_cos_arg);

        if (cos_argumentArray  == null){
          l_cos = 0
          //console.log("cos null here")
        }
        else{
          l_cos = cos_argumentArray.length;
          //console.log(l_cos)
        }
       for(i = 0;i < l_cos;i++){

        input_string = input_string.replace(cos_argumentArray[i], cos_argumentArray[i] + "*" + dtr);

       }

      //    tan
       tan_argumentArray = input_string.match(reg_tan_arg);

        if (tan_argumentArray  == null){
          l_tan = 0
          //console.log("tan null here")
        }
        else{
          l_tan = tan_argumentArray.length;
          //console.log(l)
        }
       for(i = 0;i < l_tan;i++){

        input_string = input_string.replace(tan_argumentArray[i], tan_argumentArray[i] + "*" + dtr);

       }

       //   sinh
       sinh_argumentArray = input_string.match(reg_sinh_arg);

        if (sinh_argumentArray  == null){
          l_sinh = 0
          //console.log("sinh null here")
        }
        else{
          l_sinh = sinh_argumentArray.length;
          //console.log(l)
        }
       for(i = 0;i < l_sinh;i++){

        input_string = input_string.replace(sinh_argumentArray[i], sinh_argumentArray[i] + "*" + dtr);

       }

       //   cosh
       cosh_argumentArray = input_string.match(reg_cosh_arg);

        if (cosh_argumentArray  == null){
          l_cosh = 0
          //console.log("cosh null here")
        }
        else{
          l_cosh = cosh_argumentArray.length;
          //console.log(l)
        }
       for(i = 0;i < l_cosh;i++){

        input_string = input_string.replace(cosh_argumentArray[i], cosh_argumentArray[i] + "*" + dtr);

       }

       //   tanh
       tanh_argumentArray = input_string.match(reg_tanh_arg);

        if (tanh_argumentArray  == null){
          l_tanh = 0
          //console.log("tanh null here")
        }
        else{
          l_tanh = tanh_argumentArray.length;
          //console.log(l)
        }
       for(i = 0;i < l_tanh;i++){

        input_string = input_string.replace(tanh_argumentArray[i], tanh_argumentArray[i] + "*" + dtr);

       }
       
        
        mathEval();
       
    

}


//Defining mathEval()

function mathEval(){

  displayTop.innerHTML = "";

  // Input math expression
  mathHtml =  document.getElementById("displayBtm").innerHTML;

 

  console.log(input_string) //input_string

  // An array
  math_input_array = input_string.split("=");

  // String of array[0]
  math_input_string = math_input_array[0];


  try{ 
    
    // Evaluating the string
    result = eval(math_input_string);

    displayTop.style.cssText =  "font-size: 15px; color: #9d9c9c;"
    displayTop.innerHTML = mathHtml;
    display.innerHTML = "";
    display.innerText = result;
}

  catch(err) {

   displayTop.innerHTML = mathHtml + " <i>Check math syntax</i>"
   //displayTop.style.cssText = "font-size: 15px; color: red;"
   display.style.cssText = "font-size: 20px;color: #d28b8b;"
   display.innerHTML = err.message;
 
  }

  var ans = result;
  console.log(result);

 //      Math expression in expression page

 document.getElementById("expgText").innerHTML += "<br>Text Input ==>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + mathHtml + "<br>";
 document.getElementById("expgText").innerText += "HTML Input ==>        " + mathHtml + "\n";
 document.getElementById("expgText").innerText += "Input_string ==>        " + input_string + "\n\n";


 document.getElementById("expgText").innerHTML += "Output ==>       " + result; + "<br><br>";

 document.getElementById("expgText").innerText += "\n\n------------------------------------------------";




}

function AnsPressed(){

    displayTop.innerHTML = "";
    display.innerHTML = result;
    displayTop.innerHTML = "Ans";


}
