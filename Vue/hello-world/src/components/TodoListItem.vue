<template>
  <li>
    {{todo.text}}
    <button @click="$emit('remove',index)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style>

</style>