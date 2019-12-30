let score1=[];
let ball1=[];
let total1;
let individual1=[];
let wickets1=0;
var count=0;
let m=1;
var overs=prompt("ENTER THE NUMBER OF OVERS ");
let per_over1=document.querySelector(".score_per_over_team1");
function f1()
{
    let temp1;
    if(count<(6*overs))
 {
    
    temp1=Math.floor((Math.random()*100)%7);
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
