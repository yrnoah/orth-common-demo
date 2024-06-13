import{j as e}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{p as O}from"./styled-components.browser.esm-8c817f58.js";import{u as te,a as J}from"./react-spring-web.esm-788c8f7b.js";import{c as re}from"./unstated-next-d5bc192c.js";import{u as W}from"./useMeasure-361079ab.js";import{u as ne}from"./useUpdateEffect-4c0dc687.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./util-051783c3.js";function oe(t={open:void 0,defaultOpen:!0}){const[n,r]=o.useState(()=>typeof t.open=="boolean"?t.open:!!t.defaultOpen),u=o.useCallback(f=>r(f),[]),[i,{height:d}]=W(),[j,{height:m}]=W(),p=!!d&&!!m,[T,g]=te(()=>({to:{height:0}}),[]);ne(()=>{p&&g.set({height:n?d+m:d})},[p]);const v=o.useCallback(()=>r(f=>!f),[]),h=o.useCallback(()=>r(!0),[]),S=o.useCallback(()=>r(!1),[]);return{isOpen:n,setOpen:u,headerRef:i,contentRef:j,collapseAnimAPI:g,wrapperAnimation:T,toggle:v,onOpen:h,onClose:S,initialed:p,headerHeight:d,contentHeight:m}}const K=re(oe),ae=K.Provider,L=K.useContainer,N=o.forwardRef(({defaultOpen:t=!0,...n},r)=>e.jsx(ae,{initialState:{open:n.open,defaultOpen:t},children:e.jsx(q,{...n,defaultOpen:t,ref:r})})),q=o.forwardRef((t,n)=>{const{title:r,headerStyles:u,contentStyles:i,children:d,extraNode:j,disableHeaderToggle:m,open:p,defaultOpen:T,...g}=t,{isOpen:v,collapseAnimAPI:h,wrapperAnimation:S,toggle:f,headerRef:X,contentRef:Y,initialed:k,headerHeight:c,contentHeight:y}=L(),A=typeof p=="boolean"?p:v,Z=o.useMemo(()=>!c||!y?{opacity:0,pointerEvents:"none"}:{...i||{},top:c},[i,c,y]),ee=k?S:void 0;return o.useEffect(()=>{if(!k)return;const l=A?c+y:c;h.start({to:{height:l}})},[k,c,y,h,A]),e.jsxs(V,{...g,ref:n,style:ee,children:[e.jsx(H,{ref:l=>l&&Y(l),style:Z,children:d}),j,e.jsx(w,{ref:l=>l&&X(l),style:u,onClick:m?void 0:f,children:r})]})}),a=o.memo(N),V=O(J.div)`
  position: relative;
  overflow: hidden;
`,w=O.div`
  ${t=>t.theme.flexCSS.row}
  align-items: center;
  position: relative;
`,H=O(J.div)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;try{N.displayName="Collapse",N.__docgenInfo={description:"",displayName:"Collapse",props:{open:{defaultValue:{value:": undefined"},description:"@description if provided, controlled by open",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"@description if open provided, controlled by open",name:"defaultOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title component",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description collapse content",name:"children",required:!0,type:{name:"ReactNode"}},extraNode:{defaultValue:null,description:"@description extra content will be put into wrapper",name:"extraNode",required:!1,type:{name:"ReactNode"}},headerStyles:{defaultValue:null,description:"@description styles for header wrapper",name:"headerStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:null,description:"@description styles for content wrapper",name:"contentStyles",required:!1,type:{name:"CSSProperties"}},disableHeaderToggle:{defaultValue:{value:"false"},description:"",name:"disableHeaderToggle",required:!1,type:{name:"boolean"}}}}}catch{}try{q.displayName="CollapseContent",q.__docgenInfo={description:"",displayName:"CollapseContent",props:{open:{defaultValue:{value:": undefined"},description:"@description if provided, controlled by open",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"@description if open provided, controlled by open",name:"defaultOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title component",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description collapse content",name:"children",required:!0,type:{name:"ReactNode"}},extraNode:{defaultValue:null,description:"@description extra content will be put into wrapper",name:"extraNode",required:!1,type:{name:"ReactNode"}},headerStyles:{defaultValue:null,description:"@description styles for header wrapper",name:"headerStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:null,description:"@description styles for content wrapper",name:"contentStyles",required:!1,type:{name:"CSSProperties"}},disableHeaderToggle:{defaultValue:{value:"false"},description:"",name:"disableHeaderToggle",required:!1,type:{name:"boolean"}}}}}catch{}try{V.displayName="Wrapper",V.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="HeaderWrapper",w.__docgenInfo={description:"",displayName:"HeaderWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{H.displayName="ContentWrapper",H.__docgenInfo={description:"",displayName:"ContentWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const be={title:"PAAS/Collapse",tags:["autodocs"],component:a};function Q(t){return e.jsx(a,{...t})}function le(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t})]})}const C={render:Q,args:{title:"test title, click to toggle",defaultOpen:void 0,children:e.jsx(s,{})}},x={render:le,args:{title:"test title, click to toggle",defaultOpen:void 0,children:e.jsx(s,{})}},_={render:Q,args:{title:"test title, click to toggle",defaultOpen:void 0,disableHeaderToggle:!0,children:e.jsx(ie,{})}},se=Array.from({length:5}).map((t,n)=>n);function s(){const[t,n]=o.useState(se);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>n(r=>[Date.now(),...r]),children:"click to add"}),t.map(r=>e.jsxs("div",{onClick:()=>n(u=>u.filter(i=>i!==r)),children:[r,", click to remove"]},r))]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:e.jsx(de,{}),disableHeaderToggle:!0,children:e.jsx(s,{})}),e.jsx("br",{}),e.jsx(a,{title:"nest collapse",disableHeaderToggle:!0,children:e.jsx(s,{})})]})}function de(){const{toggle:t}=L();return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"custom header component"}),e.jsx("button",{onClick:t,children:"toggle collapse"})]})}const b={render:pe,args:{title:e.jsx("div",{style:{padding:10,border:"1px solid red"},children:e.jsx("span",{children:"custom header component"})}),defaultOpen:void 0,children:e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{})]})}};function pe(t){return e.jsxs("div",{style:{position:"relative",height:"80vh",overflow:"auto"},children:[e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t})]})}var M,R,P;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: CollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    children: <MockComponent />
  }
}`,...(P=(R=C.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var I,E,D;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: MultipleCollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    children: <MockComponent />
  }
}`,...(D=(E=x.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var F,$,U;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: CollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    disableHeaderToggle: true,
    children: <NestMockComponent />
  }
}`,...(U=($=_.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var z,B,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(B=b.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const je=["Collapse","MultipleCollapse","NestCollapse","StickHeaderCollapse"];export{C as Collapse,x as MultipleCollapse,_ as NestCollapse,b as StickHeaderCollapse,je as __namedExportsOrder,be as default};
//# sourceMappingURL=Collapse.stories-60e5d9c0.js.map
