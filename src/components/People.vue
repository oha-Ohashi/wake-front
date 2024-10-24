<script setup lang="ts">
    import { getName, getTypeText } from "../myscript";
    import Person from '../components/Person.vue';

    const msg = "aaa"
    interface Props {
        content: any
    }

    const props = defineProps<Props>()

</script>

<template>
    <div v-for="person in props.content">
        <!--
        <p style="font-size: 8px;">{{ person }}</p>
        -->
        <Person parentToChildProp="heeeeeee" :jsonData=person />
    </div>
</template>

<style scoped>

</style>
