/**
 * Grafy
 * (c) Arijit Das, 2021 
 * 
 * For scatter points ploting using JSX Graph library.
 */

/*
 var graph = b3a.create('functiongraph',
                       [function(x){ return 0.5*x*x-2*x;}, -2, 4]
                    );
*/

function plotFunction(expression, color_of_stroke){
        b3a.create("functiongraph", [function(x){return eval(expression)}], {strokeColor: color_of_stroke, strokeWidth:2});
   
}