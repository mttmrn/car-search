const storedMake = sessionStorage.getItem("make"),
  storedModel = sessionStorage.getItem("model"),
  storedZip = sessionStorage.getItem("zip"),
  heading = document.getElementById("heading"),
  heading2 = document.getElementById("heading2"),
  output = document.getElementById("data"),
  apiKey = "CKaBAjmqPrITAAE8GRY59hWegIfWTg9F",
  apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15`,
  locationUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=AjIFpUUnToiKbLHIONgAj0GgnjAX7KgY&location=${storedZip}`;


//https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more/
async function fetchURLs() {
  try {
    // Promise.all() lets us coalesce multiple promises into a single super-promise
    const data = await Promise.all([
      /* Alternatively store each in an array */
      // var [x, y, z] = await Promise.all([
      // parse results as json; fetch data response has several reader methods available:
      //.arrayBuffer()
      //.blob()
      //.formData()
      //.json()
      //.text()
      fetch(apiUrl).then((res) => res.json()),
      fetch(locationUrl).then((res) => res.json())
    ]);

    if (storedMake === "") {
      heading.innerHTML = `Displaying ${data[0].num_found
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} cars near ${data[1].results[0].locations[0].adminArea5}, ${data[1].results[0].locations[0].adminArea3}`;
    } else {
      heading.innerHTML = `Displaying ${data[0].num_found
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} results for ${
        data[0].listings[0].build.make
      } ${data[0].listings[0].build.model} near ${data[1].results[0].locations[0].adminArea5}, ${data[1].results[0].locations[0].adminArea3}`;
    }
    data[0].listings.forEach(element => {
      output.innerHTML += `<a class="listing-link" href="http://127.0.0.1:5500/public/vehicles/${
        element.vin
      }" target="_blank"><div class="results">
      <div class="title-container"><span class="listing-title">${
        element.build.year
      } ${element.build.make} ${element.build.model} ${
        element.build.trim
      }</span></div>
      <div class="img-container"><img class="list-img" src="${
        element.media.photo_links[0]
      }" alt=""></div>
      <div class="info-container">
      <div class="price-container"><span class="price">$${element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span><span class="mileage">Mileage: ${element.miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span></div>
      <div class="history-container"><ul class="columns">
      <li class="column-item"><span class="history-text">Does it have a clean title? ${
        element.carfax_clean_title
      }</span></li>
      <li class="column-item"><span class="history-text">Does it have one owner? ${
        element.carfax_1_owner
      }</span></li>
      <li class="column-item"><span class="history-text">Days on market: ${
        element.dom
      }</span></li>
      </ul></div>
      <div class="details-container"><span class="detail">Location: ${
        element.dealer.city
      }, ${element.dealer.state}</span>
      <span class="detail">Exterior: ${
        element.exterior_color
      }</span><span class="detail"> Interior: ${
        element.interior_color
      }</span>
      </div>
      </div>
      </div>
      </a>`;

    });

    console.log(data)
    console.log(data[1].results[0].locations[0].adminArea5)
    console.log(data[1].results[0].locations[0].adminArea3)
    //logger utility method, logs output to screen


  } catch (error) {
    console.log(error);
  }
}

fetchURLs();