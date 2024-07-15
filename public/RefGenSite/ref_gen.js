function genDate(){
    /* Generate Current Date & Format */
    d = new Date();
    return d.toDateString().slice(4);
}

function refGen(){
   var x = document.getElementById("info");
   const text = [];
   for (i=0; i < x.length; i++){
    text[i] = x.elements[i].value;
   }
   document.getElementById("ref").innerHTML += 
   text[2] + ", " +
   text[1].charAt(0).toUpperCase() + ". " +
   "(" + text[6] + ") " +
   text[0] + ", " +
   text[3] + ", " +
   "Available at: " + text[5] + " " +
   "(Accessed: " + genDate() + ")"
   + "<br><br>";
}

function clearR(){
    /* Clear References List */
    document.getElementById("ref").innerHTML = ""
}