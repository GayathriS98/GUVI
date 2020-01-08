let obj={
  name:"Rajinikanth",
  age:25,
  haspets:true
};
let result=[];
function extract(obj)
{
  let i=0;
  for(let key in obj)
  {
    result[i]=key;
    i++;
  }
}
extract(obj);
console.log(result);
