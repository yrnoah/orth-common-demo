import{a as r,j as m,F as d}from"./jsx-runtime-a888423b.js";import{T as o}from"./TextFrameSingleLine-8b77c2bd.js";import{I as h}from"./DmIcon20ErrorRed-57d3ca4b.js";import{r as g}from"./index-8db94870.js";import"./ErrorTip-e59299f4.js";import"./styled-components.browser.esm-6dd904cc.js";import"./emotion-unitless.esm-acc3a66a.js";import"./IconWarning-93dbea1c.js";import"./Label-007705c7.js";import"./styles-27d1fda3.js";import"./_commonjsHelpers-042e6b4d.js";const q={title:"ODE Library/Textfield/TextFrameSingleLine",tags:["autodocs"],component:o,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function f({...n}){const{labelProps:u,errorProps:b,errorMessage:p,style:y,...t}=n,s=g.useRef(null);return m(d,{children:[r("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18042&t=zbZGBrco5ra09mre-4",rel:"noreferrer",children:"design reference"}),r("br",{}),r("br",{}),r("h4",{children:"- default component"}),r(o,{...t,ref:c=>{s.current=c,console.info("outer ref: ",s.current)}}),r("br",{}),r("br",{}),r("h4",{children:"- component with error"}),r(o,{...t,errorMessage:p}),r("br",{}),r("br",{}),r("h4",{children:"- component with other props"}),r(o,{...n})]})}const e={render:f,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,readOnly:!1,hasError:!0,label:"User name",style:{height:36,width:200},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:r(h,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const $=["TextFrameSingleLine"];export{e as TextFrameSingleLine,$ as __namedExportsOrder,q as default};
//# sourceMappingURL=TextFrameSingleLine.stories-21e6fa10.js.map
