import{j as v,F as q,a as r}from"./jsx-runtime-a888423b.js";import{r as m}from"./index-8db94870.js";import{E as V}from"./ErrorTip-e59299f4.js";import{F as W}from"./Label-007705c7.js";import{p as P}from"./styled-components.browser.esm-6dd904cc.js";import{t as H}from"./styles-27d1fda3.js";import{I as N}from"./DmIcon20ErrorRed-57d3ca4b.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconWarning-93dbea1c.js";import"./emotion-unitless.esm-acc3a66a.js";const n=m.forwardRef((e,o)=>{var x,M,C;const l=m.useRef(null),{showCount:c=!1,autoSelect:b=!1,hasError:s=!1,errorMessage:g,label:S="",labelProps:i,errorProps:d,$errorColor:y,...a}=e,[I,$]=m.useState(()=>{const t=e.value||e.defaultValue;return t?typeof t=="string"?t:typeof t=="number"?`${t}`:t.join(""):""}),_=I.length,u=((x=e.style)==null?void 0:x.width)??200,w=(M=e.style)==null?void 0:M.minWidth,E=(C=e.style)==null?void 0:C.maxWidth;return v(q,{children:[r(W,{...i,text:S,style:{...O,width:u,minWidth:w,maxWidth:E,...i==null?void 0:i.style},$required:a.required,children:c&&!!_&&r(h,{children:_})}),r(f,{autoComplete:"new-password",...a,style:{...j,width:u,...a==null?void 0:a.style},$error:!!g,$errorColor:y,onChange:t=>{$(t.target.value||""),e.onChange&&e.onChange(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),b&&l.current&&l.current.select()},ref:t=>{if(l.current=t,!!o){if(typeof o=="function"){o(t);return}"current"in o&&(o.current=t)}}}),s&&r(V,{...d,style:{width:u,minWidth:w,maxWidth:E,...d==null?void 0:d.style},message:e.disabled?void 0:g,$errorColor:y})]})}),f=P.textarea`
  height: 84px;
  resize: none;
  ${H}
  /* to fix browser bug margin bottom: https://bugs.webkit.org/show_bug.cgi?id=32731, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#baseline_inconsistency */
  vertical-align: bottom;
  padding-top: 11px;
  padding-bottom: 11px;
  transition: border-color 0.2s ease, color 0.2s ease;
`,O={display:"block",marginBottom:4},j={marginBottom:4},h=P.span`
  ${e=>e.theme.fonts["Caption-Large/Bold"]}
  color: ${e=>e.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;try{n.displayName="TextFrameMultipleLine",n.__docgenInfo={description:"",displayName:"TextFrameMultipleLine",props:{label:{defaultValue:null,description:"@description label text",name:"label",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"false"},description:"@description error tip block default owns 16px height; when set hasError to false, remove error tip block no matter if error message exists.",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"@description control input error style & display under input element",name:"errorMessage",required:!1,type:{name:"string"}},autoSelect:{defaultValue:{value:"false"},description:"@description will trigger input.select() when true",name:"autoSelect",required:!1,type:{name:"boolean"}},labelProps:{defaultValue:null,description:"@description override FieldLabel props",name:"labelProps",required:!1,type:{name:'Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & { ...; }'}},errorProps:{defaultValue:null,description:"@description override ErrorTip props",name:"errorProps",required:!1,type:{name:'Omit<ErrorTipProps, "ref"> & RefAttributes<HTMLParagraphElement>'}},$errorColor:{defaultValue:{value:"baseColor.Volcano5 `#EE8152`"},description:"@description override error color for border & icon",name:"$errorColor",required:!1,type:{name:"Color"}},showCount:{defaultValue:{value:"false"},description:"@description when true, display word counts on label.",name:"showCount",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}try{h.displayName="WordCounts",h.__docgenInfo={description:"",displayName:"WordCounts",props:{}}}catch{}const Q={title:"ODE Library/Textfield/TextFrameMultipleLine",tags:["autodocs"],component:n,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function k({...e}){const{labelProps:o,errorProps:l,errorMessage:c,style:b,...s}=e;return v(q,{children:[r("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18087&t=N8jQZoWKafMhXbWa-4",rel:"noreferrer",children:"design reference"}),r("br",{}),r("br",{}),r("h4",{children:"- default component"}),r(n,{...s}),r("br",{}),r("br",{}),r("h4",{children:"- component with error"}),r(n,{...s,errorMessage:c}),r("br",{}),r("br",{}),r("h4",{children:"- component with other props"}),r(n,{...e})]})}const p={render:k,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,showCount:!1,readOnly:!1,hasError:!1,label:"User name",style:{height:300,width:300,resize:"both"},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:r(N,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};var L,T,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(T=p.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const X=["TextFrameMultipleLine"];export{p as TextFrameMultipleLine,X as __namedExportsOrder,Q as default};
//# sourceMappingURL=TextFrameMultipleLine.stories-d86ec8e0.js.map
