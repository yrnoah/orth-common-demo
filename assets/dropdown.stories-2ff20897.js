import{a as r,F as k,j as n}from"./jsx-runtime-a888423b.js";import{r as o}from"./index-8db94870.js";import{B as b}from"./Dropdown-82bc9635.js";import{p as B}from"./styled-components.browser.esm-7ed061eb.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-components.browser.esm-6dd904cc.js";import"./emotion-unitless.esm-acc3a66a.js";import"./Portal-847ba74d.js";import"./index-8ce4a492.js";import"./useCurrent-3439251d.js";import"./useMeasure-2fb4c371.js";const $={title:"PAAS/Dropdown",tags:["autodocs"],component:b,argTypes:{children:{table:{disable:!0}}}};function M({...p}){const[u,t]=o.useState(!1),s=o.useRef(null),[i,a]=o.useState(3),h=o.useMemo(()=>r(k,{children:Array.from({length:i}).map((e,l)=>n(D,{children:["item ",l+1]},l))}),[i]),m=o.useCallback(()=>{a(e=>e+1),t(!1)},[]),g=o.useCallback(()=>{a(e=>Math.max(e-1,0)),t(!1)},[]),y=o.useCallback(e=>t(!!e),[]);return n("div",{style:{width:"80vw",height:"80vh",overflow:"scroll"},ref:s,children:[n("div",{style:{position:"absolute",top:0,right:0},children:[r("button",{onClick:m,style:{marginRight:8},children:"increase option"}),r("button",{onClick:g,children:"decrease option"})]}),r(b,{...p,visible:u,scrollRef:s,overlay:h,onVisibleChange:y,children:r("button",{onClick:()=>t(e=>!e),style:{margin:"50vh 60vw"},children:"trigger"})})]})}function R({...p}){const[u,t]=o.useState(!1),s=o.useRef(null),[i,a]=o.useState(3),h=o.useMemo(()=>r(k,{children:Array.from({length:i}).map((e,l)=>n(D,{children:["item ",l+1]},l))}),[i]),m=o.useCallback(()=>{a(e=>e+1),t(!1)},[]),g=o.useCallback(()=>{a(e=>Math.max(e-1,0)),t(!1)},[]),y=o.useCallback(e=>t(!!e),[]);return n("div",{style:{width:"80vw",height:"80vh",overflow:"scroll"},ref:s,children:[n("div",{style:{position:"absolute",top:0,right:0},children:[r("button",{onClick:m,style:{marginRight:8},children:"increase option"}),r("button",{onClick:g,children:"decrease option"})]}),n(b,{...p,visible:u,scrollRef:s,overlay:h,onVisibleChange:y,children:[r("button",{onClick:()=>t(e=>!e),children:"trigger"}),r("button",{onClick:()=>t(e=>!e),children:"trigger"})]})]})}const D=B.div`
  height: 32px;
  width: 200px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid grey;
`,c={render:M,args:{position:"auto",overlayContainerStyle:{outline:"1px solid red"}}},d={render:R,args:{style:{margin:"50vh 60vw"},position:"auto",overlayContainerStyle:{outline:"1px solid red"}}};var v,f,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: DropdownStory,
  args: {
    position: "auto",
    overlayContainerStyle: {
      outline: "1px solid red"
    }
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var w,x,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const q=["BaseDropdown","DropdownWithMultipleChildren"];export{c as BaseDropdown,d as DropdownWithMultipleChildren,q as __namedExportsOrder,$ as default};
//# sourceMappingURL=dropdown.stories-2ff20897.js.map
