<script setup>
import { ref } from 'vue';
import axios from 'axios';
import LesProduits from '../components/ProduitComponent.vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const login = async () => {
  try {
    const response = await axios.post('https://localhost:7290/api/auth/login', {
      username: username.value,
      password: password.value,
    });
    localStorage.setItem('token', response.data.token);
    errorMessage.value = '';
    // Redirect to dashboard or some page
  } catch (error) {
    errorMessage.value = 'Invalid login credentials';
  }
};
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h1>Gondor Chic</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Pseudo</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" :disabled="!isFormValid">S'identifier</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
    <div class="products-container">
      <LesProduits />
    </div>
  </div>
</template>

<style scoped>


/* Styling for the login container */
.login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.login-container h1 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.products-container {
  width: 100%;
  max-width: 800px;
}
</style>
