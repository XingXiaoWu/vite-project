<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      {{store.count}}
    </div>
    <el-button type="primary" @click="add">加</el-button>
    <el-button type="primary" @click="del">减</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { useStore } from '@/pinia/globalStore'
export default defineComponent({
  name: 'HomePage',
  components: {
    HelloWorld,
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
