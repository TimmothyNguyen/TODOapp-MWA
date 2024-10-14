<script setup lang="ts">
import type {ITask} from "@/helpers/TaskInterface";
import {useTaskStore} from "@/stores/task-store";
import {computed, type ComputedRef, ref, watch} from "vue";
import ListCard from "@/components/ListCard.vue";
const taskStore = useTaskStore();
const tasks : ComputedRef<any> = computed(() => taskStore.getTasks)



</script>

<template>
  <main>
      <div class="list">
        <ListCard v-for="task in tasks" :title="task.title" @valueUpdate="taskStore.deleteTask(task.id)"/>
      </div>
  </main>
</template>

<style scoped>

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;
}

</style>
