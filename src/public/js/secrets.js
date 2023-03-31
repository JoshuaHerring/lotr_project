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
        }
        else{
          console.log("unkwon error")
        }
});
