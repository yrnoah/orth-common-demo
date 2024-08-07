import{j as e}from"./jsx-runtime-94f6e698.js";import{F as s}from"./Label-1532c367.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-components.browser.esm-655d472d.js";const m={title:"ODE Library/Textfield/Label",tags:["autodocs"],component:s,argTypes:{$required:{description:"show pseudo element (*) when true"},children:{description:"a) other children content exclude text. b) should be phrasing_content [source: mdn] https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content, tags like h3 are not allowed."}}};function a({...t}){const{style:d,...i}=t;return e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"- default label"}),e.jsx(s,{...i,text:t.text}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- label with style"}),e.jsx(s,{...t,text:t.text}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- label with other children"}),e.jsx(s,{...t,text:t.text,children:e.jsx("span",{style:{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)"},children:"10/30"})})]})}const r={render:a,args:{text:"Label Text",$required:!1,style:{width:500,outline:"1px solid red"}}};var n,o,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: LabelStory,
  args: {
    text: "Label Text",
    $required: false,
    style: {
      width: 500,
      outline: "1px solid red"
    }
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const u=["FieldLabel"];export{r as FieldLabel,u as __namedExportsOrder,m as default};
//# sourceMappingURL=Label.stories-e0e1f140.js.map
