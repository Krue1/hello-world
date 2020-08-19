<template>
  <div>
    <h1>Hello!</h1>
    <p>{{message}} world!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "wow",
    };
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>