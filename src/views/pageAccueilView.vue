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
      nomPrenom: "",  
      produit: Object // Example value; replace with actual product data
    };
  },

  methods: {
    redirection() {
      // if (this.message === "Login réussi.") {
      
        this.$router.push({
          name: "pageAccueilPerso",
          params: { pseudo: this.nomPrenom },
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
        this.nomPrenom = response.data.nom + " " + response.data.prenom;
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

  display: flex;
  justify-content: center;
  align-items: center;
}

/* Style du formulaire */
form {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

/* Style des champs de saisie */
input {
  display: block;
  margin: 15px 0;
  width: calc(100% - 16px);
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Style du bouton */
button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
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
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
