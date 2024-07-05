
// Selectionne l'élément HTML qui contiendra les membres
const membres_container = document.querySelector('#membres-container');


// Effectue une requête GET à l'API pour récupérer les membres
// fetch('http://localhost:8001/api/membres')

fetch('http://localhost:8001/api/membres')
.then((response) => response.json()) // convertit la réponse en JSON
.then((data) => {
    // Accède aux membres ) partir de la réponse JSON, en utilisant le chemin hydra:member
    const membres = data["hydra:member"];

    // pour chaque membre dans la liste
    membres.forEach(membre => {
        console.log(membre)
        console.log(data)
        // Créé une div pour y afficher les informations
        let membre_box = document.createElement('div');

        // Définit le contenu HTML de la div avec nom en majuscule et prénom du membre
        membre_box.innerHTML = membre.last.toUpperCase() + ' ' + membre.first;

        // Ajoute la div créé au conteneur des membres
        membres_container.appendChild(membre_box);
    });
})