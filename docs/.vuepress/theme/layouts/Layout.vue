<template>
  <ccb>
    <div slot="content">
      <debug></debug>
      <home v-if="$page.type === 'page'"></home>
      <articles v-if="$page.type === 'post'"></articles>
    </div>
  </ccb>
</template>

<script>
export default {
  components: {
    ccb: () => import("../components/Ccb.vue"),
    home: () => import("../components/Home.vue"),
    debug: () => import("../components/Debug.vue"),
    articles: () => import("../components/Article.vue")
  }
};
</script>

<style></style>
