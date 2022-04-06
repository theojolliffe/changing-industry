<script>
    import CopyToClipboard from "svelte-copy-to-clipboard";

    export let domain;
    export let section;
    export let id;
    export let directory;

    let expanded = null;
    let copied = false
    let shareEmb = ''
    function toggle(code, se) {
        copied = false
        shareEmb = se
        if (expanded==code) {
            expanded = null;
        } else {
            expanded = code;
        }
    }

    const handleSuccessfullyCopied = (e) => {
        copied = true
    }
    const handleFailedCopy = () => {
        alert('failed to copy :(');
    }
</script>

<div style='margin-bottom: 50px;'>
    <button id="sharebut" on:click={toggle(section, 's')}>Share</button>
    <button id="embedbut" on:click={toggle(section, 'e')}>Embed</button>
</div>
{#if expanded==section}
{#if shareEmb=='e'}
  <div class="details__body">
      <label class="embed-code__label" for="embed-365-4262-b9c0-c0b2c28341bb">Embed this interactive component</label>
      <input 
      class="embed-code__code width-md--31" 
      value={`<iframe width="100%" src="`+ domain + "/"+directory+"/" + id + "-" + section + `"></iframe>`} 
      id="embed-365-4262-b9c0-c0b2c28341bb" 
      name="embed-365-4262-b9c0-c0b2c28341bb" 
      readonly="">
      <span class="embed-code__success-container">
          <CopyToClipboard text={`<iframe width="100%" src="`+ domain + "/"+directory+"/" + id + "-" + section + `"></iframe>`} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
              <button id='copybutton' on:click={copy}>Copy</button>
          </CopyToClipboard>
          <span class="embed-code__success-message" id={copied?"succ-mess":"no-mess"}>
              Successfully copied
          </span>
      </span>
  </div>
{:else}
  <div class="details__body">
    <label class="embed-code__label" for="embed-365-4262-b9c0-c0b2c28341bb">Share this interactive component</label>
    <input 
    class="embed-code__code width-md--31" 
    value={domain + "/"+directory+"/" + id + "-" + section}
    id="embed-365-4262-b9c0-c0b2c28341bb" 
    name="embed-365-4262-b9c0-c0b2c28341bb" 
    readonly="">
    <span class="embed-code__success-container">
        <CopyToClipboard text={domain + "/"+directory+"/" + id + "-" + section} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
            <button id='copybutton' on:click={copy}>Copy</button>
        </CopyToClipboard>
        <span class="embed-code__success-message" id={copied?"succ-mess":"no-mess"}>
            Successfully copied
        </span>
    </span>
  </div>
{/if}
{/if}

<style>
    button {
        color: #003C57;
        border: none;
        padding: 3px 15px;
        border-radius: 3px;
        font-weight: 800;
        font-family: Open Sans;
    }

  button#copybutton {
    border: none;
    background: #d8e4ee;
  }
  #succ-mess {
        display: revert;
    }
    #no-mess {
        display: none;
    }
    #sharebut {
        background-color: #d8e4ee;
    }
    #embedbut {
        background-color: #d6f0e1;
    }

</style>