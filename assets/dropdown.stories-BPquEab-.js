import{r as t,j as o,d as b}from"./iframe-D12yBJYT.js";import{B as x}from"./Dropdown-D5JwdULb.js";import"./preload-helper-D9Z9MdNV.js";import"./Portal-BcC3rkwp.js";import"./index-CLFaP9oP.js";import"./index-DihtluQp.js";import"./useCurrent-DBDDWVp7.js";import"./useMeasure-BC0zJ6WC.js";const M={title:"PAAS/Dropdown",tags:["autodocs"],component:x,argTypes:{children:{table:{disable:!0}}}};function v({...d}){const[p,s]=t.useState(!1),r=t.useRef(null),[n,i]=t.useState(3),u=t.useMemo(()=>o.jsx(o.Fragment,{children:Array.from({length:n}).map((e,l)=>o.jsxs(y,{children:["item ",l+1]},l))}),[n]),h=t.useCallback(()=>{i(e=>e+1),s(!1)},[]),m=t.useCallback(()=>{i(e=>Math.max(e-1,0)),s(!1)},[]),g=t.useCallback(e=>s(!!e),[]);return o.jsxs("div",{style:{width:"80vw",height:"80vh",overflow:"scroll"},ref:r,children:[o.jsxs("div",{style:{position:"absolute",top:0,right:0},children:[o.jsx("button",{onClick:h,style:{marginRight:8},children:"increase option"}),o.jsx("button",{onClick:m,children:"decrease option"})]}),o.jsx(x,{...d,visible:p,scrollRef:r,overlay:u,onVisibleChange:g,children:o.jsx("button",{onClick:()=>s(e=>!e),style:{margin:"50vh 60vw"},children:"trigger"})})]})}function C({...d}){const[p,s]=t.useState(!1),r=t.useRef(null),[n,i]=t.useState(3),u=t.useMemo(()=>o.jsx(o.Fragment,{children:Array.from({length:n}).map((e,l)=>o.jsxs(y,{children:["item ",l+1]},l))}),[n]),h=t.useCallback(()=>{i(e=>e+1),s(!1)},[]),m=t.useCallback(()=>{i(e=>Math.max(e-1,0)),s(!1)},[]),g=t.useCallback(e=>s(!!e),[]);return o.jsxs("div",{style:{width:"80vw",height:"80vh",overflow:"scroll"},ref:r,children:[o.jsxs("div",{style:{position:"absolute",top:0,right:0},children:[o.jsx("button",{onClick:h,style:{marginRight:8},children:"increase option"}),o.jsx("button",{onClick:m,children:"decrease option"})]}),o.jsxs(x,{...d,visible:p,scrollRef:r,overlay:u,onVisibleChange:g,children:[o.jsx("button",{onClick:()=>s(e=>!e),children:"trigger"}),o.jsx("button",{onClick:()=>s(e=>!e),children:"trigger"})]})]})}const y=b.div`
  height: 32px;
  width: 200px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid grey;
`,a={render:v,args:{position:"auto",overlayContainerStyle:{outline:"1px solid red"}}},c={render:C,args:{style:{margin:"50vh 60vw"},position:"auto",overlayContainerStyle:{outline:"1px solid red"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: DropdownStory,
  args: {
    position: "auto",
    overlayContainerStyle: {
      outline: "1px solid red"
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const A=["BaseDropdown","DropdownWithMultipleChildren"];export{a as BaseDropdown,c as DropdownWithMultipleChildren,A as __namedExportsOrder,M as default};
