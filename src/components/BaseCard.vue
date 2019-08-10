<template>
    <v-card class="rounded-card" height="100%">
        <v-toolbar color="primary" class="top-radius">
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <slot></slot>
    </v-card>
</template>

<script>
    export default {
        name: "BaseCard",
        props: {
            title: String
        }
    }
</script>

<style scoped>

    .rounded-card {
        border-radius: 15px;
        box-shadow: 10px 10px 10px -2px #888;
    }

    .top-radius {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
</style>