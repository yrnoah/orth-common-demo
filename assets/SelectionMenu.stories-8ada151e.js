import{j as e}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{S as B}from"./Trigger-669d5bc6.js";import{B as W}from"./Dropdown-c9b66b7b.js";import{p as T,c as A}from"./styled-components.browser.esm-655d472d.js";import{u as F}from"./useCurrent-9b1a0363.js";import{I as L}from"./IconCheckSmall-4add6247.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconArrowSm-8c383373.js";import"./useEffectOnce-838fab99.js";import"./util-051783c3.js";import"./useMeasure-361079ab.js";import"./index-8ce4a492.js";function P(t){return l.forwardRef(t)}const C=136,M=24,H={width:C,height:M},_=(t,i)=>{const{defaultOpen:c,dropdownConfig:o,onSelect:p,options:s,selected:a,resetText:m,...d}=t,[n,b]=l.useState(H),[w,v]=l.useState(()=>!!c),[D,j]=l.useState(()=>a&&s&&s.find(r=>r.key===a)?a:null),f=typeof a=="string"?a:D,g=l.useMemo(()=>typeof f!="string"||!s?null:s.find(u=>u.key===f)||null,[f,s]),I=l.useMemo(()=>({...(o==null?void 0:o.overlayContainerStyle)||{},width:n.width}),[n.width,o==null?void 0:o.overlayContainerStyle]),N=l.useCallback(r=>v(r),[]),E=l.useCallback(()=>{d.disabled||v(r=>!r)},[d.disabled]),S=!!d.disabled,z=l.useCallback(r=>{if(v(!1),S)return;if(!r){p&&p(null),j(null);return}const u=r;u.key!==f&&(p&&p(u),j(u.key))},[p,S,f]);return e.jsx(W,{disableAnimation:!0,...o,visible:w,fitToTrigger:!0,overlayContainerStyle:I,onVisibleChange:N,overlay:e.jsx(Q,{options:s,disabled:S,onSelect:z,selected:f,resetText:m,visible:w}),children:e.jsx(B,{...d,$open:w,onClick:E,$text:(g==null?void 0:g.text)??(g==null?void 0:g.key)??f??a??void 0,ref:r=>{if(!r)return;const u=r.getBoundingClientRect(),$={width:u.width||C,height:u.height||M};if(($.width!==n.width||$.height!==n.height)&&b($),!!i){if(typeof i=="function"){i(r);return}i.current=r}}})})},Q=l.memo(t=>{const{options:i,disabled:c,onSelect:o,resetText:p,selected:s,visible:a}=t,m=l.useRef({}),d=F(s);return l.useEffect(()=>{var n;a&&d.current&&m.current[d.current]&&((n=m.current[d.current])==null||n.scrollIntoView())},[d,m,a]),!i||c?null:e.jsxs(k,{onScroll:n=>{n.stopPropagation(),n.preventDefault()},children:[!!p&&e.jsx(x,{onClick:()=>{o&&o(null)},children:p}),i.map(n=>e.jsxs(x,{ref:b=>{m.current[n.key]=b},$active:n.key===s,onClick:()=>{o&&o(n)},children:[e.jsx(R,{}),e.jsx("span",{children:n.text??n.key})]},n.key))]})}),h=P(_),R=T(L)`
  width: 16px;
  height: 16px;
  color: ${t=>t.theme.colors.textInput.default};
  position: absolute;
  left: 12px;
  top: 8px;
  opacity: 0;
  pointer-events: none;
`,x=T.li`
  ${t=>t.theme.flex.row}
  width: 100%;
  padding: 8px 12px 8px 36px;
  overflow: hidden;
  background-color: #fff;
  position: relative;

  ${({$active:t})=>t&&A`
      ${R} {
        opacity: 1;
      }
    `}

  &:hover {
    background-color: ${t=>t.theme.colors.button.hovered};
  }
`,k=T.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  ${t=>t.theme.fonts["Caption-Large/Bold"]}
  color: ${t=>t.theme.colors.textInput.default};
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  ${t=>t.theme.scrollbar}
  border-radius: ${t=>t.theme.radius.xxxxs}px;
  border: 1px solid ${t=>t.theme.colors.button.hovered};
  background-color: #fff;
`;try{_.displayName="RawSelectMenu",_.__docgenInfo={description:"",displayName:"RawSelectMenu",props:{selected:{defaultValue:null,description:"@description selected item key",name:"selected",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"TOption extends { key: string; text?: string }"}},onSelect:{defaultValue:null,description:"@description will be fired when option selected, if param is null -> reset state",name:"onSelect",required:!1,type:{name:"((item: TOption | null) => void)"}},resetText:{defaultValue:null,description:"@description if set, options will insert a rest option with provided text to reset",name:"resetText",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},dropdownConfig:{defaultValue:null,description:"@description props of ui/Dropdown/BaseDropdown",name:"dropdownConfig",required:!1,type:{name:'Omit<DropdownProps, "children" | "visible" | "overlay" | "position" | "onVisibleChange" | "fitToTrigger">'}},children:{defaultValue:null,description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;",name:"children",required:!1,type:{name:"ReactNode"}},$size:{defaultValue:{value:'"small"'},description:`@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},$text:{defaultValue:null,description:"@description display text",name:"$text",required:!1,type:{name:"string"}},$placeholder:{defaultValue:null,description:"@description when selected not provided and $placeholder existed, render $placeholder",name:"$placeholder",required:!1,type:{name:"string"}}}}}catch{}try{h.displayName="SelectMenu",h.__docgenInfo={description:"",displayName:"SelectMenu",props:{selected:{defaultValue:null,description:"@description selected item key",name:"selected",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"TOption extends { key: string; text?: string }"}},onSelect:{defaultValue:null,description:"@description will be fired when option selected, if param is null -> reset state",name:"onSelect",required:!1,type:{name:"((item: BaseOption | null) => void)"}},resetText:{defaultValue:null,description:"@description if set, options will insert a rest option with provided text to reset",name:"resetText",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},dropdownConfig:{defaultValue:null,description:"@description props of ui/Dropdown/BaseDropdown",name:"dropdownConfig",required:!1,type:{name:'Omit<DropdownProps, "children" | "visible" | "overlay" | "position" | "onVisibleChange" | "fitToTrigger">'}},children:{defaultValue:null,description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;",name:"children",required:!1,type:{name:"ReactNode"}},$size:{defaultValue:{value:'"small"'},description:`@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},$text:{defaultValue:null,description:"@description display text",name:"$text",required:!1,type:{name:"string"}},$placeholder:{defaultValue:null,description:"@description when selected not provided and $placeholder existed, render $placeholder",name:"$placeholder",required:!1,type:{name:"string"}}}}}catch{}try{x.displayName="Option",x.__docgenInfo={description:"",displayName:"Option",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{k.displayName="OptionsWrapper",k.__docgenInfo={description:"",displayName:"OptionsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ce={title:"ODE Library/Selection/SelectMenu",tags:["autodocs"],component:h,argTypes:{children:{table:{disable:!0}},$text:{table:{disable:!0}},$size:{control:"select",options:["small","medium"]}}},Y=[{key:"true"},{key:"false"},{key:"none"}],G=Array.from({length:200}).map((t,i)=>({key:`option_${i+1}`,text:`option ${i+1}`}));function J({...t}){const{style:i,...c}=t;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=8806-5741&t=a5kq8b0LVuQVrQrr-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default trigger"}),e.jsx("br",{}),e.jsx(h,{...c}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- trigger with long text option"}),e.jsx("br",{}),e.jsx(h,{...c,options:K}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default open = true"}),e.jsx("br",{}),e.jsx(h,{...c,defaultOpen:!0,style:i}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{height:"200vh"}}),e.jsxs("h4",{children:["- trigger with auto position (top or bottom) ",e.jsx("br",{}),"- if bottom & options' height is larger than window's height, options will be fix to fit window's bottom"]}),e.jsx("br",{}),e.jsx(h,{...c,options:G,style:i}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{height:"200vh"}})]})}const y={render:J,args:{$size:"small",$placeholder:"select value",defaultOpen:!1,disabled:!1,style:{width:"50vw"},dropdownConfig:{triggerType:"click"},options:Y,resetText:"-- please choose",onSelect:t=>console.log("onOptionSelect",t)}},K=[{key:"true",text:`The lexical units are combined to form even larger building blocks such as expressions according to the rules given by the expression part of the Modelica grammar in appendix A. For example, they can be built from operators, function references, components, or component references (referring to components) and literals. Each expression has a type and a variability. 
 This chapter describes the evaluation rules for expressions, the concept of expression variability, built-in mathematical operators and functions, and the built-in special Modelica operators with function syntax. 
 Expressions can contain variables and constants, which have types, predefined or user defined. The predefined built-in types of Modelica are Real, Integer, Boolean, String, and enumeration types which are presented in more detail in section 4.9.`},{key:"false",text:"It is also possible to define functions and call them in a normal fashion. The function call syntax for both positional and named arguments is described in section 12.4.1 and for vectorized calls in section 12.4.4. The built-in array functions are given in section 10.1.1 and other built-in operators in section 3.7."},{key:"none"}];var V,O,q;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    onSelect: item => console.log("onOptionSelect", item)
  }
}`,...(q=(O=y.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const pe=["SelectionTrigger"];export{y as SelectionTrigger,pe as __namedExportsOrder,ce as default};
//# sourceMappingURL=SelectionMenu.stories-8ada151e.js.map
