import{r as l,j as o,d as h}from"./iframe-AucjWJ36.js";import{E as W}from"./ErrorTip-D2oQAdq3.js";import{F as j}from"./Label-BAPk4OKl.js";import{I as B}from"./IconButton-bqBj36BN.js";import{W as D,t as I}from"./styles-CHsHN8Tj.js";import{S as L}from"./IconClose-uw-4xgex.js";const c=24,k=e=>{const r=l.useRef(null),m=l.useRef(null),i=r.current?.getBoundingClientRect(),f=m.current?.getBoundingClientRect();let y=0;const g=r.current?.value?.length||0;i&&f&&(y=i.top-f.top+i.height*.5-c*.5);const[G,d]=l.useState(0);l.useEffect(function(){d(s=>s+1)},[]);const{ref:a,hasError:P=!0,autoSelect:$=!1,showCount:q=!1,errorMessage:w,label:x="",labelProps:S,errorProps:b,$errorColor:C,children:F,wrapperStyle:R,...n}=e,v=i?.width||e.style?.width,p=R?{...R}:{},T=e.style?.minWidth,E=e.style?.maxWidth;return typeof e.style?.width=="string"&&e.style.width.endsWith("%")&&(p.width=e.style.width),typeof e.style?.height=="string"&&e.style.height.endsWith("%")&&(p.height=e.style.height),o.jsxs(H,{ref:m,style:p,children:[!!x&&o.jsx(j,{htmlFor:n.id,...S,text:x,style:{...N,width:v,minWidth:T,maxWidth:E,...S?.style},$required:n.required,children:q&&!!g&&o.jsxs(D,{children:[g,n.maxLength?`/${n.maxLength}`:""]})}),o.jsx(_,{autoComplete:"new-password",step:n.type==="number"?"any":n.step,...n,style:{...z,...n?.style},$error:!!w,$errorColor:C,onFocus:t=>{e.onFocus&&e.onFocus(t),$&&r.current&&r.current.select()},onChange:t=>{d(s=>s+1),e.onChange&&e.onChange(t)},ref:t=>{if(r.current=t,!!a)if(typeof a=="function"){a(t);return}else a.current=t}}),!!r.current?.value&&!n.disabled&&!n.readOnly&&!!i&&o.jsx(u,{style:{top:y},onClick:()=>{const t=new Event("onChange",{bubbles:!0});r.current&&(r.current.value="",r.current.dispatchEvent(t),r.current.focus()),t.target&&e.onChange?.(t),d(s=>s+1)},children:o.jsx(L,{width:16,height:16})}),P&&o.jsx(W,{...b,style:{width:v,minWidth:T,maxWidth:E,...b?.style},message:e.disabled?void 0:w,$errorColor:C}),F]})},_=h.input`
  height: 48px;
  ${I}
  padding-right: ${c+12}px;
  transition: border-color ${e=>e.theme.animation.duration},
    color ${e=>e.theme.animation.duration};
`,u=h(B)`
  position: absolute;
  padding: 0;
  width: ${c}px;
  height: ${c}px;
  right: 12px;
  z-index: 1;
  transition: ${e=>e.theme.animation.duration};
`,H=h.div`
  width: max-content;
  height: max-content;
  position: relative;

  ${u} {
    opacity: 0;
  }

  &:hover {
    ${u} {
      opacity: 1;
    }
  }
`,N={display:"block",marginBottom:4},z={marginBottom:4};k.__docgenInfo={description:"@design Default-1 https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1349-3204&t=tmvUVv5e5pwOmYZn-4",methods:[],displayName:"TextFieldDefault",props:{errorMessage:{required:!1,tsType:{name:"string"},description:"@description control input error style & display under input element"},hasError:{required:!1,tsType:{name:"boolean"},description:`@default true
@description error tip block default owns 16px height; when set hasError to false, remove error tip block no matter if error message exists.`},autoSelect:{required:!1,tsType:{name:"boolean"},description:`@default false
@description will trigger input.select() when true`},label:{required:!1,tsType:{name:"string"},description:"@description label text"},labelProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"literal",value:'"label"'}],raw:'ComponentProps<"label">'},description:"@description override FieldLabel props"},errorProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"ErrorTip"}],raw:"ComponentProps<typeof ErrorTip>"},description:"@description override ErrorTip props"},$errorColor:{required:!1,tsType:{name:'ReactCSSProperties["color"]',raw:'React.CSSProperties["color"]'},description:"@default elementsHintWarning `#B76E15`\n@description override error color for border & icon"},wrapperStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description component wrapper style"},showCount:{required:!1,tsType:{name:"boolean"},description:`@default false
@description when true, display word counts on label.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"@description custom components' slot, will insert to wrapper at the end"}},composes:["ComponentProps"]};export{k as T};
