<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
   <div>
      {{store.count}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/pinia/globalStore'
export default defineComponent({
  name: 'AboutPgae',
  components: {
  },
  setup(){
    const store = useStore()
    const add = () =>{
      store.countPlus()
    }
    const del = () =>{
      store.countDel()
    }
    return {
      store,
      add,
      del
    }
  }
})
</script>
