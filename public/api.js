const storedMake = sessionStorage.getItem("make"),
  storedModel = sessionStorage.getItem("model"),
  storedZip = sessionStorage.getItem("zip"),
  heading = document.getElementById("heading"),
  heading2 = document.getElementById("heading2"),
  output = document.getElementById("data"),
  apiKey = "hDf3vM05pCFgcB8TnFqxoRUwsY8S3F4f",
  apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15`,
  locationUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=AjIFpUUnToiKbLHIONgAj0GgnjAX7KgY&location=${storedZip}`;


async function fetchURLs() {
  try {
    const data = await Promise.all([
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

    // I think this is what I can change it. Finish up this function and then add in the remaining stuff I want based on params
    await data[0].listings.forEach(element => {

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
      <li class="column-item"><div class="center"><span class="iconify checkmark" data-icon="ion:checkmark-circle-sharp" data-inline="false"></span></div><div class="center"><span class="history-text">Car has a clean title and 
      has been inspected.</span></div></li>
      <li class="column-item"><span class="history-text">Does it have one owner? ${
        element.carfax_1_owner
      }</span></li>
      <li class="column-item"><span class="history-text">Days on market: ${
        element.dom
      }</span></li>
      </ul></div>
      <div class="details-container"><span class="detail location">Location: ${
        element.dealer.city
      }, ${element.dealer.state}</span>
      <span class="detail exterior">Exterior: ${
        element.exterior_color
      }</span><span class="detail interior"> Interior: ${
        element.interior_color
      }</span>
      <span class="detail transmission"> Transmission: ${
        element.build.transmission
      }</span>
      </div>
      </div>
      </div>
      </a>`;

      const location = document.querySelector(".location"),
        exterior = document.querySelector(".exterior"),
        interior = document.querySelector(".interior"),
        transmission = document.querySelector(".transmission");

      if (element.dealer.city === undefined) {
        location.parentNode.removeChild(location)
      }
      if (element.exterior_color === undefined) {
        exterior.parentNode.removeChild(exterior)
      }
      if (element.interior_color === undefined) {
        interior.parentNode.removeChild(interior)
      }
      if (element.build.transmission === undefined || element.build.transmission === null || element.build.transmission === 0) {
        transmission.parentNode.removeChild(transmission)
      }

      if (element.media.photo_links[0] === undefined) {
        console.log("there's no image to be found")
      }

      /*
      Possible solutions: loop through data and set unique IDs for each element that returns "undefined". 
      Target those unique IDs in another loop outside the function after it's been constructed.

      Loop through data and set variables like location = true; Do "if" statements for each parameter and set it
      to false if it's undefined. If any parameter is false, remove it;
          Comment: I did a version of

      Set inline style to display: none but I don't know if that will set it for every one.

      Give them a default display: none and then loop through each; 
      
      const checkDetails = (param) => {
              if (param === undefined) {
                ${param}.classList.add("hidden")
      }
      }


      */

    });

    // fetchURLs().then(doOtherStuff);
    /* function doOtherStuff() {

    } */

    // number of pages = whatever I set the limit to / total results.
    // i.e. If I do 10 results per page and there are 54 results, we divide 54 / 10 and get 5.4
    // We can then round that up and get 6 pages, which would be the total needed to house 54 results

    console.log(data)
    console.log(data[1].results[0].locations[0].adminArea5)
    console.log(data[1].results[0].locations[0].adminArea3)
    //logger utility method, logs output to screen


  } catch (error) {
    console.log(error);
  }
}

fetchURLs();