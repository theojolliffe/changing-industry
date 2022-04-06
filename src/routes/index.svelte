<script context="module">
	const prerender = true;

  import { base, assets } from "$app/paths";
  import Papa from 'papaparse'

	export async function load({ fetch }) {
		let options_raw = await fetch(`${assets}/data/industry_fake.json`);
		let options_temp = await options_raw.json();
		let options = Object.values(options_temp).map(e => e.name.split(" ")[0].split(",")[0])

		let occupations_raw = await fetch(`${assets}/data/occupations.csv`)
    	occupations_raw = await occupations_raw.text();

		let occupations = Papa.parse(occupations_raw).data.map(e => e[0].slice(0, 4)).filter(e => e != 'Occu')

    return {
			props: { options, occupations }
		}
	}
</script>

<script>
  import Content from "$lib/layout/Content.svelte";

	export let options;
	export let occupations;
</script>

<svelte:head>
  <title>Page title</title>
  <meta property="og:title" content="Page title" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
</svelte:head>

<Content>
	<ul>
		{#each options as option}
			<li><a href="{base}/{option}">{option}</a></li>
			{#each ['overall', 'change'] as section}
				<li><a href="{base}/industry/{option}-{section}">{option}-{section}</a></li>
			{/each}
		{/each}
		{#each occupations as occupation}
			<li><a href="{base}/occupation/{occupation}-yourjob">{occupation}</a></li>
		{/each}
	</ul>
</Content>

<style>
	li {
		font-size: 1rem;
		margin: 0;
		padding: 0;
	}
</style>