<script>
    import {
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
    } from "@sveltestrap/sveltestrap";

    const { pageTitle = "title", children = null } = $props();
</script>

<div
    class="header flex-shrink-0 d-flex align-items-center px-3 justify-content-between"
>
    <div>{pageTitle}</div>
    <div class="d-flex gap-2">
        {@render children?.()}
    </div>
</div>

<!-- // <Header {pageTitle}></Header> -->

<style lang="scss">
    .header {
        height: 3rem;
        background-color: var(--bs-secondary-bg);
    }
</style>
