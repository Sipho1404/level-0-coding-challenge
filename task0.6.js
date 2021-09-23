
function maximum(a,b,c,d){

    if(a >= b){
        if(a >= c){
            console.log(a);
            //return a;

        }
        else{
            console.log(c);
            //return c;
        }
    }
    else if( b >= c){
        if(b >= d){
            console.log(b);
            //return b;
        }
        else{
            console.log(d);
            //return d;
        }
    }
    else{
        if(c >= d){
            console.log(c);
            //return c;
        }
        else{
            console.log(d);
            //return d;
        }
    }

} 
maximum(1,2,3,4);
maximum(1,22,3,2);
maximum(14,2,7,8);
maximum(14,2,15,8);
 