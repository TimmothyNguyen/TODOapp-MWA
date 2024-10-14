import {defineStore} from "pinia";
import type {ITask} from "@/helpers/TaskInterface";
import type {ITasks} from "@/helpers/TasksObjectInterface";

export const useTaskStore = defineStore('main', {
    state: () => ({
        tasks: [] as ITask[]
    }),
    getters: {
        getTasks: (state) => state.tasks
    },
    actions: {
        addNewTask(task : ITask) {
            this.tasks.push(task)
        },
        deleteTask(taskId : string) {
            const taskIndex =  this.tasks.findIndex(task => taskId === task.id)
                this.tasks.splice(taskIndex, 1)
        }
    },
})

