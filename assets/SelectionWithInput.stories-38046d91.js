import{j as e}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{f as A}from"./component-afc23ed8.js";import{i as K}from"./keyCode-5935525e.js";import{B as Q}from"./Dropdown-c607c77d.js";import{d as Y,O as G,a as J,b as U,c as C}from"./Overlay-4368eb9c.js";import{T as X,I as Z,a as P}from"./Trigger-0a83f0a2.js";import{p as F}from"./styled-components.browser.esm-655d472d.js";import"./_commonjsHelpers-042e6b4d.js";import"./Portal-2b207d51.js";import"./index-8ce4a492.js";import"./useCurrent-3439251d.js";import"./useEffectOnce-838fab99.js";import"./util-051783c3.js";import"./useMeasure-361079ab.js";import"./IconCheckSmall-4add6247.js";import"./IconArrowSm-8c383373.js";const c=(l,a)=>{var j,V,O;const{defaultOpen:m,dropdownConfig:d,onSelectChange:o,options:p,selected:g,resetText:R,_ref:L,inputProps:i,...s}=l,[y,D]=u.useState(Y),[x,h]=u.useState(()=>!!m),[_,w]=u.useState(!1),[$,v]=u.useState(g||null),r=typeof g=="string"?g:$,f=u.useMemo(()=>typeof r!="string"||!p?null:p.find(n=>n.key===r)||null,[r,p]),E=u.useMemo(()=>p?_&&r!=null&&r.length?p.filter(t=>!!(t.key.match(r)||t.text&&t.text.toLowerCase().match(r.toLowerCase()))):p:[],[p,_,r]),H=u.useMemo(()=>({...(d==null?void 0:d.overlayContainerStyle)||{},width:y.width}),[y.width,d==null?void 0:d.overlayContainerStyle]),B=t=>{t||(o==null||o($,"select"),w(!1)),h(t)},N=u.useCallback(t=>{t.target.tagName!=="INPUT"&&(s.disabled||h(n=>!n))},[s.disabled]),S=!!s.disabled,z=u.useCallback(t=>{if(h(!1),w(!1),S)return;if(!t){o&&o(null,"select"),v(null);return}const n=t;n.key!==r&&(o&&o(n,"select"),v(n.key))},[o,S,r]);let W=(f==null?void 0:f.text)??(f==null?void 0:f.key)??r??g??void 0;return(j=s.style)!=null&&j.position&&((V=s.style)==null||delete V.position),e.jsx(Q,{disableAnimation:!0,...d,visible:x,overlayContainerStyle:H,onVisibleChange:B,overlay:e.jsx(G,{options:E,disabled:S,onSelect:z,selected:r,resetText:R,visible:x}),children:e.jsxs(te,{$width:(O=s.style)==null?void 0:O.width,children:[e.jsx(ee,{...s,$open:x,onClick:N,ref:t=>{if(!t)return;const n=t.getBoundingClientRect(),T={width:n.width||J,height:n.height||U};(T.width!==y.width||T.height!==y.height)&&D(T),C(t,L),C(t,a)},children:e.jsx(X,{})}),e.jsx(Z,{...i,disabled:s.disabled||(i==null?void 0:i.disabled),readOnly:s.disabled||(i==null?void 0:i.readOnly),type:"text",value:x?r||"":W||"",placeholder:s.$placeholder,onFocus:t=>{var n;(n=i==null?void 0:i.onFocus)==null||n.call(i,t),w(!0),h(!0)},onChange:t=>{const n=t.target.value||"";o&&o(n||null,"input"),v(n||null)},onKeyDown:t=>{var n;(n=i==null?void 0:i.onKeyDown)==null||n.call(i,t),K(t)&&(t.currentTarget.blur(),h(!1),w(!1))}})]})})},q=A(c),ee=F(P)`
  width: 100%;
`,te=F.div`
  position: relative;
  width: 100%;

  ${({$width:l})=>l?{width:l}:void 0}
`;try{c.displayName="SelectFilterInput",c.__docgenInfo={description:"",displayName:"SelectFilterInput",props:{children:{defaultValue:null,description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;",name:"children",required:!1,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"@description selected item key",name:"selected",required:!1,type:{name:"string"}},$size:{defaultValue:{value:'"small"'},description:`@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},_ref:{defaultValue:null,description:`@description if fixedForwardRef & ref not work, try _ref
@todo should fix when react19 release`,name:"_ref",required:!1,type:{name:"ForwardedRef<HTMLButtonElement>"}},$text:{defaultValue:null,description:"@description display text",name:"$text",required:!1,type:{name:"string"}},$placeholder:{defaultValue:null,description:"@description when selected not provided and $placeholder existed, render $placeholder",name:"$placeholder",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"TOption extends { key: string; text?: string }"}},resetText:{defaultValue:null,description:"@description if set, options will insert a rest option with provided text to reset",name:"resetText",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},dropdownConfig:{defaultValue:null,description:"@description props of ui/Dropdown/BaseDropdown",name:"dropdownConfig",required:!1,type:{name:'Omit<DropdownProps, "children" | "visible" | "overlay" | "position" | "onVisibleChange" | "fitToTrigger">'}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:'Omit<Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & { ...; }, "value" | ... 2 more ... | "onChange">'}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!1,type:{name:'((item: string | TOption | null, type: "input" | "select") => void)'}}}}}catch{}try{q.displayName="SelectFilterInputWithRef",q.__docgenInfo={description:"",displayName:"SelectFilterInputWithRef",props:{children:{defaultValue:null,description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;",name:"children",required:!1,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"@description selected item key",name:"selected",required:!1,type:{name:"string"}},$size:{defaultValue:{value:'"small"'},description:`@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},_ref:{defaultValue:null,description:`@description if fixedForwardRef & ref not work, try _ref
@todo should fix when react19 release`,name:"_ref",required:!1,type:{name:"ForwardedRef<HTMLButtonElement>"}},$text:{defaultValue:null,description:"@description display text",name:"$text",required:!1,type:{name:"string"}},$placeholder:{defaultValue:null,description:"@description when selected not provided and $placeholder existed, render $placeholder",name:"$placeholder",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"TOption extends { key: string; text?: string }"}},resetText:{defaultValue:null,description:"@description if set, options will insert a rest option with provided text to reset",name:"resetText",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},dropdownConfig:{defaultValue:null,description:"@description props of ui/Dropdown/BaseDropdown",name:"dropdownConfig",required:!1,type:{name:'Omit<DropdownProps, "children" | "visible" | "overlay" | "position" | "onVisibleChange" | "fitToTrigger">'}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:'Omit<Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & { ...; }, "value" | ... 2 more ... | "onChange">'}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!1,type:{name:'((item: string | BaseOption | null, type: "input" | "select") => void)'}}}}}catch{}const Se={title:"ODE Library/Selection/SelectWithInput",tags:["autodocs"],component:c,argTypes:{children:{table:{disable:!0}},$text:{table:{disable:!0}},$size:{control:"select",options:["small","medium"]}}},ne=[{key:"true",text:"about true text"},{key:"false",text:"about false text"},{key:"none",text:"none"}],ie=Array.from({length:200}).map((l,a)=>({key:`option_${a+1}`,text:`option ${a+1}`}));function re({...l}){const{style:a,...m}=l;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=8806-5741&t=a5kq8b0LVuQVrQrr-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- trigger with input"}),e.jsx("br",{}),e.jsx(c,{...m,style:{width:150}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default open = true"}),e.jsx("br",{}),e.jsx(c,{...m,defaultOpen:!0,style:a}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{height:"200vh"}}),e.jsxs("h4",{children:["- trigger with auto position (top or bottom) ",e.jsx("br",{}),"- if bottom & options' height is larger than window's height, options will be fix to fit window's bottom"]}),e.jsx("br",{}),e.jsx(c,{...m,options:ie,style:a,_ref:d=>{console.info("get trigger element from _ref",d)}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{height:"200vh"}})]})}const b={render:re,args:{$size:"small",$placeholder:"select value",defaultOpen:!1,disabled:!1,style:{width:"50vw"},dropdownConfig:{triggerType:"click"},options:ne,resetText:"-- please choose",onSelectChange:(l,a)=>console.info("onSelect",l,a)}};var k,I,M;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: SelectMenuStory,
  args: {
    $size: "small",
    $placeholder: "select value",
    defaultOpen: false,
    disabled: false,
    style: {
      width: "50vw"
    },
    dropdownConfig: {
      triggerType: "click"
    },
    options,
    resetText: "-- please choose",
    onSelectChange: (item, type) => console.info("onSelect", item, type)
  }
}`,...(M=(I=b.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const Te=["SelectionWithInput"];export{b as SelectionWithInput,Te as __namedExportsOrder,Se as default};
//# sourceMappingURL=SelectionWithInput.stories-38046d91.js.map
