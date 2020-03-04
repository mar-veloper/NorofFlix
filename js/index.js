function showMovieList(json) {
  const schedule = json;
  const cardContainer = document.querySelector("#card-container");
  let newHTML = "";

  schedule.forEach(elem => {
    newHTML += `
   
        <div class="card m-3 text-white">
            <img src="${elem.image.medium}" class="card-img" alt="${elem.name}">
            <div class="card-img-overlay">
              <a href="details.html?id=${elem.id}">
               <button type="button" class="btn btn-danger btn-m">See Details</button>
              </a>
            </div>
        </div>
   `;
  });

  return (cardContainer.innerHTML += newHTML);
}

callApi(showMovieList, API_URL);
