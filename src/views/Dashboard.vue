<template>
    <div>
        <h3 class="title">Dashboard</h3>
        <div class="tabs">
            <ul>
                <li :class="{ 'is-active' : activeCategory === 'Newst'}"><a> Newst</a></li>
                <li v-for="(category,index) in categories"  :class="{ 'is-active' : activeCategory === category.title}" :key="index"><a @click="setCategory(category.title)"> {{ category.title}}</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import {db} from '../main'
export default {
    
    data() {
        return {
            categories: [],
            activeCategory: 'Newst'
        }
    },
    firestore() {
        return {
            categories: db.collection('categories')
        }
    },
    methods: {
        setCategory(category) {
            this.activeCategory = category
        }
    }
}
</script>
