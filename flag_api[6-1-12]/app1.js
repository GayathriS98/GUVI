const api="https://restcountries.eu/rest/v2/all";
//document.querySelector(".card_title").innerHTML="THE TOTAL SCORE OF TEAM 1 IS ";

let xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=success;
xmlhttp.onerror=error;
xmlhttp.open('GET',api);
xmlhttp.send();



//let name=[],capital=[],population=[],currency=[],language=[],flag=[],region=[];
function success(){
  
let name=[],capital=[],population=[],currency=[],language=[],flag=[],region=[];

  var data=JSON.parse(this.responseText);  
  for(let i=0;i<(data.length);i=i+1)
    {
      name.push(data[i].name);
      region.push(data[i].region);
      capital.push(data[i].capital);
      population.push(data[i].population);
      currency.push(data[i].currencies[0].name);
      language.push(data[i].languages[0].name);
      flag.push(data[i].flag);

    }

    // console.log(name[0]);
    // document.querySelector(".c1_tit").innerHTML=name[0];
    for(let i=0;i<250;i++)
{
    var x = document.createElement("div")
    console.log(flag[i]);
  // <div class="container">
    //("class","row row-cols-1 row-cols-sm-2 row-cols-md-4">
      x.setAttribute("class","col");
        x.innerHTML="<div class=\"card cards\" style=\"width: 18rem;\">"+
          "<img class=\"card-img-top c_im imga\" src="+flag[i]+" alt=\"flag img\">"+
          "<div class=\"card-body\">"+
            "<h5 class=\"card-title c_tit\">"+name[i]+"</h5>"+
            "<p class=\"card-text\">"+
              "<div class=\"capital\">Capital : "+capital[i]+"</div>"+
              "<div class=\"region\">Region : "+region[i]+"</div>"+
              "<div class=\"population\">Population : "+population[i]+"</div>"+
              "<div class=\"currency\">Currency : "+currency[i]+"</div>"+
              "<div class=\"language\">Language :"+language[i]+"</div>"+
            "</p></div></div></div>";
          document.querySelector(".row").appendChild(x);
  }};

  function error(err){
    console.log(error);
  }