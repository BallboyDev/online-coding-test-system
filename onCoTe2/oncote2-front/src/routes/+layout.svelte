<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import { onMount } from "svelte";

	let { children } = $props();

	onMount(() => {});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
