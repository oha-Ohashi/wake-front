<script setup lang="ts">
  import { ref } from 'vue'
  import { req } from "../myscript";
  import Person from '../components/Person.vue';

  const oneSync3 = async (arg1: string, arg2: string, arg3: string): Promise<void> => {
    let res: any = await req(arg1, arg2, arg3);
  }

</script>

<template>

  <main>
    <div class="container">

        <h1>ああああああ</h1>

        <button v-on:click="oneSync3('init', 'a', '_')" type="button" class="btn btn-danger">init</button>
        <div>
            <button v-on:click="oneSync3('reset', 'alice', 'onboard')" type="button" class="btn btn-primary">alice</button>
            <button v-on:click="oneSync3('reset', 'bob', 'onboard')" type="button" class="btn btn-primary">bob</button>
            <button v-on:click="oneSync3('reset', 'charlie', 'onboard')" type="button" class="btn btn-primary">charlie</button>
        </div>
        <div>
            <button v-on:click="oneSync3('reset', 'alice', '10/30(月)_夜')" type="button" class="btn btn-primary">alice</button>
            <button v-on:click="oneSync3('reset', 'bob', '10/30(月)_夜')" type="button" class="btn btn-primary">bob</button>
            <button v-on:click="oneSync3('reset', 'charlie', '10/30(月)_夜')" type="button" class="btn btn-primary">charlie</button>
        </div>
        <div>
            <button v-on:click="oneSync3('reset', 'alice', '10/25(木)_朝')" type="button" class="btn btn-primary">alice</button>
            <button v-on:click="oneSync3('reset', 'bob', '10/30(月)_朝')" type="button" class="btn btn-primary">bob</button>
            <button v-on:click="oneSync3('reset', 'charlie', '10/30(月)_朝')" type="button" class="btn btn-primary">charlie</button>
        </div>

    </div>

  </main>
</template>
