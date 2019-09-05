<template>
    <div>
        <Action v-bind:click="()=>{}" v-bind:hover="hover" icon="edit"/>
        <Action v-bind:click="()=>{}" v-bind:hover="hover" icon="delete"/>
        <Action
                v-bind:click="()=>{favorite=!favorite}"
                v-bind:hover="true"
                v-bind:icon="favorite? 'star' : 'star_border'"
                v-bind:colorIcon="favorite? 'yellow' : 'grey'"
        />
    </div>
</template>

<script>
import Action from './Action.vue';

export default {
  name: 'ActionButtons',
  components: { Action },
  props: {
    hover: Boolean,
  },
  data() {
    return {
      favorite: false,
    };
  },
};
</script>

<style scoped>

</style>
