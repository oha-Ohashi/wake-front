<script setup lang="ts">
  import { ref } from 'vue'
  import { req } from "../myscript";
  import People from '../components/People.vue';
  import ResetReport from '../components/ResetReport.vue';


</script>

<template>
  <main>
    <div class="container">

      <h2 class="head-h2">ホーム</h2>

        <p>何もありません。</p>
        <RouterLink to="/list">リスト</RouterLink>
        <RouterLink to="/personal/alice">アリス</RouterLink>

    </div>

  </main>
</template>
