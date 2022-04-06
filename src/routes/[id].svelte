<script context="module">
	const prerender = true;

  import { base, assets } from "$app/paths";
  import Papa from 'papaparse'

	export async function load({ params, fetch }) {
    let id = params.id;

    let options_raw = await fetch(`${assets}/data/industry_fake.json`);
    let options_temp = await options_raw.json();
    options_temp = Object.values(options_temp).map(e => e.name)
    let options = []
    options_temp.forEach(e => {
      if (e != 'Total') {
        options.push({code: e.split(" ")[0].split(",")[0], label: e})
      }
    });

    let industry_raw = await fetch(`${assets}/data/industry_fake.json`);
    let industry_all = await industry_raw.json();
    let industry_tot = industry_all['Total']
    delete industry_all['Total']
    let industry = industry_all[id]

    let template_raw = await fetch(`${assets}/data/template.pug`)
    let template = await template_raw.text();

    let occupations_raw = await fetch(`${assets}/data/occupations.csv`)
    occupations_raw = await occupations_raw.text();

    let occupations = {}
    Papa.parse(occupations_raw).data.forEach(e => {
      if (e[0] != 'Occupation') {
        occupations[e[0]] = e[1]
      }
    })
    console.log('occupations', occupations)

    return {
			props: { industry, industry_all, industry_tot, options, id, template, occupations }
		}
	}
</script>

<script>
  import { goto } from '$app/navigation';
  import { dev } from '$app/env';

  import { capitalise } from "$lib/utils";

  import Titleblock from "$lib/layout/Titleblock.svelte";
	import Headline from "$lib/layout/partial/Headline.svelte";
	import Section from "$lib/layout/Section.svelte";
	import Article from "$lib/layout/Article.svelte";
	import Figure from "$lib/layout/partial/Figure.svelte";
	import Linkbox from "$lib/layout/Linkbox.svelte";
  import Select from "$lib/ui/Select.svelte";
  import Module from './Module.svelte'
  import Share from './Share.svelte'
  import Jobs from './Jobs.svelte'

  export let options;
  export let industry;
  export let industry_all;
  export let industry_tot;
  export let id;
  export let template;
  export let occupations;

  console.log('options', options)

  let loaded
  const onRosaeNlgLoad = () => { loaded = true }

  let domain
  if (dev) {
    domain = "http://localhost:3000"
  } else {
    domain = "https://occupation.vercel.app"
  }

  function gotoPlace(e) {
    goto(`${base}/${e.detail.code}`, {noscroll: true});
  }

  $: a = 'overall'
  $: b = 'change'
  $: c = 'yourjob'
</script>

<svelte:head>
  <title>{industry.name}</title>
  <meta property="og:title" content="{industry.name}" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
  <script src="https://unpkg.com/rosaenlg@3.0.1/dist/rollup/rosaenlg_tiny_en_US_3.0.1_comp.js" on:load="{onRosaeNlgLoad()}"></script>
</svelte:head>

<Titleblock
  background="none"
	breadcrumb="{[
    {label: 'Home', url: `${base}/`},
    {label: 'Changing industries', url: `${base}/`},
    {label: industry.name}
  ]}"
  contents="{[
    {label: 'Overview'},
    {label: 'Industry changes'},
    {label: 'Occupation'}
  ]}"
  >
	<Headline>{industry.name}</Headline>
  <p style:margin="0 0 10px 0" style:padding={0}><strong>Including jobs such as:</strong> {capitalise(industry.name)}</p>
  <Select items={options} mode="search" idKey="code" labelKey="name" placeholder="Search an industry" on:select={gotoPlace} autoClear/>
</Titleblock>

<div style="height: 25px;"></div>

{#if loaded}
<Article>
  <Section backlink hr>
    <Module {occupations} {industry} {industry_all} {industry_tot} {template} {id} section={a}/>
    <br>
    <Share {occupations} {domain} {id} section={a} directory={'industry'}/>
  </Section>
  <Section backlink hr>
    <Module {occupations} {industry} {industry_all} {industry_tot} {template} {id} section={b}/>
    <br>
    <Share {occupations} {domain} {id} section={b} directory={'industry'}/>
  </Section>
  <Section backlink hr>
    <Jobs {domain} {occupations} {template} section={c}/>
  </Section>
</Article>
{/if}
