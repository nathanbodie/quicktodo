<script lang="ts">
	import {
		localLists,
		pinnedList,
		generateId,
		type List,
	} from "$lib/storage.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Task from "../../Task.svelte";
	import { derived } from "svelte/store";
	import NewTask from "../../NewTask.svelte";

	let list: List | undefined;
	let lists: List[] | undefined = localLists.value;
	let taskInput: string = "";

	onMount(() => {
		list = localLists.value!.find((l) => l.id === $page.params.id);
	});
</script>

<main>
	{#if list}
		{#each list.tasks as task (task.id)}
			<li>
				<Task
					isChecked={task.isChecked}
					description={task.description}
				/>
			</li>
		{/each}
		<NewTask />
	{:else}
		<p>Loading</p>
	{/if}
</main>

<slot />
