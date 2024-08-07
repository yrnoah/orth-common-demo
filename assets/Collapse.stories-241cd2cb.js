import{j as e}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{p as W}from"./styled-components.browser.esm-655d472d.js";import{u as te,a as Q}from"./react-spring-web.esm-3307d503.js";import{c as re}from"./unstated-next-d5bc192c.js";import{u as P}from"./useMeasure-361079ab.js";import{u as ne}from"./useUpdateEffect-4c0dc687.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./util-051783c3.js";function oe(t={open:void 0,defaultOpen:!0}){const[r,n]=o.useState(()=>typeof t.open=="boolean"?t.open:!!t.defaultOpen),[u,d]=o.useState(0),S=o.useCallback(l=>n(l),[]),[v,{height:p}]=P(),[h,{height:y}]=P(),f=!!p&&!!y,[k,m]=te(()=>({to:{height:0},onRest:l=>{l.finished===!0&&d(g=>g+1)}}),[]);ne(()=>{f&&m.set({height:r?p+y:p})},[f]);const N=o.useCallback(()=>n(l=>!l),[]),q=o.useCallback(()=>n(!0),[]),V=o.useCallback(()=>n(!1),[]);return{isOpen:r,setOpen:S,headerRef:v,contentRef:h,collapseAnimAPI:m,wrapperAnimation:k,toggle:N,onOpen:q,onClose:V,initialed:f,headerHeight:p,contentHeight:y,finishedCounts:u}}const X=re(oe),ae=X.Provider,M=X.useContainer,H=o.forwardRef(({defaultOpen:t=!0,...r},n)=>e.jsx(ae,{initialState:{open:r.open,defaultOpen:t},children:e.jsx(w,{...r,defaultOpen:t,ref:n})})),w=o.forwardRef((t,r)=>{const{title:n,headerStyles:u,contentStyles:d,children:S,extraNode:v,disableHeaderToggle:p,open:h,defaultOpen:y,...f}=t,{isOpen:k,collapseAnimAPI:m,wrapperAnimation:N,toggle:q,headerRef:V,contentRef:l,initialed:g,headerHeight:c,contentHeight:C}=M(),R=typeof h=="boolean"?h:k,Z=o.useMemo(()=>!c||!C?{opacity:0,pointerEvents:"none"}:{...d||{},top:c},[d,c,C]),ee=g?N:void 0;return o.useEffect(()=>{if(!g)return;const s=R?c+C:c;m.start({to:{height:s}})},[g,c,C,m,R]),e.jsxs(O,{...f,ref:r,style:ee,children:[e.jsx(A,{ref:s=>s&&l(s),style:Z,children:S}),v,e.jsx(T,{ref:s=>s&&V(s),style:u,onClick:p?void 0:q,children:n})]})}),a=o.memo(H),O=W(Q.div)`
  position: relative;
  overflow: hidden;
`,T=W.div`
  ${t=>t.theme.flexCSS.row}
  align-items: center;
  position: relative;
`,A=W(Q.div)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;try{H.displayName="Collapse",H.__docgenInfo={description:"",displayName:"Collapse",props:{open:{defaultValue:{value:": undefined"},description:"@description if provided, controlled by open",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"@description if open provided, controlled by open",name:"defaultOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title component",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description collapse content",name:"children",required:!0,type:{name:"ReactNode"}},extraNode:{defaultValue:null,description:"@description extra content will be put into wrapper",name:"extraNode",required:!1,type:{name:"ReactNode"}},headerStyles:{defaultValue:null,description:"@description styles for header wrapper",name:"headerStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:null,description:"@description styles for content wrapper",name:"contentStyles",required:!1,type:{name:"CSSProperties"}},disableHeaderToggle:{defaultValue:{value:"false"},description:"",name:"disableHeaderToggle",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="CollapseContent",w.__docgenInfo={description:"",displayName:"CollapseContent",props:{open:{defaultValue:{value:": undefined"},description:"@description if provided, controlled by open",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"@description if open provided, controlled by open",name:"defaultOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title component",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description collapse content",name:"children",required:!0,type:{name:"ReactNode"}},extraNode:{defaultValue:null,description:"@description extra content will be put into wrapper",name:"extraNode",required:!1,type:{name:"ReactNode"}},headerStyles:{defaultValue:null,description:"@description styles for header wrapper",name:"headerStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:null,description:"@description styles for content wrapper",name:"contentStyles",required:!1,type:{name:"CSSProperties"}},disableHeaderToggle:{defaultValue:{value:"false"},description:"",name:"disableHeaderToggle",required:!1,type:{name:"boolean"}}}}}catch{}try{O.displayName="Wrapper",O.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="HeaderWrapper",T.__docgenInfo={description:"",displayName:"HeaderWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="ContentWrapper",A.__docgenInfo={description:"",displayName:"ContentWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const be={title:"PAAS/Collapse",tags:["autodocs"],component:a};function Y(t){return e.jsx(a,{...t})}function se(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t})]})}const x={render:Y,args:{title:"test title, click to toggle",defaultOpen:void 0,children:e.jsx(i,{})}},j={render:se,args:{title:"test title, click to toggle",defaultOpen:void 0,children:e.jsx(i,{})}},_={render:Y,args:{title:"test title, click to toggle",defaultOpen:void 0,disableHeaderToggle:!0,children:e.jsx(ie,{})}},le=Array.from({length:5}).map((t,r)=>r);function i(){const[t,r]=o.useState(le);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>r(n=>[Date.now(),...n]),children:"click to add"}),t.map(n=>e.jsxs("div",{onClick:()=>r(u=>u.filter(d=>d!==n)),children:[n,", click to remove"]},n))]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:e.jsx(de,{}),disableHeaderToggle:!0,children:e.jsx(i,{})}),e.jsx("br",{}),e.jsx(a,{title:"nest collapse",disableHeaderToggle:!0,children:e.jsx(i,{})})]})}function de(){const{toggle:t,finishedCounts:r}=M();return e.jsxs(e.Fragment,{children:[e.jsxs("h5",{children:[e.jsx("span",{children:"custom header component"}),e.jsx("br",{}),e.jsxs("span",{children:["animation finished counts: ",r]})]}),e.jsx("button",{onClick:t,children:"toggle collapse"})]})}const b={render:ce,args:{title:e.jsx(pe,{}),defaultOpen:void 0,children:e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{})]})}};function pe(){const{finishedCounts:t}=M();return e.jsx("div",{style:{padding:10,border:"1px solid red"},children:e.jsxs("span",{children:["custom header component (finished: ",t,")"]})})}function ce(t){return e.jsxs("div",{style:{position:"relative",height:"80vh",overflow:"auto"},children:[e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t})]})}var I,E,F;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: CollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    children: <MockComponent />
  }
}`,...(F=(E=x.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var D,$,U;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: MultipleCollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    children: <MockComponent />
  }
}`,...(U=($=j.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var z,B,G;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: CollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    disableHeaderToggle: true,
    children: <NestMockComponent />
  }
}`,...(G=(B=_.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,L;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: StickHeaderCollapseStory,
  args: {
    title: <CustomHeader />,
    defaultOpen: undefined,
    children: <>
        <MockComponent />
        <MockComponent />
        <MockComponent />
      </>
  }
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Se=["Collapse","MultipleCollapse","NestCollapse","StickHeaderCollapse"];export{x as Collapse,j as MultipleCollapse,_ as NestCollapse,b as StickHeaderCollapse,Se as __namedExportsOrder,be as default};
//# sourceMappingURL=Collapse.stories-241cd2cb.js.map
