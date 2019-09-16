<template>
    <BaseCard v-bind:title="selectedOption">
        <v-list v-if="selectedOption === 'דואר נכנס'">
            <v-list-item-group
                    active-class="blue--text"
            >
                <template
                        v-for="message in inboxMessages">
                    <Message
                            v-bind:item="message"/>
                    <v-divider :key="message.id"></v-divider>
                </template>
            </v-list-item-group>
        </v-list>

    </BaseCard>
</template>

<script>
import { mapState } from 'vuex';
import BaseCard from './BaseCard.vue';
import Message from './Message.vue';

export default {
  name: 'Content',
  components: {
    Message,
    BaseCard,
  },
  computed: {
    ...mapState([
      'inboxMessages',
      'selectedOption',
    ]),
  },
};
</script>

<style scoped>
</style>