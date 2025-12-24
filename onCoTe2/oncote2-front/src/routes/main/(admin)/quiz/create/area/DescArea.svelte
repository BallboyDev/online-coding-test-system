<script lang="ts">
    import { Input } from "@sveltestrap/sveltestrap";

    // export let quizTitle: string;
    // export let quizDesc: string;
    // export let quizContent: string;

    let {
        quizTitle = $bindable(),
        quizDesc = $bindable(),
        quizContent = $bindable(),
    } = $props();
</script>

<div class="p-3 d-flex flex-column h-100">
    <Input
        class="w-50 mb-3"
        type="text"
        placeholder="문제 제목"
        bind:value={quizTitle}
    />
    <Input
        class="w-100 h-25 mb-3"
        type="textarea"
        placeholder="문제 설명"
        style="resize: none;"
        bind:value={quizDesc}
    />
    <Input
        class="w-100 h-100"
        type="textarea"
        placeholder="문제 내용"
        style="resize: none;"
        bind:value={quizContent}
    />
</div>
