import { gameDetail } from "./gameDetail.js";

export class GamesData {
  constructor() {}

  // Fetch data based on category type
  async Getdata(categorytype) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "956e2de036msh3ac23fa105397d9p1192e3jsn9f320cd2b188",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categorytype}`,
      options
    );
    const data = await api.json(); // Assign fetched data to a local variable
    return data;
  }

  // Display data and attach event listeners
  async DisplayData(categorytype) {
    const data = await this.Getdata(categorytype); // Fetch game data

    // Generate HTML for the game cards
    let GetArr = "";
    for (let i = 0; i < data.length; i++) {
      let shortDescription = data[i].short_description.split(" ").slice(0, 15).join(" ");
      let platform = data[i].platform.split(" ").slice(0, 5).join(" ");

      GetArr += `
        <div class="col-md-3">
          <div class="card h-100 bg-transparent" id="game-card-${data[i].id}">
            <figure class="position-relative">
              <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover" alt="${data[i].title}">
            </figure>
            <div class="card-body">
              <div class="card_header d-flex justify-content-between align-items-center mt-0">
                <span class="h6 small">${data[i].title}</span>
                <span class="maincl text-white fs-6 p-1 free">Free</span>
              </div>
              <p class="card-text text-center text-white-50 opacity-50 mb-0">${shortDescription}</p>
              <footer class="card-footer small hstack justify-content-between align-items-end">
                <span class="text-white maincl">${data[i].genre}</span>
                <span class="text-white maincl ms-auto">${platform}</span>
              </footer>
            </div>
          </div>
        </div>`;
    }

    // Insert the generated HTML into the DOM
    document.getElementById("RowData").innerHTML = GetArr;

    // Add event listeners to the rendered cards
    for (let i = 0; i < data.length; i++) {
      const card = document.getElementById(`game-card-${data[i].id}`);
      if (card) {
        card.addEventListener("click", () => {
          let det = new gameDetail();
          det.gettagert(data[i].id);

          document.getElementById("RowData").classList.add("d-none");
          document.getElementById("gameDetailModal").classList.remove("d-none");
        });
      } else {
        console.error(`Card with ID game-card-${data[i].id} not found.`);
      }
    }
  }
}
