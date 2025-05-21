import{j as r}from"./jsx-runtime-94f6e698.js";import{T as o}from"./TextFrameSingleLine-c535846b.js";import{D as m}from"./DmIcon20ErrorRed-e23ab48b.js";import{r as d}from"./index-8db94870.js";import"./ErrorTip-2a6ec254.js";import"./styled-components.browser.esm-655d472d.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconWarning-75f2a4c4.js";import"./Label-1532c367.js";import"./styles-5c0f67c2.js";const L={title:"ODE Library/Textfield/TextFrameSingleLine",tags:["autodocs"],component:o,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function h({...n}){const{labelProps:g,errorProps:u,errorMessage:p,style:x,...t}=n,s=d.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18042&t=zbZGBrco5ra09mre-4",rel:"noreferrer",children:"design reference"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- default component"}),r.jsx(o,{...t,ref:c=>{s.current=c,console.info("outer ref: ",s.current)}}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- component with error"}),r.jsx(o,{...t,errorMessage:p}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- component with other props"}),r.jsx(o,{...n})]})}const e={render:h,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,readOnly:!1,hasError:!0,label:"User name",style:{height:36,width:200},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:r.jsx(m,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const M=["TextFrameSingleLine"];export{e as TextFrameSingleLine,M as __namedExportsOrder,L as default};
//# sourceMappingURL=TextFrameSingleLine.stories-7770ca66.js.map
