import{a as _,j as v}from"./jsx-runtime-a888423b.js";import{r as t,R as p}from"./index-8db94870.js";import{f as h,p as b}from"./styled-components.browser.esm-6dd904cc.js";import{P as C,m as E}from"./Portal-847ba74d.js";const S=200;function g({open:e,children:a,onBGClick:n,disableBG:r,portalID:o=E,duration:s=S,style:u,backgroundColor:c,backgroundStyle:l}){const i=t.useRef(null),{_open:k,enter:d,leave:f}=$(!!e,s,i.current);return!k||!a?null:_(C,{id:o,children:v(m,{ref:i,enter:d,leave:f,duration:s,style:u,children:[!r&&_(y,{enter:d,leave:f,onClick:n,duration:s,style:l,backgroundColor:c}),M(a,{enter:d,leave:f})]})})}const M=(e,a)=>!e||!a||!p.isValidElement(e)?e:e instanceof Array?e.map(n=>p.cloneElement(n,a)):p.cloneElement(e,a);function $(e,a=S,n){const[r,o]=t.useState(e),[s,u]=t.useState(!1),[c,l]=t.useState(!1);return t.useEffect(()=>{e&&o(!0)},[e]),t.useEffect(()=>{r&&!e&&l(!0)},[e,r]),t.useEffect(()=>{r&&u(!0),r||u(!1)},[r]),t.useEffect(()=>{if(c)if(n)Promise.all(n.getAnimations({subtree:!0}).map(i=>i.finished)).then(()=>{o(!1),l(!1)});else{const i=window.setTimeout(()=>{o(!1),l(!1)},a);return()=>clearTimeout(i)}},[c,n,a]),t.useEffect(()=>()=>{l(!1),o(!1)},[]),{enter:s,leave:c,_open:r}}function V(e){return e.leave?"transparent":e.enter?e.backgroundColor||"rgba(0, 0, 0, 0.15)":"transparent"}function q(e){return e.leave?0:e.enter?1:0}const x=h`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,m=b.div`
  ${e=>e.theme.fixedFill}
  z-index: ${e=>e.theme.zIndexes.modal};
  ${e=>e.theme.flexCSS.column}
  ${e=>e.theme.flexCSS.center}
  opacity: ${e=>q(e)};
  animation: ${e=>e.duration}ms ${x} ease;
  transition: opacity ${e=>e.duration}ms ease;
`,y=b.div`
  ${e=>e.theme.absoluteFillCSS}
  background-color: ${e=>V(e)};
  transition: background-color ${e=>e.duration}ms ease;
  touch-action: none;
`;try{g.displayName="Modal",g.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"React.ReactNode"}},onBGClick:{defaultValue:null,description:"click function on click background layer",name:"onBGClick",required:!1,type:{name:"() => void"}},disableBG:{defaultValue:{value:"false"},description:"cancel background layer",name:"disableBG",required:!1,type:{name:"boolean"}},portalID:{defaultValue:{value:"orthogonal-modals"},description:"which root div will be considered as modal's parent",name:"portalID",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"200"},description:`display & dismiss animation duration
@unit million seconds`,name:"duration",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"React.CSSProperties"}},backgroundStyle:{defaultValue:null,description:"",name:"backgroundStyle",required:!1,type:{name:"React.CSSProperties"}},backgroundColor:{defaultValue:null,description:"replace default bg color (rgba(0, 0, 0, 0.4))",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="ModalWrapper",m.__docgenInfo={description:"",displayName:"ModalWrapper",props:{}}}catch{}try{y.displayName="ModalBG",y.__docgenInfo={description:"",displayName:"ModalBG",props:{}}}catch{}export{g as M};
//# sourceMappingURL=Modal-63b648b6.js.map
