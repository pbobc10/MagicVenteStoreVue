<template><div></div>
   </template>
  
  <script>
import axios from 'axios';
  
  export default {
    name: 'PageAccueilPersoComponent', props: {username: String},// reference: String, libelle: String, prix: String, quantiteEnStock: String},
    data() { return { produit: {} }; },  mounted() {
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
  h1 {
    font-family: Arial, sans-serif;
  }
  </style>
  