<script>import "../app.postcss";</script><div>
    <aside>
        <div>
            <header><h1>Example.com</h1></header>
            <nav>
                <a
                    href="./"
                    aria-label="Event Types"
                    aria-current="page"
                    class="selected"
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
        </div>
        <button class="user-panel">
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

<style lang="postcss">
    :global {
        body {
            font-family: sans-serif;
            margin: 0;
            font-size: 16px;
        }
        color: hsl(0, 0%, 11%);

        a {
            text-decoration: none;
            color: hsl(0, 0%, 17%);
            &:hover {
                color: hsl(0, 0%, 0%);
            }
        }
        main {
            padding: 1rem 2rem;

            H1 {
                margin: 0;
            }
        }
    }
    div {
        display: flex;
        flex-direction: row;
        height: 100vh;
        padding: 0;
    }

    aside {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem 2rem;
        background-color: hsl(210, 20%, 98%);
        border-right: 1px solid hsl(220, 14%, 96%);

        > div {
            display: flex;
            flex-direction: column;
        }

        H1 {
            margin: 0;
        }

        .user-panel {
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: transparent;
            border: none;
            text-align: left;
            font-size: 16px;
            cursor: pointer;
            color: hsl(0, 0%, 17%);
            height: 3.5rem;
            padding: 0.5rem 1rem;
            &:hover {
                color: hsl(0, 0%, 0%);
                background-color: hsl(220, 13%, 95%);
            }

            img {
                border-radius: 9999px;
                margin-right: 1rem;
                height: 2rem;
            }
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;

        > * {
            margin: 0.2rem 0;
            padding: 0.5rem 1rem;
            border-radius: 0.2rem;
            &.selected {
                background-color: hsl(220, 13%, 91%);
            }
            &:hover {
                background-color: hsl(220, 13%, 95%);
            }
        }
    }
</style>
