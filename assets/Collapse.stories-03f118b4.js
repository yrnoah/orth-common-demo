import{j as e}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{p as W}from"./styled-components.browser.esm-655d472d.js";import{u as te,a as Q}from"./react-spring-web.esm-3307d503.js";import{c as ne}from"./unstated-next-d5bc192c.js";import{u as P}from"./useMeasure-361079ab.js";import{u as re}from"./useUpdateEffect-4c0dc687.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./util-051783c3.js";function oe(t={open:void 0,defaultOpen:!0}){const[n,r]=o.useState(()=>typeof t.open=="boolean"?t.open:!!t.defaultOpen),[u,d]=o.useState(0),S=o.useCallback(l=>r(l),[]),[v,{height:p}]=P(),[h,{height:y}]=P(),m=!!p&&!!y,[k,f]=te(()=>({to:{height:0},onRest:l=>{l.finished===!0&&d(g=>g+1)}}),[]);re(()=>{m&&f.set({height:n?p+y:p})},[m]);const w=o.useCallback(()=>r(l=>!l),[]),N=o.useCallback(()=>r(!0),[]),q=o.useCallback(()=>r(!1),[]);return{isOpen:n,setOpen:S,headerRef:v,contentRef:h,collapseAnimAPI:f,wrapperAnimation:k,toggle:w,onOpen:N,onClose:q,initialed:m,headerHeight:p,contentHeight:y,finishedCounts:u}}const X=ne(oe),ae=X.Provider,M=X.useContainer,V=o.forwardRef(({defaultOpen:t=!0,...n},r)=>e.jsx(ae,{initialState:{open:n.open,defaultOpen:t},children:e.jsx(H,{...n,defaultOpen:t,ref:r})})),H=o.forwardRef((t,n)=>{const{title:r,headerStyles:u,contentStyles:d,children:S,extraNode:v,disableHeaderToggle:p,open:h,defaultOpen:y,...m}=t,{isOpen:k,collapseAnimAPI:f,wrapperAnimation:w,toggle:N,headerRef:q,contentRef:l,initialed:g,headerHeight:c,contentHeight:C}=M(),R=typeof h=="boolean"?h:k,Z=o.useMemo(()=>!c||!C?{opacity:0,pointerEvents:"none"}:{...d||{},top:c},[d,c,C]),ee=g?w:void 0;return o.useEffect(()=>{if(!g)return;const s=R?c+C:c;f.start({to:{height:s}})},[g,c,C,f,R]),e.jsxs(O,{...m,ref:n,style:ee,children:[e.jsx(A,{ref:s=>s&&l(s),style:Z,children:S}),v,e.jsx(T,{ref:s=>s&&q(s),style:u,onClick:p?void 0:N,children:r})]})}),a=o.memo(V),O=W(Q.div)`
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
`;try{V.displayName="Collapse",V.__docgenInfo={description:"",displayName:"Collapse",props:{open:{defaultValue:{value:": undefined"},description:"@description if provided, controlled by open",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"@description if open provided, controlled by open",name:"defaultOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title component",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description collapse content",name:"children",required:!0,type:{name:"ReactNode"}},extraNode:{defaultValue:null,description:"@description extra content will be put into wrapper",name:"extraNode",required:!1,type:{name:"ReactNode"}},headerStyles:{defaultValue:null,description:"@description styles for header wrapper",name:"headerStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:null,description:`@description styles for content wrapper
@note do not set margin and padding, browser won't count these values and will cause Collapse height error.`,name:"contentStyles",required:!1,type:{name:'Omit<CSSProperties, "padding" | "paddingTop" | "paddingBottom" | "margin" | "marginTop" | "marginBottom">'}},disableHeaderToggle:{defaultValue:{value:"false"},description:"",name:"disableHeaderToggle",required:!1,type:{name:"boolean"}}}}}catch{}try{H.displayName="CollapseContent",H.__docgenInfo={description:"",displayName:"CollapseContent",props:{open:{defaultValue:{value:": undefined"},description:"@description if provided, controlled by open",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"true"},description:"@description if open provided, controlled by open",name:"defaultOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"@description title component",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"@description collapse content",name:"children",required:!0,type:{name:"ReactNode"}},extraNode:{defaultValue:null,description:"@description extra content will be put into wrapper",name:"extraNode",required:!1,type:{name:"ReactNode"}},headerStyles:{defaultValue:null,description:"@description styles for header wrapper",name:"headerStyles",required:!1,type:{name:"CSSProperties"}},contentStyles:{defaultValue:null,description:`@description styles for content wrapper
@note do not set margin and padding, browser won't count these values and will cause Collapse height error.`,name:"contentStyles",required:!1,type:{name:'Omit<CSSProperties, "padding" | "paddingTop" | "paddingBottom" | "margin" | "marginTop" | "marginBottom">'}},disableHeaderToggle:{defaultValue:{value:"false"},description:"",name:"disableHeaderToggle",required:!1,type:{name:"boolean"}}}}}catch{}try{O.displayName="Wrapper",O.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="HeaderWrapper",T.__docgenInfo={description:"",displayName:"HeaderWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="ContentWrapper",A.__docgenInfo={description:"",displayName:"ContentWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const be={title:"PAAS/Collapse",tags:["autodocs"],component:a};function Y(t){return e.jsx(a,{...t})}function se(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t})]})}const x={render:Y,args:{title:"test title, click to toggle",defaultOpen:void 0,children:e.jsx(i,{})}},j={render:se,args:{title:"test title, click to toggle",defaultOpen:void 0,children:e.jsx(i,{})}},_={render:Y,args:{title:"test title, click to toggle",defaultOpen:void 0,disableHeaderToggle:!0,children:e.jsx(ie,{})}},le=Array.from({length:5}).map((t,n)=>n);function i(){const[t,n]=o.useState(le);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>n(r=>[Date.now(),...r]),children:"click to add"}),t.map(r=>e.jsxs("div",{onClick:()=>n(u=>u.filter(d=>d!==r)),children:[r,", click to remove"]},r))]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:e.jsx(de,{}),disableHeaderToggle:!0,children:e.jsx(i,{})}),e.jsx("br",{}),e.jsx(a,{title:"nest collapse",disableHeaderToggle:!0,children:e.jsx(i,{})})]})}function de(){const{toggle:t,finishedCounts:n}=M();return e.jsxs(e.Fragment,{children:[e.jsxs("h5",{children:[e.jsx("span",{children:"custom header component"}),e.jsx("br",{}),e.jsxs("span",{children:["animation finished counts: ",n]})]}),e.jsx("button",{onClick:t,children:"toggle collapse"})]})}const b={render:ce,args:{title:e.jsx(pe,{}),defaultOpen:void 0,children:e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{})]})}};function pe(){const{finishedCounts:t}=M();return e.jsx("div",{style:{padding:10,border:"1px solid red"},children:e.jsxs("span",{children:["custom header component (finished: ",t,")"]})})}function ce(t){return e.jsxs("div",{style:{position:"relative",height:"80vh",overflow:"auto"},children:[e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t}),e.jsx("br",{}),e.jsx(a,{...t})]})}var I,E,F;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: CollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    children: <MockComponent />
  }
}`,...(F=(E=x.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var D,B,$;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: MultipleCollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    children: <MockComponent />
  }
}`,...($=(B=j.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var U,z,G;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: CollapseStory,
  args: {
    title: "test title, click to toggle",
    defaultOpen: undefined,
    disableHeaderToggle: true,
    children: <NestMockComponent />
  }
}`,...(G=(z=_.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,L;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
//# sourceMappingURL=Collapse.stories-03f118b4.js.map
