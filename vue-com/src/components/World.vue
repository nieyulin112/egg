<template lang="html">
    <div class="world" @click="clickH">
        {{modal}}
        <slot></slot>
    </div>
</template>

<script>
export default {
  data () {
    return {
      xxx: 'world'
    }
  },
  props: {
    modal: {
      type: String,
      default: 'world'
    }
  },
  methods: {
    clickH () {
      this.$emit('clickH')
    }
  }
}
</script>

<style lang="css" scoped>
    .world {
        color:#f00;
    }
</style>
