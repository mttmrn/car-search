let storedMake = sessionStorage.getItem("make"),
  storedModel = sessionStorage.getItem("model"),
  storedZip = sessionStorage.getItem("zip");
locationUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=AjIFpUUnToiKbLHIONgAj0GgnjAX7KgY&location=${storedZip}`;
radius = document.querySelector('#radius'),
  errCount = 0

const heading = document.querySelector('#heading'),
  output = document.querySelector('#data'),
  pagination = document.querySelector('#pagination-container'),
  pageUp = document.querySelector('#pageUp'),
  pageDown = document.querySelector('#pageDown'),
  apiKey = "TOwzUUuiHdSdXMKwTWvC0vt4CUt0XcDC";

let page = 0,
  startingNum = 1,
  endingNum = 10,
  lowerPriceRange = 1,
  upperPriceRange = 999999,
  lowerMilesRange = 1,
  upperMilesRange = 999999,
  lowerYearRange = 2005,
  upperYearRange = 2020,
  years = range(lowerYearRange, upperYearRange),
  sortFacets = "",
  colors = [],
  colorFacets = "" + colors,
  engineFacets = "",
  transmissionFacets = "",
  featuresFacets = "",
  apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;

// Sidebar search form

const make = document.querySelector("#makes"),
  models = document.querySelector("#models"),
  zip = document.querySelector("#zip"),
  zipError = document.querySelector('#zipError'),
  searchBtn = document.querySelector('#searchBtn');


//! Get year range
function range(start, end) {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
}

//! Get different cars depending on user input
const getCar = () => {
  fetch("cars.json")
    .then(res => res.json())
    .then(data => {
      switch (make.value) {
        case "":
          models.innerHTML = "";
          models.innerHTML += `<option value="">All Models</option>`;
          break;
        case "acura":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.acura.length; i++) {
            models.innerHTML += `<option value="${data.acura[
              i
            ].toLowerCase()}">${data.acura[i]}</option>`;
          }
          break;
        case "alfa romeo":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.alfaRomeo.length; i++) {
            models.innerHTML += `<option value="${data.alfaRomeo[
              i
            ].toLowerCase()}">${data.alfaRomeo[i]}</option>`;
          }
          break;
        case "aston martin":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.astonMartin.length; i++) {
            models.innerHTML += `<option value="${data.astonMartin[
              i
            ].toLowerCase()}">${data.astonMartin[i]}</option>`;
          }
          break;
        case "audi":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.audi.length; i++) {
            models.innerHTML += `<option value="${data.audi[
              i
            ].toLowerCase()}">${data.audi[i]}</option>`;
          }
          break;
        case "bentley":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.bentley.length; i++) {
            models.innerHTML += `<option value="${data.bentley[
              i
            ].toLowerCase()}">${data.bentley[i]}</option>`;
          }
          break;
        case "bmw":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.bmw.length; i++) {
            models.innerHTML += `<option value="${data.bmw[i].toLowerCase()}">${
              data.bmw[i]
              }</option>`;
          }
          break;
        case "buick":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.buick.length; i++) {
            models.innerHTML += `<option value="${data.buick[
              i
            ].toLowerCase()}">${data.buick[i]}</option>`;
          }
          break;
        case "cadillac":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.cadillac.length; i++) {
            models.innerHTML += `<option value="${data.cadillac[
              i
            ].toLowerCase()}">${data.cadillac[i]}</option>`;
          }
          break;
        case "chevrolet":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.chevrolet.length; i++) {
            models.innerHTML += `<option value="${data.chevrolet[
              i
            ].toLowerCase()}">${data.chevrolet[i]}</option>`;
          }
          break;
        case "chrysler":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.chrysler.length; i++) {
            models.innerHTML += `<option value="${data.chrysler[
              i
            ].toLowerCase()}">${data.chrysler[i]}</option>`;
          }
          break;
        case "dodge":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.dodge.length; i++) {
            models.innerHTML += `<option value="${data.dodge[
              i
            ].toLowerCase()}">${data.dodge[i]}</option>`;
          }
          break;
        case "fiat":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.fiat.length; i++) {
            models.innerHTML += `<option value="${data.fiat[
              i
            ].toLowerCase()}">${data.fiat[i]}</option>`;
          }
          break;
        case "ford":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.ford.length; i++) {
            models.innerHTML += `<option value="${data.ford[
              i
            ].toLowerCase()}">${data.ford[i]}</option>`;
          }
          break;
        case "gmc":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.gmc.length; i++) {
            models.innerHTML += `<option value="${data.gmc[i].toLowerCase()}">${
              data.gmc[i]
              }</option>`;
          }
          break;
        case "honda":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.honda.length; i++) {
            models.innerHTML += `<option value="${data.honda[
              i
            ].toLowerCase()}">${data.honda[i]}</option>`;
          }
          break;
        case "hyundai":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.hyundai.length; i++) {
            models.innerHTML += `<option value="${data.hyundai[
              i
            ].toLowerCase()}">${data.hyundai[i]}</option>`;
          }
          break;
        case "infiniti":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.infiniti.length; i++) {
            models.innerHTML += `<option value="${data.infiniti[
              i
            ].toLowerCase()}">${data.infiniti[i]}</option>`;
          }
          break;
        case "jaguar":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.jaguar.length; i++) {
            models.innerHTML += `<option value="${data.jaguar[
              i
            ].toLowerCase()}">${data.jaguar[i]}</option>`;
          }
          break;
        case "jeep":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.jeep.length; i++) {
            models.innerHTML += `<option value="${data.jeep[
              i
            ].toLowerCase()}">${data.jeep[i]}</option>`;
          }
          break;
        case "kia":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.kia.length; i++) {
            models.innerHTML += `<option value="${data.kia[i].toLowerCase()}">${
              data.kia[i]
              }</option>`;
          }
          break;
        case "land rover":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.landRover.length; i++) {
            models.innerHTML += `<option value="${data.landRover[
              i
            ].toLowerCase()}">${data.landRover[i]}</option>`;
          }
          break;
        case "lexus":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.lexus.length; i++) {
            models.innerHTML += `<option value="${data.lexus[
              i
            ].toLowerCase()}">${data.lexus[i]}</option>`;
          }
          break;
        case "lincoln":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.lincoln.length; i++) {
            models.innerHTML += `<option value="${data.lincoln[
              i
            ].toLowerCase()}">${data.lincoln[i]}</option>`;
          }
          break;
        case "mazda":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.mazda.length; i++) {
            models.innerHTML += `<option value="${data.mazda[
              i
            ].toLowerCase()}">${data.mazda[i]}</option>`;
          }
          break;
        case "mercedes benz":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.mercedesBenz.length; i++) {
            models.innerHTML += `<option value="${data.mercedesBenz[
              i
            ].toLowerCase()}">${data.mercedesBenz[i]}</option>`;
          }
          break;
        case "mini":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.mini.length; i++) {
            models.innerHTML += `<option value="${data.mini[
              i
            ].toLowerCase()}">${data.mini[i]}</option>`;
          }
          break;
        case "mitsubishi":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.mitsubishi.length; i++) {
            models.innerHTML += `<option value="${data.mitsubishi[
              i
            ].toLowerCase()}">${data.mitsubishi[i]}</option>`;
          }
          break;
        case "nissan":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.nissan.length; i++) {
            models.innerHTML += `<option value="${data.nissan[
              i
            ].toLowerCase()}">${data.nissan[i]}</option>`;
          }
          break;
        case "porsche":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.porsche.length; i++) {
            models.innerHTML += `<option value="${data.porsche[
              i
            ].toLowerCase()}">${data.porsche[i]}</option>`;
          }
          break;
        case "saab":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.saab.length; i++) {
            models.innerHTML += `<option value="${data.saab[
              i
            ].toLowerCase()}">${data.saab[i]}</option>`;
          }
          break;
        case "scion":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.scion.length; i++) {
            models.innerHTML += `<option value="${data.scion[
              i
            ].toLowerCase()}">${data.scion[i]}</option>`;
          }
          break;
        case "subaru":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.subaru.length; i++) {
            models.innerHTML += `<option value="${data.subaru[
              i
            ].toLowerCase()}">${data.subaru[i]}</option>`;
          }
          break;
        case "tesla":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.tesla.length; i++) {
            models.innerHTML += `<option value="${data.tesla[
              i
            ].toLowerCase()}">${data.tesla[i]}</option>`;
          }
          break;
        case "toyota":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.toyota.length; i++) {
            models.innerHTML += `<option value="${data.toyota[
              i
            ].toLowerCase()}">${data.toyota[i]}</option>`;
          }
          break;
        case "volkswagen":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.volkswagen.length; i++) {
            models.innerHTML += `<option value="${data.volkswagen[
              i
            ].toLowerCase()}">${data.volkswagen[i]}</option>`;
          }
          break;
        case "volvo":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.volvo.length; i++) {
            models.innerHTML += `<option value="${data.volvo[
              i
            ].toLowerCase()}">${data.volvo[i]}</option>`;
          }
          break;
      }
    });
};

// Call function on input change
make.addEventListener("change", getCar);


// Check zip code
const checkZip = () => {
  const zipApiUrl = `https://api.zippopotam.us/us/${zip.value}`
  console.log(zipApiUrl)
  fetch(zipApiUrl).then(res => {
    if (res.status != 200) {
      isError = true
      throw Error(res.statusText)
    } else {
      isError = false
      return res.json()
    }
  }).then(data => {
    console.log(data)
  })
}

let isError;


zip.addEventListener('input', (e) => {
  if (zip.value.length === 5) {
    checkZip();
  }
});

searchBtn.addEventListener('click', (e) => {
  if (zip.value.length < 5) {
    e.preventDefault()
    zipError.innerHTML = `Please input a valid zip code`
    zipError.classList.remove('hidden');
  } else if (isError === true) {
    e.preventDefault()
    zipError.innerHTML = `Please input a valid zip code`
    zipError.classList.remove('hidden');
    console.log("error!")
  } else {
    sessionStorage.setItem("zip", zip.value);
    sessionStorage.setItem("make", make.value);
    sessionStorage.setItem("model", models.value);
    storedMake = sessionStorage.getItem("make"),
      storedModel = sessionStorage.getItem("model"),
      storedZip = sessionStorage.getItem("zip");
    locationUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=AjIFpUUnToiKbLHIONgAj0GgnjAX7KgY&location=${storedZip}`;
    apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
    console.log(apiUrl)
    fetchURLs()
    console.log(storedMake, storedModel, storedZip)
  }
});

// Pagination

pageUp.addEventListener('click', () => {
  page += 10;
  startingNum += 10;
  endingNum += 10;
  apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
  output.innerHTML = ''
  fetchURLs()
})

pageDown.addEventListener('click', () => {
  if (page > 0) {
    page -= 10
    startingNum -= 10;
    endingNum -= 10;
    apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
    output.innerHTML = ''
    fetchURLs()
  }
})

// Adding sorting features and calling subsequent API endpoints
const sort = document.querySelector("#sort"),
  black = document.querySelector('#black'),
  blue = document.querySelector('#blue'),
  silver = document.querySelector('#silver'),
  white = document.querySelector('#white'),
  red = document.querySelector('#red'),
  otherColor = document.querySelector('#otherColor'),
  fourCyl = document.querySelector('#fourCyl'),
  sixCyl = document.querySelector('#sixCyl'),
  eightCyl = document.querySelector('#eightCyl');

// First check if any checkbox is checked. If it is, add colorFacets to it + the colorArray

const colorSorter = (color) => {
  color.addEventListener('change', () => {
    if (color.checked) {
      colors.push(color.id)
      colorFacets = '&exterior_color=' + colors
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
      console.log(colors);
      fetchURLs()
    } else if (!color.checked) {
      colors = colors.filter(e => e !== color.id)
      colors.length === 0 ? colorFacets = '' : colorFacets = '&exterior_color=' + colors;
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
      console.log(colors);
      fetchURLs()
    }
  })
}

colorSorter(black);
colorSorter(blue);
colorSorter(red);
colorSorter(silver);
colorSorter(white);

otherColor.addEventListener('change', () => {
  if (otherColor.checked) {
    colors.push('yellow', 'orange', 'green', 'pink', 'gray', 'brown', 'gold')
    colorFacets = '&exterior_color=' + colors
    apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
    console.log(colors)
    fetchURLs()
  } else if (!otherColor.checked) {
    colors = colors.filter(e => e !== 'yellow' && e !== 'orange' && e !== 'green' && e !== 'pink' && e !== 'gray' && e !== 'brown' && e !== 'gold');
    console.log(colors)
    colors.length === 0 ? colorFacets = '' : colorFacets = '&exterior_color=' + colors;
    apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
    fetchURLs()
  }
})



// Sorting by high or low price, miles, year, etc.
const sortResults = () => {
  switch (sort.value) {
    case "low-price":
      page = 0;
      startingNum = 1;
      endingNum = 10;
      sortFacets = `&sort_by=price&sort_order=asc`
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
      output.innerHTML = "";
      fetchURLs();
      break;
    case "high-price":
      page = 0;
      startingNum = 1;
      endingNum = 10;
      sortFacets = `&sort_by=price&sort_order=desc`
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
      output.innerHTML = "";
      fetchURLs();
      break;
    case "low-miles":
      page = 0;
      startingNum = 1;
      endingNum = 10;
      sortFacets = `&sort_by=miles&sort_order=asc`
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
      output.innerHTML = "";
      fetchURLs();
      break;
    case "high-miles":
      page = 0;
      startingNum = 1;
      endingNum = 10;
      sortFacets = `&sort_by=miles&sort_order=desc`
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
      output.innerHTML = "";
      fetchURLs();
      break;
    case "low-year":
      page = 0;
      startingNum = 1;
      endingNum = 10;
      sortFacets = `&sort_by=year&sort_order=desc`
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
      output.innerHTML = "";
      fetchURLs();
      break;
    case "high-year":
      page = 0;
      startingNum = 1;
      endingNum = 10;
      sortFacets = `&sort_by=year&sort_order=asc`
      apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&year=${years}&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}${engineFacets}${transmissionFacets}`;
      output.innerHTML = "";
      fetchURLs();
      break;
    default:
      output.innerHTML = ""
      fetchURLs()
  }
}

sort.addEventListener("change", sortResults)

// Run fetchURLs function when page has loaded
document.addEventListener('DOMContentLoaded', fetchURLs());

async function fetchURLs() {

  zip.value = storedZip

  // If they get to the results page with no car information, display that message to the user and return to leave the function
  if (storedMake === null || storedModel === null) {
    return output.innerHTML = `<h1>Please select a make and model</h1>`
  }

  // Fetching the marketcheck and the mapquest API together
  try {

    heading.innerHTML = ""

    const loading = () => {
      output.innerHTML = `<div class="loader-container" id="loader">
      <div class="loader"></div></div>`
      pagination.style.display = 'none'
    }
    loading()

    const data = await Promise.all([
      fetch(apiUrl).then((res) => res.json()),
      fetch(locationUrl).then((res) => res.json())
    ]);

    // If the search came back empty, display that message to the user and return to leave the function
    if (data[0].listings.length < 1) {
      return output.innerHTML = `<h1>No listings found</h1>`
    }

    // Changing the output of the title of the div depending on whether a make and model are specified or they search all cars
    if (storedMake === "") {
      heading.innerHTML = `Displaying ${data[0].num_found
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} cars within ${radius.value} miles of ${data[1].results[0].locations[0].adminArea5}, ${data[1].results[0].locations[0].adminArea3}`;
    } else if (storedModel === "") {
      heading.innerHTML = `Displaying ${data[0].num_found
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} results for ${
        data[0].listings[0].build.make
        } within ${radius.value} miles of ${data[1].results[0].locations[0].adminArea5}, ${data[1].results[0].locations[0].adminArea3}`;
    }
    else {
      heading.innerHTML = `Displaying ${data[0].num_found
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} results for ${
        data[0].listings[0].build.make
        } ${data[0].listings[0].build.model} within ${radius.value} miles of ${data[1].results[0].locations[0].adminArea5}, ${data[1].results[0].locations[0].adminArea3}`;
    }

    // Get the response, target the response of the Marketcheck API, and then loop through each individual element
    // For each element, output HTML
    await data[0].listings.forEach(element => {
      const stockPhotoLink = element.media && element.media.photo_links && (element.media.photo_links.length > 0) ? element.media.photo_links[0] : "./img/placeholder.png";
      const price = element.price ? element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Not Available";
      const miles = element.miles ? element.miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Not Available";
      const owners = element.carfax_1_owner ? `<div class="center"> <span class="iconify one-owner-icon" data-icon="mdi-account" data-inline="false"></span> </div>
  <div class="center"> <span class="history-text">One previous owner</span> </div>` : `<div class="center"> <span class="iconify multi-owner-icon" data-icon="mdi-account-multiple" data-inline="false"></span> </div>
<div class="center"> <span class="history-text">Multiple owners</span> </div>`;
      const city = element.dealer.city && (element.dealer.city.length > 0) ? element.dealer.city : "NA";
      const state = element.dealer.state && (element.dealer.state.length > 0) ? element.dealer.state : "NA";
      const intColor = element.interior_color && (element.interior_color.length > 0) ? element.interior_color : "NA";
      const extColor = element.exterior_color && (element.exterior_color.length > 0) ? element.exterior_color : "NA";
      const transmission = element.build.transmission && (element.build.transmission.length > 0) ? element.build.transmission : "NA";
      const dom = element.dom && (element.dom > 0) ? element.dom : "NA";
      const statsUrl = `http://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&rows=0&car_type=used&make=${element.build.make}&model=${element.build.model}&trim=${element.build.trim}&year=${element.build.year}&transmission=${element.build.transmission}&stats=miles,price,dom`

      let sunColor = ""
      let heading_mod = ""
      let details = ""
      let tag = ""

      //take this outside and wrap the original api call in this?
      /*try {
        const requestStats = async () => {
          const response = await fetch(statsUrl);
          const json = await response.json();
          console.log(json)
          console.log(json.stats.price.mean);
          console.log(statsUrl)
          if (json.stats.price.mean > 1000) {
            deal = `<div>I'm a new div</div>`
            console.log(deal)
          }
        }

        requestStats();

      } catch (err) {
        console.log(err)
      }*/


      // Changing sun icon color based on how many days on market the car has
      if (dom >= 150) {
        sunColor = 'dom-g'
      } else if (dom <= 60) {
        sunColor = 'dom-r';
      } else {
        sunColor = 'dom-o'
      }

      // Checking if each detail is in the data reponse and then adding html only if it's there
      if ((city || state) !== "NA") {
        details += `<span class="detail location">Location: ${city}, ${state}</span>`;
      }
      if (extColor !== "NA") {
        details += `<span class="detail exterior">Exterior: ${extColor}</span>`;
      }
      if (intColor !== "NA") {
        details += `<span class="detail interior"> Interior: ${intColor}</span>`;
      }
      if (transmission !== "NA") {
        details += `<span class="detail transmission"> Transmission: ${transmission}</span>`;
      }

      // Get car heading
      if (element.build) {
        if (element.build.year) {
          heading_mod += `${element.build.year} `;
        }
        if (element.build.make) {
          heading_mod += `${element.build.make} `;
        }
        if (element.build.model) {
          heading_mod += `${element.build.model} `;
        }
        if (element.build.trim) {
          heading_mod += `${element.build.trim} `;
        }
      }

      // Setting tags based on parameters
      if (element.price <= 5000) {
        tag = "less than 5k"
      }
      if (element.price <= 5000 && element.miles > 70000) {
        tag = 'less than 5k and 70k miles'
      }
      if (element.price > 5000) {
        tag = 'over 5000'
      }
      if (element.price > 10000) {
        tag = `<div class="negoTag"><span class="iconify negIcon" data-icon="fa-regular:handshake" data-inline="false"></span>Negotiable</div>`
      }
      if (element.price > 10000 && element.miles > 10000) {
        tag += '<div class="sponsTag">Sponsored</div>'
      }
      if (element.dom > 100) {
        tag += `<div class="greatTag"><span class="iconify greatDealIcon" data-icon="mdi-fire" data-inline="false"></span>Excellent Deal</div>`
      }

      // Refactor these ^ with an array of data and do arr.includes(param)?



      output.innerHTML += `<a class="listing-link" href="http://127.0.0.1:5500/public/vehicles/${element.vin}" target="_blank">
                              <div class="results">
                                      <div class="title-container">
                                            <span class="listing-title">${heading_mod}</span>
                                      </div>
                                      <div class="img-container">
                                          <img class="list-img" src="${stockPhotoLink}" alt="">
                                      </div>
                                      <div class="info-container">
                                      <div class="tag-container">${tag}
                                      </div>
                                            <div class="price-container">
                                                <span class="price">$${price}</span>
                                                <span class="mileage">Mileage: ${miles}</span>
                                            </div>
                                            <div class="history-container">
                                                <ul class="columns">
                                                      <li class="column-item">
                                                        <div class="center">
                                                            <span class="iconify checkmark" data-icon="ion:checkmark-circle-sharp" data-inline="false"></span>
                                                        </div>
                                                        <div class="center">
                                                            <span class="history-text">Clean title and inspected</span>
                                                        </div>
                                                      </li>
                                                      <li class="column-item">
                                                      ${owners}
                                                      </li>
                                                    <li class="column-item">                       
                                                    <div class="center">
                                                    <span class="iconify dom-icon ${sunColor}" data-icon="wi:day-sunny" data-inline="false"></span>
                                                        </div>
                                                        <div class="center">
                                                            <span class="history-text">${dom} days on market</span>
                                                        </div></li>
                                                  </ul>
                                            </div>
                                            <div class="details-container">${details}</div> </div> </div> </a>`;

    });

    output.innerHTML += `<span>Displaying ${startingNum} - ${endingNum} of ${data[0].num_found} listings</span>`
    // number of pages = whatever I set the limit to / total results.
    // i.e. If I do 10 results per page and there are 54 results, we divide 54 / 10 and get 5.4
    // We can then round that up with Math.ceil and get 6 pages, which would be the total needed to house 54 results
    console.log(data)
    console.log(apiUrl)
    const loaded = () => {
      document.querySelector('#loader').style.display = 'none'
      pagination.style.display = 'flex'
    }
    loaded()


  } catch (error) {
    errCount += 1
    if (errCount >= 3) {
      output.innerHTML = `<div>It looks like we're having some trouble, sorry about that! Please reload the page and try again.</div>`
    } else {
      output.innerHTML = `<div>We're sorry, your request could not be completed. Please try again.</div>`
    }
    console.log(error);
  }
}

// Adding functionality to toggle filter buttons

const priceFilter = document.querySelector('#price-filter'),
  priceDropdown = document.querySelector('#price-dropdown'),
  mileageFilter = document.querySelector("#mileage-filter"),
  mileageDropdown = document.querySelector("#mileage-dropdown"),
  yearFilter = document.querySelector('#year-filter'),
  yearDropdown = document.querySelector('#year-dropdown');


const toggleFilter = (dropdown, expandedContent) => {
  const expand = () => {
    expandedContent.classList.toggle("hidden")
    expandedContent.classList.toggle("dropdownAnimation")
  }
  dropdown.addEventListener('click', expand)
}

toggleFilter(mileageDropdown, mileageFilter);
toggleFilter(priceDropdown, priceFilter);
toggleFilter(yearDropdown, yearFilter);


// Slider logic
const upperPrice = document.querySelector('#upperPrice'),
  lowerPrice = document.querySelector('#lowerPrice')

let lowerSliderPrice = document.querySelector('#priceRangeLow'),
  upperSliderPrice = document.querySelector('#priceRangeHigh'),
  lowerValPrice = parseInt(lowerSliderPrice.value),
  upperValPrice = parseInt(upperSliderPrice.value);

upperSliderPrice.addEventListener('input', () => {
  lowerValPrice = parseInt(lowerSliderPrice.value);
  upperValPrice = parseInt(upperSliderPrice.value);

  if (upperValPrice > lowerValPrice) {
    switch (upperValPrice) {
      case 100:
        upperPrice.innerHTML = "$100,000+"
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

  upperPriceRange = parseInt(upperPrice.innerHTML.replace(/[$,+]/g, ""))

  if (upperValPrice < lowerValPrice + 5) {
    upperSliderPrice.value = lowerValPrice + 5
  }
});

upperSliderPrice.addEventListener('change', () => {
  upperPriceRange = parseInt(upperPrice.innerHTML.replace(/[$,+]/g, ""))
  apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}`;
  if (upperPriceRange === 100000) {
    upperPriceRange = 999999;
    apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${storedMake}&model=${storedModel}&zip=${storedZip}&price_range=${lowerPriceRange}-${upperPriceRange}&miles_range=1-999999&carfax_clean_title=true&radius=${radius.value}&start=${page}&rows=10${sortFacets}${colorFacets}`;
  }
  fetchURLs()
})

//! Lower Slider
lowerSliderPrice.addEventListener('input', () => {
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

  lowerPriceRange = parseInt(lowerPrice.innerHTML.replace(/[$,+]/g, ""))

  if (lowerValPrice > upperValPrice - 5) {
    lowerSliderPrice.value = upperValPrice - 5;
  }
});

const upperMiles = document.querySelector('#upperMiles'),
  lowerMiles = document.querySelector('#lowerMiles')

let lowerSliderMiles = document.querySelector('#milesRangeLow'),
  upperSliderMiles = document.querySelector('#milesRangeHigh'),
  lowerValMiles = parseInt(lowerSliderMiles.value),
  upperValMiles = parseInt(upperSliderMiles.value);

upperSliderMiles.addEventListener('input', function () {
  lowerValMiles = parseInt(lowerSliderMiles.value);
  upperValMiles = parseInt(upperSliderMiles.value);

  if (upperValMiles > lowerValMiles) {
    switch (upperValMiles) {
      case 150:
        upperMiles.innerHTML = "150,000+"
        break
      case 145:
        upperMiles.innerHTML = "145,000"
        break
      case 140:
        upperMiles.innerHTML = "140,000"
        break
      case 135:
        upperMiles.innerHTML = "135,000"
        break
      case 130:
        upperMiles.innerHTML = "130,000"
        break
      case 125:
        upperMiles.innerHTML = "125,000"
        break
      case 120:
        upperMiles.innerHTML = "120,000"
        break
      case 115:
        upperMiles.innerHTML = "115,000"
        break
      case 110:
        upperMiles.innerHTML = "110,000"
        break
      case 105:
        upperMiles.innerHTML = "105,000"
        break
      case 100:
        upperMiles.innerHTML = "100,000"
        break
      case 95:
        upperMiles.innerHTML = "95,000"
        break
      case 90:
        upperMiles.innerHTML = "90,000"
        break
      case 85:
        upperMiles.innerHTML = "85,000"
        break
      case 80:
        upperMiles.innerHTML = "80,000"
        break
      case 75:
        upperMiles.innerHTML = "75,000"
        break
      case 70:
        upperMiles.innerHTML = "70,000"
        break
      case 65:
        upperMiles.innerHTML = "65,000"
        break
      case 60:
        upperMiles.innerHTML = "60,000"
        break
      case 55:
        upperMiles.innerHTML = "55,000"
        break
      case 50:
        upperMiles.innerHTML = "50,000"
        break
      case 45:
        upperMiles.innerHTML = "45,000"
        break
      case 40:
        upperMiles.innerHTML = "40,000"
        break
      case 35:
        upperMiles.innerHTML = "35,000"
        break
      case 30:
        upperMiles.innerHTML = "30,000"
        break
      case 25:
        upperMiles.innerHTML = "25,000"
        break
      case 20:
        upperMiles.innerHTML = "20,000"
        break
      case 15:
        upperMiles.innerHTML = "15,000"
        break
      case 10:
        upperMiles.innerHTML = "10,000"
        break
      case 5:
        upperMiles.innerHTML = "5,000"
        break
      case 0:
        upperMiles.innerHTML = "0"
        break
    }
  }

  upperMilesRange = parseInt(upperMiles.innerHTML.replace(/[,+]/g, ""))

  if (upperValMiles < lowerValMiles + 5) {
    upperSliderMiles.value = lowerValMiles + 5
  }
});

lowerSliderMiles.addEventListener('input', function () {
  lowerValMiles = parseInt(lowerSliderMiles.value);
  upperValMiles = parseInt(upperSliderMiles.value);

  if (upperValMiles > lowerValMiles) {
    switch (lowerValMiles) {
      case 150:
        lowerMiles.innerHTML = "150,000+"
        break
      case 145:
        lowerMiles.innerHTML = "145,000"
        break
      case 140:
        lowerMiles.innerHTML = "140,000"
        break
      case 135:
        lowerMiles.innerHTML = "135,000"
        break
      case 130:
        lowerMiles.innerHTML = "130,000"
        break
      case 125:
        lowerMiles.innerHTML = "125,000"
        break
      case 120:
        lowerMiles.innerHTML = "120,000"
        break
      case 115:
        lowerMiles.innerHTML = "115,000"
        break
      case 110:
        lowerMiles.innerHTML = "110,000"
        break
      case 105:
        lowerMiles.innerHTML = "105,000"
        break
      case 100:
        lowerMiles.innerHTML = "100,000"
        break
      case 95:
        lowerMiles.innerHTML = "95,000"
        break
      case 90:
        lowerMiles.innerHTML = "90,000"
        break
      case 85:
        lowerMiles.innerHTML = "85,000"
        break
      case 80:
        lowerMiles.innerHTML = "80,000"
        break
      case 75:
        lowerMiles.innerHTML = "75,000"
        break
      case 70:
        lowerMiles.innerHTML = "70,000"
        break
      case 65:
        lowerMiles.innerHTML = "65,000"
        break
      case 60:
        lowerMiles.innerHTML = "60,000"
        break
      case 55:
        lowerMiles.innerHTML = "55,000"
        break
      case 50:
        lowerMiles.innerHTML = "50,000"
        break
      case 45:
        lowerMiles.innerHTML = "45,000"
        break
      case 40:
        lowerMiles.innerHTML = "40,000"
        break
      case 35:
        lowerMiles.innerHTML = "35,000"
        break
      case 30:
        lowerMiles.innerHTML = "30,000"
        break
      case 25:
        lowerMiles.innerHTML = "25,000"
        break
      case 20:
        lowerMiles.innerHTML = "20,000"
        break
      case 15:
        lowerMiles.innerHTML = "15,000"
        break
      case 10:
        lowerMiles.innerHTML = "10,000"
        break
      case 5:
        lowerMiles.innerHTML = "5,000"
        break
      case 0:
        lowerMiles.innerHTML = "0"
        break
    }
  }

  if (lowerValMiles > upperValMiles - 5) {
    lowerSliderMiles.value = upperValMiles - 5;
  }
});

const upperYear = document.querySelector('#upperYear'),
  lowerYear = document.querySelector('#lowerYear')

let lowerSliderYear = document.querySelector('#yearRangeLow'),
  upperSliderYear = document.querySelector('#yearRangeHigh'),
  lowerValYear = parseInt(lowerSliderYear.value),
  upperValYear = parseInt(upperSliderYear.value);

upperSliderYear.addEventListener('input', function () {
  lowerValYear = parseInt(lowerSliderYear.value);
  upperValYear = parseInt(upperSliderYear.value);

  if (upperValYear > lowerValYear) {
    switch (upperValYear) {
      case 15:
        upperYear.innerHTML = "2020"
        break
      case 14:
        upperYear.innerHTML = "2019"
        break
      case 13:
        upperYear.innerHTML = "2018"
        break
      case 12:
        upperYear.innerHTML = "2017"
        break
      case 11:
        upperYear.innerHTML = "2016"
        break
      case 10:
        upperYear.innerHTML = "2015"
        break
      case 9:
        upperYear.innerHTML = "2014"
        break
      case 8:
        upperYear.innerHTML = "2013"
        break
      case 7:
        upperYear.innerHTML = "2012"
        break
      case 6:
        upperYear.innerHTML = "2011"
        break
      case 5:
        upperYear.innerHTML = "2010"
        break
      case 4:
        upperYear.innerHTML = "2009"
        break
      case 3:
        upperYear.innerHTML = "2008"
        break
      case 2:
        upperYear.innerHTML = "2007"
        break
      case 1:
        upperYear.innerHTML = "2006"
        break
      case 0:
        upperYear.innerHTML = "2005"
        break
    }
  }

  upperYearRange = parseInt(upperYear.innerHTML.replace(/[,+]/g, ""))

  if (upperValYear < lowerValYear + 1) {
    upperSliderYear.value = lowerValYear + 1
  }
});

lowerSliderYear.addEventListener('input', function () {
  lowerValYear = parseInt(lowerSliderYear.value);
  upperValYear = parseInt(upperSliderYear.value);

  if (upperValYear > lowerValYear) {
    switch (lowerValYear) {
      case 15:
        lowerYear.innerHTML = "2020"
        break
      case 14:
        lowerYear.innerHTML = "2019"
        break
      case 13:
        lowerYear.innerHTML = "2018"
        break
      case 12:
        lowerYear.innerHTML = "2017"
        break
      case 11:
        lowerYear.innerHTML = "2016"
        break
      case 10:
        lowerYear.innerHTML = "2015"
        break
      case 9:
        lowerYear.innerHTML = "2014"
        break
      case 8:
        lowerYear.innerHTML = "2013"
        break
      case 7:
        lowerYear.innerHTML = "2012"
        break
      case 6:
        lowerYear.innerHTML = "2011"
        break
      case 5:
        lowerYear.innerHTML = "2010"
        break
      case 4:
        lowerYear.innerHTML = "2009"
        break
      case 3:
        lowerYear.innerHTML = "2008"
        break
      case 2:
        lowerYear.innerHTML = "2007"
        break
      case 1:
        lowerYear.innerHTML = "2006"
        break
      case 0:
        lowerYear.innerHTML = "2005"
        break
    }
  }

  if (lowerValYear > upperValYear - 1) {
    lowerSliderYear.value = upperValYear - 1;
  }
});


// Pagination

/*
const pagination = () => {

  const pages = num_found / 15
  let x = 0
  while (x <= pages) {
    fetchURLs(doPagination)
    x++
  }
}
*/