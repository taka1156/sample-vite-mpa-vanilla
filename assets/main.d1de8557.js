!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const l=new URL(e,n);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const s=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),r(m)},onload(){o(self[t].moduleMap[l]),r(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/sample-vite-mpa-vanilla/assets/");document.querySelector("#app").innerHTML='\n  <h1>Hello Vite!</h1>\n  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>\n';
