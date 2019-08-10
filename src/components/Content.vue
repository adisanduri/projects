<template>
    <BaseCard v-bind:title="title">
        <h1>קופידון פגע בי</h1>
    </BaseCard>
</template>

<script>
    import BaseCard from "./BaseCard";
    import { EventBus } from "../event-bus";

    export default {
        name: "Content",
        components: {
            BaseCard
        },
        data: function() {
            return {
                title : '',
            }
        },
        created() {
            EventBus.$on('update-title', newTitle => {
                this.title = newTitle;
            });
        }
    }
</script>

<style scoped>
</style>