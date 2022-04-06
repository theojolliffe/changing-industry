<script>
    export let occupations;
    export let section;
    export let template;
    export let domain;

    import Share from './Share.svelte'
    import SelectJob from "$lib/ui/SelectJob.svelte";

    function uncap(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    let id = 'default'

    let options = Object.keys(occupations)
    options = options.map(e => {
        return {code: e.slice(0, 4), name: e.slice(5)}
    })

    let occLU = {}
    options.forEach(e => {
        occLU[e.code] = e.name
    }) 

    Object.keys(occupations).map(function(key, index) {
        let numb = parseInt(occupations[key].replace(/,/g, ''))
        numb = parseFloat(numb.toPrecision(2))
        occupations[key.slice(0, 4)] = numb;
        delete occupations[key]
    });



    function findJob(e) {
        id = e.code
        return 'ok'
    }
    function rose(id) {
        let result = rosaenlg_en_US.render(template, {
            language: 'en_UK',
            section: section,
            id: id,
            occupations: occupations,
            occLU: occLU,
            uncap: uncap
        })
        return result
    }

</script>


<div style="max-width: 800px;">

    <h2>How many people do your job?</h2>

    <SelectJob items={options} idKey="code" labelKey="name" placeholder="Pick a job" on:select="{e => findJob(e.detail)}" />

    <br>
    {@html rose(id)}

    {#if id!='default'}
        <div class="vis-cont">
                <p>
                    DATA VIS
                </p>
            <!-- <BarChart bind:data2={industry_all}/> -->
        </div>
    {/if}

</div>

<br>
<Share {domain} {id} {section} directory={'occupation'}/>

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