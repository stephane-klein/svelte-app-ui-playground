
<div>
    <aside>
        <header><h1>Example.com</h1></header>
        <nav>
            <a
                href="./"
                aria-label="Event Types"
                aria-current="page"
            >Event Types</a>
            <a
                href="./bookings/"
                aria-label="Bookings"
            >Bookings</a>
            <a
                href="./availability/"
                aria-label="Availability"
            >Availability</a>
            <a
                href="./teams/"
                aria-label="Teams"
            >Teams</a>
            <a
                href="./apps/"
                aria-label="Apps"
            >Apps</a>
            <a
                aria-label="Workflows"
                href="./workflows/"
            >Workflows</a>
            <a
                aria-label="Settings"
                href="./settings/"
            >Settings</a>
        </nav>
    </aside>
    <main>
        <slot>
            Main
        </slot>
    </main>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
    }

    aside {
        width: 15rem;
        padding: 1rem;
    }

    nav {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;

        > * {
            padding: 0.5rem 1rem;
        }
    }
</style>
