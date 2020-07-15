// DECLARING VARIABLES

let submitButton = document.getElementById("submit");
let fullName = document.getElementById("fullname");
let eMail = document.getElementById("email");
let message = document.getElementById("message");

// Declare variable that will store regular expression for email
let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// Start with your function here
function validateForm(event)
{

// Declare object that will store the form-data
// Declare array that will store the errors
event.preventDefault();
let formData = {};
let formErrors = [];

// Check if fullname is not empty.
	if(fullName.value !== "")
	{
    	formData['fullname'] = fullName.value;
    } else 
    {
    	formErrors.push({fullname : "Full name is missing."});
    }


// Check if email is not empty.
    if(eMail.value !== "")
    {
    	if (pattern.test(eMail.value))
    	{
    		formData['email'] = eMail.value;
    	} else 
    	{
    		formErrors.push({email: "Invalid email!"});
    	}

    } else 
    {
    	formErrors.push({email: "Email is missing."});
    }

// Check if message is not empty.
    if(message.value !== "")
    {
    	formData['message'] = message.value;
    } else 
    {
    	formErrors.push({message: "Message is missing."});
    }

// Check if there is anything in array errors
    if(formErrors.length > 0)
    {
    	console.log(formErrors);
    } else 
    {
    	console.log(formData);
    	fullName.value = "";
    	eMail.value = "";
    	message.value = "";
    }

//or

    if(formErrors.length >= 1)
    {
    	console.log(formErrors);
    } else 
    {
    	console.log(formData);
    	document.getElementById("fullname").value = "";
    	document.getElementById("email").value = "";
    	document.getElementById("message").value = "";
    }
    
}
    
// Register your form to "click" event.
submitButton.addEventListener("click", validateForm);

