<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-layout row pa-5 justify-space-around>
          <v-flex xs3>
            <Menu />
          </v-flex>

          <v-flex xs8>
            <v-layout column fill-height justify-space-between>
              <v-flex xs7 :grow="selectedOption === 'דואר זבל'">
                <Content />
              </v-flex>

              <v-flex v-if="selectedOption !== 'דואר זבל'" xs4>
                <ExtraContent />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';
import Content from './components/Content.vue';
import ExtraContent from './components/ExtraContent.vue';
import { EventBus } from './event-bus';

export default {
  name: 'app',
  components: {
    ExtraContent,
    Content,
    Menu,
  },
  data() {
    return {
      selectedOption: '',
    };
  },
  created() {
    EventBus.$on('update-selected-option', (newTitle) => {
      this.selectedOption = newTitle;
    });
  },
};
</script>

<style></style>
