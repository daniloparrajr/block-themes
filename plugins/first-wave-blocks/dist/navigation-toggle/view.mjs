import*as t from"@wordpress/interactivity";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const o=(n={getContext:()=>t.getContext,store:()=>t.store},s={},e.d(s,n),s);var n,s;(0,o.store)("first-wave/navigation-toggle",{actions:{toggle:()=>{const t=(0,o.getContext)();t.isOpen=!t.isOpen,document.body.classList.toggle("navigation-is-open")}},callbacks:{logIsOpen:()=>{const{isOpen:t}=(0,o.getContext)();console.log(`Is open: ${t}`)}}});