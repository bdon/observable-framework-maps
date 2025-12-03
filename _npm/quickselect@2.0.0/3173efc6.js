/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/quickselect@2.0.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t,a,f,n,h){o(t,a,f||0,n||t.length-1,h||r)}function o(t,r,f,n,h){for(;n>f;){if(n-f>600){var M=n-f+1,i=r-f+1,u=Math.log(M),e=.5*Math.exp(2*u/3),l=.5*Math.sqrt(u*e*(M-e)/M)*(i-M/2<0?-1:1);o(t,r,Math.max(f,Math.floor(r-i*e/M+l)),Math.min(n,Math.floor(r+(M-i)*e/M+l)),h)}var c=t[r],v=f,x=n;for(a(t,f,r),h(t[n],c)>0&&a(t,f,n);v<x;){for(a(t,v,x),v++,x--;h(t[v],c)<0;)v++;for(;h(t[x],c)>0;)x--}0===h(t[f],c)?a(t,f,x):a(t,++x,n),x<=r&&(f=x+1),r<=x&&(n=x-1)}}function a(t,o,a){var r=t[o];t[o]=t[a],t[a]=r}function r(t,o){return t<o?-1:t>o?1:0}export{t as default};
