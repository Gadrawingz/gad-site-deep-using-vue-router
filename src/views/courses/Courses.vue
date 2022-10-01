<template>
    <div class="courses">
        <h1>Courses</h1>
        <div v-for="course in courses" :key="course.id">
            <h2>
                <router-link :to="{ name: 'Course', params: {id: course.id}}" >
                    {{course.title}}
                </router-link>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courses : [
                { id: 1, title: 'Introduction to Programming', details: 'A' },
                { id: 2, title: 'Object Oriented Programming', details: 'B' },
                { id: 3, title: 'Understanding of Java Spring', details: 'C' },
                { id: 4, title: 'Linux and Virtualization', details: 'D' },
            ]
        }
    }
}
</script>

<style>
    .courses h2 {
        background: #0000FF;
        padding: 24px;
        border-radius: 12px;
        margin:10px auto;
        max-width: 600px;
        cursor: pointer;
        color: brown;
    }

    .courses h2:hover {
        background: black;
        color: white;
    }

    .courses a {
        text-decoration: none;
        color: #FFF;
        font-family: Candara;
    }


</style>