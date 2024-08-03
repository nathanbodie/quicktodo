<script>
	import "../app.css";
	import { pinnedList } from "$lib/storage.svelte";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	onMount(() => {
		if ($page.url.pathname === "/") {
			goto(`/${pinnedList.value}`);
		}
	});
</script>

<div class="bg-black flex flex-col w-full h-full min-w-screen min-h-screen">
	<div class="mx-48 my-8">
		<h1 class="font-serif text-4xl font-bold">quicktodo</h1>
	</div>
</div>

<slot />
