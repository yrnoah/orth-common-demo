import{j as e}from"./jsx-runtime-94f6e698.js";import{r as T}from"./index-8db94870.js";import{E as V}from"./ErrorTip-e31bba40.js";import{F}from"./Label-1532c367.js";import{p as q}from"./styled-components.browser.esm-655d472d.js";import{t as P}from"./styles-bb32c2e8.js";import{D as I}from"./DmIcon20ErrorRed-e23ab48b.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconWarning-75f2a4c4.js";const o=T.forwardRef((r,f)=>{var _,E,w;const{showCount:h=!1,hasError:d=!1,errorMessage:p,label:n="",labelProps:s,errorProps:l,$errorColor:y,...a}=r,[v,M]=T.useState(()=>{const t=r.value||r.defaultValue;return t?typeof t=="string"?t:typeof t=="number"?`${t}`:t.join(""):""}),g=v.length,u=((_=r.style)==null?void 0:_.width)??200,b=(E=r.style)==null?void 0:E.minWidth,x=(w=r.style)==null?void 0:w.maxWidth;return e.jsxs(e.Fragment,{children:[e.jsxs(e.Fragment,{children:[e.jsx(F,{...s,text:n,style:{...$,width:u,minWidth:b,maxWidth:x,...s==null?void 0:s.style},$required:a.required,children:h&&!!g&&e.jsx(c,{children:g})}),e.jsx("br",{})]}),e.jsx(m,{autoComplete:"new-password",...a,style:{...W,width:u,...a==null?void 0:a.style},$error:!!p,$errorColor:y,onChange:t=>{M(t.target.value||""),r.onChange&&r.onChange(t)},ref:f}),d&&e.jsx(V,{...l,style:{width:u,minWidth:b,maxWidth:x,...l==null?void 0:l.style},message:r.disabled?void 0:p,$errorColor:y})]})}),m=q.textarea`
  height: 84px;
  resize: none;
  ${P}
  transition: border-color 0.2s ease, color 0.2s ease;
`,$={display:"inline-block",marginBottom:4},W={marginBottom:4},c=q.span`
  ${r=>r.theme.fonts["Caption-Large/Bold"]}
  color: ${r=>r.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;try{o.displayName="TextFrameMultipleLine",o.__docgenInfo={description:"",displayName:"TextFrameMultipleLine",props:{label:{defaultValue:null,description:"@description label text",name:"label",required:!1,type:{name:"string"}},$errorColor:{defaultValue:{value:"baseColor.Volcano5 `#EE8152`"},description:"@description override error color for border & icon",name:"$errorColor",required:!1,type:{name:"Color"}},hasError:{defaultValue:{value:"false"},description:"@description error tip block default owns 16px height; when set hasError to false, remove error tip block no matter if error message exists.",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"@description control input error style & display under input element",name:"errorMessage",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"@description override FieldLabel props",name:"labelProps",required:!1,type:{name:'(Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & { ...; })'}},errorProps:{defaultValue:null,description:"@description override ErrorTip props",name:"errorProps",required:!1,type:{name:'(Omit<ErrorTipProps, "ref"> & RefAttributes<HTMLParagraphElement>)'}},showCount:{defaultValue:{value:"false"},description:"@description when true, display word counts on label.",name:"showCount",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="Input",m.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="WordCounts",c.__docgenInfo={description:"",displayName:"WordCounts",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U={title:"ODE Library/Textfield/TextFrameMultipleLine",tags:["autodocs"],component:o,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."}}};function D({...r}){const{labelProps:f,errorProps:h,errorMessage:d,style:p,...n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"- default component"}),e.jsx(o,{...n}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with error"}),e.jsx(o,{...n,errorMessage:d}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with other props"}),e.jsx(o,{...r})]})}const i={render:D,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,showCount:!1,readOnly:!1,hasError:!1,label:"User name",style:{height:300,width:300,resize:"both"},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:e.jsx(I,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};var j,C,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: InputStory,
  args: {
    errorMessage: "Name cannot be empty.",
    required: false,
    disabled: false,
    showCount: false,
    readOnly: false,
    hasError: false,
    label: "User name",
    style: {
      height: 300,
      width: 300,
      resize: "both"
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
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const Y=["TextFrameMultipleLine"];export{i as TextFrameMultipleLine,Y as __namedExportsOrder,U as default};
//# sourceMappingURL=TextFrameMultipleLine.stories-0d910fb6.js.map
