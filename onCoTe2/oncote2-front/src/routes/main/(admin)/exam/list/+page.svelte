<script lang="ts">
    import ExamCard from "$lib/features/exam/ExamCard.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        console.log("onCote2 /main/(admin)/exam/list Page");
    });

    const examList = [
        {
            index: 1,
            title: "A 기업 코딩 테스트",
            date: {
                start: "2025-12-18 13:34:28",
                end: "2025-12-18 13:34:30",
            },
            examinee: {
                total: 100,
                finish: 50,
            },
        },
        {
            index: 2,
            title: "B 기업 코딩 테스트",
            date: {
                start: "2025-12-18 13:34:28",
                end: "2025-12-18 13:34:30",
            },
            examinee: {
                total: 10,
                finish: 3,
            },
        },
        {
            index: 3,
            title: "C 기업 코딩 테스트",
            date: {
                start: "",
                end: "",
            },
            examinee: {
                total: 0,
                finish: 5,
            },
        },
    ];
</script>

{#each examList as exam}
    <ExamCard {exam} />
{/each}
