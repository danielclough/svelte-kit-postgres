<script>
</script>

<div class="todo" >
    <form action="/todos" method="POST">
        <input type="text" name="text" class="text">
        <button aria-label="Save" class="text save">💾</button>
    </form>
</div>

<style>
    .todo {
        display: inline-flex;
        width: 100%;
        align-items: center;
        padding: 1rem;
        background-color: var(--primary-color);
        border-radius: 0px 0px 6px 6px;
        filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.1));
        transform:translate(-1px, -1px);
        transition: filter 0.2s, transfor 0.2s;
    }
    form {
        width: 100%;
    }
    input {
        width: calc(100% - 3rem);
        margin-right: .8rem;
    }
    .save {
        opacity: 0.3;
    }
    .text:focus + .save, .save:hover, .save:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }
</style>