
<template>
  <div class="main">
    <main-header></main-header>
    <main-content></main-content>
  </div>
</template>

<script>
import mainHeader from './_header'
import mainContent from './_content'

export default {
  data() {
    return {
    }
  },
  components: {
    mainHeader,
    mainContent
  }
}
</script>
