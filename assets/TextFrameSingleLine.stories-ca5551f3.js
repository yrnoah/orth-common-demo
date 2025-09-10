import{j as r}from"./jsx-runtime-94f6e698.js";import{T as o}from"./TextFrameSingleLine-d92e5e95.js";import{I as m}from"./DmIcon20ErrorRed-3483a997.js";import{r as d}from"./index-8db94870.js";import"./ErrorTip-557d4d7f.js";import"./styled-components.browser.esm-6dd904cc.js";import"./emotion-unitless.esm-acc3a66a.js";import"./IconWarning-75f2a4c4.js";import"./Label-66f79118.js";import"./styles-27d1fda3.js";import"./_commonjsHelpers-042e6b4d.js";const M={title:"ODE Library/Textfield/TextFrameSingleLine",tags:["autodocs"],component:o,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function h({...n}){const{labelProps:g,errorProps:u,errorMessage:p,style:x,...t}=n,s=d.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18042&t=zbZGBrco5ra09mre-4",rel:"noreferrer",children:"design reference"}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- default component"}),r.jsx(o,{...t,ref:c=>{s.current=c,console.info("outer ref: ",s.current)}}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- component with error"}),r.jsx(o,{...t,errorMessage:p}),r.jsx("br",{}),r.jsx("br",{}),r.jsx("h4",{children:"- component with other props"}),r.jsx(o,{...n})]})}const e={render:h,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,readOnly:!1,hasError:!0,label:"User name",style:{height:36,width:200},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:r.jsx(m,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["TextFrameSingleLine"];export{e as TextFrameSingleLine,I as __namedExportsOrder,M as default};
//# sourceMappingURL=TextFrameSingleLine.stories-ca5551f3.js.map
