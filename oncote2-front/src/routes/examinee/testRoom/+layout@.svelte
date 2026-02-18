<script lang="ts">
    import Header from "$lib/features/main/Header.svelte";
    import Navigator from "$lib/features/main/Navigator.svelte";
    import {
        Button,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    let { children } = $props();

    let pageTitle = $state("시험 응시 페이지");
    let selectedLanguage: string = $state("js");

    const lang: Record<string, string> = {
        clang: "C/C++",
        java: "Java",
        python: "Python",
        js: "JavaScript",
        sql: "SQL",
    };

    const onSave = () => {
        console.log("onSave");
    };
    const onRun = () => {
        console.log("onRun");
    };
    const onSubmit = () => {
        console.log("onSubmit");
    };

    onMount(() => {});
</script>

<div class="vh-100 vw-100 d-flex flex-column">
    <Header {pageTitle}>
        <Dropdown direction="down" style={"width: 8rem;"}>
            <DropdownToggle color="primary" class="w-100 text-start"
                >{lang[selectedLanguage]}</DropdownToggle
            >
            <DropdownMenu>
                <DropdownItem
                    onclick={() => {
                        selectedLanguage = "clang";
                    }}>C/C++</DropdownItem
                >
                <DropdownItem
                    onclick={() => {
                        selectedLanguage = "java";
                    }}>Java</DropdownItem
                >
                <DropdownItem
                    onclick={() => {
                        selectedLanguage = "python";
                    }}>Python</DropdownItem
                >
                <DropdownItem
                    onclick={() => {
                        selectedLanguage = "js";
                    }}>JavaScript</DropdownItem
                >
                <DropdownItem
                    onclick={() => {
                        selectedLanguage = "sql";
                    }}>SQL</DropdownItem
                >
            </DropdownMenu>
        </Dropdown>
        <Button size="sm" onclick={onSave}>저장</Button>
        <Button size="sm" onclick={onRun}>실행</Button>
        <Button size="sm" onclick={onSubmit}>제출</Button>
    </Header>

    {@render children()}
</div>

<style lang="scss">
</style>
