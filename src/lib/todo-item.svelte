<script lang="ts">
    export let todo: Todo;
</script>

<div class="todo">
    <form action="" method="">
    <input type="hidden" name="done" value="true">
    <button class="toggle notdone" aria-label="done"></button>
    </form>
    <form action="" method="" title="{todo.uid}" class="text tooltip">
        <input type="text" class="text" value="{todo.text}">
    </form>
    <form action="/todos/{todo.uid}?_method=DELETE" method="POST">
        <button aria-label="Delete" class="delete">🗑️</button>
    </form>
</div>

<style>
    .todo {
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-gap: .5rem;
        align-items: center;
        padding: 1rem;
        background-color: var(--primary-color);
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.1));
        transform:translate(-1px, -1px);
        transition: filter 0.2s, transfor 0.2s;
    }
    .toggle {
        border: 0;
    }
    .text {
        display: inline-flex;
    }
    .text input {
        width: 100%;
        margin-right: 5px;
    }
    .delete {
        opacity: 0.3;
    }
    .delete:hover, .delete:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }
    .notdone::before {
        content: "✔️";
    }

    .done::before {
        content: "✅";
    }
</style>