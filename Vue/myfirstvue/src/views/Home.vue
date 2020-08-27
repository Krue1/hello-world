<template>
  <div class="home">
    <HeadNav></HeadNav>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HeadNav from "@/components/HeadNav";

export default {
  name: "Home",
  components: {
    HeadNav
  }
};
</script>
