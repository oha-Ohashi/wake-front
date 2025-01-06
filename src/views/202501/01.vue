<script setup lang="ts">
  import { ref } from 'vue'
  import { req } from "../../my202501script";

  let recent5 = ref("")

    // 今日の日付を yyyy-MM-dd 形式で生成する関数
    const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0始まりのため +1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
    };

    // ページ読み込み時に今日の日付を設定
    let today = ref(formatDate(new Date()));

    const params = ref({
        mode: 'add',
        date: today,
        name: '',
        price: '',
        type: '食',
        description: ''
    });

    const debugman = ref("しょきち");
    const abc = ref(["a", "ba", "cc"]);
    const recent5table = ref([]);
    const submitDatas = async () => {
        // get the form values and pack them into an object
        let res: any = await req(params.value);
        recent5.value = res;
        debugman.value = res.data + ' ' + res.data.length;

        recent5table.value = res.data;
    };


</script>

<template>
    <main>
        <div class="container">
            <h2>New entry</h2>

            <div>
                <label for="Fdate" class="form-label">Date</label>
                <input type="date" class="form-control" id="Fdate" v-model="params.date">

                <label for="Fname" class="form-label">Name</label>
                <input type="text" class="form-control" id="Fname" placeholder="Coke" v-model="params.name">

                <label for="Fprice" class="form-label">Price</label>
                <input type="number" class="form-control" id="Fprice" placeholder="200" v-model="params.price">

                <label for="Ftype" class="form-label">Type</label>
                <select class="form-select" id="Ftype" aria-label="Default select example" v-model="params.type">
                    <option selected value="食">食</option>
                    <option value="物">物</option>
                    <option value="遊">遊</option>
                </select>

                <label for="Fdes" class="form-label">Description</label>
                <input type="text" class="form-control" id="Fdes" placeholder="What made you buy it?" v-model="params.description">

            </div>
            <div>
                <br/>
                <button v-on:click="submitDatas()" type="button" class="btn btn-primary">Submit</button>
            </div>
            <!--
                {{ recent5 }}
            -->
            <br/>

            <template v-if="recent5table.length > 0">
                <table class="table table-bordered table-hover text-center">
                    <thead class="table-dark">
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, i) in recent5table" :key="i">
                            <td>{{ row['date'] }}</td>
                            <td>{{ row['name'] }}</td>
                            <td>{{ row['value'] }}</td>
                            <td>{{ row['type'] }}</td>
                            <td>{{ row['description'] }}</td>
                        </tr>
                        <!--
                        <tr>
                            <td>1,1</td>
                            <td>1,2</td>
                            <td>1,3</td>
                            <td>1,4</td>
                            <td>1,5</td>
                        </tr>
                        -->
                    </tbody>
                </table>
            </template>
        </div>
    </main>
</template>

<style>
/*
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
*/
</style>
