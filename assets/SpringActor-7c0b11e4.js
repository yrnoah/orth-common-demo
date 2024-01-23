import{j as o}from"./jsx-runtime-94f6e698.js";import{u as m,a as u}from"./react-spring-web.esm-788c8f7b.js";import{r as y}from"./index-8db94870.js";import{s as g}from"./styled-components.browser.esm-6007d051.js";import{c as S}from"./common-d4e29412.js";import{S as A}from"./Dynamic-b27796d8.js";const a=y.forwardRef(({children:e,init:s,to:i,config:l=S,delay:n=0,...p},d)=>{const[c,f]=m(()=>({from:s,to:i,onStart:({value:t},r)=>{t.display==="none"&&r.start({display:"flex"})},onRest:({value:t},r)=>{t.opacity===0&&r.start({display:"none"})},delay:n,config:l}),[i,n]);return o.jsx(A,{value:{controller:f},children:o.jsx(x,{...p,style:c,ref:d,children:e})})});a.displayName="SpringActor";const x=g(u.div)`
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
//# sourceMappingURL=SpringActor-7c0b11e4.js.map
