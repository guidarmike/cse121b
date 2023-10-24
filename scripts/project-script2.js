export function formatHeroInfo(data) {
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
