import { browser } from '$app/env';
import { writable } from 'svelte/store';
 
const defaultValue = 'summer';
const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;
 
export const theme = writable('winter');
 
theme.subscribe((value) => {
  if (browser) {
    document.localStorage.setItem('theme', value);
  }
});
 
export { theme as default };
