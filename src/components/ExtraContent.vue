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
import { mapState } from 'vuex';
import BaseCard from './BaseCard.vue';

export default {
  name: 'ExtraContent',
  components: {
    BaseCard,
  },
  computed: {
    ...mapState(['selectedMessage']),
  },
};
</script>

<style scoped></style>
