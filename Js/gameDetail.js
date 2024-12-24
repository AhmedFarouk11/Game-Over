export class gameDetail {
    constructor() { }

    async getdetail(id) {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "956e2de036msh3ac23fa105397d9p1192e3jsn9f320cd2b188",
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        const response = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
            options
        );

        const result = await response.json(); // Parse the JSON response
        return result;
    }

    async gettagert(id) {
        document.getElementById("gameDetailModal").classList.add("show");
        const result = await this.getdetail(id); // Await the result from getdetail
        // Log the result to verify

        // Update HTML with the game's detailed information
        document.getElementById("gamedetail").innerHTML = `
      
  <div class="card-det mb-3" >
  <div class="row g-0">
    <div class="col-md-4 cardimgdet">
      <img src="${result.thumbnail}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body p-5">
        <h5 class="card-title">Title: ${result.title}</h5>
                <h5 class="card-title">Genre: ${result.genre}</h5>
                <h5 class="card-title">Platform: ${result.platform}</h5>
                <p class="card-text">${result.description}</p>
                <a href="${result.game_url}" target="_blank"><button type="button" class="btn btn-primary">Show Game</button></a>
      </div>
    </div>
  </div>
</div>
            `;
    }

}
