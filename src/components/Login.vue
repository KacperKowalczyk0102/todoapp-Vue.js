<template>
    <div class="login-form">
      <h1>Logowanie</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Hasło:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <button type="submit">Zaloguj się</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Ttutak jest logika logowania
        // Na przykład weryfikacja poprawności danych logowania
        // Jeśli dane są poprawne, użytkownik jest przekierowany do konketru
        if (this.email === 'pp5@uek.krakow.pl' && this.password === 'pp5') {
          // Przekierowanie do innego komponentu po zalogowaniu
          this.$router.push('/apka');
        } else {
          // Obsługa nieprawidłowych danych logowania
          alert('Nieprawidłowy email lub hasło. Spróbuj ponownie.');
          // Wyczyszczenie pól formularza
          this.email = '';
          this.password = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  