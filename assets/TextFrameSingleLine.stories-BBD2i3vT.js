import{j as r,r as l}from"./iframe-D12yBJYT.js";import{T as o}from"./TextFrameSingleLine-D3X1b71e.js";import{S as p}from"./DmIcon20ErrorRed-j68UbIYn.js";import"./preload-helper-D9Z9MdNV.js";import"./ErrorTip-BJ6zSHkg.js";import"./IconWarning-BYWa4H6F.js";import"./Label-BQEWlu5n.js";import"./styles-wacdRwg_.js";const S={title:"ODE Library/Textfield/TextFrameSingleLine",tags:["autodocs"],component:o,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function c({...n}){const{labelProps:m,errorProps:d,errorMessage:a,style:h,...t}=n,s=l.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18042&t=zbZGBrco5ra09mre-4",rel:"noreferrer",children:"design reference"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- default component"}),r.jsx(o,{...t,ref:i=>{s.current=i,console.info("outer ref: ",s.current)}}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- component with error"}),r.jsx(o,{...t,errorMessage:a}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- component with other props"}),r.jsx(o,{...n})]})}const e={render:c,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,readOnly:!1,hasError:!0,label:"User name",style:{height:36,width:200},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:r.jsx(p,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: InputStory,
  args: {
    errorMessage: "Name cannot be empty.",
    required: false,
    disabled: false,
    autoSelect: false,
    readOnly: false,
    hasError: true,
    label: "User name",
    style: {
      height: 36,
      width: 200
    },
    labelProps: {
      style: {
        marginBottom: 4
      }
    },
    errorProps: {
      style: {
        minHeight: 16,
        color: "red"
      },
      icon: <IconError width={12} height={12} color="green" />
    },
    $errorColor: "#EE8152",
    placeholder: "Please input"
  }
}`,...e.parameters?.docs?.source}}};const w=["TextFrameSingleLine"];export{e as TextFrameSingleLine,w as __namedExportsOrder,S as default};
