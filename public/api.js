const load = () => {
    const storedMake = localStorage.getItem('make');
    const storedModel = localStorage.getItem('model');
    console.log(storedMake);
    console.log(storedModel);

const apiKey = "CKaBAjmqPrITAAE8GRY59hWegIfWTg9F",
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}`;

  fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Host': 'marketcheck-prod.apigee.net',
        'Content-type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const output = document.getElementById('data')
      data.listings.forEach(element => {
          output.innerHTML += `<li>${element.heading} | Price: ${element.price} | Miles: ${element.miles}</li>`
      });
    });
}

load()