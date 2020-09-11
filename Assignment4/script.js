var nmes=new Array;
nmes=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for(i in nmes) {
    if(nmes[i].charAt(0)=="j"|nmes[i].charAt(0)=="J") {
        console.log("Good bye "+ nmes[i]);
    }
    else {
        console.log("Hello "+ nmes[i]);
    }
}