import{r as d}from"./index-8ce4a492.js";import{r as c}from"./index-8db94870.js";const i="dom-portals",g="orthogonal-drawer",_="orthogonal-dropdown-overlay",u=i;function s(t){const e=document.createElement("div");return e.setAttribute("id",t),e.setAttribute("data-id",t),e}function m(t){document.body.insertBefore(t,document.body.lastElementChild.nextElementSibling)}function f(t=u){const e=c.useRef(null);c.useEffect(function(){const n=e.current;if(!n||!t)return;const a=document.querySelector(`#${t}`)||document.querySelector(`[data-id="${t}"]`),r=a||s(t);return a||m(r),r.appendChild(n),function(){n.remove(),r.childElementCount||r.remove()}},[t]);function o(){return e.current||(e.current=document.createElement("div")),e.current}return o()}function l({id:t=u,children:e}){const o=f(t);return d.createPortal(e,o)}try{l.displayName="Portal",l.__docgenInfo={description:"",displayName:"Portal",props:{id:{defaultValue:{value:"dom-portals"},description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{l as P,_ as a,g as d};
//# sourceMappingURL=Portal-0c525ec8.js.map
