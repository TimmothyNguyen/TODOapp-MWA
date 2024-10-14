
<script setup lang="ts">


const props = defineProps({
  title: String
})

const emit = defineEmits(['valueUpdate'])




</script>

<template>
  <div class="task-item">
    <p>{{ title }}</p>
    <input type="checkbox" @change="emit('valueUpdate')" class="item-checkbox"/>
  </div>
</template>

<style scoped>
.task-item {
  background-color: rgba(66, 184, 131, 0.05);
  border: solid 2px #41b883;
  width: 100%;
  padding: 32px;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.task-item > p {
  font-size: 18px;
  color: #41b883;
  font-weight: 700;
}
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none; /* For Safari */
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: 2px solid #41b883;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease-in-out;
}
input[type="checkbox"]:checked {
  background-color: #41b883;
}
input[type="checkbox"]:checked::after {
  content: "\2713";
  font-size: 16px;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>