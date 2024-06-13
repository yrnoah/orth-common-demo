import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c,R as P}from"./index-8db94870.js";import{p as b}from"./styled-components.browser.esm-8c817f58.js";import{u as _,D as W}from"./Dynamic-993557e0.js";import{c as I,D as w,P as h,G as N,E as S,b as $,d as z}from"./common-d4e29412.js";import{u as B,a as A}from"./react-spring-web.esm-788c8f7b.js";import{T as k,b as H,H as M,S as K,D as F,a as G,I as f}from"./Separator-635c95da.js";import{u as O}from"./useRafState-37c98633.js";import{i as D,o as L,a as U}from"./util-051783c3.js";import{u as Z}from"./useMount-33212c03.js";import{S as J}from"./SpringActor-2e0032f2.js";import{D as Q}from"./DmIcon20Deploy-3df39080.js";import{D as X}from"./DmIcon20History-f09108bc.js";import{D as C}from"./DmIcon12Down-dcd36aab.js";import{D as y}from"./DmIcon20Share-4070fa0a.js";import"./_commonjsHelpers-042e6b4d.js";import"./colors-0fffe0c4.js";import"./typography-05e40c9f.js";import"./index-8ce4a492.js";import"./styles-86b3dc18.js";import"./commons-26f23e02.js";import"./useEffectOnce-29e89586.js";var Y=function(e,n){e===void 0&&(e=1/0),n===void 0&&(n=1/0);var a=O({width:D?window.innerWidth:e,height:D?window.innerHeight:n}),i=a[0],o=a[1];return c.useEffect(function(){if(D){var s=function(){o({width:window.innerWidth,height:window.innerHeight})};return L(window,"resize",s),function(){U(window,"resize",s)}}},[]),i};const q=Y,ee={enter:{opacity:0},default:{opacity:1},exit:{opacity:0}},te={enter:0,default:0,exit:0},ne={enter:{left:"-100%",opacity:0},default:{left:"0%",opacity:1},exit:{left:"-100%",opacity:0}},ae={enter:0,default:0,exit:0},v=c.forwardRef(({stage:e,icon:n,children:a,showText:i,disableBackgroundMotion:o,background:s,childrenSprings:r=ee,childrenDelays:u=te,backgroundSprings:d=ne,backgroundDelays:l=ae,...m},p)=>{const[g]=B(()=>({from:r.enter,to:r[e],config:I,delay:u[e]}),[e]),[V]=B(()=>({from:o?r.default:d.enter,to:o?r.default:d[e],config:I,delay:l[e]}),[e]);return t.jsxs(k,{ref:p,...m,style:{...m.style,overflow:"hidden",background:"none"},children:[t.jsx(ie,{style:V,$background:s}),t.jsx(oe,{}),n,a&&t.jsx(A.div,{style:{...i?void 0:g,zIndex:1},children:a})]})});v.displayName="AnimatedTextButton";const ie=b(A.div)`
  ${({theme:e})=>e.absoluteFillCSS}
  background: ${({$background:e,theme:n})=>e??n.colors.plus_cloud};
  border-radius: 4px;
  z-index: 0;
`,oe=b(A.div)`
  ${({theme:e})=>e.absoluteFillCSS}
  background: ${({theme:e})=>e.colors.addHoveredBright};
  border-radius: 4px;
  transition: opacity 150ms linear;
  z-index: 0;
  opacity: 0;

  ${H}:hover & {
    opacity: 1;
  }
`;try{v.displayName="AnimatedTextButton",v.__docgenInfo={description:"",displayName:"AnimatedTextButton",props:{stage:{defaultValue:null,description:"",name:"stage",required:!0,type:{name:"enum",value:[{value:'"enter"'},{value:'"default"'},{value:'"exit"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}},showText:{defaultValue:null,description:"",name:"showText",required:!1,type:{name:"boolean"}},disableBackgroundMotion:{defaultValue:null,description:"",name:"disableBackgroundMotion",required:!1,type:{name:"boolean"}},childrenSprings:{defaultValue:{value:`{
  enter: { opacity: 0 },
  default: { opacity: 1 },
  exit: { opacity: 0 },
} as const`},description:"",name:"childrenSprings",required:!1,type:{name:"IStagedAnimation"}},childrenDelays:{defaultValue:{value:`{
  enter: 0,
  default: 0,
  exit: 0,
} as const`},description:"",name:"childrenDelays",required:!1,type:{name:"IStagedAnimation"}},backgroundSprings:{defaultValue:{value:`{
  enter: { left: "-100%", opacity: 0 },
  default: { left: "0%", opacity: 1 },
  exit: { left: "-100%", opacity: 0 },
} as const`},description:"",name:"backgroundSprings",required:!1,type:{name:"IStagedAnimation"}},backgroundDelays:{defaultValue:{value:`{
  enter: 0,
  default: 0,
  exit: 0,
} as const`},description:"",name:"backgroundDelays",required:!1,type:{name:"IStagedAnimation"}}}}}catch{}function re(e,n,a=40){const i=c.useRef(!1),{width:o,height:s}=q(),{menuWidth:r,menuHeight:u,scaleSizeTo:d,setSizeTo:l}=_();c.useEffect(()=>{i.current?d==null||d({x:o/2,y:s-a,width:r==null?void 0:r.get(),height:u==null?void 0:u.get(),config:{delay:500}}):(l==null||l({x:o/2,y:s-a,width:e,height:n}),i.current=!0)},[n,i,u,r,d,l,e,s,o,a])}function se({itemRefs:e}){const[n,a]=c.useState([{width:w,height:w},[]]);return Z(()=>{if(e.current.length===0)return;let i=h,o=2*h;const s=e.current.map((r,u)=>{const{width:d,height:l}=r.getBoundingClientRect();o=Math.max(l+2*h,o);const m={x:i,y:h};return i+=d+N,m});i+=h-N,a([{width:i,height:o},s])}),n}function ue(e,n){const{scaleSizeTo:a}=_(),{width:i,height:o}=q();return async()=>{if(!e.current)return;const{width:s,height:r}=e.current.getBoundingClientRect();return await(a==null?void 0:a({x:i/2,y:o-80,width:s+2*h,height:r+2*h,config:{config:n}}))}}function j(e){return t.jsx(W,{init:e.init,anchor:"bottom",theme:e.theme,children:t.jsx(de,{...e})})}function de({init:e={},children:n,hasPivot:a,handleClickPivot:i}){const[o,s]=c.useState(S.enter),r=c.useRef([]),{scaleSizeTo:u}=_();re(e.width??w,e.height??w);const[d,l]=se({itemRefs:r});return c.useEffect(()=>{u==null||u(d)},[u,d]),t.jsx(ce.Provider,{value:{stage:o,setStage:s},children:c.Children.map(n,(m,p)=>t.jsx(J,{to:{...l[p]},ref:g=>g&&r.current.push(g),children:a&&p===0?t.jsx(v,{stage:o,style:{padding:0,maxWidth:"none"},onClick:i?()=>{s(S.exit),setTimeout(()=>{i()},$.STANDARD)}:void 0,children:m}):m},p))})}const ce=c.createContext({stage:S.enter,setStage:()=>{}});try{j.displayName="DymenuNavigator",j.__docgenInfo={description:"",displayName:"DymenuNavigator",props:{init:{defaultValue:null,description:"",name:"init",required:!1,type:{name:"Control"}},hasPivot:{defaultValue:null,description:"",name:"hasPivot",required:!1,type:{name:"boolean"}},handleClickPivot:{defaultValue:null,description:"",name:"handleClickPivot",required:!1,type:{name:"(() => void)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"plus"'},{value:'"minus"'}]}}}}}catch{}const We={title:"PAAS/DynamicMenu",argTypes:{theme:{control:"select",options:["plus","minus"]}}},le=({onClick:e})=>{const n=c.useRef(null),a=ue(n,z);return t.jsx(f,{ref:n,onClick:i=>a().then(()=>e==null?void 0:e(i)),children:t.jsx(y,{width:20,height:20})})},me=({clickPivot:e})=>t.jsxs(j,{init:{},hasPivot:!0,children:[t.jsx(le,{onClick:e}),t.jsx(M,{}),t.jsx(K,{}),t.jsx(k,{children:"Text"}),t.jsxs(k,{children:[t.jsx(Q,{width:20,height:20}),"Deploy"]}),t.jsxs(F,{children:[t.jsx(X,{width:20,height:20}),t.jsx(C,{width:12,height:12})]}),t.jsxs(G,{children:["Text",t.jsx(C,{width:12,height:12})]})]}),he=({onClickShare:e})=>t.jsxs(j,{init:{},children:[t.jsx(f,{onClick:e,children:t.jsx(y,{width:20,height:20})}),t.jsx(f,{onClick:e,children:t.jsx(y,{width:20,height:20})}),t.jsx(f,{onClick:e,children:t.jsx(y,{width:20,height:20})}),t.jsx(f,{onClick:e,children:t.jsx(y,{width:20,height:20})})]}),pe=e=>{const[n,a]=P.useState("share");return t.jsxs(fe,{children:[n==="share"&&t.jsx(me,{clickPivot:()=>a("nav")}),n==="nav"&&t.jsx(he,{onClickShare:()=>a("share")})]})},x=pe.bind({});x.args={theme:"plus"};const fe=b.div`
  position: relative;
  width: 600px;
  height: 400px;
  display: flex;
  ${e=>e.theme.flexCSS.center}
`;var E,R,T;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [key, setKey] = React.useState("share");
  return <Wrapper>
      {key === "share" && <Share clickPivot={() => setKey("nav")} />}
      {key === "nav" && <Nav onClickShare={() => setKey("share")} />}
    </Wrapper>;
}`,...(T=(R=x.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const $e=["Navigator"];export{x as Navigator,$e as __namedExportsOrder,We as default};
//# sourceMappingURL=DymenuNavigator.stories-ab6db9f6.js.map
