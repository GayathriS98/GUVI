
let score1=[];
let ball1=[];
let total1;
let individual1=[];

let count=0;
let m=1;
let overs=prompt("ENTER THE NUMBER OF OVERS ");
let per_over1=document.querySelector(".score_per_over_team1");

class team{
    wicket;
    constructor(wickets:number){
        this.wicket=wickets;
    }
    run(){
        return Math.floor((Math.random()*100)%7);
    }
}
let run1=new team(0);
let wickets1=run1.wicket;
function f1()
{
    let temp1;
    if(count<(6*overs))
 {
    
    temp1=run1.run();
    score1.push(temp1);
    total1=score1.reduce(function(total,num){
        return total+num;
    });
    
    //console.log(m);
    //individual cores and ball
    if(temp1==0 || m==6)
    {
        ball1.push(m);
        m=0;
        if(wickets1<11)
        {
            if(wickets1!=0)
            {
            let index=wickets1-1;
            wickets1++;
            let sum=individual1.reduce(function(total,num){
                return total+num;
            });
            individual1.push(total1-sum);
           
            document.querySelector(".team1_total").innerHTML="THE TOTAL SCORE OF TEAM 1 IS "+total1;
            document.querySelector(".wickets1").innerHTML="WICKETS FALLEN "+wickets1;
            }
            else
            {
                wickets1++;
                // ball1.push(m);
                individual1.push(total1);  
                document.querySelector(".team1_total").innerHTML="THE TOTAL SCORE OF TEAM 1 IS "+total1;
                document.querySelector(".wickets1").innerHTML="WICKETS FALLEN "+wickets1;  
            }
         }
    }
    else
    {
        document.querySelector(".team1_total").innerHTML="THE TOTAL SCORE OF TEAM 1 IS "+total1;
        document.querySelector(".wickets1").innerHTML="WICKETS FALLEN "+wickets1;
       
    }
 }
    if(temp1!=0 && count==(6*overs)-1)
    {
        if(m!=0)
        {
        let sum=individual1.reduce(function(total,num){
            return total+num;
        });
        individual1.push(total1-sum);
        ball1.push(m);
        document.querySelector(".team1_total").innerHTML="THE TOTAL SCORE OF TEAM 1 IS "+total1;
        document.querySelector(".wickets1").innerHTML="WICKETS FALLEN "+wickets1;
    }
   
    }
//console.log(temp1);
    if(count<(6*overs))
    {
        if((count)%6 != 0 && (count+1)%6 !=0)
        {
        per_over1.innerHTML=per_over1.innerHTML+temp1+",";
        }
    
        else if((count)%6 != 0 && (count+1)%6 ==0)
        {
            per_over1.innerHTML=per_over1.innerHTML+temp1;
        }
        else if((count)%6 == 0)
        {
        per_over1.innerHTML=temp1+",";
        }
    }
    if(count==(6*overs)-1)
    {
        setTimeout(function estimate1()
        {
            per_over1.innerHTML="";
        },1000);
    }
    if(count<(6*overs))
    {
    m++;
count++;
    }
console.log(count);
localStorage.setItem("team1_score",score1);
    localStorage.setItem("team1_total",total1);
    localStorage.setItem("team1_individual",individual1);
    localStorage.setItem("ball_1",ball1);
       
}

// let team1=new team1();
// let team2=new team2();
// function f1(){
//     team1.f1();
// }
// function f2(){
//     team2.f2();
// }


let score2=[];
let ball2=[];
let total2;
let individual2=[];

var count=0;
let b2_c=1;
//var overs=prompt("ENTER THE NUMBER OF OVERS ");
let per_over2=document.querySelector(".score_per_over_team2");

let run2=new team(0);
let wickets2=run2.wicket;

function f2()
{
    let temp2;
    if(count>=(6*overs) && count<2*(6*overs))
 {
    temp2=run2.run();
    score2.push(temp2);
    total2=score2.reduce(function(total,num){
        return total+num;
    });
    
    //individual cores and ball
    if(temp2==0 || b2_c==6)
    {
        ball2.push(b2_c);
        b2_c=0;
        if(wickets2<11)
        {
            if(wickets2!=0)
            {
            let index=wickets2-1;
            wickets2++;
            let sum=individual2.reduce(function(total,num){
                return total+num;
            });
            individual2.push(total2-sum);
           
            document.querySelector(".team2_total").innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
            document.querySelector(".wickets2").innerHTML="WICKETS FALLEN "+wickets2;
            }
            else
            {
                wickets2++;
               
                individual2.push(total2);  
                document.querySelector(".team2_total").innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
                document.querySelector(".wickets2").innerHTML="WICKETS FALLEN "+wickets2;  
            }
         }
    }
    else
    {
        document.querySelector(".team2_total").innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
        document.querySelector(".wickets2").innerHTML="WICKETS FALLEN "+wickets2;
       
    }
 }
    if(temp2!=0 && count==(2*(6*overs))-1)
    {
        if(b2_c!=0)
        {
        let sum=individual2.reduce(function(total,num){
            return total+num;
        });
        individual2.push(total2-sum);
        ball2.push(b2_c);
        document.querySelector(".team2_total").innerHTML="THE TOTAL SCORE OF TEAM 2 IS "+total2;
        document.querySelector(".wickets2").innerHTML="WICKETS FALLEN "+wickets2;
    }
   
    }
//console.log(temp2);
    if(count<(2*6*overs))
    {
        if((count)%6 != 0 && (count+1)%6 !=0)
        {
        per_over2.innerHTML=per_over2.innerHTML+temp2+",";
        }
    
        else if((count)%6 != 0 && (count+1)%6 ==0)
        {
            per_over2.innerHTML=per_over2.innerHTML+temp2;
        }
        else if((count)%6 == 0)
        {
        per_over2.innerHTML=temp2+",";
        }
    }
    if(count==(2*6*overs)-1)
    {
        setTimeout(function estimate1()
        {
            per_over2.innerHTML="";
        },1000);
    }
    if(count>=(6*overs) && count<2*(6*overs))
    {
    b2_c++;
count++;
    }
localStorage.setItem("team2_score",score2);
    localStorage.setItem("team2_total",total2);
    localStorage.setItem("team2_individual",individual2);
    localStorage.setItem("ball_2",ball2);
       
}
