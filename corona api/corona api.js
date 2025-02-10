
        document.addEventListener("DOMContentLoaded", () => {
            const searchBtn = document.getElementById("search-btn");
            const searchInput = document.getElementById("search-input");
            const covidStats = document.getElementById("covid-stats");
            const stateNameElement = document.getElementById("state-name");
            const totalCases = document.getElementById("total-cases");
            const totalRecovered = document.getElementById("total-recovered");
            const totalDeaths = document.getElementById("total-deaths");
            const errorMessage = document.getElementById("error-message");

            // Hide stats and error message by default
            covidStats.classList.add("hidden");
            errorMessage.classList.add("hidden");

            // Add event listener for the search button
            searchBtn.addEventListener("click", () => {
                const queryState = searchInput.value.trim();
                if (queryState) {
                    fetchCovidData(queryState);
                } else {
                    showError("Please enter a state name.");
                }
            });

            // Function to fetch COVID-19 data for a specific state
            function fetchCovidData(queryState) {
                const url = "https://api.rootnet.in/covid19-in/stats/latest";

                // Display loading state
                covidStats.classList.add("hidden");
                errorMessage.classList.add("hidden");

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const regionalData = data.data.regional;
                        const result = regionalData.find(entry => entry.loc.toLowerCase() === queryState.toLowerCase());

                        if (result) {
                            // Populate the stats if found
                            stateNameElement.textContent = `State: ${result.loc}`;
                            totalCases.textContent = `Total Cases: ${result.totalConfirmed}`;
                            totalRecovered.textContent = `Total Recovered: ${result.discharged}`;
                            totalDeaths.textContent = `Total Deaths: ${result.deaths}`;

                            covidStats.classList.remove("hidden");
                        } else {
                            showError("State not found. Please check the spelling.");
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching data:", error);
                        showError("Failed to fetch data. Please try again later.");
                    });
            }

            // Function to display an error message
            function showError(message) {
                errorMessage.textContent = message;
                errorMessage.classList.remove("hidden");
            }
        });
