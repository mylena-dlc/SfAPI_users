
// Selectionne l'élément HTML qui contiendra les membres
const membres_container = document.querySelector('.users');

// Effectue une requête GET à l'API pour récupérer les membres
fetch('http://localhost:8000/api/membres')
.then((response) => response.json()) // convertit la réponse en JSON
.then((data) => {
    // Accède aux membres à partir de la réponse JSON, en utilisant le chemin hydra:member
    const membres = data["hydra:member"];

    // pour chaque membre dans la liste
    membres.forEach(membre => {
        // Créé une div pour y afficher les informations
        let membre_box = document.createElement('div');

        // Ajouter la classe "users" à la div créé
        membre_box.classList.add('user');

        // Définit le contenu HTML de la div avec nom en majuscule et prénom du membre
        membre_box.innerHTML = membre.last.toUpperCase() + ' ' + membre.first;

        // Ajoute la div créé au conteneur des membres
        membres_container.appendChild(membre_box);
    });
})