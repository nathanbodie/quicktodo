<script>
	import "../app.css";
	import { pinnedList } from "$lib/storage.svelte";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	//onMount(() => {
	//	if ($page.url.pathname === "/") {
	//		goto(`/${pinnedList.value}`);
	//	}
	//});
</script>

<div class="flex flex-col">
	<div>
		<h1 class="font-serif text-4xl font-bold">quicktodo</h1>
	</div>
</div>

<slot />
