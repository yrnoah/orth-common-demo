import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{E as F}from"./ErrorTip-2a6ec254.js";import{F as S}from"./Label-1532c367.js";import{p as q}from"./styled-components.browser.esm-655d472d.js";import{t as M}from"./styles-3988d2d4.js";import{D as P}from"./DmIcon20ErrorRed-e23ab48b.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconWarning-75f2a4c4.js";const n=m.forwardRef((r,s)=>{var E,j,w;const i=m.useRef(null),{hasError:u=!0,autoSelect:h=!1,errorMessage:a,label:d="",labelProps:o,errorProps:p,$errorColor:y,...t}=r,g=(E=r.style)==null?void 0:E.width,b=(j=r.style)==null?void 0:j.minWidth,x=(w=r.style)==null?void 0:w.maxWidth;return e.jsxs(e.Fragment,{children:[e.jsxs(e.Fragment,{children:[e.jsx(S,{...o,text:d,style:{...v,width:g,minWidth:b,maxWidth:x,...o==null?void 0:o.style},$required:t.required}),e.jsx("br",{})]}),e.jsx(f,{autoComplete:"new-password",step:t.type==="number"?"any":t.step,...t,style:{...V,...t==null?void 0:t.style},$error:!!a,$errorColor:y,onFocus:l=>{r.onFocus&&r.onFocus(l),h&&i.current&&i.current.select()},ref:l=>{if(i.current=l,!!s){if(typeof s=="function"){s(l);return}s.current=l}}}),u&&e.jsx(F,{...p,style:{width:g,minWidth:b,maxWidth:x,...p==null?void 0:p.style},message:r.disabled?void 0:a,$errorColor:y})]})}),f=q.input`
  height: 44px;
  ${M}
  transition: border-color 0.2s ease, color 0.2s ease;
`,v={display:"inline-block",marginBottom:4},V={marginBottom:4};try{n.displayName="TextFrameSingleLine",n.__docgenInfo={description:"",displayName:"TextFrameSingleLine",props:{label:{defaultValue:null,description:"@description label text",name:"label",required:!1,type:{name:"string"}},hasError:{defaultValue:{value:"true"},description:"@description error tip block default owns 16px height; when set hasError to false, remove error tip block no matter if error message exists.",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"@description control input error style & display under input element",name:"errorMessage",required:!1,type:{name:"string"}},autoSelect:{defaultValue:{value:"false"},description:"@description will trigger input.select() when true",name:"autoSelect",required:!1,type:{name:"boolean"}},labelProps:{defaultValue:null,description:"@description override FieldLabel props",name:"labelProps",required:!1,type:{name:'(Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & { ...; })'}},errorProps:{defaultValue:null,description:"@description override ErrorTip props",name:"errorProps",required:!1,type:{name:'(Omit<ErrorTipProps, "ref"> & RefAttributes<HTMLParagraphElement>)'}},$errorColor:{defaultValue:{value:"baseColor.Volcano5 `#EE8152`"},description:"@description override error color for border & icon",name:"$errorColor",required:!1,type:{name:"Color"}}}}}catch{}try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const k={title:"ODE Library/Textfield/TextFrameSingleLine",tags:["autodocs"],component:n,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function I({...r}){const{labelProps:s,errorProps:i,errorMessage:u,style:h,...a}=r,d=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18042&t=zbZGBrco5ra09mre-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default component"}),e.jsx(n,{...a,ref:o=>{d.current=o,console.log("outer ref: ",d.current)}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with error"}),e.jsx(n,{...a,errorMessage:u}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with other props"}),e.jsx(n,{...r})]})}const c={render:I,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,readOnly:!1,hasError:!0,label:"User name",style:{height:36,width:200},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:e.jsx(P,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};var T,L,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(L=c.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const A=["TextFrameSingleLine"];export{c as TextFrameSingleLine,A as __namedExportsOrder,k as default};
//# sourceMappingURL=TextFrameSingleLine.stories-bd6cc451.js.map
