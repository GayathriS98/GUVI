let array=["GUVI","I","am","geek"];
array.splice(1,2);
//console.log(array);
function arrToObjConv(array){
  let obj=JSON.parse(`{
    "${array[0]}":"${array[1]}"
  }`);
  console.log(obj);
}
arrToObjConv(array);
