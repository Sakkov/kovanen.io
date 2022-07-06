/* Getting the input */
document.getElementById("get-recomendations").addEventListener("submit", getR);

/* function to get te results and format it to a displayable div */
function getR(e){
    e.preventDefault(); //prevent the default reaction from form submit

    const title = document.getElementById("title").value;     //title = the inputed title

    document.getElementById('loading__element').style = "display: flex;";

    // !!! MAKE SURE THIS LINE IS CORRECT !!!
    fetch(`https://recommendation-api-dsdivision.herokuapp.com/recommendation/${title}`, { //fetch the recommendations for "title"
        method: "GET",
    })
        .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        document.getElementById('loading__element').style.display = "none";
        return response.json();
        })

        .then(data => {
            let output = "";
            /* Loop over the recommendations */
            for (var r in data){
                /* Append the HTML to "output" */
                output += `
                <div class="result">
                    <div class="thumbnail">
                        <img src="${data[r].poster_path}" alt="thumbnail"></img>
                    </div>
                    <div class="text">
                        <h2 class="title">
                            ${data[r].title} (${data[r].release_date})

                        </h2>
                        <h3>
                            <div class="rating">
                                Rating: ${data[r].vote_average}
                            </div>
                            Genre: ${data[r].genre_ids}
                        </h3>
                        ${data[r].overview}
                        <a href="${data[r].imdb_path}" target="_blank">IMDb</a>
                        <div class="providers">
                `;
                for (provider in data[r].providers){
                    console.log(data[r].providers[provider].provider_name)
                    output += `
                        <img src="${data[r].providers[provider].logo_path}" alt="${data[r].providers[provider].provider_name}"></img>
                    `;
                }

                output += `
                        </div>
                    </div>
                </div>
                `;
            };

            document.getElementById("results").innerHTML = output //append the result HTMLs to the page 
        })
        .catch(_error=>{
            document.getElementById('loading__element').style.display = "none";
            let output = "";
            output += `
                <div class="result">
                    <div class="thumbnail">
                        <img src="/Media/fatal-error.jpg" alt="error icon"></img>
                    </div>
                    <div class="text">
                        <h2 class="title">
                            Error: Invalid Input
                        </h2>
                        <div>
                            "${title}" is not valid input.
                        </div>
                        Example: Shrek, Harry Potter, Rush Hour,...
                    </div>
                </div>
                `;
                document.getElementById("results").innerHTML = output //append the result HTMLs to the page 
        })
}
