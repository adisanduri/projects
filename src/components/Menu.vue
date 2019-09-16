<template>
    <BaseCard title="תפריט">
      <v-list nav>
          <v-list-item-group v-model="selectedOption" mandatory color="primary">
              <v-list-item
                      v-for="(item,i) in items"
                      :key="i"
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
import { mapState, mapMutations } from 'vuex';
import BaseCard from './BaseCard.vue';

export default {
  name: 'Menu',
  components: {
    BaseCard,
  },
  created() {
    setTimeout(() => {
      this.setSelectedOption(this.items[0].option);
    }, 0);
  },
  computed: {
    ...mapState(['selectedOption']),
    selectedOption: {
      get() {
        return this.$store.selectedOption;
      },
      set(index) {
        this.optionSelected(this.items[index].option);
      },
    },
  },
  data() {
    return {
      items: [
        { option: 'דואר נכנס' },
        { option: 'דואר יוצא' },
        { option: 'דואר זבל' },
      ],
    };
  },
  methods: {
    ...mapMutations([
      'setSelectedMessage',
      'setSelectedOption',
    ]),
    optionSelected(value) {
      this.setSelectedOption(value);

      if (value !== 'דואר נכנס') {
        this.setSelectedMessage(undefined);
      }
    },
  },
};
</script>


<style></style>
