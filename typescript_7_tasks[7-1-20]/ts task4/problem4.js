var array = ["GUVI", "I", "am", "geek"];
array.splice(1, 2);
//console.log(array);
function arrToObjConv(array) {
    var obj = JSON.parse("{\n    \"" + array[0] + "\":\"" + array[1] + "\"\n  }");
    console.log(obj);
}
arrToObjConv(array);
