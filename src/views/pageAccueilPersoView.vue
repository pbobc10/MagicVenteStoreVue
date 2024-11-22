<template>
    <div>
        <h3>Bonjour {{       pseudo }}</h3>
      <div >
        <p>Reference:   {{ produit.reference }} </p>
        <p>Libelle: {{ produit.libelle }} </p>
        <p>Prix:  {{ produit.prix }} </p>
        <p>Quantite En Stock: {{ produit.quantiteEnStock }}</p>
      </div>    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    computed: {
      pseudo() {
        return this.$route.params.pseudo;
      },
    },  data() { return { produit: {} }; },  mounted() {
    this.getProduits();
  },
    methods: {
      
    
    getProduits() {
      axios.get('https://localhost:7290/api/Produit/true')
        .then(response => {
          this.produit = response.data;
          console.log(this.produit);
        })
        .catch(error => {
          console.error('Error fetching produits:', error);
        });
    },
  }
  
  };
  </script>
  
  
  <style scoped>
  /* Ajout de l'image de fond */
  .login-container {
    background-image: url('@/assets/mordor.jpg'); /* Ou '/login-background.jpg' si l'image est dans public */
    background-size: cover; /* Adapte l'image au conteneur */
    background-position: center; /* Centrer l'image */
    height: 100vh; /* Prend toute la hauteur de l'écran */
    width: 100vh;
    display: flex;
    justify-content: center; /* Centrer le formulaire horizontalement */
    align-items: center; /* Centrer le formulaire verticalement */
  }
  
  /* Style du formulaire */
  form {
    background-color: rgba(255, 255, 255, 0.8); /* Fond blanc avec transparence */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Style des champs de saisie */
  input {
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  /* Style du bouton */
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  
  .products-container {
    color: black;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .title {
    color: rgb(170, 13, 13);
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  </style>
  