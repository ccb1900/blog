<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
    props: {
    data: Array,
    columns: Array,
  },
  data () {
    return {
      chartData: {
        columns: this.columns,
        rows: this.data
      }
    }
  }
}
</script>