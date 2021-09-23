
function areaOfTriangle(a,b,c){
    ///a,b,c are the sides of the triangle
var s = (a+b+c)/2; /// semiperimeter

var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));

//console.log(area);
return area;

}

areaOfTriangle(3,5,4);
areaOfTriangle(6,6,6);