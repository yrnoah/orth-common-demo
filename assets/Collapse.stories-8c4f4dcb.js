import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{s as O}from"./styled-components.browser.esm-6007d051.js";import{u as te,a as G}from"./react-spring-web.esm-788c8f7b.js";import{c as ne}from"./unstated-next-d5bc192c.js";import{u as R}from"./useMeasure-361079ab.js";import{u as re}from"./useUpdateEffect-4c0dc687.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./util-051783c3.js";function ae(t={open:void 0,defaultOpen:!0}){const[r,n]=a.useState(()=>typeof t.open=="boolean"?t.open:!!t.defaultOpen),u=a.useCallback(f=>n(f),[]),[i,{height:d}]=R(),[j,{height:m}]=R(),p=!!d&&!!m,[M,y]=te(()=>({to:{height:0}}),[]);re(()=>{p&&y.set({height:r?d+m:d})},[p]);const _=a.useCallback(()=>n(f=>!f),[]),g=a.useCallback(()=>n(!0),[]),S=a.useCallback(()=>n(!1),[]);return{isOpen:r,setOpen:u,headerRef:i,contentRef:j,collapseAnimAPI:y,wrapperAnimation:M,toggle:_,onOpen:g,onClose:S,initialed:p,headerHeight:d,contentHeight:m}}const J=ne(ae),le=J.Provider,K=J.useContainer,q=a.forwardRef(({defaultOpen:t=!0,...r},n)=>e.jsx(le,{initialState:{open:r.open,defaultOpen:t},children:e.jsx(k,{...r,defaultOpen:t,ref:n})})),k=a.forwardRef((t,r)=>{const{title:n,headerStyles:u,contentStyles:i,children:d,extraNode:j,disableHeaderToggle:m,open:p,defaultOpen:M,...y}=t,{isOpen:_,collapseAnimAPI:g,wrapperAnimation:S,toggle:f,headerRef:X,contentRef:Y,initialed:V,headerHeight:c,contentHeight:h}=K(),T=typeof p=="boolean"?p:_,Z=a.useMemo(()=>!c||!h?{opacity:0,pointerEvents:"none"}:{...i||{},top:c},[i,c,h]),ee=V?S:void 0;return a.useEffect(()=>{if(!V)return;const o=T?c+h:c;g.start({to:{height:o}})},[V,c,h,g,T]),e.jsxs(H,{...y,ref:r,style:ee,children:[e.jsx(N,{ref:o=>o&&Y(o),style:Z,children:d}),j,e.jsx(w,{ref:o=>o&&X(o),style:u,onClick:m?void 0:f,children:n})]})}),l=a.memo(q),H=O(G.div)`
  position: relative;
  overflow: hidden;
`,w=O.div`
  ${t=>t.theme.flexCSS.row}
  align-items: center;
  position: relative;
`,N=O(G.div)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;try{q.displayName="Collapse",q.__docgenInfo={description:"",displayName:"Collapse",props:{open:{defaultValue:{value:": undefined"},description:"@description if provided, controlled by open",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"@description if open provided, controlled by open",name:"defaultOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title component",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description collapse content",name:"children",required:!0,type:{name:"ReactNode"}},extraNode:{defaultValue:null,description:"@description extra content will be put into wrapper",name:"extraNode",required:!1,type:{name:"ReactNode"}},headerStyles:{defaultValue:null,description:"@description styles for header wrapper",name:"headerStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:null,description:"@description styles for content wrapper",name:"contentStyles",required:!1,type:{name:"CSSProperties"}},disableHeaderToggle:{defaultValue:{value:"false"},description:"",name:"disableHeaderToggle",required:!1,type:{name:"boolean"}}}}}catch{}try{k.displayName="CollapseContent",k.__docgenInfo={description:"",displayName:"CollapseContent",props:{open:{defaultValue:{value:": undefined"},description:"@description if provided, controlled by open",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"@description if open provided, controlled by open",name:"defaultOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title component",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description collapse content",name:"children",required:!0,type:{name:"ReactNode"}},extraNode:{defaultValue:null,description:"@description extra content will be put into wrapper",name:"extraNode",required:!1,type:{name:"ReactNode"}},headerStyles:{defaultValue:null,description:"@description styles for header wrapper",name:"headerStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:null,description:"@description styles for content wrapper",name:"contentStyles",required:!1,type:{name:"CSSProperties"}},disableHeaderToggle:{defaultValue:{value:"false"},description:"",name:"disableHeaderToggle",required:!1,type:{name:"boolean"}}}}}catch{}try{H.displayName="Wrapper",H.__docgenInfo={description:"",displayName:"Wrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"string | FluidValue<string, any>"}},scrollTop:{defaultValue:null,description:"",name:"scrollTop",required:!1,type:{name:"number | FluidValue<number, any>"}},scrollLeft:{defaultValue:null,description:"",name:"scrollLeft",required:!1,type:{name:"number | FluidValue<number, any>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{w.displayName="HeaderWrapper",w.__docgenInfo={description:"",displayName:"HeaderWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{N.displayName="ContentWrapper",N.__docgenInfo={description:"",displayName:"ContentWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"string | FluidValue<string, any>"}},scrollTop:{defaultValue:null,description:"",name:"scrollTop",required:!1,type:{name:"number | FluidValue<number, any>"}},scrollLeft:{defaultValue:null,description:"",name:"scrollLeft",required:!1,type:{name:"number | FluidValue<number, any>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const ve={title:"PAAS/Collapse",tags:["autodocs"],component:l};function Q(t){return e.jsx(l,{...t})}function oe(t){return e.jsxs(e.Fragment,{children:[e.jsx(l,{...t}),e.jsx("br",{}),e.jsx(l,{...t}),e.jsx("br",{}),e.jsx(l,{...t})]})}const x={render:Q,args:{title:"test title, click to toggle",defaultOpen:void 0,children:e.jsx(s,{})}},C={render:oe,args:{title:"test title, click to toggle",defaultOpen:void 0,children:e.jsx(s,{})}},b={render:Q,args:{title:"test title, click to toggle",defaultOpen:void 0,disableHeaderToggle:!0,children:e.jsx(ie,{})}},se=Array.from({length:5}).map((t,r)=>r);function s(){const[t,r]=a.useState(se);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>r(n=>[Date.now(),...n]),children:"click to add"}),t.map(n=>e.jsxs("div",{onClick:()=>r(u=>u.filter(i=>i!==n)),children:[n,", click to remove"]},n))]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:e.jsx(de,{}),disableHeaderToggle:!0,children:e.jsx(s,{})}),e.jsx("br",{}),e.jsx(l,{title:"nest collapse",disableHeaderToggle:!0,children:e.jsx(s,{})})]})}function de(){const{toggle:t}=K();return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"custom header component"}),e.jsx("button",{onClick:t,children:"toggle collapse"})]})}const v={render:pe,args:{title:e.jsx("div",{style:{padding:10,border:"1px solid red"},children:e.jsx("span",{children:"custom header component"})}),defaultOpen:void 0,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{})]})}};function pe(t){return e.jsxs("div",{style:{position:"relative",height:"80vh",overflow:"auto"},children:[e.jsx(l,{...t}),e.jsx("br",{}),e.jsx(l,{...t}),e.jsx("br",{}),e.jsx(l,{...t})]})}var A,E,F;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: CollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    children: <MockComponent />
  }
}`,...(F=(E=x.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,P,W;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: MultipleCollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    children: <MockComponent />
  }
}`,...(W=(P=C.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var D,I,B;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: CollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    disableHeaderToggle: true,
    children: <NestMockComponent />
  }
}`,...(B=(I=b.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var $,U,z;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: StickHeaderCollapseStory,
  args: {
    title: <div style={{
      padding: 10,
      border: "1px solid red"
    }}>
        <span>custom header component</span>
      </div>,
    defaultOpen: undefined,
    children: <>
        <MockComponent />
        <MockComponent />
        <MockComponent />
      </>
  }
}`,...(z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const je=["Collapse","MultipleCollapse","NestCollapse","StickHeaderCollapse"];export{x as Collapse,C as MultipleCollapse,b as NestCollapse,v as StickHeaderCollapse,je as __namedExportsOrder,ve as default};
//# sourceMappingURL=Collapse.stories-8c4f4dcb.js.map
