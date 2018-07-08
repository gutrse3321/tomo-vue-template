<template>
  <div class="content">
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainFooter from './_footer'
export default {
  components: {
    mainFooter
  },
  computed: {},
  methods: {}
}
</script>
