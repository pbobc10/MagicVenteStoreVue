<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h2 class="title">Gondor Chic</h2>
      <div class="products-container">
        <ProduitComponent />
      </div>
      <input v-model="pseudo" placeholder="Pseudo" />
      <input v-model="motDePasse" type="password" placeholder="Mot de passe" />
      <button type="submit">Login</button>
      <p class="error">{{ message }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import ProduitComponent from "../components/pageAccueilComponent.vue";

export default {
  components: {
    ProduitComponent,
  },
  data() {
    return {
      pseudo: "",
      motDePasse: "",
      message: "",
      produit: Object // Example value; replace with actual product data
    };
  },

  methods: {
    redirection() {
      // if (this.message === "Login réussi.") {
      
        this.$router.push({
          name: "pageAccueilPerso",
          params: { pseudo: this.pseudo },
        });
      // }
    },

    async login() {
      try {
        const response = await axios.post(
          "https://localhost:7290/api/Client/login",
          {
            pseudo: this.pseudo,
            motDePasse: this.motDePasse,
            nom: "",
            prenom: "",
            numero: "",
          }
        );
        this.message = response.data.Message;
        console.log(response.status);
        console.log(response.data.message);
        this.redirection(); // Call redirection after successful login
      } catch (error) {
        this.message = error.response?.data || "Erreur lors de la connexion.";
      }
    },
  },
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
