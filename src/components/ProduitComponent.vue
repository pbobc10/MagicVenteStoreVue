<template>
  <div>
    <h1>Produit du Jour</h1>
    <ul v-if="produits.length">
      <li v-for="produit in produits" :key="produit.id">
        {{ produit.reference }} - {{ produit.libelle }} - {{ produit.prix }} currency units - {{ produit.quantiteEnStock }} in stock
      </li>
    </ul>
    <p v-else>No products available.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      produits: []
    };
  },
  mounted() {
    this.getProduits();
  },
  methods: {
    getProduits() {
      axios.get('https://localhost:7290/api/Produit')
        .then(response => {
          this.produits = response.data;
        })
        .catch(error => {
          console.error('Error fetching produits:', error);
        });
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
}
</style>
