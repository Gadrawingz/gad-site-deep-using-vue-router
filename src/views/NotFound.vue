<template>
    <div class="not-found">
        <h1>Page Not Found</h1>
        <p>
            The requested page is not found. <br><br><br>
            <router-link :to="{name: 'home' }">
                Back to Home
            </router-link>
        </p>
    </div>
</template>

<style>
    .not-found {
        background: brown;
        color: white;
        font-size: 20px;
        height: auto;
        padding: 80px;
        font-family: georgia;
        margin: 40px;
    }

    .not-found p a{
        color: lightblue;
        text-align: center;
        text-decoration: none;
    }

    .not-found p a:hover{
        text-decoration: underline;   
    }


</style>