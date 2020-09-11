var nmes=new Array;
nmes=["Jhon","Cena","Jack","sparrow","bruce","wayne","jerk"];
for(i in nmes) {
    if(nmes[i].charAt(0)=="j"|nmes[i].charAt(0)=="J") {
        console.log("hi "+ nmes[i]);
    }
    else {
        console.log("Hello "+ nmes[i]);
    }
}