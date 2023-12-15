<template>
        <ul>
            <li>[{{ task.created_at }}] {{ task.name }}</li>
        </ul>
</template>


<script setup>
defineProps({
    task:Object
})
</script>
