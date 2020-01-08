var obj = {
    name: "ISRO",
    age: 35,
    role: "Scientist"
};
var res = [];
function convertListToObject(obj) {
    var i = 0;
    for (var key in obj) {
        var tem = [];
        tem[0] = key;
        tem[1] = obj[key];
        res[i] = tem;
        i++;
    }
}
convertListToObject(obj);
console.log(res);
