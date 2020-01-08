let expected={
  foo:5,
  bar:6
};
let actual={
  foo:5,
  bar:6
};
function check(obj1,obj2){
let array1=[];
let array2=[];
let i=0;
for(let key in expected){
  array1[i]=key;
  array1[i+1]=obj1[key];
  i=i+2;
}
i=0;
for(let key in actual){
  array2[i]=key;
  array2[i+1]=obj2[key];
  i=i+2;
}
console.log(array1);
console.log(array2);
let count=0;
for(i=0;i<array1.length;i++){
if(array1[i]==array2[i])
{
  // console.log("true");
count++;

}
else{
  console.log("false");
  //console.log(arr[i]);
  break;
}
if(count==array1.length&&count==array2.length)
{
  console.log("true");
}
}
}
check(expected,actual);
