let obj={
  name:"Rajinikanth",
  age:33,
  hasPets:false
};
var result=[];
function extract(obj){
  let i=0;
  for(let key in obj)
  {
      result[i]=obj[key];
      i++;
  }
}
extract(obj);
console.log(result);
