<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
    export let href;
</script>

<a
    {href}
    aria-label="Event Types"
    class="my-1 px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md text-gray-600"
    class:bg-gray-200={isActive}
    class:text-neutral-900={isActive}
><slot /></a>
