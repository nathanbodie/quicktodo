<ul class="flex flex-col gap-4 py-4 text-3xl">
	<li class="group flex justify-between items-center gap-4">
		<button class="add-button">+</button>
		<input
			type="text"
			class="w-full h-8 hover:underline text-ellipsis overflow-hidden bg-transparent border-b-2"
		/>
	</li>
</ul>

<style>
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
