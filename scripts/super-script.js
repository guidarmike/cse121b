document.addEventListener("DOMContentLoaded", function () {
    const heroNameInput = document.getElementById("heroName");
    const searchButton = document.getElementById("searchButton");
    const resultContainer = document.getElementById("result");
    const output = document.getElementById("output");

    searchButton.addEventListener("click", async () => {
        const heroName = heroNameInput.value.trim();

        if (heroName === "") {
            alert("Please enter a superhero or villain name.");
            return;
        }

        const url = `https://superhero-search.p.rapidapi.com/api/?hero=${encodeURI(heroName)}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7737ed36d8msha3f04f477ecf9ebp1abfc6jsn7a1c6f84a271',
                'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            resultContainer.classList.remove("hidden");
            output.innerHTML = formatHeroInfo(data);
        } catch (error) {
            console.error(error);
        }
    });
});

function formatHeroInfo(data) {
    const { name, biography, appearance, image } = data;

    let formattedInfo = `
        <h2>${name}</h2>
        <ul>
            <li><strong>Full Name:</strong> ${biography.fullName || 'N/A'}</li>
            <li><strong>Gender:</strong> ${appearance.gender || 'N/A'}</li>
            <li><strong>Race:</strong> ${appearance.race || 'N/A'}</li>
            <li><strong>Height:</strong> ${appearance.height && appearance.height[0] || 'N/A'}</li>
            <li><strong>Weight:</strong> ${appearance.weight && appearance.weight[0] || 'N/A'}</li>
            <li><strong>Eye Color:</strong> ${appearance.eyeColor || 'N/A'}</li>
            <li><strong>Hair Color:</strong> ${appearance.hairColor || 'N/A'}</li>
            <li><strong>First Appearance:</strong> ${biography.firstAppearance || 'N/A'}</li>
            <li><strong>Publisher:</strong> ${biography.publisher || 'N/A'}</li>
        </ul>
    `;

    return formattedInfo;
}
