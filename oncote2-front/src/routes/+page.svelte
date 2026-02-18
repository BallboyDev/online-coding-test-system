<script>
    import { Button, Input } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    onMount(() => {});
</script>

<div class="box border p-3 mx-auto rounded">
    <form>
        <Input class="mb-3" placeholder="email" type="email" />
        <Input class="mb-3" placeholder="password" type="password" />
        <Button class="w-100" color="primary">Login</Button>
    </form>
</div>

<!-- <form method="post" action="?/test">
    <Button type="submit" class="mt-3 w-100" color="secondary">
        Trigger Test Action
    </Button>
</form> -->

<style lang="scss">
    .box {
        width: 20rem;
        margin-top: 10rem;
    }
</style>
