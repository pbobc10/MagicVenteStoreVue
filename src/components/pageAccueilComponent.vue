<template>
  <div>
    <h3>Produit du Jour</h3>
    <div v-if="produit ">
      <p>Reference:   {{ produit.reference }} </p>
      <p>Libelle: {{ produit.libelle }} </p>
      <p>Prix:  {{ produit.prix }} </p>
      <p>Quantite En Stock: {{ produit.quantiteEnStock }}</p>
    </div>
    <p v-else>No products available.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PageAccueilComponent',
  data() {
    return {
      produit: {}
    };
  },
  mounted() {
    this.getProduits();
  },
  methods: {
    getProduits() {
      axios.get('https://localhost:7290/api/Produit/true')
        .then(response => {
          this.produit = response.data;
          //console.log(this.produit);
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
