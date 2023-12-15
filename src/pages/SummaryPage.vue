<template>
    <main style="min-height: 50vh;margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h1 class="mb-4">Summary <small class="text-muted">(tasks this week)</small></h1>

                    <div v-for="(task, description) in summaries" :key="description">
                        <Summaries :tasks="task" :description="description" />

                    </div>

                </div>
            </div>
        </div>
    </main>
</template>


<script setup>
import { storeToRefs } from "pinia"
import { useSummaryStore } from "../stores/summary"
import Summaries from "../components/summaries/Summaries.vue";
import { onMounted } from "vue";

const store = useSummaryStore()
const { summaries } = storeToRefs(store)
const { fetchTasksSummary } = store


onMounted(async () => {
    await fetchTasksSummary()
})

</script>