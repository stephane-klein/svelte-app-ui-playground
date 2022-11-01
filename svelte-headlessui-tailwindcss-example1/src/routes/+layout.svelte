<script>
    import "../app.postcss";

    import NavLink from './NavLink.svelte';
</script>
<div class="flex flex-row h-screen">
    <aside class="flex flex-col w-48">
        <div class="flex-auto px-6 py-4">
            <header class="px-1 py-2"><h1 class="m-0 text-xl font-bold">Example.com</h1></header>
            <nav class="flex flex-col mt-4">
                <NavLink href="/">Event Types</NavLink>
                <NavLink href="/bookings/">Bookings</NavLink>
                <NavLink href="/availability/">Availability</NavLink>
                <NavLink href="/teams/">Teams</NavLink>
                <NavLink href="/apps/">Apps</NavLink>
                <NavLink href="/workflows/">Workflows</NavLink>
                <NavLink href="/settings/">Settings</NavLink>
            </nav>
        </div>
        <button class="flex-none flex flex-row m-4 p-2 hover:bg-gray-100 rounded">
            <img
                src="https://app.cal.com/stephaneklein/avatar.png"
                alt="Avatar"
                class="h-8 mr-1"
            />
            <span>John Doe</span>
        </button>
    </aside>
    <main class="p-6">
        <slot>
            Main
        </slot>
    </main>
</div>

