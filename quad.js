var val = 0;

function calculate(){
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var c = document.getElementById("C").value;

    document.getElementById("value").innerHTML= quad(a,b,c);



}

function quad(a,b,c){
    return [(-b + Math.sqrt(b*b - 4 * a * c))/2/a,
        (-b - Math.sqrt(b*b - 4 * a * c))/2/a] ;
}
