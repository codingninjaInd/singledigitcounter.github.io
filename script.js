var input = document.querySelector("input");

var buttion = document.getElementById('btn');

console.log(buttion);


var current=document.querySelector(".current");

var next=document.querySelector(".next");

var interval

function initialStage()
{

    current.innerHTML = 0;

    next.innerHTML = 1;
}


buttion.addEventListener('click',startCounter);





function animation(){


    if(parseInt(next.innerHTML)>parseInt(input.value))
    {
        alert('counter is stopped');

        clearInterval(interval);
        return;
    }


    next.classList.add('animate');

    setTimeout(function(){

        current.innerHTML = next.innerHTML;
        next.innerHTML = parseInt(next.innerHTML)+1;
        next.classList.remove('animate');

    },500);

   
}


function startCounter()
{

    initialStage();


    interval = setInterval(animation,1000);

 
}
