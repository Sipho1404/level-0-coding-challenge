

function checkVowels(x){
    switch (x){
        case "a":
            return "a";
        case "e":
            return "e";
        case "i":
            return "i";
        case "o":
            return "o";
        case "u":
            return "u";
        default :
           return "";
    }
}
function printVowels(stringName){

    newString = stringName.toLowerCase();
    var vowels = "";
    var newVowels = "";

    for(var i = 0; i <= newString.length; i++){
       
        vowels += checkVowels(newString[i]); 
    
}
/*for(var i = 0; i <= vowels.length; i++){
    for(var j = 0; j < i; j++)
   if(vowels[i] == vowels[j]){
       console.log("");

   }
   else {
 newVowels += vowels[j];
   }
}*/
    console.log("Vowels = " + vowels);

}

printVowels("Umuzi");
printVowels("books");
printVowels("coding");
printVowels("GENERAL");