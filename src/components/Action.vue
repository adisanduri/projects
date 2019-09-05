<template>
    <v-btn v-if="hover"
           small
           icon
           dark
           @mouseover="colorActionBtn='primary'"
           @mouseleave="colorActionBtn='grey'"
           @click.stop="click">
        <v-icon :color="colorIcon ? colorIcon : colorActionBtn"
        >
            {{icon}}
        </v-icon>
    </v-btn>
</template>

<script>
export default {
  name: 'Action',
  props: {
    hover: Boolean,
    click: Function,
    icon: String,
    colorIcon: String,
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
