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
          heading.innerHTML = `Displaying ${data.num_found.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} results for ${data.listings[0].build.make} ${data.listings[0].build.model} in your area`
        }
        data.listings.forEach(element => {

        

          output.innerHTML += `<a class="listing-link" href="http://127.0.0.1:5500/public/vehicles/${element.vin}" target="_blank"><div class="results">
          <div class="title-container"><span class="listing-title">${element.build.year} ${element.build.make} ${element.build.model} ${element.build.trim}</span></div>
          <div class="img-container"><img class="list-img" src="${element.media.photo_links[0]}" alt="no image available"></div>
          <div class="info-container">
          <div class="price-container"><span class="price">$${element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span><span class="mileage">Mileage: ${element.miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></div>
          <div class="history-container"><ul class="columns">
          <li class="column-item"><span class="history-text">Does it have a clean title? ${element.carfax_clean_title}</span></li>
          <li class="column-item"><span class="history-text">Does it have one owner? ${element.carfax_1_owner}</span></li>
          <li class="column-item"><span class="history-text">Days on market: ${element.dom}</span></li>
          </ul></div>
          <div class="details-container"><span class="detail">Location: ${element.dealer.city}, ${element.dealer.state}</span>
          <span class="detail">Exterior: ${element.exterior_color}</span><span class="detail"> Interior: ${element.interior_color}</span>
          </div>
          </div>
          </div>
          </a>`;
          const addComma = element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
      });
  }
  loadResults();
}