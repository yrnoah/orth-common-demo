import{r as x,j as e,d as w}from"./iframe-D12yBJYT.js";import{E as P}from"./ErrorTip-BJ6zSHkg.js";import{F as T}from"./Label-BQEWlu5n.js";import{t as S}from"./styles-wacdRwg_.js";import{S as M}from"./DmIcon20ErrorRed-j68UbIYn.js";import"./preload-helper-D9Z9MdNV.js";import"./IconWarning-BYWa4H6F.js";const s=r=>{const n=x.useRef(null),{ref:t,showCount:l=!1,autoSelect:c=!1,hasError:i=!1,errorMessage:m,label:E="",labelProps:u,errorProps:f,$errorColor:h,...p}=r,[j,C]=x.useState(()=>{const o=r.value||r.defaultValue;return o?typeof o=="string"?o:typeof o=="number"?`${o}`:o.join(""):""}),b=j.length,d=r.style?.width??200,g=r.style?.minWidth,y=r.style?.maxWidth;return e.jsxs(e.Fragment,{children:[e.jsx(T,{...u,text:E,style:{...q,width:d,minWidth:g,maxWidth:y,...u?.style},$required:p.required,children:l&&!!b&&e.jsx(L,{children:b})}),e.jsx(F,{autoComplete:"new-password",...p,style:{...v,width:d,...p?.style},$error:!!m,$errorColor:h,onChange:o=>{C(o.target.value||""),r.onChange&&r.onChange(o)},onFocus:o=>{r.onFocus&&r.onFocus(o),c&&n.current&&n.current.select()},ref:o=>{if(n.current=o,!!t)if(typeof t=="function"){t(o);return}else t.current=o}}),i&&e.jsx(P,{...f,style:{width:d,minWidth:g,maxWidth:y,...f?.style},message:r.disabled?void 0:m,$errorColor:h})]})},F=w.textarea`
  height: 84px;
  resize: none;
  ${S}
  /* to fix browser bug margin bottom: https://bugs.webkit.org/show_bug.cgi?id=32731, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#baseline_inconsistency */
  vertical-align: bottom;
  padding-top: 11px;
  padding-bottom: 11px;
  transition: border-color 0.2s ease, color 0.2s ease;
`,q={display:"block",marginBottom:4},v={marginBottom:4},L=w.span`
  ${r=>r.theme.fonts["Caption-Large/Bold"]}
  color: ${r=>r.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;s.__docgenInfo={description:"@design https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18087&t=N8jQZoWKafMhXbWa-4",methods:[],displayName:"TextFrameMultipleLine",props:{showCount:{required:!1,tsType:{name:"boolean"},description:`@default false
@description when true, display word counts on label.`},errorMessage:{required:!1,tsType:{name:"string"},description:"@description control input error style & display under input element"},hasError:{required:!1,tsType:{name:"boolean"},description:`@default false
@description error tip block default owns 16px height; when set hasError to false, remove error tip block no matter if error message exists.`},autoSelect:{required:!1,tsType:{name:"boolean"},description:`@default false
@description will trigger input.select() when true`},label:{required:!1,tsType:{name:"string"},description:"@description label text"},labelProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"literal",value:'"label"'}],raw:'ComponentProps<"label">'},description:"@description override FieldLabel props"},errorProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"ErrorTip"}],raw:"ComponentProps<typeof ErrorTip>"},description:"@description override ErrorTip props"},$errorColor:{required:!1,tsType:{name:'ReactCSSProperties["color"]',raw:'React.CSSProperties["color"]'},description:"@default baseColor.Volcano5 `#EE8152`\n@description override error color for border & icon"}},composes:["ComponentProps"]};const B={title:"ODE Library/Textfield/TextFrameMultipleLine",tags:["autodocs"],component:s,argTypes:{required:{description:"input common param, display * when label exists."},labelProps:{description:"override FieldLabel props."},errorProps:{description:"override ErrorTip props."},$errorColor:{control:{type:"color"}}}};function $({...r}){const{labelProps:n,errorProps:t,errorMessage:l,style:c,...i}=r;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7870-18087&t=N8jQZoWKafMhXbWa-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default component"}),e.jsx(s,{...i}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with error"}),e.jsx(s,{...i,errorMessage:l}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- component with other props"}),e.jsx(s,{...r})]})}const a={render:$,args:{errorMessage:"Name cannot be empty.",required:!1,disabled:!1,autoSelect:!1,showCount:!1,readOnly:!1,hasError:!1,label:"User name",style:{height:300,width:300,resize:"both"},labelProps:{style:{marginBottom:4}},errorProps:{style:{minHeight:16,color:"red"},icon:e.jsx(M,{width:12,height:12,color:"green"})},$errorColor:"#EE8152",placeholder:"Please input"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const H=["TextFrameMultipleLine"];export{a as TextFrameMultipleLine,H as __namedExportsOrder,B as default};
