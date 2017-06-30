<template>
  <div class="m-wrapper">
    <share></share>
    <div class="m-top"></div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import share from '@/components/share/share'
export default {
  components: {
    share
  }
}
</script>

<style>
</style>
