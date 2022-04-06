<script>
    export let section;
    export let industry;
    export let industry_all;
    export let industry_tot;
    export let template;
    export let occupations;
    import Select from "$lib/ui/Select.svelte";
    import SelectJob from "$lib/ui/SelectJob.svelte";

    let options = Object.keys(occupations)
    options = options.map(e => {
        return {code: e.slice(0, 4), name: e.slice(5)}
    })

    function gen(industry) {
        let result = rosaenlg_en_US.render(template, {
            language: 'en_UK',
            industry: industry,
            industry_all: industry_all,
            industry_tot: industry_tot,
            section: section,
        })
        return result.split('<div id="esc123"></div>')
    }
    function findJob(e) {
        return 'ok'
    }
</script>


{#if template && industry_tot && industry}
<div style="max-width: 800px;">

    {#each gen(industry) as res, i (i)}
        {#if res == `<div id="jobselect"></div>` }
            <SelectJob items={options} idKey="code" labelKey="name" placeholder="Pick a job" on:select="{e => findJob(e.detail)}" />
        {:else}
            {@html res}
        {/if}
    {/each}

    <div class="vis-cont">
            <p>
                DATA VIS
            </p>
        <!-- <BarChart bind:data2={industry_all}/> -->
    </div>

</div>
{/if}

<style>
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