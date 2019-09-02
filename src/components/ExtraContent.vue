<template>
  <BaseCard title="מידע נוסף"></BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue';
import { EventBus } from '../event-bus';

export default {
  name: 'ExtraContent',
  components: {
    BaseCard,
  },
  data() {
    return {
      selectedMessage: null,
    };
  },
  created() {
    EventBus.$on('update-selected-message', (newMessage) => {
      this.selectedMessage = newMessage;
    });
  },
};
</script>

<style scoped></style>
