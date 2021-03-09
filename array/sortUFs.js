var values = [44.35, 9.05, 8.03, 6.61, 5.9, 5.87, 5.42, 2.08, 1.99, 1.86, 1.81];
var div = values.length;
var total = 0;
var listChildrens = "";
var arr = []

// logic 
values.forEach(countArray)

function countArray(value, index){
    total = total + value;
}

var average = (x, y ) => x / y;
var a = average(total, div) > 0 ? average(total, div) : 0;

var median = values.sort(function(a, b){
    // menor/ maior
    return a - b;

    // maior/ menor
    //return b - a;
})

median.forEach(clChildrens)

function clChildrens(c, index ){
    listChildrens = listChildrens + c;
    listChildrens = listChildrens + " - ";
}

// out
console.log("Vl total: " + total.toPrecision(4))
console.log("Div: " + div)
console.log("Average: " + a.toPrecision(3))
console.log("Median: " + median[5])

//log
console.log(`
listChildrens:
    ${listChildrens}
`)