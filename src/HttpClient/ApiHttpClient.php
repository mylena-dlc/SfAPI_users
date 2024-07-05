<?php

namespace App\HttpClient; // Définit le namespace de la classe dans laquelle se trouve ce fichier

use Symfony\Component\HttpFoundation\Response; // classe qui gère les réponses HTTP
use Symfony\Component\HttpFoundation\JsonResponse; // classe qui gère des réponses JSON
use Symfony\Contracts\HttpClient\HttpClientInterface; // classe pour déclarer le type d'injection de dépendance dans le constructeur
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController; // classe ApiHttpClient qui étend AbstractController


class ApiHttpClient extends AbstractController
{
    private $httpClient; // déclare un champ privé pour stocker l'instance du service HttpClient

    public function __construct(HttpClientInterface $jph)
    {
        $this->httpClient = $jph;
    }

    // Définit une méthode pour récupérer des utilisateurs depuis l'API
    public function getUsers(){
         // Utilise le service HttpClient pour effectuer une requpete GET à l'API avec un endpoint spécifié et des options, notamment la désactivation de la vérification SSL et le nombre de résultat à envoyer
        $response = $this->httpClient->request('GET', "?results=15", [ 
            'verify_peer' => false,
        ]);

        return $response->toArray(); // retourne les données de la réponse converties en tableau associatif
    }
}