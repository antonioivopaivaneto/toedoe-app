<template>
    <div class="contianer py-5">
        <h1>404</h1>
        <p>Pagina <code> {{ $route.params.notFound }}</code> nao encontrada</p>

        <router-link :to="{name: 'tasks'}">Back to your tasks</router-link>
    </div>
</template>