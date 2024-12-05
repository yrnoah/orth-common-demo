import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{E as P}from"./ErrorTip-f902492c.js";import{F as S}from"./Label-1532c367.js";import{p as q}from"./styled-components.browser.esm-655d472d.js";import{t as W}from"./styles-5c0f67c2.js";import{D as $}from"./DmIcon20ErrorRed-e23ab48b.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconWarning-75f2a4c4.js";const a=m.forwardRef((r,o)=>{var E,j,T;const s=m.useRef(null),{showCount:p=!1,autoSelect:g=!1,hasError:l=!1,errorMessage:b,label:v="",labelProps:i,errorProps:d,$errorColor:y,...n}=r,[F,V]=m.useState(()=>{const t=r.value||r.defaultValue;return t?typeof t=="string"?t:typeof t=="number"?`${t}`:t.join(""):""}),x=F.length,c=((E=r.style)==null?void 0:E.width)??200,w=(j=r.style)==null?void 0:j.minWidth,_=(T=r.style)==null?void 0:T.maxWidth;return e.jsxs(e.Fragment,{children:[e.jsx(S,{...i,text:v,style:{...I,width:c,minWidth:w,maxWidth:_,...i==null?void 0:i.style},$required:n.required,children:p&&!!x&&e.jsx(h,{children:x})}),e.jsx(f,{autoComplete:"new-password",...n,style:{...D,width:c,...n==null?void 0:n.style},$error:!!b,$errorColor:y,onChange:t=>{V(t.target.value||""),r.onChange&&r.onChange(t)},onFocus:t=>{r.onFocus&&r.onFocus(t),g&&s.current&&s.current.select()},ref:t=>{if(s.current=t,!!o){if(typeof o=="function"){o(t);return}"current"in o&&(o.current=t)}}}),l&&e.jsx(P,{...d,style:{width:c,minWidth:w,maxWidth:_,...d==null?void 0:d.style},message:r.disabled?void 0:b,$errorColor:y})]})}),f=q.textarea`
  height: 84px;
  resize: none;
  ${W}
  /* to fix browser bug margin bottom: https://bugs.webkit.org/show_bug.cgi?id=32731, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#baseline_inconsistency */
  vertical-align: bottom;
  padding-top: 11px;
  padding-bottom: 11px;
  transition: border-color 0.2s ease, color 0.2s ease;
`,I={display:"block",marginBottom:4},D={marginBottom:4},h=q.span`
  ${r=>r.theme.fonts["Caption-Large/Bold"]}
  color: ${r=>r.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;try{a.displayName="TextFrameMultipleLine",a.__docgenInfo={description:"",displayName:"TextFrameMultipleLine",props:{label:{defaultValue:null,description:"@description label text",name:"label",required:!1,type:{name:"string"}},$errorColor:{defaultValue:{value:"baseColor.Volcano5 `#EE8152`"},description:"@description override error color for border & icon",name:"$errorColor",required:!1,type:{name:"Color"}},hasError:{defaultValue:{value:"false"},description:"@description error tip block default owns 16px height; when set hasError to false, remove error tip block no matter if error message exists.",name:"hasError",required:!1,type:{name:"boolean"}},showCount:{defaultValue:{value:"false"},description:"@description when true, display word counts on label.",name:"showCount",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"@description control input error style & display under input element",name:"errorMessage",required:!1,type:{name:"string"}},autoSelect:{defaultValue:{value:"false"},description:"@description will trigger input.select() when true",name:"autoSelect",required:!1,type:{name:"boolean"}},labelProps:{defaultValue:null,description:"@description override FieldLabel props",name:"labelProps",required:!1,type:{name:'(Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & { ...; })'}},errorProps:{defaultValue:null,description:"@description override ErrorTip props",name:"errorProps",required:!1,type:{name:'(Omit<ErrorTipProps, "ref"> & RefAttributes<HTMLParagraphElement>)'}}}}}catch{}try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="WordCounts",h.__docgenInfo={description:"",displayName:"WordCounts",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const G={title:"ODE Library/Textfield/TextFrameMultipleLine",tags:["autodocs"],component:a,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function H({...r}){const{labelProps:o,errorProps:s,errorMessage:p,style:g,...l}=r;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18087&t=N8jQZoWKafMhXbWa-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default component"}),e.jsx(a,{...l}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with error"}),e.jsx(a,{...l,errorMessage:p}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with other props"}),e.jsx(a,{...r})]})}const u={render:H,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,showCount:!1,readOnly:!1,hasError:!1,label:"User name",style:{height:300,width:300,resize:"both"},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:e.jsx($,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};var M,C,L;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: InputStory,
  args: {
    errorMessage: "Name cannot be empty.",
    required: false,
    disabled: false,
    autoSelect: false,
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
}`,...(L=(C=u.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const J=["TextFrameMultipleLine"];export{u as TextFrameMultipleLine,J as __namedExportsOrder,G as default};
//# sourceMappingURL=TextFrameMultipleLine.stories-5eb4a5db.js.map
