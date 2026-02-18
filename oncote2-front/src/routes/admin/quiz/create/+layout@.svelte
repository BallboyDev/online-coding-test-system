<script lang="ts">
    import { quizKey, area } from "$lib/contexts/quiz";
    import Header from "$lib/features/main/Header.svelte";
    import Navigator from "$lib/features/main/Navigator.svelte";
    import {
        Button,
        ButtonGroup,
        Nav,
        NavItem,
        NavLink,
    } from "@sveltestrap/sveltestrap";
    import { onMount, setContext } from "svelte";

    let { children } = $props();

    let pageTitle = $state("관리자 페이지");

    setContext(quizKey, area);

    onMount(() => {});
</script>

<div class="vh-100 vw-100 d-flex flex-column">
    <Header {pageTitle}>
        <ButtonGroup>
            <Button size="sm">문제 설명</Button>
            <Button size="sm">문제 설정</Button>
        </ButtonGroup>

        <ButtonGroup class="d-flex justify-content-end">
            <Button
                type="button"
                class=""
                color="primary"
                size="sm"
                onclick={() => {
                    window.location.href = "/main/quiz/list";
                }}
            >
                메인페이지 돌아가기
            </Button>
            <Button
                type="button"
                class=""
                color="primary"
                size="sm"
                onclick={() => {
                    // quizTitle = "";
                    // quizDesc = "";
                }}
            >
                초기화
            </Button>
            <Button type="submit" class="" color="primary" size="sm"
                >저장</Button
            >
        </ButtonGroup>
    </Header>

    {@render children()}
</div>

<style lang="scss">
    .header {
        height: 3rem;
        background-color: var(--bs-secondary-bg);
    }
</style>
