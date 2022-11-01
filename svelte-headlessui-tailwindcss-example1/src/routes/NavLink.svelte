<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
    export let href;
</script>

<a
    {href}
    aria-label="Event Types"
    class="my-1 px-2 py-1 hover:bg-gray-100 rounded"
    class:bg-gray-300={isActive}
><slot /></a>
