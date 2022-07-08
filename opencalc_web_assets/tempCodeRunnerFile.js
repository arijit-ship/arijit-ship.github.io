for(i of  raw_input_string){

    if(i=="×"){
      input=raw_input_string.replace(/×/g,"*");
    }
    else if(i=="√"){
      input=input.replace("√","math.sqrt()")
    }
    
