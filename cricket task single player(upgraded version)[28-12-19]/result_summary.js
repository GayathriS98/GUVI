let c=window.localStorage.getItem("team1_total");
let d=window.localStorage.getItem("team2_total");
let a=window.localStorage.getItem("team1_score");
let b=window.localStorage.getItem("team2_score");

let res=document.querySelector(".winner");
let sum1=document.querySelector(".team1_summary");
let sum2=document.querySelector(".team2_summary");
let summary1=document.querySelector(".team1_sum");
let summary2=document.querySelector(".team2_sum");
sum1.innerHTML="THE TOTAL SCORE OF TEAM 1 IS "+c;
sum2.innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+d;
let x=parseInt(c)
let y=parseInt(d)
let counter1=0;
let counter2=0;
let m = a.split(',').map(function(item) {
    return parseInt(item, 10);
});
let n = b.split(',').map(function(item) {
    return parseInt(item, 10);
});
//console.log(typeof x);


    if(x>y)
    {
        res.innerHTML="THE WINNER IS TEAM 1";
    }
    else if(y>x)
    {
        res.innerHTML="THE WINNER IS TEAM 2";
    }
    else{
        res.innerHTML="THIS GAME IS A TIE.";
    
    }

function func1()
{
    if(counter1==0)
    {
    for(let i=0;i<m.length;i++)
    {
      // summary1.innerHTML="/n Ball "+(i+1)+" = "+m[i];
      //console.log("ball "+i+" = "+m[i]);
      summary1.innerHTML=summary1.innerHTML+"<br>ball "+(i+1)+" = "+m[i];
    /* let x = document.createElement("div");
     let t = document.createTextNode("ball "+i+" = "+m[i]);
     x.appendChild(t);
     document.body.appendChild(x);*/
    }
    counter1++;
}
}

function func2()
{
    if(counter2==0)
    {
    for(let i=0;i<n.length;i++)
    {
      // summary2.innerHTML="/n Ball "+i+" = "+n[i];
      //console.log("ball "+i+" = "+n[i]);
      summary2.innerHTML=summary2.innerHTML+"<br>ball "+(i+1)+" = "+n[i];
      /*let x = document.createElement("P");
      let t = document.createTextNode("ball "+i+" = "+n[i]);
      x.appendChild(t);
      document.body.appendChild(x);*/
    }
    counter2++;
}
}