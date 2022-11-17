<script setup>
    import portal from '../assets/portal.gif'
</script>

<template>
    <div class="col loader">
        <img class="portal" :src="portal" alt="">
    </div>

</template>

<style>
.loader{
    min-width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.portal{
    width: 50vw;
}
</style>