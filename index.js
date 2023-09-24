
let s=0;
const tableau =[];

function myFunction() {
let x= parseInt(document.getElementById("x").value);
    tableau.push(x) ;
    console.log(tableau);
    
    s+=x;
    let t =[].concat(tableau);
    
    t.sort(function(a, b){return a - b});
    console.log(t);
    
    
    
    document.getElementById("demo").innerHTML = tableau;
    document.getElementById("demo5").innerHTML = t;
     document.getElementById("demo1").innerHTML = t[0];
        document.getElementById("demo2").innerHTML = t[(t.length)-1];
        document.getElementById("demo3").innerHTML = s;
    

    
   

  
  }
