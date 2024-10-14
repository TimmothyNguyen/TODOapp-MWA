<template>
<div class="form-container">
  <div class="form">
    <h2>Title  <span style="font-size: 14px">(required)</span></h2>
    <input v-model="title" class="title-field" placeholder="Title"/>

    <h2 style="margin-top: 24px">Description  <span style="font-size: 14px">(optional)</span></h2>
    <textarea v-model="description" class="description-field" placeholder="Description"/>

    <AddButton style="margin-top: 24px" :disabled="disableButton" @click="createTask()"/>
  </div>
</div>
</template>

<style scoped>

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  max-width: 564px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
}
.form > input:focus, textarea:focus {
  outline: white 1px solid;
}

.form > input, textarea {
  background-color: transparent;
  border: solid #41b883 2px;
  border-radius: 12px;
  padding: 12px;
  color: white;
  caret-color: #41b883;
}

.title-field {
  font-size: 24px;
}

.description-field {
  min-height: 300px;
  font-size: 18px;
}

</style>

<script setup lang="ts">
import AddButton from "@/components/AddButton.vue";
import {computed, ref} from "vue";
import type {ITask} from "@/helpers/TaskInterface";
import {useTaskStore} from "@/stores/task-store";
import router from "@/router";

const title = ref<string>('');
const description = ref<string>('');
const disableButton = computed(() => title.value === '')

const taskStore = useTaskStore();

const createTask = () => {
  const task : ITask = {
    id: crypto.randomUUID(),
    title: title.value,
    description: description.value!,
    status: 'undone',
  }
  title.value = '';
  description.value = '';
  taskStore.addNewTask(task);
  router.push('/')
}
</script>
