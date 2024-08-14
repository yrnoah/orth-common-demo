import{j as o}from"./jsx-runtime-94f6e698.js";import{r as t}from"./index-8db94870.js";import{B as x}from"./Dropdown-c9b66b7b.js";import{p as S}from"./styled-components.browser.esm-655d472d.js";import"./_commonjsHelpers-042e6b4d.js";import"./useCurrent-9b1a0363.js";import"./index-8ce4a492.js";import"./useEffectOnce-838fab99.js";import"./util-051783c3.js";import"./useMeasure-361079ab.js";const I={title:"PAAS/Dropdown",tags:["autodocs"],component:x,argTypes:{children:{table:{disable:!0}}}};function k({...d}){const[p,r]=t.useState(!1),s=t.useRef(null),[n,i]=t.useState(3),u=t.useMemo(()=>o.jsx(o.Fragment,{children:Array.from({length:n}).map((e,l)=>o.jsxs(j,{children:["item ",l+1]},l))}),[n]),h=t.useCallback(()=>{i(e=>e+1),r(!1)},[]),m=t.useCallback(()=>{i(e=>Math.max(e-1,0)),r(!1)},[]),g=t.useCallback(e=>r(!!e),[]);return o.jsxs("div",{style:{width:"80vw",height:"80vh",overflow:"scroll"},ref:s,children:[o.jsxs("div",{style:{position:"absolute",top:0,right:0},children:[o.jsx("button",{onClick:h,style:{marginRight:8},children:"increase option"}),o.jsx("button",{onClick:m,children:"decrease option"})]}),o.jsx(x,{...d,visible:p,scrollRef:s,overlay:u,onVisibleChange:g,children:o.jsx("button",{onClick:()=>r(e=>!e),style:{margin:"50vh 60vw"},children:"trigger"})})]})}function D({...d}){const[p,r]=t.useState(!1),s=t.useRef(null),[n,i]=t.useState(3),u=t.useMemo(()=>o.jsx(o.Fragment,{children:Array.from({length:n}).map((e,l)=>o.jsxs(j,{children:["item ",l+1]},l))}),[n]),h=t.useCallback(()=>{i(e=>e+1),r(!1)},[]),m=t.useCallback(()=>{i(e=>Math.max(e-1,0)),r(!1)},[]),g=t.useCallback(e=>r(!!e),[]);return o.jsxs("div",{style:{width:"80vw",height:"80vh",overflow:"scroll"},ref:s,children:[o.jsxs("div",{style:{position:"absolute",top:0,right:0},children:[o.jsx("button",{onClick:h,style:{marginRight:8},children:"increase option"}),o.jsx("button",{onClick:m,children:"decrease option"})]}),o.jsxs(x,{...d,visible:p,scrollRef:s,overlay:u,onVisibleChange:g,children:[o.jsx("button",{onClick:()=>r(e=>!e),children:"trigger"}),o.jsx("button",{onClick:()=>r(e=>!e),children:"trigger"})]})]})}const j=S.div`
  height: 32px;
  width: 200px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid grey;
`,a={render:k,args:{position:"auto",overlayContainerStyle:{outline:"1px solid red"}}},c={render:D,args:{style:{margin:"50vh 60vw"},position:"auto",overlayContainerStyle:{outline:"1px solid red"}}};var y,b,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: DropdownStory,
  args: {
    position: "auto",
    overlayContainerStyle: {
      outline: "1px solid red"
    }
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,C,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: BaseDropdownStory,
  args: {
    style: {
      margin: "50vh 60vw"
    },
    position: "auto",
    overlayContainerStyle: {
      outline: "1px solid red"
    }
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const P=["BaseDropdown","DropdownWithMultipleChildren"];export{a as BaseDropdown,c as DropdownWithMultipleChildren,P as __namedExportsOrder,I as default};
//# sourceMappingURL=dropdown.stories-447bd751.js.map
