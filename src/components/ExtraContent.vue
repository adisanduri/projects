<template>
  <BaseCard title="מידע נוסף">
    <template v-if="selectedMessage">
      <v-flex mx-4>
        <v-card-title>נושא: {{selectedMessage.title}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="text--primary">נשלח על ידי: {{selectedMessage.from}}</div>
          תוכן: {{selectedMessage.content}}
        </v-card-text>
      </v-flex>
    </template>
  </BaseCard>
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
      if (this.selectedMessage
              && newMessage
              && newMessage.id === this.selectedMessage.id) {
        this.selectedMessage = undefined;
      } else {
        this.selectedMessage = newMessage;
      }
    });
  },
};
</script>

<style scoped></style>
