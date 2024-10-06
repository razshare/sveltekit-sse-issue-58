<script>
	// src/routes/+page.svelte
	import { source } from 'sveltekit-sse';
	const value = source('/events').select('message');
</script>

{$value}
