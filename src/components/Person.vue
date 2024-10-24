<script setup lang="ts">
    import { getName, getTypeText } from "../myscript";

    const msg = "aaa"
    interface Props {
        parentToChildProp: string,
        jsonData: any
    }

    const props = defineProps<Props>()

</script>

<template>
    <div class="card" style="width: 24rem;">
        <div class="card-body">
            <div class="row">
                <div class="col-6 myred">
                    <div class="person-flex">
                        <h6 class="card-title inline"><slot name="name">{{ getName(props.jsonData.name) }}</slot></h6>
                    </div>

                    <div class="person-flex">
                        <img v-if="props.jsonData['commute code'] == 'lime'" class="myicon2 inline" src="../assets/icons/sq_status_zaitai.png">
                        <img v-if="props.jsonData['commute code'] == 'yellow'" class="myicon2 inline" src="../assets/icons/sq_status_kitai-chu.png">
                        <img v-if="props.jsonData['commute code'] == 'red'" class="myicon2 inline" src="../assets/icons/sq_status_jouriku-chu.png">
                        <img v-if="props.jsonData['commute code'] == 'gray'" class="myicon2 inline" src="../assets/icons/sq_status_mi-kisho.png">
                    </div>

                    帰隊予定: 
                    <div class="person-flex">
                        <img v-if="props.jsonData.type == 'onboard'" class="myicon inline" src="../assets/icons/type_office.png">
                        <img v-if="props.jsonData.type == 'night'" class="myicon inline" src="../assets/icons/type_night.png">
                        <img v-if="props.jsonData.type == 'morning'" class="myicon inline" src="../assets/icons/type_morning.png">
                        <p class="card-title inline">{{ getTypeText(props.jsonData.type, props.jsonData['due date']) }}</p>
                    </div>
                    <div class="myopp">
                        <!--<RouterLink to="" class="myopp">操作</RouterLink>-->
                    </div>
                </div>
                
                <div class="col-6 myblue">
                    <table class="table table-striped">
                    <tbody>
                        <tr>
                        <td>起床</td>
                        <td style="font-weight: 600;">{{ props.jsonData.wake }}</td>
                        </tr>
                        <tr>
                        <td>出勤開始</td>
                        <td style="font-weight: 600;">{{ props.jsonData.depart }}</td>
                        </tr>
                        <tr>
                        <td>帰隊</td>
                        <td style="font-weight: 600;">{{ props.jsonData.arrive }}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
