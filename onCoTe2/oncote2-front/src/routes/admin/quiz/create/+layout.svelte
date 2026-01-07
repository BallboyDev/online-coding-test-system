<script lang="ts">
    import Navigator from "$lib/features/main/Navigator.svelte";
    import { Nav, NavItem, NavLink } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    let { children } = $props();

    let pageTitle = $state("관리자 페이지");

    onMount(() => {});
</script>

<div class="vh-100 vw-100 d-flex flex-column">
    <div class="header flex-shrink-0 d-flex align-items-center px-3">
        관리자 - 문제 제작 페이지
    </div>

    {@render children()}
</div>

<style lang="scss">
    .header {
        height: 3rem;
        background-color: var(--bs-secondary-bg);
    }
</style>
