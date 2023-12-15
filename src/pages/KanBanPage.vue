<template>
    <main style="min-height: 50vh;margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">
                    <h1 class="mb-4">kanban <small class="text-muted">(tasks )</small></h1>

                <div class="row">
                    <div class="col-md-3">
                        <div class="card text-left rounded">
                          <div class="card-body">
                            <h4 class="card-title">Tarefas</h4>
                            <p class="item border p-2 cursor" v-for="task in uncompletedTasks" :id="task.id">{{ task.name }}</p>
                          </div>
                        </div>
                    </div>

                    <div class="col-md-3 ">
                        <div class="card text-left rounded">
                          <div class="card-body">
                            <h4 class="card-title">Execucao</h4>
                          </div>
                        </div>
                    </div>

                    <div class="col-md-3 ">
                        <div class="card text-left rounded">
                          <div class="card-body">
                            <h4 class="card-title">Finalizado</h4>
                          </div>
                        </div>
                    </div>

                    <div class="col-md-3 ">
                        <div class="card text-left rounded">
                          <div class="card-body">
                            <h4 class="card-title">Em producao</h4>
                          </div>
                        </div>
                    </div>
                    
                </div>

                </div>
            </div>
        </div>
    </main>
</template>


<script setup>
import Tasks from "../components/tasks/Tasks.vue";
import { useTaskStore } from "../stores/task.js"
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const store = useTaskStore();
const { completedTasks, uncompletedTasks } = storeToRefs(store)


const completedTasksIsVisible = computed(
    () => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0
)
const { fetchAllTasks } = store

onMounted(async () => {
    await fetchAllTasks()

})
</script>

<style scoped>
.cursor{
    cursor: move;
}
</style>