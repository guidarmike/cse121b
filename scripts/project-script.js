import { formatHeroInfo } from "./project-script2.js";

const superpeopleArray = ["Spiderman", "Batman", "Moonknight", "Black Widow", "Hawkeye", "Nick Fury", "Scarlet Witch"];

document.addEventListener("DOMContentLoaded", function () {
    const heroNameInput = document.getElementById("heroName");
    const searchButton = document.getElementById("searchButton");
    const resultContainer = document.getElementById("result");
    const output = document.getElementById("output");

    searchButton.addEventListener("click", async () => {
        const heroName = heroNameInput.value.trim();

        if (heroName === "") {
            alert(`Please enter a superhero or villain name.`);
            return;
        }
        if (!superpeopleArray.includes(heroName)) {
            const url = `https://superhero-search.p.rapidapi.com/api/?hero=${encodeURI(heroName)}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '7737ed36d8msha3f04f477ecf9ebp1abfc6jsn7a1c6f84a271',
                    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
                }
            };

            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    resultContainer.classList.remove("hidden");
                    output.innerHTML = formatHeroInfo(data);
                })
                .catch(error => console.error(error));
        } else {
            alert(`Information required are not available to the pubblic. This individual is violating the Superhuman Registration Act.`);
        }
    });
});
