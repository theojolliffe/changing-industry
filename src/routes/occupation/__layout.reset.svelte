<script>
    import { assets } from "$app/paths";
    import { page } from '$app/stores';
      import { setContext } from "svelte";
      import { themes } from "$lib/config";
      
    let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  
    // STYLE CONFIG
    // Set theme globally (options are 'light' or 'dark')
    let theme = "light";
    setContext("theme", themes[theme]);
  </script>
  
  <svelte:head>
    <link rel="icon" href="{assets}/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="{assets}/" />
      <meta property="og:image" content="{assets}/img/og.png" />
      <meta property="og:image:type" content="image/png" />
  </svelte:head>
  
  <main id="main" tabindex="-1">
    <slot/>
  </main>
  
