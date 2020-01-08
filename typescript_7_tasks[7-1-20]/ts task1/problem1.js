var obj = {
    name: "Rajinikanth",
    age: 33,
    hasPets: false
};
var result = [];
function extract(obj) {
    var i = 0;
    for (var key in obj) {
        result[i] = obj[key];
        i++;
    }
}
extract(obj);
console.log(result);
