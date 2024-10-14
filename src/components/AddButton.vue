<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

interface IProps {
  disabled?: Boolean
}
const props = defineProps<IProps>()

const toggleButtonStyle = ref<boolean>(false);
const icon = ref<HTMLElement | null>(null);

watch(toggleButtonStyle, () => {
  if(props.disabled)
    toggleButtonStyle.value ? icon.value!.style.width = '28px' : icon.value!.style.width = '24px';
})

onMounted(() => {
  icon.value = document.getElementById('plus-icon')
})
</script>

<template>
<button @mouseenter="toggleButtonStyle = true" @mouseleave="toggleButtonStyle = false" :class="{'active' : toggleButtonStyle, 'disabled' : disabled}">
  Add
  <svg id="plus-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="24px">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
</button>
</template>

<style scoped>
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  background-color: #41b883;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  color: white;
  gap: 12px;
  font-size: 18px;
  font-weight: bold;
  transition: font-size 0.2s ease-in-out, opacity 0.25s ease-in-out;
  cursor: pointer;
}

.active {
  font-size: 20px;
}

#plus-icon {
  transition: width 0.2s ease-in-out;
}
.disabled {
  opacity: 0.25;
  pointer-events: none;
}
</style>