<script setup lang="ts">
  import { ref } from 'vue'
  import { req } from "../myscript";
  import People from '../components/People.vue';
  import ResetReport from '../components/ResetReport.vue';

  interface Props {
    report: boolean,
    name: string
  }

  const props = defineProps<Props>()

  let content = {}
  let counter = ref(0)

  const oneSync2 = async (): Promise<void> => {
    let res: any = await req("meaningless", "request", "parameters");
    content = res.content
    console.log(content)
    counter.value += 1
  }

  oneSync2();
  setInterval(oneSync2, 500);

</script>

<template>
  <div :key="counter"></div>

  <main>
    <div class="container">

      <h2 class="head-h2">出勤状況把握</h2>

      <template v-if="props.name !== '-'">
        <ResetReport :name="props.name" :content="content"/>
        <h2 class="mt-3">みなさんの出勤状況</h2>
      
      </template>

      <People :content="content" />

      <!--
      <div v-for="person in content">
        <p style="font-size: 8px;">{{ person }}</p>
        <Person parentToChildProp="heeeeeee" :jsonData=person />
      </div>
      -->

    </div>

  </main>
</template>
