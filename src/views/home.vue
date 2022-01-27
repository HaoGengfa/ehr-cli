<template>
  <div>

  </div>
</template>

<script  setup>
import { onMounted, reactive } from "vue";
let info = reactive({
  arr: ["1", "2", "3", "4"],
  name: "张三",
})

const user = reactive({
  name: "marry",
});
function getMessage(val) {
  console.log(val);
}
onMounted(() => {
  info.arr.push("6")
});
</script>
<style scoped>
</style>