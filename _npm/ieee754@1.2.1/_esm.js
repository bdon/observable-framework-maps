/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/ieee754@1.2.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var a={},t=a.read=function(a,t,o,r,h){var M,f,p=8*h-r-1,w=(1<<p)-1,e=w>>1,i=-7,N=o?h-1:0,n=o?-1:1,s=a[t+N];for(N+=n,M=s&(1<<-i)-1,s>>=-i,i+=p;i>0;M=256*M+a[t+N],N+=n,i-=8);for(f=M&(1<<-i)-1,M>>=-i,i+=r;i>0;f=256*f+a[t+N],N+=n,i-=8);if(0===M)M=1-e;else{if(M===w)return f?NaN:1/0*(s?-1:1);f+=Math.pow(2,r),M-=e}return(s?-1:1)*f*Math.pow(2,M-r)},o=a.write=function(a,t,o,r,h,M){var f,p,w,e=8*M-h-1,i=(1<<e)-1,N=i>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(p=isNaN(t)?1:0,f=i):(f=Math.floor(Math.log(t)/Math.LN2),t*(w=Math.pow(2,-f))<1&&(f--,w*=2),(t+=f+N>=1?n/w:n*Math.pow(2,1-N))*w>=2&&(f++,w/=2),f+N>=i?(p=0,f=i):f+N>=1?(p=(t*w-1)*Math.pow(2,h),f+=N):(p=t*Math.pow(2,N-1)*Math.pow(2,h),f=0));h>=8;a[o+s]=255&p,s+=u,p/=256,h-=8);for(f=f<<h|p,e+=h;e>0;a[o+s]=255&f,s+=u,f/=256,e-=8);a[o+s-u]|=128*l};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */export{a as default,t as read,o as write};
