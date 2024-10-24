<script setup lang="ts">
    import { ref } from "vue"
    import { req, getName, getTypeText } from "../myscript";

    const msg = "aaa"
    interface Props {
        name: string,
        content: any
    }

    const props = defineProps<Props>()

    // 再描画ニキ
    const counter = ref(0)

    let dueSelect = ""

    const resync = (): void => {
        counter.value += 1
    }

    const getDateList = (): string[] => {
        let date = new Date()
        let res: string[] = []
        for (let i = 1; i < 14; i ++){
            let option = ""
            if (i === 1) {option += "今日 "}
            if (i === 2 || i === 3) {option += "明日 "}
            option += date.getMonth().toString().padStart(2, '0')
            option += "/"
            option += date.getDate().toString().padStart(2, '0')
            option += ["(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)"][date.getDay()]
            if (i % 2 === 0) {option += " 朝"}
            if (i % 2 === 1) {option += " 夜"}
            
            res.push(option)
            
            if (i % 2 === 1) {
                date.setDate(date.getDate() + 1)
            }
        }
        //console.log(res)
        //console.log(dueSelect)
        return res
    }

    const getCurrentDateTime = (): string => {
        const dt = new Date()
        return dt.getMonth().toString().padStart(2, '0') +
            "/" + dt.getDate().toString().padStart(2, '0') +
            "_" + dt.getHours().toString().padStart(2, '0') +
            "" + dt.getMinutes().toString().padStart(2, '0') + "i"
    }

    const submitReset = async (): Promise<void> => {
        await req("reset", props.name, dueSelect)
        resync()
    }
    const submitWake = async (): Promise<void> => {
        await req("wake", props.name, getCurrentDateTime())
        resync()
    }
    const submitDepart = async (): Promise<void> => {
        await req("depart", props.name, getCurrentDateTime())
        resync()
    }
    const submitArive = async (): Promise<void> => {
        await req("arrive", props.name, getCurrentDateTime())
        resync()
    }


    const getCommuteCodeOfMe = (): string => {
        try {
            const target = props.content.find((element: any) => element.name === props.name)
            if (target != undefined) {
                return target["commute code"]
            }
            else {
                return "n/a"
            }
        }
        catch(e){
            return "n/a"
        }
    }

</script>

<template>
    <div :key="counter"></div>

    <div class="card" style="width: 24rem;">
        <div class="card-body">
            <div class="row">
                <h5>{{ getName(props.name) }}の操作パネル</h5>

                <p>現在のステータス: </p>
                <img v-if="getCommuteCodeOfMe() === 'lime'" class="sq_status" src="../assets/icons/sq_status_zaitai.png" />
                <img v-if="getCommuteCodeOfMe() === 'yellow'" class="sq_status" src="../assets/icons/sq_status_kitai-chu.png" />
                <img v-if="getCommuteCodeOfMe() === 'red'" class="sq_status" src="../assets/icons/sq_status_jouriku-chu.png" />
                <img v-if="getCommuteCodeOfMe() === 'gray'" class="sq_status" src="../assets/icons/sq_status_mi-kisho.png" />

                <span class="border-bottom mt-4 mb-4"></span>

                <template v-if="getCommuteCodeOfMe() === 'lime'">
                    <div class="row">
                        <div class="col-8">
                            今から上陸ですか？<br>
                            帰隊予定:
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <select v-model="dueSelect" v-on:change="resync" class="form-select" >
                                <option value="-" selected>選択してください…</option>
                                <template v-for="opt in getDateList()">
                                    <option :value="opt">{{ opt }}</option>
                                </template>
                            </select>
                        </div>
                        <div class="col-4"> 
                            <button v-if="dueSelect !== '-'" v-on:click="submitReset()" type="button" class="btn btn-primary">セット</button>
                        </div>
                    </div>
                </template>

                <template v-if="getCommuteCodeOfMe() === 'gray'">
                    <div class="row">
                        <div class="col-6">
                            起床報告を行いますか？<br>
                        </div>
                        <div class="col-6"> 
                            <button v-if="dueSelect !== '-'" v-on:click="submitWake()" type="button" class="btn btn-danger">
                                起床した
                            </button>
                        </div>
                    </div>
                </template>

                <template v-if="getCommuteCodeOfMe() === 'red'">
                    <div class="row">
                        <div class="col-6">
                            出勤開始報告を行いますか？<br>
                        </div>
                        <div class="col-6"> 
                            <button v-if="dueSelect !== '-'" v-on:click="submitDepart()" type="button" class="btn btn-warning">
                                出勤開始した
                            </button>
                        </div>
                    </div>
                </template>

                <template v-if="getCommuteCodeOfMe() === 'yellow'">
                    <div class="row">
                        <div class="col-6">
                            帰隊完了報告を行いますか？<br>
                        </div>
                        <div class="col-6"> 
                            <button v-if="dueSelect !== '-'" v-on:click="submitArive()" type="button" class="btn btn-success">
                                帰隊完了した
                            </button>
                        </div>
                    </div>
                </template>

            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
