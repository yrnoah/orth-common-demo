import{r as x,j as e,d as P}from"./iframe-AucjWJ36.js";import{E as C}from"./ErrorTip-D2oQAdq3.js";import{F as T}from"./Label-BAPk4OKl.js";import{W as S,t as M}from"./styles-CHsHN8Tj.js";import{S as F}from"./DmIcon20ErrorRed-CIzrw5aE.js";import"./preload-helper-D9Z9MdNV.js";import"./IconWarning-BpHkre3Q.js";const n=o=>{const i=x.useRef(null),{ref:t,showCount:p=!1,autoSelect:c=!1,hasError:a=!1,errorMessage:m,label:w="",labelProps:u,errorProps:f,$errorColor:h,...s}=o,[E,j]=x.useState(()=>{const r=o.value||o.defaultValue;return r?typeof r=="string"?r:typeof r=="number"?`${r}`:r.join(""):""}),g=E.length,d=o.style?.width??200,b=o.style?.minWidth,y=o.style?.maxWidth;return e.jsxs(e.Fragment,{children:[e.jsx(T,{...u,text:w,style:{...v,width:d,minWidth:b,maxWidth:y,...u?.style},$required:s.required,children:p&&!!g&&e.jsxs(S,{children:[g,s.maxLength?`/${s.maxLength}`:""]})}),e.jsx(q,{autoComplete:"new-password",...s,style:{...L,width:d,...s?.style},$error:!!m,$errorColor:h,onChange:r=>{j(r.target.value||""),o.onChange&&o.onChange(r)},onFocus:r=>{o.onFocus&&o.onFocus(r),c&&i.current&&i.current.select()},ref:r=>{if(i.current=r,!!t)if(typeof t=="function"){t(r);return}else t.current=r}}),a&&e.jsx(C,{...f,style:{width:d,minWidth:b,maxWidth:y,...f?.style},message:o.disabled?void 0:m,$errorColor:h})]})},q=P.textarea`
  height: 84px;
  resize: none;
  ${M}
  /* to fix browser bug margin bottom: https://bugs.webkit.org/show_bug.cgi?id=32731, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#baseline_inconsistency */
  vertical-align: bottom;
  padding-top: 11px;
  padding-bottom: 11px;
  transition: border-color 0.2s ease, color 0.2s ease;
`,v={display:"block",marginBottom:4},L={marginBottom:4};n.__docgenInfo={description:"@design https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18087&t=N8jQZoWKafMhXbWa-4",methods:[],displayName:"TextFrameMultipleLine",props:{showCount:{required:!1,tsType:{name:"boolean"},description:`@default false
@description when true, display word counts on label.`},errorMessage:{required:!1,tsType:{name:"string"},description:"@description control input error style & display under input element"},hasError:{required:!1,tsType:{name:"boolean"},description:`@default false
@description error tip block default owns 16px height; when set hasError to false, remove error tip block no matter if error message exists.`},autoSelect:{required:!1,tsType:{name:"boolean"},description:`@default false
@description will trigger input.select() when true`},label:{required:!1,tsType:{name:"string"},description:"@description label text"},labelProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"literal",value:'"label"'}],raw:'ComponentProps<"label">'},description:"@description override FieldLabel props"},errorProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"ErrorTip"}],raw:"ComponentProps<typeof ErrorTip>"},description:"@description override ErrorTip props"},$errorColor:{required:!1,tsType:{name:'ReactCSSProperties["color"]',raw:'React.CSSProperties["color"]'},description:"@default elementsHintWarning `#B76E15`\n@description override error color for border & icon"}},composes:["ComponentProps"]};const k={title:"ODE Library/Textfield/TextFrameMultipleLine",tags:["autodocs"],component:n,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function W({...o}){const{labelProps:i,errorProps:t,errorMessage:p,style:c,...a}=o;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18087&t=N8jQZoWKafMhXbWa-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default component"}),e.jsx(n,{...a}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with error"}),e.jsx(n,{...a,errorMessage:p}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with other props"}),e.jsx(n,{...o})]})}const l={render:W,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,showCount:!1,readOnly:!1,hasError:!1,label:"User name",style:{height:300,width:300,resize:"both"},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:e.jsx(F,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const B=["TextFrameMultipleLine"];export{l as TextFrameMultipleLine,B as __namedExportsOrder,k as default};
