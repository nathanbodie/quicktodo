<script lang="ts">
	import { generateId, localLists, type List } from "$lib/storage.svelte";
	import { onMount } from "svelte";

	let list: List | undefined = $state();
	let lists: List[] | undefined = $state(localLists.value);
	let taskInput: string = $state("");

	onMount(() => {
		list = localLists.value!.find((l) => l.id);
		console.log(localLists.value);
	});

	$effect(() => localLists.update());

	function deleteTask(id: string) {
		if (list) {
			list.tasks = list.tasks.filter((t) => t.id !== id);
		}
	}

	function addTask(name: string) {
		if (taskInput.length <= 0) {
			return;
		}

		list?.tasks.push({
			id: generateId(),
			description: name,
			isChecked: false,
		});

		taskInput = "";
	}
</script>

<main class="mt-12">
	{#if list}
		{#each list.tasks as task (task.id)}
			<li class="list-none">
				<ul class="flex flex-col gap-4 py-4 text-3xl">
					<li
						class="group flex justify-between items-center gap-4"
					>
						<input
							type="checkbox"
							bind:checked={task.isChecked}
						/>
						<input
							type="text"
							class="w-full h-8 hover:underline text-ellipsis overflow-hidden bg-transparent border-b-2"
							bind:value={task.description}
						/>
						<button
							class="trash-button"
							onclick={() =>
								deleteTask(
									task.id,
								)}>🗑️</button
						>
					</li>
				</ul>
			</li>
		{/each}
		<ul class="flex flex-col gap-4 py-4 text-3xl">
			<li
				class="group flex justify-between items-center gap-4"
			>
				<button
					class="add-button"
					onclick={() => addTask(taskInput)}
					>+</button
				>
				<form
					class="flex flex-col w-full"
					onsubmit={() => addTask(taskInput)}
				>
					<input
						bind:value={taskInput}
						type="text"
						class="h-8 hover:underline text-ellipsis overflow-hidden bg-transparent border-b-2"
					/>
				</form>
			</li>
		</ul>
	{:else}
		<p>Loading</p>
	{/if}
</main>

<style>
	input[type="checkbox"] {
		position: relative;
		border: 4px solid var(--white);
		border-radius: 8px;
		background: none;
		cursor: pointer;
		line-height: 0;
		margin: 0 0 0 0;
		outline: 0;
		padding: 0 !important;
		vertical-align: text-top;
		height: 32px;
		width: 32px;
		-webkit-appearance: none;
		appearance: none;
	}

	input[type="checkbox"]:hover {
		opacity: 1;
	}

	input[type="checkbox"]:checked {
		background-color: var(--white);
		opacity: 1;
	}

	input[type="checkbox"]:before {
		content: "";
		position: absolute;
		right: 50%;
		top: 50%;
		width: 8px;
		height: 16px;
		border: solid var(--black);
		border-width: 0 4px 4px 0;
		margin: -1px -1px 0 -1px;
		transform: rotate(45deg) translate(-50%, -50%);
		z-index: 2;
	}

	.trash-button {
		position: relative;
		background-color: #ff474c;
		border: 4px solid #ff474c;
		border-radius: 8px;
		line-height: 0;
		margin: 0 0 0 0;
		outline: 0;
		padding: 0 !important;
		vertical-align: text-top;
		height: 32px;
		width: 32px;
		-webkit-appearance: none;
		appearance: none;
		font-size: 1rem;
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}

	.add-button {
		position: relative;
		background-color: var(--white);
		border: 4px solid var(--white);
		color: var(--black);
		border-radius: 8px;
		line-height: 0;
		margin: 0 0 0 0;
		outline: 0;
		padding: 0 !important;
		vertical-align: text-top;
		height: 32px;
		width: 32px;
		-webkit-appearance: none;
		appearance: none;
		font-size: 2.25rem;
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}
</style>
