<template>
  <div class="datum">
    <Datum msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Datum from '@/components/Datum.vue'

export default {
  name: 'datum',
  components: {
    Datum
  }
}
</script>
