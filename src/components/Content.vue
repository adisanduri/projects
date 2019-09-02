<template>
    <BaseCard v-bind:title="selectedOption">
        <v-list v-if="selectedOption === 'דואר נכנס'">
            <v-list-item-group
                    active-class="blue--text"
            >
                <template
                        v-for="message in messages">
                    <Message
                            v-bind:item="message"/>
                    <v-divider :key="message.id"></v-divider>
                </template>
            </v-list-item-group>
        </v-list>

    </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue';
import { EventBus } from '../event-bus';
import Message from './Message.vue';

export default {
  name: 'Content',
  components: {
    Message,
    BaseCard,
  },
  data() {
    return {
      selectedOption: '',
      messages: [
        {
          id: 1,
          title: 'Hi',
          sent: new Date().getTime(),
          from: 'Adi',
          content: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
        },
        {
          id: 2,
          title: 'Hello',
          sent: new Date().getTime() - 1000000,
          from: 'Dana',
          content: 'no no no',
        }, {
          id: 3,
          title: 'what\'s up?',
          sent: new Date().getTime() - 10000000,
          from: 'Neta',
          content: 'Hello nir? how are you today?',
        },
        {
          id: 4,
          title: 'music',
          sent: new Date().getTime() - 100000000,
          from: 'Ben-El',
          content: 'Hello nir? how are you today?',
        },
        {
          id: 5,
          title: 'hiiiii',
          sent: new Date().getTime() - 1000000000,
          from: 'Shimi',
          content: 'Hello nir? how are you today?',
        },
      ],

    };
  },
  created() {
    EventBus.$on('update-selected-option', (newTitle) => {
      this.selectedOption = newTitle;
    });
  },
};
</script>

<style scoped>
</style>
