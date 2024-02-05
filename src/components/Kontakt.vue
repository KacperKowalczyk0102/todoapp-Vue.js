<template>
    <div>
      <h1>Kontakt</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Imię:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="surname">Nazwisko:</label>
          <input type="text" id="surname" v-model="formData.surname" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
          <label for="message">Wiadomość:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Wyślij</button>
      </form>
      <div v-if="formSubmitted">Dziękujemy za informacje!</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Kontakt',
    data() {
      return {
        formData: {
          name: '',
          surname: '',
          email: '',
          message: ''
        },
        formSubmitted: false
      };
    },
    methods: {
      submitForm() {

        this.formSubmitted = true;
      }
    }
  };
  </script>
  <style scoped>
  /* Styl dla formularza */
  form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Styl dla divów w formularzu */
  form div {
    margin-bottom: 15px;
  }

  /* Styl dla labeli */
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  /* Styl dla inputów i textarea */
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }

  /* Styl dla przycisku */
  button[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }

  /* Styl dla komunikatu "Dziękujemy za informacje!" */
  .success-message {
    margin-top: 10px;
    padding: 10px;
    background-color: #dff0d8;
    border: 1px solid #d6e9c6;
    color: #3c763d;
    border-radius: 3px;
  }
</style>
