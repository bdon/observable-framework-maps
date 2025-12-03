/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/potpack@1.0.2/index.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function h(h){let t=0,w=0;for(const o of h)t+=o.w*o.h,w=Math.max(w,o.w);h.sort(((h,t)=>t.h-h.h));const o=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(t/.95)),w),h:1/0}];let a=0,e=0;for(const t of h)for(let h=o.length-1;h>=0;h--){const w=o[h];if(!(t.w>w.w||t.h>w.h)){if(t.x=w.x,t.y=w.y,e=Math.max(e,t.y+t.h),a=Math.max(a,t.x+t.w),t.w===w.w&&t.h===w.h){const t=o.pop();h<o.length&&(o[h]=t)}else t.h===w.h?(w.x+=t.w,w.w-=t.w):t.w===w.w?(w.y+=t.h,w.h-=t.h):(o.push({x:w.x+t.w,y:w.y,w:w.w-t.w,h:t.h}),w.y+=t.h,w.h-=t.h);break}}return{w:a,h:e,fill:t/(a*e)||0}}export{h as default};
