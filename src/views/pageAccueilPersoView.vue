<template>
  <div class="welcome-container">
    <div class="content">
      <h2 class="title">Gondor Chic</h2>
      <h3 class="salutation">Bonjour, <span class="pseudo">{{ pseudo }}</span>!</h3>
      <h3 class="product-title">Produit du Jour</h3>
      <div class="product-section">
        <!-- Product Details -->
        <div class="product-details">
          <p><strong>Reference:</strong> <i>{{ produit.reference }}</i></p>
          <p><strong>Libelle:</strong> {{ produit.libelle }}</p>
          <p><strong>Prix:</strong> {{ produit.prix }} €</p>
          <p><strong>Quantite En Stock:</strong> {{ produit.quantiteEnStock }}</p>
        </div>
        <!-- Product Image -->
        <div class="product-image">
          <img src="/potion_magic.png" alt="Produit du Jour" />
        </div>
      </div>
      <form @submit.prevent="addToCard" class="form">
        <input v-model="quantite" type="number" placeholder="Quantite" class="input-field" />
        <button type="submit" class="submit-button">Ajouter au panier</button>
      </form>
    </div>
  </div>
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
  /* Styling the container */
/* Styling the container */
.welcome-container {
  background-image: url('@/assets/background.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #444;
  font-family: Arial, sans-serif;
}

/* Styling the content box */
.content {
  background-color: rgba(255, 255, 255, 0.9); /* Transparent background */
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 700px;
  width: 100%;
  text-align: center;
}

/* Title styling */
.title {
  font-size: 2.5em;
  color: #8b0000;
  margin-bottom: 20px;
  font-weight: bold;
}

/* Salutation styling */
.salutation {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
}

.pseudo {
  color: #007bff;
}

/* Product section layout */
.product-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}

/* Product details styling */
.product-details {
  flex: 2;
  text-align: left;
}

.product-details p {
  font-size: 1.1em;
  margin: 10px 0;
}

/* Product image styling */
.product-image {
  flex: 1;
  max-width: 200px;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Form styling */
.form {
  margin-top: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .content {
    padding: 20px;
  }

  .product-section {
    flex-direction: column;
    align-items: center;
  }

  .product-image {
    margin-top: 20px;
  }
}


  </style>
  