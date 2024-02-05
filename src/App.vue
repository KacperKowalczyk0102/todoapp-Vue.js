<template>
    <div id="app">
      <router-view/>
      <div class="navbar">
        <nav>
          <ul>
            <li><router-link to="/apka">Apka</router-link></li>
            <li><router-link to="/kontakt">Kontakt</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0; /* zmienione z top: 0 */
    left: 0;
    width: 100%;
  }
  
  .navbar h1 {
    margin: 0;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  
  nav ul li {
    margin-right: 20px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  nav ul li a:hover {
    color: #ffc107;
  }
  </style>
  