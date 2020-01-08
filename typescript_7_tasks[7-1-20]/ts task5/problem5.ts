let array=[["make","Ford"],["model", "Mustang"],["year",1964]];

function ar_obj(array){
  let newObj={};
  for(let[key,value] of array)
  {
    newObj[key]=value;
  }
  console.log(JSON.stringify(newObj));
}
ar_obj(array);

//Another method
 // console.log(a1[0]+" "+a2[0]+" "+a3[0]);
//  function arrToObj(array)
// {
//   let a1=[],a2=[],a3=[];
//   a1=array[0];
//   a2=array[1];
//   a3=array[2];

//   let obj=(`{
//     "${a1[0]}":"${a1[1]}"
//     "${a2[0]}":"${a2[1]}"
//     "${a3[0]}":"${a3[1]}"
//   }`);
//   console.log(obj);
// }
// arrToObj(array);

