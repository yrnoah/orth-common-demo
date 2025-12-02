import{j as e}from"./iframe-AucjWJ36.js";import{S as t}from"./Trigger-y1dD2J64.js";import"./preload-helper-D9Z9MdNV.js";import"./IconArrowSm-v_mKIz_o.js";const h={title:"ODE Library/Selection/Trigger",tags:["autodocs"],component:t,argTypes:{children:{table:{disable:!0}},$size:{control:"select",options:["small","medium"]}}};function l({...n}){const{style:i,...s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=5528-41514&t=J9rabVBDwI2Vbsh4-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default trigger"}),e.jsx("br",{}),e.jsx(t,{...s,$open:void 0}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- trigger width style: width: 200, height: 50"}),e.jsx("br",{}),e.jsx(t,{...s,style:i}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- trigger with children node"}),e.jsx("h5",{children:"- Slot for custom nodes, usually use $text will be fine. <br /> - String type children with `TextContainer` has conflict with $text, so it's blocked when $text exists."}),e.jsx("br",{}),e.jsx(t,{...s,style:i,children:e.jsx("h5",{children:"some other nodes"})})]})}const r={render:l,args:{$size:"small",$placeholder:"default label",$text:"Trigger label",$open:!1,disabled:!1,style:{width:"50vw",height:50}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: TriggerStory,
  args: {
    $size: "small",
    $placeholder: "default label",
    $text: "Trigger label",
    $open: false,
    disabled: false,
    style: {
      width: "50vw",
      height: 50
    }
  }
}`,...r.parameters?.docs?.source}}};const g=["SelectionTrigger"];export{r as SelectionTrigger,g as __namedExportsOrder,h as default};
