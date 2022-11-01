<script>
    import "../app.postcss";

    import NavLink from './NavLink.svelte';
</script>
<div class="flex flex-row h-screen">
    <aside class="flex flex-col">
        <div class="flex-auto p-4">
            <header class="px-1 py-2"><h1 class="m-0">Example.com</h1></header>
            <nav class="flex flex-col">
                <NavLink href="/">Event Types</NavLink>
                <NavLink href="/bookings/">Bookings</NavLink>
                <NavLink href="/availability/">Availability</NavLink>
                <NavLink href="/teams/">Teams</NavLink>
                <NavLink href="/apps/">Apps</NavLink>
                <NavLink href="/workflows/">Workflows</NavLink>
                <NavLink href="/settings/">Settings</NavLink>
            </nav>
        </div>
        <button class="flex-none">
            <img
                src="https://app.cal.com/stephaneklein/avatar.png"
                alt="Avatar"
            />
            <span>John Doe</span>
        </button>
    </aside>
    <main>
        <slot>
            Main
        </slot>
    </main>
</div>

