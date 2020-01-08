var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
// console.log(a1[0]+" "+a2[0]+" "+a3[0]);
function arrToObj(array) {
    var a1 = [], a2 = [], a3 = [];
    a1 = array[0];
    a2 = array[1];
    a3 = array[2];
    var obj = ("{\n    \"" + a1[0] + "\":\"" + a1[1] + "\"\n    \"" + a2[0] + "\":\"" + a2[1] + "\"\n    \"" + a3[0] + "\":\"" + a3[1] + "\"\n  }");
    console.log(obj);
}
//arrToObj(array);
function ar_obj(array) {
    var newObj = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var _a = array_1[_i], key = _a[0], value = _a[1];
        newObj[key] = value;
    }
    console.log(JSON.stringify(newObj));
}
ar_obj(array);
