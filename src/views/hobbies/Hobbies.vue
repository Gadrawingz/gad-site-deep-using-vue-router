<template>
    <div class="content">
        <h1>My Hobbies</h1>
        <div class="hobbies">
            <div v-for="hobby in hobbies" :key="hobby.id" class="hobby">
                <h2>
                    <router-link :to="{ name: 'Hobby', params: {id: hobby.id}}" >
                        {{hobby.name}}
                    </router-link>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hobbies : [
                { id: 1, name: 'Coding', weeklyHours: 48 },
                { id: 2, name: 'Painting', weeklyHours: 7 },
                { id: 3, name: 'Sketching', weeklyHours: 24 },
                { id: 4, name: 'Basketball', weeklyHours: 14 },
                { id: 4, name: 'Dropping Freestyles', weeklyHours: 6 },
            ]
        }
    }
}
</script>

<style>

    .hobbies {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .hobbies h2 {
        background: green;
        padding: 40px;
        border-radius: 8px;
        margin:10px auto;
        max-width: 600px;
        cursor: pointer;
        color: brown;
        width: 400px;
        margin: 10px;
    }

    .hobbies h2:hover {
        background: black;
        color: white;
    }

    .hobbies a {
        text-decoration: none;
        color: #FFF;
        font-family: Candara;
    }


</style>