<script lang="ts">
    import QuizCard from "$lib/features/quiz/QuizCard.svelte";
    import {
        Button,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
        FormGroup,
        Input,
        InputGroup,
        InputGroupText,
        Table,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    const { form, data } = $props();

    let quizzes: any[] = $state([]);
    let checkedList: number[] = $state([]);

    $inspect(checkedList);

    onMount(() => {
        console.log("onCote2 /main/listQuiz Page");

        quizzes = data.quizzes;
    });
</script>

<div class="d-flex justify-content-between mb-3">
    <div>
        <InputGroup class="search">
            <Input name="test" placeholder="문제 검색" />
            <Button color="primary">검색</Button>
        </InputGroup>
    </div>
    <form method="post" action="?/delete">
        <div>
            {#if checkedList.length > 0}
                <input type="hidden" name="ids" value={checkedList.join(",")} />
                <Button type="submit" color="danger" onclick={() => {}}>
                    선택 문제 삭제 : ( {checkedList.length}개 )
                </Button>
            {/if}
            <Button
                color="primary"
                size="md"
                type="button"
                onclick={() => {
                    window.location.href = "/main/quiz/create";
                }}>문제 제작</Button
            >
        </div>
    </form>
</div>

{#each quizzes as quiz}
    <!-- {#each quizList as quiz} -->
    <QuizCard {quiz} bind:checkedList />
{/each}

<style lang="scss">
</style>
