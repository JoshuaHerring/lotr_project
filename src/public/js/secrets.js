const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    title: formData.get('title'),
    race: formData.get('race'),
    description: formData.get('description')
  };

  const body = JSON.stringify(data);
  console.log("body :" + body);
  
  const response = await fetch(form.action, {
      method: 'POST',
      // headers: {
          //     'Content-Type': 'application/json'
          //   },
          body: formData
        });

        console.log("response : " + response);
    

  // Handle the API response here
});
