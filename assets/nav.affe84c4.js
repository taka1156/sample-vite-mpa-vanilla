import{$ as e}from"./vendor.e7ab9a7f.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,r)=>{const l=new URL(e,a);if(self[o].moduleMap[l])return t(self[o].moduleMap[l]);const s=new Blob([`import * as m from '${l}';`,`${o}.moduleMap['${l}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){r(new Error(`Failed to import: ${e}`)),n(c)},onload(){t(self[o].moduleMap[l]),n(c)}});document.head.appendChild(c)})),self[o].moduleMap={}}}("/sample-vite-mpa-vanilla/assets/");var o=e=>JSON.parse(e);const t=(...e)=>{e.forEach((e=>{console.log(e)}))},a=(...e)=>{const o=e.reduce(((e,o)=>e+o),"");console.log(o)};e("#nav-toggle").on("click",(()=>{const n=o(e("#nav-list").attr("aria-expand")),r=n,l=!n;e("#nav-list").attr("aria-expand",`${!n}`),t("row: ",`t1=>${r}`,`t2=>${l}`),a("column: ","t1=>",r,", t2=>",l)}));