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

