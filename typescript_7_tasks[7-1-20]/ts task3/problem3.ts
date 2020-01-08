let obj = {
  name:"ISRO",
  age:35,
  role:"Scientist"
};

let res=[];
function convertListToObject(obj) {
 let i=0;
 for(let key in obj)
 {
   let tem=[];
   tem[0]=key;
   tem[1]=obj[key];
   res[i]=tem;
   i++;
 }
}
convertListToObject(obj);
console.log(res);
