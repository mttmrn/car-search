const storedMake = sessionStorage.getItem("make"),
  storedModel = sessionStorage.getItem("model"),
  storedZip = sessionStorage.getItem("zip"),
  heading = document.getElementById("heading"),
  heading2 = document.getElementById("heading2"),
  output = document.getElementById("data"),
  apiKey = "hDf3vM05pCFgcB8TnFqxoRUwsY8S3F4f",
  apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15`,
  lowToHighPrice = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15&sort_by=price&sort_order=asc`,
  highToLowPrice = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15&sort_by=price&sort_order=desc`,
  lowToHighMileage = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15&sort_by=miles&sort_order=asc`,
  highToLowMileage = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15&sort_by=miles&sort_order=desc`,
  lowToHighYear = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15&sort_by=year&sort_order=desc`,
  highToLowYear = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=1-999999&miles_range=1-999999&carfax_clean_title=true&radius=75&start=0&rows=15&sort_by=year&sort_order=asc`,
  locationUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=AjIFpUUnToiKbLHIONgAj0GgnjAX7KgY&location=${storedZip}`;


async function fetchURLs(carAPI = apiUrl) {
  try {
    const data = await Promise.all([
      fetch(carAPI).then((res) => res.json()),
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

    // I think this is what I can change. Finish up this function and then add in the remaining stuff I want based on params
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

const myList = document.querySelector('ul');
const myRequest = new Request('products.json');

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    for (const product of data.products) {
      let listItem = document.createElement('li');
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = product.Name;
      listItem.append(
        ` can be found in ${
          product.Location
        }. Cost: `
      );
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = `£${product.Price}`;
      myList.appendChild(listItem);
    }
  });

*/

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

fetchURLs(apiUrl);

// Adding functionality to toggle filter buttons

const priceFilter = document.querySelector('#price-filter'),
  priceDropdown = document.querySelector('#price-dropdown'),
  mileageFilter = document.querySelector("#mileage-filter"),
  mileageDropdown = document.querySelector("#mileage-dropdown");


const toggleFilter = (dropdown, expandedContent) => {
  const expand = () => {
    expandedContent.classList.toggle("hidden")
    expandedContent.classList.toggle("dropdownAnimation")
  }
  dropdown.addEventListener('click', expand)
}

toggleFilter(mileageDropdown, mileageFilter);
toggleFilter(priceDropdown, priceFilter);



// Adding sort feature

const sortResults = () => {
  switch (sort.value) {
    case "low-price":
      output.innerHTML = "";
      fetchURLs(lowToHighPrice);
      break;
    case "high-price":
      output.innerHTML = "";
      fetchURLs(highToLowPrice);
      break;
    case "low-miles":
      output.innerHTML = "";
      fetchURLs(lowToHighMileage);
      break;
    case "high-miles":
      output.innerHTML = "";
      fetchURLs(highToLowMileage);
      break;
    case "low-year":
      output.innerHTML = "";
      fetchURLs(lowToHighYear);
      break;
    case "high-year":
      output.innerHTML = "";
      fetchURLs(highToLowYear);
      break;
    default:
      output.innerHTML = ""
      fetchURLs(apiUrl)
  }
}

sort.addEventListener("change", sortResults)




// Slider logic
let lowerPriceRange;
let upperPriceRange;

const upperPrice = document.querySelector('#upperPrice'),
  lowerPrice = document.querySelector('#lowerPrice')

let lowerSliderPrice = document.querySelector('#priceRangeLow'),
  upperSliderPrice = document.querySelector('#priceRangeHigh'),
  lowerValPrice = parseInt(lowerSliderPrice.value),
  upperValPrice = parseInt(upperSliderPrice.value);

upperSliderPrice.addEventListener('input', function () {
  lowerValPrice = parseInt(lowerSliderPrice.value);
  upperValPrice = parseInt(upperSliderPrice.value);

  if (upperValPrice > lowerValPrice) {
    switch (upperValPrice) {
      case 100:
        upperPrice.innerHTML = "$100,000"
        break
      case 99:
        upperPrice.innerHTML = "$99,000"
        break
      case 98:
        upperPrice.innerHTML = "$98,000"
        break
      case 97:
        upperPrice.innerHTML = "$97,000"
        break
      case 96:
        upperPrice.innerHTML = "$96,000"
        break
      case 95:
        upperPrice.innerHTML = "$95,000"
        break
      case 94:
        upperPrice.innerHTML = "$94,000"
        break
      case 93:
        upperPrice.innerHTML = "$93,000"
        break
      case 92:
        upperPrice.innerHTML = "$92,000"
        break
      case 91:
        upperPrice.innerHTML = "$91,000"
        break
      case 90:
        upperPrice.innerHTML = "$90,000"
        break
      case 89:
        upperPrice.innerHTML = "$89,000"
        break
      case 88:
        upperPrice.innerHTML = "$88,000"
        break
      case 87:
        upperPrice.innerHTML = "$87,000"
        break
      case 86:
        upperPrice.innerHTML = "$86,000"
        break
      case 85:
        upperPrice.innerHTML = "$85,000"
        break
      case 84:
        upperPrice.innerHTML = "$84,000"
        break
      case 83:
        upperPrice.innerHTML = "$83,000"
        break
      case 82:
        upperPrice.innerHTML = "$82,000"
        break
      case 81:
        upperPrice.innerHTML = "$81,000"
        break
      case 80:
        upperPrice.innerHTML = "$80,000"
        break
      case 79:
        upperPrice.innerHTML = "$79,000"
        break
      case 78:
        upperPrice.innerHTML = "$78,000"
        break
      case 77:
        upperPrice.innerHTML = "$77,000"
        break
      case 76:
        upperPrice.innerHTML = "$76,000"
        break
      case 75:
        upperPrice.innerHTML = "$75,000"
        break
      case 74:
        upperPrice.innerHTML = "$74,000"
        break
      case 73:
        upperPrice.innerHTML = "$73,000"
        break
      case 72:
        upperPrice.innerHTML = "$72,000"
        break
      case 71:
        upperPrice.innerHTML = "$71,000"
        break
      case 70:
        upperPrice.innerHTML = "$70,000"
        break
      case 69:
        upperPrice.innerHTML = "$69,000"
        break
      case 68:
        upperPrice.innerHTML = "$68,000"
        break
      case 67:
        upperPrice.innerHTML = "$67,000"
        break
      case 66:
        upperPrice.innerHTML = "$66,000"
        break
      case 65:
        upperPrice.innerHTML = "$65,000"
        break
      case 64:
        upperPrice.innerHTML = "$64,000"
        break
      case 63:
        upperPrice.innerHTML = "$63,000"
      case 62:
        upperPrice.innerHTML = "$62,000"
        break
      case 61:
        upperPrice.innerHTML = "$61,000"
        break
      case 60:
        upperPrice.innerHTML = "$60,000"
        break
      case 59:
        upperPrice.innerHTML = "$59,000"
        break
      case 58:
        upperPrice.innerHTML = "$58,000"
        break
      case 57:
        upperPrice.innerHTML = "$57,000"
        break
      case 56:
        upperPrice.innerHTML = "$56,000"
        break
      case 55:
        upperPrice.innerHTML = "$55,000"
        break
      case 54:
        upperPrice.innerHTML = "$54,000"
        break
      case 53:
        upperPrice.innerHTML = "$53,000"
        break
      case 52:
        upperPrice.innerHTML = "$52,000"
        break
      case 51:
        upperPrice.innerHTML = "$51,000"
        break
      case 50:
        upperPrice.innerHTML = "$50,000"
        break
      case 49:
        upperPrice.innerHTML = "$49,000"
        break
      case 48:
        upperPrice.innerHTML = "$48,000"
        break
      case 47:
        upperPrice.innerHTML = "$47,000"
        break
      case 46:
        upperPrice.innerHTML = "$46,000"
        break
      case 45:
        upperPrice.innerHTML = "$45,000"
        break
      case 44:
        upperPrice.innerHTML = "$44,000"
        break
      case 43:
        upperPrice.innerHTML = "$43,000"
        break
      case 42:
        upperPrice.innerHTML = "$42,000"
      case 41:
        upperPrice.innerHTML = "$41,000"
        break
      case 40:
        upperPrice.innerHTML = "$40,000"
        break
      case 39:
        upperPrice.innerHTML = "$39,000"
        break
      case 38:
        upperPrice.innerHTML = "$38,000"
        break
      case 37:
        upperPrice.innerHTML = "$37,000"
        break
      case 36:
        upperPrice.innerHTML = "$36,000"
        break
      case 35:
        upperPrice.innerHTML = "$35,000"
        break
      case 34:
        upperPrice.innerHTML = "$34,000"
        break
      case 33:
        upperPrice.innerHTML = "$33,000"
        break
      case 32:
        upperPrice.innerHTML = "$32,000"
        break
      case 31:
        upperPrice.innerHTML = "$31,000"
        break
      case 30:
        upperPrice.innerHTML = "$30,000"
        break
      case 29:
        upperPrice.innerHTML = "$29,000"
        break
      case 28:
        upperPrice.innerHTML = "$28,000"
        break
      case 27:
        upperPrice.innerHTML = "$27,000"
        break
      case 26:
        upperPrice.innerHTML = "$26,000"
        break
      case 25:
        upperPrice.innerHTML = "$25,000"
        break
      case 24:
        upperPrice.innerHTML = "$24,000"
        break
      case 23:
        upperPrice.innerHTML = "$23,000"
        break
      case 22:
        upperPrice.innerHTML = "$22,000"
        break
      case 21:
        upperPrice.innerHTML = "$21,000"
        break
      case 20:
        upperPrice.innerHTML = "$20,000"
        break
      case 19:
        upperPrice.innerHTML = "$19,000"
        break
      case 18:
        upperPrice.innerHTML = "$18,000"
        break
      case 17:
        upperPrice.innerHTML = "$17,000"
        break
      case 16:
        upperPrice.innerHTML = "$16,000"
        break
      case 15:
        upperPrice.innerHTML = "$15,000"
        break
      case 14:
        upperPrice.innerHTML = "$14,000"
        break
      case 13:
        upperPrice.innerHTML = "$13,000"
        break
      case 12:
        upperPrice.innerHTML = "$12,000"
        break
      case 11:
        upperPrice.innerHTML = "$11,000"
        break
      case 10:
        upperPrice.innerHTML = "$10,000"
        break
      case 9:
        upperPrice.innerHTML = "$9,000"
        break
      case 8:
        upperPrice.innerHTML = "$8,000"
        break
      case 7:
        upperPrice.innerHTML = "$7,000"
        break
      case 6:
        upperPrice.innerHTML = "$6,000"
        break
      case 5:
        upperPrice.innerHTML = "$5,000"
        break
      case 4:
        upperPrice.innerHTML = "$4,000"
        break
      case 3:
        upperPrice.innerHTML = "$3,000"
        break
      case 2:
        upperPrice.innerHTML = "$2,000"
        break
      case 1:
        upperPrice.innerHTML = "$1,000"
        break

    }
  }

  upperPriceRange = parseInt(upperPrice.innerHTML.replace(/[$,]/g, ""))

  if (upperValPrice < lowerValPrice + 5) {
    upperSliderPrice.value = lowerValPrice + 5
  }
});


lowerSliderPrice.addEventListener('input', function () {
  lowerValPrice = parseInt(lowerSliderPrice.value);
  upperValPrice = parseInt(upperSliderPrice.value);

  if (upperValPrice > lowerValPrice) {
    switch (lowerValPrice) {
      case 99:
        lowerPrice.innerHTML = "$99,000"
        break
      case 98:
        lowerPrice.innerHTML = "$98,000"
        break
      case 97:
        lowerPrice.innerHTML = "$97,000"
        break
      case 96:
        lowerPrice.innerHTML = "$96,000"
        break
      case 95:
        lowerPrice.innerHTML = "$95,000"
        break
      case 94:
        lowerPrice.innerHTML = "$94,000"
        break
      case 93:
        lowerPrice.innerHTML = "$93,000"
        break
      case 92:
        lowerPrice.innerHTML = "$92,000"
        break
      case 91:
        lowerPrice.innerHTML = "$91,000"
        break
      case 90:
        lowerPrice.innerHTML = "$90,000"
        break
      case 89:
        lowerPrice.innerHTML = "$89,000"
        break
      case 88:
        lowerPrice.innerHTML = "$88,000"
        break
      case 87:
        lowerPrice.innerHTML = "$87,000"
        break
      case 86:
        lowerPrice.innerHTML = "$86,000"
        break
      case 85:
        lowerPrice.innerHTML = "$85,000"
        break
      case 84:
        lowerPrice.innerHTML = "$84,000"
        break
      case 83:
        lowerPrice.innerHTML = "$83,000"
        break
      case 82:
        lowerPrice.innerHTML = "$82,000"
        break
      case 81:
        lowerPrice.innerHTML = "$81,000"
        break
      case 80:
        lowerPrice.innerHTML = "$80,000"
        break
      case 79:
        lowerPrice.innerHTML = "$79,000"
        break
      case 78:
        lowerPrice.innerHTML = "$78,000"
        break
      case 77:
        lowerPrice.innerHTML = "$77,000"
        break
      case 76:
        lowerPrice.innerHTML = "$76,000"
        break
      case 75:
        lowerPrice.innerHTML = "$75,000"
        break
      case 74:
        lowerPrice.innerHTML = "$74,000"
        break
      case 73:
        lowerPrice.innerHTML = "$73,000"
        break
      case 72:
        lowerPrice.innerHTML = "$72,000"
        break
      case 71:
        lowerPrice.innerHTML = "$71,000"
        break
      case 70:
        lowerPrice.innerHTML = "$70,000"
        break
      case 69:
        lowerPrice.innerHTML = "$69,000"
        break
      case 68:
        lowerPrice.innerHTML = "$68,000"
        break
      case 67:
        lowerPrice.innerHTML = "$67,000"
        break
      case 66:
        lowerPrice.innerHTML = "$66,000"
        break
      case 65:
        lowerPrice.innerHTML = "$65,000"
        break
      case 64:
        lowerPrice.innerHTML = "$64,000"
        break
      case 63:
        lowerPrice.innerHTML = "$63,000"
      case 62:
        lowerPrice.innerHTML = "$62,000"
        break
      case 61:
        lowerPrice.innerHTML = "$61,000"
        break
      case 60:
        lowerPrice.innerHTML = "$60,000"
        break
      case 59:
        lowerPrice.innerHTML = "$59,000"
        break
      case 58:
        lowerPrice.innerHTML = "$58,000"
        break
      case 57:
        lowerPrice.innerHTML = "$57,000"
        break
      case 56:
        lowerPrice.innerHTML = "$56,000"
        break
      case 55:
        lowerPrice.innerHTML = "$55,000"
        break
      case 54:
        lowerPrice.innerHTML = "$54,000"
        break
      case 53:
        lowerPrice.innerHTML = "$53,000"
        break
      case 52:
        lowerPrice.innerHTML = "$52,000"
        break
      case 51:
        lowerPrice.innerHTML = "$51,000"
        break
      case 50:
        lowerPrice.innerHTML = "$50,000"
        break
      case 49:
        lowerPrice.innerHTML = "$49,000"
        break
      case 48:
        lowerPrice.innerHTML = "$48,000"
        break
      case 47:
        lowerPrice.innerHTML = "$47,000"
        break
      case 46:
        lowerPrice.innerHTML = "$46,000"
        break
      case 45:
        lowerPrice.innerHTML = "$45,000"
        break
      case 44:
        lowerPrice.innerHTML = "$44,000"
        break
      case 43:
        lowerPrice.innerHTML = "$43,000"
        break
      case 42:
        lowerPrice.innerHTML = "$42,000"
      case 41:
        lowerPrice.innerHTML = "$41,000"
        break
      case 40:
        lowerPrice.innerHTML = "$40,000"
        break
      case 39:
        lowerPrice.innerHTML = "$39,000"
        break
      case 38:
        lowerPrice.innerHTML = "$38,000"
        break
      case 37:
        lowerPrice.innerHTML = "$37,000"
        break
      case 36:
        lowerPrice.innerHTML = "$36,000"
        break
      case 35:
        lowerPrice.innerHTML = "$35,000"
        break
      case 34:
        lowerPrice.innerHTML = "$34,000"
        break
      case 33:
        lowerPrice.innerHTML = "$33,000"
        break
      case 32:
        lowerPrice.innerHTML = "$32,000"
        break
      case 31:
        lowerPrice.innerHTML = "$31,000"
        break
      case 30:
        lowerPrice.innerHTML = "$30,000"
        break
      case 29:
        lowerPrice.innerHTML = "$29,000"
        break
      case 28:
        lowerPrice.innerHTML = "$28,000"
        break
      case 27:
        lowerPrice.innerHTML = "$27,000"
        break
      case 26:
        lowerPrice.innerHTML = "$26,000"
        break
      case 25:
        lowerPrice.innerHTML = "$25,000"
        break
      case 24:
        lowerPrice.innerHTML = "$24,000"
        break
      case 23:
        lowerPrice.innerHTML = "$23,000"
        break
      case 22:
        lowerPrice.innerHTML = "$22,000"
        break
      case 21:
        lowerPrice.innerHTML = "$21,000"
        break
      case 20:
        lowerPrice.innerHTML = "$20,000"
        break
      case 19:
        lowerPrice.innerHTML = "$19,000"
        break
      case 18:
        lowerPrice.innerHTML = "$18,000"
        break
      case 17:
        lowerPrice.innerHTML = "$17,000"
        break
      case 16:
        lowerPrice.innerHTML = "$16,000"
        break
      case 15:
        lowerPrice.innerHTML = "$15,000"
        break
      case 14:
        lowerPrice.innerHTML = "$14,000"
        break
      case 13:
        lowerPrice.innerHTML = "$13,000"
        break
      case 12:
        lowerPrice.innerHTML = "$12,000"
        break
      case 11:
        lowerPrice.innerHTML = "$11,000"
        break
      case 10:
        lowerPrice.innerHTML = "$10,000"
        break
      case 9:
        lowerPrice.innerHTML = "$9,000"
        break
      case 8:
        lowerPrice.innerHTML = "$8,000"
        break
      case 7:
        lowerPrice.innerHTML = "$7,000"
        break
      case 6:
        lowerPrice.innerHTML = "$6,000"
        break
      case 5:
        lowerPrice.innerHTML = "$5,000"
        break
      case 4:
        lowerPrice.innerHTML = "$4,000"
        break
      case 3:
        lowerPrice.innerHTML = "$3,000"
        break
      case 2:
        lowerPrice.innerHTML = "$2,000"
        break
      case 1:
        lowerPrice.innerHTML = "$1,000"
        break
      case 0:
        lowerPrice.innerHTML = "$0"
        break;

    }
  }

  if (lowerValPrice > upperValPrice - 5) {
    lowerSliderPrice.value = upperValPrice - 5;
  }
});