let array=[[["firstName","Vasanth"],["lastName", "Raja"],["age",24],["role,JSWizard"]],[["firstName","Sri"],["lastName","Devi"],["age","28"],["role","coder"]]];

let ar=[];
function arr2Obj(array)
{
  i=0;
  for(let key of array)
  {
    let obj={};
    for(let[k,v] of key)
    {
      obj[k]=v;
    }
    ar[i]=obj;
    i++;
  }
  console.log(JSON.stringify(ar));
}

arr2Obj(array);

//ANOTHER METHOD
//  console.log(a1[0]+" "+a2[0]+" "+a3[0]);
//  function arrToObj(array)
// {
//   let o1=[],o1_1=[],o1_2=[],o1_3=[],o2=[],o2_1=[],o2_2=[],o2_3=[];
//   o1=array[0];
//   o1_1=o1[0];
//   o1_2=o1[1];
//   o1_3=o1[2];
//   o2=array[1];
//   o2_1=o2[0];
//   o2_2=o2[1];
//   o2_3=o2[2];

//   let obj1=(`{
//     "${o1_1[0]}":"${o1_1[1]}"
//     "${o1_2[0]}":"${o1_2[1]}"
//     "${o1_3[0]}":"${o1_3[1]}"
//   }`);
//   let obj2=(`{
//     "${o2_1[0]}":"${o2_1[1]}"
//     "${o2_2[0]}":"${o2_2[1]}"
//     "${o2_3[0]}":"${o2_3[1]}"
//   }`);
//   console.log(obj1);
//   console.log(obj2);
// }
//arrToObj(array);
