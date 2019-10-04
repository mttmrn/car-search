const storedMake = sessionStorage.getItem('make'),
  storedModel = sessionStorage.getItem('model'),
  heading = document.getElementById('heading'),
  output = document.getElementById('data'),
  apiKey = "CKaBAjmqPrITAAE8GRY59hWegIfWTg9F",
  apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&start=0&rows=15`;


if (storedMake === null) {
  console.log("Could not find make or model")
} else {
  const loadResults = () => {

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
        if (storedMake === "") {
          heading.innerHTML = `Displaying all cars in your area`
        } else {
          heading.innerHTML = `Displaying ${storedMake}s in your area`
        }
        data.listings.forEach(element => {
          output.innerHTML += `<div class="results">
          <div class="title-container"><span class="listing-title">${element.heading}</span></div>
          <div class="img-container"><img class="list-img" src="${element.media.photo_links[0]}" alt="no image available"></div>
          <div class="info-container">
          <div class="price-container"><span class="price">$${element.price}</span><span class="mileage">${element.miles} miles</span></div>
          <div class="history-container"><ul class="columns">
          <li class="column-item"><span class="history-text">Does it have a clean title? ${element.carfax_clean_title}</span></li>
          <li class="column-item"><span class="history-text">Does it have one owner? ${element.carfax_1_owner}</span></li>
          <li class="column-item"><span class="history-text">Days on market: ${element.dom}</span></li>
          </ul></div>
          </div>
          </div>`;
        });
      });
  }
  loadResults();
}