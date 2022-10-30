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
        <button>
            <img src="" alt="Avatar">
            <span>John Doe</span>
        </button>
    </aside>
    <main>
        <slot>
            Main
        </slot>
    </main>
</div>

<style lang="postcss">
    :global {
        body {
            margin: 0;
            background-color: red;
        }
    }
    div {
        display: flex;
        flex-direction: row;
        height: 100vh;
        padding: 0;
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
