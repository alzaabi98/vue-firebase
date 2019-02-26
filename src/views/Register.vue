<template>
   <div class="columns">
        <div class="column is-4 is-offset-4">
            <h2 class="title">Register Form</h2>
                <hr>
                <form action="#" @submit.prevent="registerUser">
                    <div class="field">
                        <div class="control">

                            <input type="text" v-model="email" class="input">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input type="password" v-model="password" class="input">

                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button type="submit" class="button is-success"> Register</button>

                        </div>
                    </div>

                    <article class="message is-danger" v-if="error">
                        <div class="message-body">
                            {{error }}
                        </div>
                    </article>

                </form>

        </div>
        
   


     
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    
    
    data() {
        return {
            email: '',
            password:'',
            isAuthenticated: false,
            error: null
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
        registerUser(){
            console.log('register user in firebase')
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then( (data)=> {
                 console.log(data.user.uid)
                this.$router.push('/dashboard')

            })
            .catch (err => this.error = err.message )
        }
    }
}
</script>

<style >
    

</style>