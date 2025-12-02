import{r as t,j as e,d as v}from"./iframe-AucjWJ36.js";import{B as x}from"./Dropdown-CWIma2Q5.js";import"./preload-helper-D9Z9MdNV.js";import"./Portal-Cf1ZhHdQ.js";import"./index-DDbPfvBX.js";import"./index-CIZEOwdE.js";import"./useCurrent-Bts7HZnN.js";import"./useMeasure-DDH6vtW2.js";const M={title:"PAAS/Dropdown",tags:["autodocs"],component:x,argTypes:{children:{table:{disable:!0}}}};function b({...d}){const[p,s]=t.useState(!1),r=t.useRef(null),[n,i]=t.useState(3),h=t.useMemo(()=>e.jsx(e.Fragment,{children:Array.from({length:n}).map((o,l)=>e.jsxs(y,{children:["item ",l+1]},l))}),[n]),u=t.useCallback(()=>{i(o=>o+1),s(!1)},[]),m=t.useCallback(()=>{i(o=>Math.max(o-1,0)),s(!1)},[]),g=t.useCallback(o=>s(!!o),[]);return e.jsxs("div",{style:{width:"95vw",height:"95vh",overflow:"scroll"},ref:r,children:[e.jsxs("div",{style:{position:"absolute",top:0,right:0},children:[e.jsx("button",{onClick:u,style:{marginRight:8},children:"increase option"}),e.jsx("button",{onClick:m,children:"decrease option"})]}),e.jsx("div",{style:{height:"85vh"}}),e.jsx(x,{...d,visible:p,scrollRef:r,overlay:h,onVisibleChange:g,children:e.jsx("button",{onClick:()=>s(o=>!o),style:{margin:"0 80vw"},children:"trigger"})}),e.jsx("div",{style:{height:"90vh"}})]})}function C({...d}){const[p,s]=t.useState(!1),r=t.useRef(null),[n,i]=t.useState(3),h=t.useMemo(()=>e.jsx(e.Fragment,{children:Array.from({length:n}).map((o,l)=>e.jsxs(y,{children:["item ",l+1]},l))}),[n]),u=t.useCallback(()=>{i(o=>o+1),s(!1)},[]),m=t.useCallback(()=>{i(o=>Math.max(o-1,0)),s(!1)},[]),g=t.useCallback(o=>s(!!o),[]);return e.jsxs("div",{style:{width:"80vw",height:"80vh",overflow:"scroll"},ref:r,children:[e.jsxs("div",{style:{position:"absolute",top:0,right:0},children:[e.jsx("button",{onClick:u,style:{marginRight:8},children:"increase option"}),e.jsx("button",{onClick:m,children:"decrease option"})]}),e.jsxs(x,{...d,visible:p,scrollRef:r,overlay:h,onVisibleChange:g,children:[e.jsx("button",{onClick:()=>s(o=>!o),children:"trigger"}),e.jsx("button",{onClick:()=>s(o=>!o),children:"trigger"})]})]})}const y=v.div`
  height: 32px;
  width: 200px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid grey;
`,a={render:b,args:{position:"auto",overlayContainerStyle:{outline:"1px solid red"}}},c={render:C,args:{style:{margin:"50vh 60vw"},position:"auto",overlayContainerStyle:{outline:"1px solid red"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
