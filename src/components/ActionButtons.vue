<template>
    <v-layout>
        <div :key="action.id"
             v-for="action in actions">
            <Action
                    @click="action.click(message)"
                    :action="action"
                    :message="message"
                    :hover="hover"
            />
        </div>
    </v-layout>
</template>

<script>
import { mapMutations } from 'vuex';
import Action from './Action.vue';

export default {
  name: 'ActionButtons',
  components: { Action },
  props: {
    hover: Boolean,
    message: Object,
    actions: Array,
  },
  methods: {
    ...mapMutations([
      'addItemToList',
      'removeItemByIdFromList',
    ]),
  },
};
</script>

<style scoped>
</style>
