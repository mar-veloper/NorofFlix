function showMovieList(json) {
  const schedule = json;
  const cardContainer = document.querySelector("#card-container");

  cardContainer.innerHTML = loadingDiv;

  let newHTML = "";

  schedule.forEach(elem => {
    newHTML += `
   
        <div class="card m-3 text-white">
            <img src="${elem.image.medium}" class="card-img" alt="${elem.name}">
            <div class="card-img-overlay">
              <a href="details.html?id=${elem.id}">
               <button type="button" class="btn btn-warning btn-m">See Details</button>
              </a>
            </div>
        </div>
   `;
  });

  cardContainer.innerHTML = newHTML;
}

const loadingDiv = `
    <div class="ml-3 mt-4">
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    `;

callApi(showMovieList, API_URL);
