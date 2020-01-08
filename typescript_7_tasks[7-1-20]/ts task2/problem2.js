var obj = {
    name: "Rajinikanth",
    age: 25,
    haspets: true
};
var result = [];
function extract(obj) {
    var i = 0;
    for (var key in obj) {
        result[i] = key;
        i++;
    }
}
extract(obj);
console.log(result);
