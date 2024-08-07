import{j as e}from"./jsx-runtime-94f6e698.js";import{r as T}from"./index-8db94870.js";import{E as L}from"./ErrorTip-e31bba40.js";import{F as _}from"./Label-1532c367.js";import{p as w}from"./styled-components.browser.esm-655d472d.js";import{t as q}from"./styles-bb32c2e8.js";import{D as F}from"./DmIcon20ErrorRed-e23ab48b.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconWarning-75f2a4c4.js";const s=T.forwardRef((r,d)=>{var y,g,b;const{hasError:p=!0,errorMessage:a,label:m="",labelProps:t,errorProps:n,$errorColor:c,...o}=r,u=(y=r.style)==null?void 0:y.width,f=(g=r.style)==null?void 0:g.minWidth,h=(b=r.style)==null?void 0:b.maxWidth;return e.jsxs(e.Fragment,{children:[e.jsxs(e.Fragment,{children:[e.jsx(_,{...t,text:m,style:{...P,width:u,minWidth:f,maxWidth:h,...t==null?void 0:t.style},$required:o.required}),e.jsx("br",{})]}),e.jsx(i,{autoComplete:"new-password",step:o.type==="number"?"any":o.step,...o,style:{...S,...o==null?void 0:o.style},$error:!!a,$errorColor:c,ref:d}),p&&e.jsx(L,{...n,style:{width:u,minWidth:f,maxWidth:h,...n==null?void 0:n.style},message:r.disabled?void 0:a,$errorColor:c})]})}),i=w.input`
  height: 44px;
  ${q}
  transition: border-color 0.2s ease, color 0.2s ease;
`,P={display:"inline-block",marginBottom:4},S={marginBottom:4};try{s.displayName="TextFrameSingleLine",s.__docgenInfo={description:"",displayName:"TextFrameSingleLine",props:{label:{defaultValue:null,description:"@description label text",name:"label",required:!1,type:{name:"string"}},$errorColor:{defaultValue:{value:"baseColor.Volcano5 `#EE8152`"},description:"@description override error color for border & icon",name:"$errorColor",required:!1,type:{name:"Color"}},hasError:{defaultValue:{value:"true"},description:"@description error tip block default owns 16px height; when set hasError to false, remove error tip block no matter if error message exists.",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"@description control input error style & display under input element",name:"errorMessage",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"@description override FieldLabel props",name:"labelProps",required:!1,type:{name:'(Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & { ...; })'}},errorProps:{defaultValue:null,description:"@description override ErrorTip props",name:"errorProps",required:!1,type:{name:'(Omit<ErrorTipProps, "ref"> & RefAttributes<HTMLParagraphElement>)'}}}}}catch{}try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const W={title:"ODE Library/Textfield/TextFrameSingleLine",tags:["autodocs"],component:s,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."}}};function v({...r}){const{labelProps:d,errorProps:p,errorMessage:a,style:m,...t}=r;return e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"- default component"}),e.jsx(s,{...t}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with error"}),e.jsx(s,{...t,errorMessage:a}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with other props"}),e.jsx(s,{...r})]})}const l={render:v,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,readOnly:!1,hasError:!0,label:"User name",style:{height:36,width:200},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:e.jsx(F,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};var x,E,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: InputStory,
  args: {
    errorMessage: "Name cannot be empty.",
    required: false,
    disabled: false,
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
}`,...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const A=["TextFrameSingleLine"];export{l as TextFrameSingleLine,A as __namedExportsOrder,W as default};
//# sourceMappingURL=TextFrameSingleLine.stories-525c7232.js.map
