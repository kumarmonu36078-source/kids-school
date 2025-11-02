const btn=document.querySelectorAll(".button")
const body=document.querySelector("body")
btn.forEach(function(elemnt)
{ 
    console.log(elemnt);
    
   
    elemnt.addEventListener('click',function(e)
{
    console.log(e);
    console.log(e.target.id);

    
    //  if statement code starts form here  -->

    // if(e.target.id === 'grey')
    // {
    //     body.style.backgroundColor=e.target.id
    //     }
    // if(e.target.id === 'yellow')
    // {
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id === 'black')
    // {
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id === 'red')
    // {
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id === 'purple')
    // {
    //     body.style.backgroundColor=e.target.ida
    // }


    // {==> 
    // .  }

    //  switch case starts from here -->
    
    switch(e.target.id)
    {
        case 'grey': body.style.backgroundColor=e.target.id
        break;
        case 'yellow': body.style.backgroundColor=e.target.id
        break;
        case 'black': body.style.backgroundColor=e.target.id
        break;
        case 'red': body.style.backgroundColor=e.target.id
        break;
        case 'purple': body.style.backgroundColor=e.target.id
        break;

    }

})
   
    
});


