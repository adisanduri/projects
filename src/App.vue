<template>
  <v-app>
    <v-content>
      <v-container fill-height>

        <v-layout row pa-5 justify-space-around>
          <v-flex xs3>
            <Menu/>
            <v-btn
                    fab
                    color="light-blue accent-2"
                    x-large
                    class="v-btn--example"
                    @click="dialog = !dialog"
            >
              <v-icon color="white">add</v-icon>
            </v-btn>
          </v-flex>

          <v-flex xs7>
            <v-layout column fill-height justify-space-between>
              <v-flex xs7 :grow="selectedOption === 'דואר זבל'">
                <Content />
              </v-flex>

              <v-flex v-if="selectedOption !== 'דואר זבל'" xs4>
                <ExtraContent />
              </v-flex>
            </v-layout>
          </v-flex>

          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-text v-row>
                <v-col cols="12" sm="6">
                  <v-text-field label="שלח ל"></v-text-field>
                  <v-text-field label="נושא"></v-text-field>
                </v-col>

                <v-text-field label="תוכן"></v-text-field>
                <v-text-field label="שליחה"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn text color="primary" @click="dialog = false">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

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
      dialog: false,
    };
  },
  created() {
    EventBus.$on('update-selected-option', (newTitle) => {
      this.selectedOption = newTitle;
    });
  },
};
</script>

<style>
  .v-btn--example {
    bottom: 0;
    position: absolute !important;
    margin: 0 0 16px 16px;
  }
</style>
