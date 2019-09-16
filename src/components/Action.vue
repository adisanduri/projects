<template>
    <v-btn
           v-if="action.parmanent ? true : hover"
           small
           icon
           dark
           @mouseover="colorActionBtn='primary'"
           @mouseleave="colorActionBtn='grey'"
           @click.stop="$listeners.click">
        <v-icon :color="action.colorIcon(this.message.favourite, colorActionBtn)"
        >
            {{action.icon(this.message.favourite)}}
        </v-icon>
    </v-btn>
</template>

<script>
export default {
  name: 'Action',
  props: {
    action: {
      type: Object,
      default: () => ({}),
    },
    hover: Boolean,
    message: Object,
  },
  data() {
    return {
      colorActionBtn: 'grey',
    };
  },
};
</script>

<style scoped>

</style>
