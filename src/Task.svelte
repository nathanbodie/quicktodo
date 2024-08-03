<script lang="ts">
	import { type Task, localLists } from "$lib/storage.svelte";
	let task: Task | undefined = $state();

	$effect(() => localLists.update());
</script>

<ul class="flex flex-col gap-4 py-4 text-3xl">
	<li class="group flex justify-between items-center gap-4">
		<input type="checkbox" bind:checked={task?.isChecked} />
		<input
			type="text"
			class="w-full h-8 hover:underline text-ellipsis overflow-hidden bg-transparent border-b-2"
			bind:value={task?.description}
		/>
		<button class="trash-button">🗑️</button>
	</li>
</ul>

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
</style>
