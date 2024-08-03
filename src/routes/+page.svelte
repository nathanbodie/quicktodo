<script lang="ts">
	import {
		localLists,
		pinnedList,
		generateId,
		type List,
	} from "$lib/storage.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Task from "../Task.svelte";
	import NewTask from "../NewTask.svelte";

	let list: List | undefined;
	let lists: List[] | undefined = localLists.value;
	let taskInput: string = "";

	onMount(() => {
		list = localLists.value!.find((l) => l.id);
		console.log(localLists.value);
	});
</script>

<main>
	{#if list}
		{#each list.tasks as task (task.id)}
			<li class="list-none">
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
