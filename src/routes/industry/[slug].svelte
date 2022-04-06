<script context="module">
	const prerender = true;

  import { base, assets } from "$app/paths";
  import Papa from 'papaparse'

	export async function load({ params, fetch }) {
    let slug = params.slug;
    let id = slug.split("-")[0]
    let section = slug.split("-")[1]

    let industry_raw = await fetch(`${assets}/data/industry_fake.json`);
    let industry_all = await industry_raw.json();
    let industry_tot = industry_all['Total']
    let industry = industry_all[id]
    delete industry_all['Total']

    let template_raw = await fetch(`${assets}/data/template.pug`)
    let template = await template_raw.text()

    let occupations_raw = await fetch(`${assets}/data/occupations.csv`)
    occupations_raw = await occupations_raw.text();

    let occupations = {}
    Papa.parse(occupations_raw).data.forEach(e => {
      if (e[0] != 'Occupation') {
        occupations[e[0]] = e[1]
      }
    })


    return {
			props: { industry, industry_tot, industry_all, slug, id, section, template, occupations }
		}
	}
</script>

<script>
    import { dev } from '$app/env';
	import Section from "$lib/layout/Section.svelte";
	import Article from "$lib/layout/Article.svelte";
    import Module from '../Module.svelte'

    export let section;
    export let id;
    export let slug;
    export let industry;
    export let industry_tot;
    export let industry_all;
    export let template;
    export let occupations;


  let domain
  if (dev) {
    domain = "http://localhost:3000"
  } else {
    domain = "https://occupation.vercel.app"
  }

  let loaded
    const onRosaeNlgLoad = () => { loaded = true }
    $: console.log('loaded', loaded)

</script>

<svelte:head>
  <script src="https://unpkg.com/rosaenlg@3.0.1/dist/rollup/rosaenlg_tiny_en_US_3.0.1_comp.js" on:load="{onRosaeNlgLoad()}"></script>
</svelte:head>

{#if loaded}
<Module {occupations} {industry} {industry_all} {industry_tot} {template} {id} {section}/>
{/if}

<style>
    /* :global(.wrapper) {
        width: 100%;
        margin: 0 0 !important;
        padding: 0 0 !important;
    } */
    :global(p) {
        font-size: 18px !important;
    }
    :global(h2) {
        font-size: 30px !important;
    }
    :global(a) {
        display: none;
    }
    .vis-cont {
        background: lightgrey;
        height: 300px;
        padding: 40px;
    }

</style>