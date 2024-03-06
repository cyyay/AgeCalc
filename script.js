document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    const yearInput = document.getElementById('yearInput');

    button.addEventListener('click', calculateAges);
    yearInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            calculateAges();
        }
    });
});

const popularFigures = [
    { name: "Albert Einstein", birthYear: 1879, deathYear: 1955 },
    { name: "Isaac Newton", birthYear: 1643, deathYear: 1727 },
    { name: "Marie Curie", birthYear: 1867, deathYear: 1934 },
    { name: "William Shakespeare", birthYear: 1564, deathYear: 1616 },
    { name: "Wolfgang Amadeus Mozart", birthYear: 1756, deathYear: 1791 },
    { name: "Steve Jobs", birthYear: 1955, deathYear: 2011 },
    { name: "Nikola Tesla", birthYear: 1856, deathYear: 1943 },
    { name: "Alan Turing", birthYear: 1912, deathYear: 1954 },
    { name: "Pablo Picasso", birthYear: 1881, deathYear: 1973 },
    { name: "Leonardo da Vinci", birthYear: 1452, deathYear: 1519 },
    { name: "George Washington", birthYear: 1732, deathYear: 1799 },
    { name: "Charles Darwin", birthYear: 1809, deathYear: 1882 },
    
];


function calculateAges() {
    
    const yearInput = document.getElementById('yearInput').value;
    const year = parseInt(yearInput, 10);

    if (!year) {
        alert('Please enter a valid year.');
        return;
    }

    const results = popularFigures.map(figure => {
        const age = year - figure.birthYear;

        if (age < 0) {
            return `${figure.name} hasn't been born yet.`;
        } else if (figure.deathYear && year > figure.deathYear) {
            const yearsAgo = year - figure.deathYear;
            return `${figure.name} died ${yearsAgo === 0 ? 'this year' : yearsAgo + ' years ago'}.`;
        } else if (year === figure.birthYear) {
            return `${figure.name} was born.`;
        } else if (year === figure.deathYear) {
            return `${figure.name} died.`;
        } else {
            return `${figure.name} would be ${age} years old.`;
        }
    });

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('result');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const paragraph = document.createElement('p');
        paragraph.textContent = result;
        resultsContainer.appendChild(paragraph);
    });
}