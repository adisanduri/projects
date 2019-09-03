<template>
    <BaseCard title="תפריט">
      <v-list nav>
          <v-list-item-group v-model="selectedOption" mandatory color="primary">
              <v-list-item
                      v-for="(item,i) in items"
                      :key="i"
                      @click="optionSelected(item.option)"
              >
                  <v-list-item-content>
                      <v-list-item-content
                              v-text="item.option"
                      />
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>

    </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue';
import { EventBus } from '../event-bus';

export default {
  name: 'Menu',
  components: {
    BaseCard,
  },
  methods: {
    optionSelected(value) {
      EventBus.$emit('update-selected-option', value);

      if (value !== 'דואר נכנס') {
        EventBus.$emit('update-selected-message', undefined);
      }
    },
  },
  data() {
    return {
      selectedOption: 0,
      items: [
        { option: 'דואר נכנס' },
        { option: 'דואר יוצא' },
        { option: 'דואר זבל' },
      ],
    };
  },
  created() {
    setTimeout(() => {
      this.optionSelected(this.items[0].option);
    }, 0);
  },
};
</script>


<style></style>
