<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "./Icon.svelte";
    import { Input } from "@sveltestrap/sveltestrap";

    let { quiz, checkedList = $bindable() } = $props();
    let indexCursor = $state(false);
    let checked = $state(false);

    $inspect(quiz);

    onMount(() => {
        checked = checkedList.includes(quiz.index);
    });

    const setCheckedList = () => {
        if (checked) {
            console.log("true >>", checkedList.includes(quiz.index));
            checkedList = [...checkedList, quiz.index];
        } else {
            console.log("false >>", checkedList.includes(quiz.index));
            checkedList = checkedList.filter((l: string) => l !== quiz.index);
        }
    };
</script>

<div class="w-100 border d-flex p-4 mb-3 rounded-4">
    <div
        class="q-index text-start"
        role="button"
        tabindex="0"
        onmouseenter={() => {
            indexCursor = true;
        }}
        onmouseleave={() => {
            indexCursor = false;
        }}
    >
        {#if indexCursor || checked}
            <Input type="checkbox" bind:checked onchange={setCheckedList} />
        {:else}
            <div>{quiz.index || 0}</div>
        {/if}
    </div>

    <div class="q-title text-start">
        <a href="#">{quiz.title}</a>
    </div>
    <div class="q-lang text-center d-flex justify-content-center">
        {#each quiz.language as lang}
            <Icon {lang} />
        {/each}
    </div>
    <div class="q-level text-center">{quiz.level}</div>
    <div class="q-createDate text-center">{quiz.createDate || "20251231"}</div>
</div>

<style lang="scss">
    .q-index {
        flex-basis: 3rem;
        background: none;
        border: none;
        cursor: unset;
    }
    .q-title {
        flex-basis: 60%;
    }
    .q-lang {
        flex-basis: 15%;
    }
    .q-level {
        flex-basis: 10%;
    }
    .q-createDate {
        flex-basis: 10%;
    }
    .lang {
        width: 1.5rem;
        height: 1.5rem;
    }
</style>
