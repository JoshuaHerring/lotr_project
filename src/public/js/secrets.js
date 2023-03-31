const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = new URLSearchParams(formData);

  
  const response = await fetch(form.action, {
      method: 'POST',
          body: data
        });
        if(response.status = 201)
        {
          console.log("good job")
          form.reset();
          alert("Thank you for sharing your secret, I guess it's not a secret anymore!")
        }
        else{
          console.log("unkwon error")
          alert("Error: I have not done error validation but something went wrong try filling in all the fields if they are not filled in already.")
        }
});
