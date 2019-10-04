const storedMake = localStorage.getItem('make'),
  storedModel = localStorage.getItem('model'),
  heading = document.getElementById('heading'),
  output = document.getElementById('data'),
  apiKey = "CKaBAjmqPrITAAE8GRY59hWegIfWTg9F",
  apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}`,
  firstLetter = storedMake.charAt(0);

const load = () => {


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
      heading.innerHTML = `Displaying ${storedMake}s in your area`
      data.listings.forEach(element => {

        output.innerHTML += `<li class="results">${element.heading} | Price: ${element.price} | Miles: ${element.miles}</li>`
      });
    });
}

load()