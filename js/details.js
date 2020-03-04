function addDetails(json) {
  const showDetailDiv = document.querySelector("#container-show-detail");

  const mainDetails = document.querySelector("#main-details");
  const showArray = [json];

  let newHTML = "";

  showArray.forEach(elem => {
    newHTML += ` <h1 class="mb-2">${elem.name}</h1>`;
    const getSeasonDetails = json => {
      const seasonDetails = json;

      newHTML += `
      <h5 class="mb-5">Seasons available: ${seasonDetails.length}</h5>
      <div class="lead">${elem.summary}</div>
       <p>
           <a href="#" class="btn btn-warning text-uppercase my-2">Play</a>
           <a href="#" class="btn btn-secondary text-uppercase my-2">Share</a>
       </p>
       `;

      const getCastDetails = json => {
        const castDetails = json;

        newHTML += `<h6 class="mt-5">Starring: <span>${castDetails[0].person.name}, ${castDetails[1].person.name}, ${castDetails[2].person.name}</span> </h6>`;

        mainDetails.style.backgroundImage = `url("${elem.image.original}")`;
        showDetailDiv.innerHTML = newHTML;
      };

      callApi(getCastDetails, `${DETAILS_API}/cast`);
    };

    callApi(getSeasonDetails, `${DETAILS_API}/seasons`);
  });
}

const querySting = document.location.search;
const params = new URLSearchParams(querySting);

const SHOW_ID = params.get("id");
const DETAILS_API = `${API_URL}/${SHOW_ID}`;

callApi(addDetails, DETAILS_API);
