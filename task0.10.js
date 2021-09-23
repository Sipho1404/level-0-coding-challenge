
function compareStrings(string1, string2){

    var newString1 = string1.toLowerCase();
    var newString2 = string2.toLowerCase();

    var newString = "";

    for( var i = 0; i < newString1.length; i++){
        for(var j = 0; j < newString2.length; j++){
            if(newString1[i] == newString2[j]){
               newString += newString1[i]; 
            }
           
        }
    }
    console.log("Common Letters: " + newString);
}

compareStrings("house", "computers");
compareStrings("COST", "computers");
compareStrings("Brandy", "troley");
