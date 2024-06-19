import{j as o}from"./jsx-runtime-94f6e698.js";import{u as m,a as u}from"./react-spring-web.esm-b5f0afc3.js";import{r as g}from"./index-8db94870.js";import{p as y}from"./styled-components.browser.esm-8c817f58.js";import{c as S}from"./common-6b90d0a5.js";import{S as A}from"./Dynamic-c2976920.js";const a=g.forwardRef(({children:e,init:s,to:i,config:p=S,delay:n=0,...l},d)=>{const[c,f]=m(()=>({from:s,to:i,onStart:({value:t},r)=>{t.display==="none"&&r.start({display:"flex"})},onRest:({value:t},r)=>{t.opacity===0&&r.start({display:"none"})},delay:n,config:p}),[i,n]);return o.jsx(A,{value:{controller:f},children:o.jsx(x,{...l,style:c,ref:d,children:e})})});a.displayName="SpringActor";const x=y(u.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  ${e=>e.theme.flexCSS.center}
`;try{a.displayName="SpringActor",a.__docgenInfo={description:"",displayName:"SpringActor",props:{init:{defaultValue:null,description:"",name:"init",required:!1,type:{name:"IActorStyle"}},delay:{defaultValue:{value:"0"},description:"",name:"delay",required:!1,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"IActorStyle | IActorStyle[]"}},config:{defaultValue:{value:`{
  easing: easings.easeOutQuad,
  duration: EAnimDuration.STANDARD,
} as SpringConfig`},description:"",name:"config",required:!1,type:{name:"Partial<AnimationConfig> | ((key: string) => Partial<AnimationConfig>)"}}}}}catch{}export{a as S};
//# sourceMappingURL=SpringActor-a0268d3b.js.map
