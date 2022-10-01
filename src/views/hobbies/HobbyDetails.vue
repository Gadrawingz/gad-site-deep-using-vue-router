<template>
    <div class="section">
        <h1>Hobby Details</h1>
        <div class="content">
            <h2>{{id}}</h2>
            <p>
                <h4>This hobby : {{id}}</h4>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id : this.$route.params.id
        }
    }
}
</script>

<style>
    
</style>