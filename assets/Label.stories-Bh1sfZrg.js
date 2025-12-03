import{j as e}from"./iframe-BY0Ds_wu.js";import{F as s}from"./Label-DCWLVuuJ.js";import"./preload-helper-D9Z9MdNV.js";const c={title:"ODE Library/Textfield/Label",tags:["autodocs"],component:s,argTypes:{$required:{description:"show pseudo element (*) when true"},children:{description:"a) other children content exclude text. b) should be phrasing_content [source: mdn] https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content, tags like h3 are not allowed."}}};function o({...t}){const{style:l,...n}=t;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7966-24427&t=zbZGBrco5ra09mre-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default label"}),e.jsx(s,{...n,text:t.text}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- label with style"}),e.jsx(s,{...t,text:t.text}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- label with other children"}),e.jsx(s,{...t,text:t.text,children:e.jsx("span",{style:{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)"},children:"10/30"})})]})}const r={render:o,args:{text:"Label Text",$required:!1,style:{width:500,outline:"1px solid red"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: LabelStory,
  args: {
    text: "Label Text",
    $required: false,
    style: {
      width: 500,
      outline: "1px solid red"
    }
  }
}`,...r.parameters?.docs?.source}}};const x=["FieldLabel"];export{r as FieldLabel,x as __namedExportsOrder,c as default};
