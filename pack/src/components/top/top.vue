<template>
  <!--<div class="m-wrapper">-->
    <!--<share></share>-->
    <!--<div class="m-top"></div>-->
    <!--<gain></gain>-->
  <!--</div>-->
  <gain></gain>
</template>
<script type="text/ecmascript-6">
  import gain from '@/components/gain/gain'

//  import share from '@/components/share/share';
  export default {
    props: {

    },
    data () {
      return {
//        seller: {
//          id: (() => {
//            let queryParam = urlParse();
//            return queryParam.id;
//          })()
//        }
      }
    },
    methods: {
    },
    components: {
      gain
//      share
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
