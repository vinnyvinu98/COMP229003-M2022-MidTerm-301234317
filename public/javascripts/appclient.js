// Filename: appclient.js
// Student: Vinny Mariam Vinu
// StudentId: 301234317
// Date: Jun 23, 2022
// MidTerm: Used car store application 

console.log('app script is working.');

// confirm to delete the car from database
if(getTitle == "Cars List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}

// user authentication- signup 
//password check
if(getTitle == "Sign-up Form")
{
    const confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange); 
}

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}