<script lang="ts">
    import ExamCard from "$lib/features/exam/ExamCard.svelte";
    import { onMount } from "svelte";

    const { data } = $props();

    let examList = $state([]);

    onMount(() => {
        examList = data.exams;
    });
</script>

{#each examList as exam}
    <ExamCard {exam} />
{/each}
