<script context="module" lang="ts">
    // import type {Load} from "@sveltejs/kit";
    export const load = async ({ fetch }:any) => {
        const res = await fetch("/todos");
        if (res.ok) {
            const todos = await res.json();
            return {
                props: {todos}
            }
        }
        const {message} = await res.json();
        return {
            error: message            
        }
    }
</script>
<script lang="ts">
    import TodoItem from '$lib/todo-item.svelte';
    export let todos:Todo[];
    const title="Todo";
    import TodoEntryForm from '$lib/todo-entry-form.svelte';
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="component">
    <h1>{title}</h1>
    <TodoEntryForm />
    {#each todos as todo}
        <TodoItem {todo}/>
    {/each}
</div>

<style>
    .component {
        background-color: aliceblue;
        max-width: 42rem;
    }
</style>