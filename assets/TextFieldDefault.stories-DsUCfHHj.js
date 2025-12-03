import{j as e,r as l}from"./iframe-BY0Ds_wu.js";import{S as d}from"./DmIcon20ErrorRed-XMZBiEmx.js";import{T as t}from"./TextFieldDefault-C0GY-dvf.js";import"./preload-helper-D9Z9MdNV.js";import"./ErrorTip-BwmSfvSE.js";import"./IconWarning-C4uXhNFZ.js";import"./Label-DCWLVuuJ.js";import"./IconButton-B0QxEmQa.js";import"./Portal-CsufOtEp.js";import"./index-1WFH_otD.js";import"./index-jXhlw_Vl.js";import"./Tooltip-BVq8jL3O.js";import"./TooltipPoint-CBgdh05o.js";import"./useRefreshPosition-DM-1Nh4A.js";import"./styles-DmNQvTDp.js";import"./IconClose-CRaMrq-t.js";const O={title:"ODE Library/Textfield/TextFieldDefault",tags:["autodocs"],component:t,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function c({...n}){const{labelProps:h,errorProps:u,errorMessage:i,style:x,...s}=n,a=l.useRef(null),[p,m]=l.useState("");return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1349-3204&t=tmvUVv5e5pwOmYZn-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default component"}),e.jsx("br",{}),e.jsx(t,{...s,id:"default_component",ref:r=>{a.current=r,console.info("outer ref: ",a.current)},value:p,onChange:r=>{console.log("onChange",r,r.target.value),m(r.target.value||"")}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with error"}),e.jsx("br",{}),e.jsx(t,{...s,id:"component_with_error",errorMessage:i}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with other props"}),e.jsx("br",{}),e.jsx(t,{...n,id:"component_with_other_props"})]})}const o={render:c,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,readOnly:!1,hasError:!0,label:"User name",style:{height:36,width:200},maxLength:50,labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:e.jsx(d,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    maxLength: 50,
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
}`,...o.parameters?.docs?.source}}};const q=["TextFieldDefault"];export{o as TextFieldDefault,q as __namedExportsOrder,O as default};
