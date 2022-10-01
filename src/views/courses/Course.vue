<template>
    <div class="section">
        <h1>Course Details</h1>
        <div class="content">
            <h2>{{courseId}}</h2>
            <p>
                <h4>The selected course id is : {{courseId}}</h4>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courseId : this.$route.params.id
        }
    }
}
</script>

<style>
    
</style>