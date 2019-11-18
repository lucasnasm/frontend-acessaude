<template>

<v-content>
    <v-toolbar class="navbar-color "  >   
   
   <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text hidden-md-and-up"></v-app-bar-nav-icon>

         <v-spacer></v-spacer>

    <v-toolbar-title class="d-flex white--text align-center">
      <img  src="../assets/logo.png" alt="" width="160">
      </v-toolbar-title>
  
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-md-and-down">
      <v-btn text class="white--text" to="">Entrar</v-btn>
      <v-btn text class="white--text" to="clinica"> Registrar</v-btn>
      <v-btn text class="white--text">Sobre</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>


  </v-toolbar>
    
     <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</v-content>

  
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
    drawer: false,
 
    }
  }
}
</script>

<style scoped>
.navbar-color{
   background-color: #3182BC !important;
}
</style>