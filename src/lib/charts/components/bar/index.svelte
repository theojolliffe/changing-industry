<script>
  import { LayerCake, Svg, flatten } from 'layercake';
  import { stack } from 'd3-shape';
  import { scaleBand, scaleOrdinal } from 'd3-scale';
  import { format, precisionFixed } from 'd3-format';

  import BarStacked from './_components/BarStacked.svelte';
  import AxisX from './_components/AxisX.svelte';
  import AxisY from './_components/AxisY.svelte';

  // This example loads csv data as json using @rollup/plugin-dsv
  // import data from './_data/fruitOrdinal.csv';
  // console.log('data Bar', data)

  function su(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
      sum += ar[i];
    }
    return sum;
  }

  export let data2

  console.log('data2', data2)

  let data = []
  data.push({
    year: 2021,
  })

  Object.keys(data2).forEach(d => {
    data[0][d] = data2[d]['total'][2021]
  })
  data2['year'] = '2021'
  // $: console.log('data', data)
  console.log('data', data)

  const xKey = [0, 1];
  const yKey = 'year';
  const zKey = 'key';

  const seriesNames = Object.keys(data[0]).filter(d => d !== yKey);
  const seriesColors = ['#00bbff', '#8bcef6', '#c4e2ed', '#f7f6e3'];

  data.forEach(d => {
    seriesNames.forEach(name => {
      d[name] = +d[name];
    });
  });

  const stackData = stack()
    .keys(seriesNames);

  console.log('data', data)
  const series = stackData(data);
  console.log('series', series)

  const formatTickX = d => format(`.${precisionFixed(d)}s`)(d);
</script>

<style>
  .chart-container {
    margin: 40px 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="chart-container">
  <LayerCake
    padding={{ top: 0, bottom: 20, left: 10, right: 10 }}
    x={xKey}
    y={d => d.data[yKey]}
    z={zKey}
    yScale={scaleBand().paddingInner([0.05]).round(true)}
    yDomain={['2019']}
    zScale={scaleOrdinal()}
    zDomain={seriesNames}
    zRange={seriesColors}
    flatData={flatten(series)}
    data={series}
  >
    <Svg>
      <AxisX
        baseline={true}
        snapTicks={true}
        formatTick={formatTickX}
      />
      <BarStacked/>
    </Svg>
  </LayerCake>
</div>