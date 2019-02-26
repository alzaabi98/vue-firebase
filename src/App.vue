<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          ClassDojo
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

       <div class="navbar-menu">
        <div class="navbar-menu">
            <div class="navbar-start">
               <router-link to="/" class="navbar-item">Home</router-link> 
              <router-link to="/about" class="navbar-item">About</router-link> 
            
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped" v-if="! isAuthenticated">
					<div class="control">
					<router-link to="/login" class="navbar-item button is-primary">Login</router-link> 

					</div>
					<div class="control">
					<router-link to="/register" class="navbar-item button is-info">Register</router-link> 

					</div>
             	 </div>
				  <div v-else>
					  <div class="field is-grouped">
					  <p class="control">
						  <button class="button is-primary" @click="showCategoryForm = !showCategoryForm">Add New Category</button>
					  </p>
						<p class="control">
							<button class="navbar-item button is-danger" @click="logout"> Logout</button>
						</p>
						</div>
				  </div>
              </div>
           
            </div>
        </div>
      </div>


    </nav>
		<div class="modal" :class="{ 'is-active' : showCategoryForm }">
			<div class="modal-background"></div>
			<div class="modal-content">
				<form @submit.prevent="addCategory">
					<div class="field">
						<input type="text" v-model="title" class="input">
					</div>
					<div class="field">
						<button type="submit" class="button is-success">Add</button>
					</div>
				</form>
			</div>
			<button class="modal-close is-large" aria-label="close" @click="showCategoryForm = !showCategoryForm"></button>
		</div>

    <router-view/>
  </div>
</template>

<script>

import firebase from 'firebase'
import {db} from './main'
export default {
	data() {
		return {
			isAuthenticated: false,
			showCategoryForm: false,
			title: ''
		}
	},
	 created() {
        firebase.auth().onAuthStateChanged( (user)=> {
            if (user) {
                this.isAuthenticated = true
            } else {
                this.isAuthenticated = false
            }
        })
	},
	methods: {
		logout() {
			firebase.auth().signOut()
			this.$router.push('/login')
			this.isAuthenticated = false
		},
		addCategory() {
			const Category = {
				title: this.title
			}
			db.collection('categories').add(Category)
			this.showCategoryForm = false
			this.title = ''

		}
	}

}
</script>

<style>

@import "../node_modules/bulma/css/bulma.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
