import { alphabet, generateRandomString } from "oslo/crypto";
import { writable } from 'svelte/store';

const browserExists = (typeof window !== "undefined") && (typeof (document) !== "undefined");
const storage = browserExists ? localStorage : null;

export function persisted<T>(key: string, defaultValue: T) {
	let value: T | undefined = writable();

	const initLocal = storage?.getItem(key);
	if (initLocal) {
		value = JSON.parse(initLocal).value as T;
		if (!value) {
			update();
		}
	}
	else {
		value = defaultValue;
		update();
	}

	function update() {
		if (browserExists) {
			storage?.setItem(key, JSON.stringify({ value: value }));
		}
	}

	return {
		get value() { 
			return value;
		},
		set value(newValue) {
			value = newValue;
			update();
		},
		update
	}
}

export type Task = {
	id: string;
	description: string;
	isChecked: boolean;
}

export type List = {
	id: string;
	title: string;
	tasks: Task[];
}

export const localLists = persisted<List[]>("localLists", [
	{
		id: generateId(),
		title: "Daily tasks",
		tasks: [
			{ id: generateId(), description: "Feed dasher 🐶", isChecked: false },
			{ id: generateId(), description: "Finish homework", isChecked: false },
			{ id: generateId(), description: "Take out the trash", isChecked: false },
		]
	}
]);

export const pinnedList = persisted<string>("pinnedList", localLists.value![0].id);

export function generateId() {
	return generateRandomString(10, alphabet("a-z", "0-9"));
}
