import{j as e}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{S as z}from"./Trigger-669d5bc6.js";import{B as F}from"./Dropdown-c607c77d.js";import{p as k,c as A}from"./styled-components.browser.esm-655d472d.js";import{u as L}from"./useCurrent-3439251d.js";import{f as H}from"./component-afc23ed8.js";import{I as P}from"./IconCheckSmall-4add6247.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconArrowSm-8c383373.js";import"./Portal-2b207d51.js";import"./index-8ce4a492.js";import"./useEffectOnce-838fab99.js";import"./util-051783c3.js";import"./useMeasure-361079ab.js";const C=136,M=24,Q={width:C,height:M},f=(t,i)=>{const{defaultOpen:c,dropdownConfig:o,onSelect:p,options:a,selected:d,resetText:m,_ref:s,...n}=t,[g,D]=l.useState(Q),[w,v]=l.useState(()=>!!c),[E,T]=l.useState(()=>d&&a&&a.find(r=>r.key===d)?d:null),h=typeof d=="string"?d:E,y=l.useMemo(()=>typeof h!="string"||!a?null:a.find(u=>u.key===h)||null,[h,a]),W=l.useMemo(()=>({...(o==null?void 0:o.overlayContainerStyle)||{},width:g.width}),[g.width,o==null?void 0:o.overlayContainerStyle]),B=l.useCallback(r=>v(r),[]),I=l.useCallback(()=>{n.disabled||v(r=>!r)},[n.disabled]),_=!!n.disabled,N=l.useCallback(r=>{if(v(!1),_)return;if(!r){p&&p(null),T(null);return}const u=r;u.key!==h&&(p&&p(u),T(u.key))},[p,_,h]);return e.jsx(F,{disableAnimation:!0,...o,visible:w,fitToTrigger:!0,overlayContainerStyle:W,onVisibleChange:B,overlay:e.jsx(Y,{options:a,disabled:_,onSelect:N,selected:h,resetText:m,visible:w}),children:e.jsx(z,{...n,$open:w,onClick:I,$text:(y==null?void 0:y.text)??(y==null?void 0:y.key)??h??d??void 0,ref:r=>{if(!r)return;const u=r.getBoundingClientRect(),S={width:u.width||C,height:u.height||M};if((S.width!==g.width||S.height!==g.height)&&D(S),s){if(typeof s=="function"){s(r);return}"current"in s&&(s.current=r)}if(i){if(typeof i=="function"){i(r);return}"current"in i&&(i.current=r)}}})})},j=H(f),Y=l.memo(t=>{const{options:i,disabled:c,onSelect:o,resetText:p,selected:a,visible:d}=t,m=l.useRef({}),s=L(a);return l.useEffect(()=>{var n;d&&s.current&&m.current[s.current]&&((n=m.current[s.current])==null||n.scrollIntoView())},[s,m,d]),!i||c?null:e.jsxs($,{onScroll:n=>{n.stopPropagation(),n.preventDefault()},children:[!!p&&e.jsx(b,{onClick:()=>{o&&o(null)},children:p}),i.map(n=>e.jsxs(b,{ref:g=>{m.current[n.key]=g},$active:n.key===a,onClick:()=>{o&&o(n)},children:[e.jsx(R,{}),e.jsx("span",{children:n.text??n.key})]},n.key))]})}),R=k(P)`
  width: 16px;
  height: 16px;
  color: ${t=>t.theme.colors.textInput.default};
  position: absolute;
  left: 12px;
  top: 8px;
  opacity: 0;
  pointer-events: none;
`,b=k.li`
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
`,$=k.ul`
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
`;try{f.displayName="SelectMenu",f.__docgenInfo={description:"",displayName:"SelectMenu",props:{selected:{defaultValue:null,description:"@description selected item key",name:"selected",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"TOption extends { key: string; text?: string }"}},onSelect:{defaultValue:null,description:"@description will be fired when option selected, if param is null -> reset state",name:"onSelect",required:!1,type:{name:"((item: TOption | null) => void)"}},resetText:{defaultValue:null,description:"@description if set, options will insert a rest option with provided text to reset",name:"resetText",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},dropdownConfig:{defaultValue:null,description:"@description props of ui/Dropdown/BaseDropdown",name:"dropdownConfig",required:!1,type:{name:'Omit<DropdownProps, "children" | "visible" | "overlay" | "position" | "onVisibleChange" | "fitToTrigger">'}},_ref:{defaultValue:null,description:`@description if fixedForwardRef & ref not work, try _ref
@todo should fix when react19 release`,name:"_ref",required:!1,type:{name:"ForwardedRef<HTMLButtonElement>"}},children:{defaultValue:null,description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;",name:"children",required:!1,type:{name:"ReactNode"}},$size:{defaultValue:{value:'"small"'},description:`@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},$text:{defaultValue:null,description:"@description display text",name:"$text",required:!1,type:{name:"string"}},$placeholder:{defaultValue:null,description:"@description when selected not provided and $placeholder existed, render $placeholder",name:"$placeholder",required:!1,type:{name:"string"}}}}}catch{}try{j.displayName="SelectMenuWithRef",j.__docgenInfo={description:"",displayName:"SelectMenuWithRef",props:{selected:{defaultValue:null,description:"@description selected item key",name:"selected",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"TOption extends { key: string; text?: string }"}},onSelect:{defaultValue:null,description:"@description will be fired when option selected, if param is null -> reset state",name:"onSelect",required:!1,type:{name:"((item: BaseOption | null) => void)"}},resetText:{defaultValue:null,description:"@description if set, options will insert a rest option with provided text to reset",name:"resetText",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},dropdownConfig:{defaultValue:null,description:"@description props of ui/Dropdown/BaseDropdown",name:"dropdownConfig",required:!1,type:{name:'Omit<DropdownProps, "children" | "visible" | "overlay" | "position" | "onVisibleChange" | "fitToTrigger">'}},_ref:{defaultValue:null,description:`@description if fixedForwardRef & ref not work, try _ref
@todo should fix when react19 release`,name:"_ref",required:!1,type:{name:"ForwardedRef<HTMLButtonElement>"}},children:{defaultValue:null,description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;",name:"children",required:!1,type:{name:"ReactNode"}},$size:{defaultValue:{value:'"small"'},description:`@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},$text:{defaultValue:null,description:"@description display text",name:"$text",required:!1,type:{name:"string"}},$placeholder:{defaultValue:null,description:"@description when selected not provided and $placeholder existed, render $placeholder",name:"$placeholder",required:!1,type:{name:"string"}}}}}catch{}try{b.displayName="Option",b.__docgenInfo={description:"",displayName:"Option",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="OptionsWrapper",$.__docgenInfo={description:"",displayName:"OptionsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const fe={title:"ODE Library/Selection/SelectMenu",tags:["autodocs"],component:f,argTypes:{children:{table:{disable:!0}},$text:{table:{disable:!0}},$size:{control:"select",options:["small","medium"]}}},G=[{key:"true"},{key:"false"},{key:"none"}],J=Array.from({length:200}).map((t,i)=>({key:`option_${i+1}`,text:`option ${i+1}`}));function K({...t}){const{style:i,...c}=t;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=8806-5741&t=a5kq8b0LVuQVrQrr-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default trigger"}),e.jsx("br",{}),e.jsx(f,{...c}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- trigger with long text option"}),e.jsx("br",{}),e.jsx(f,{...c,options:U}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default open = true"}),e.jsx("br",{}),e.jsx(f,{...c,defaultOpen:!0,style:i}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{height:"200vh"}}),e.jsxs("h4",{children:["- trigger with auto position (top or bottom) ",e.jsx("br",{}),"- if bottom & options' height is larger than window's height, options will be fix to fit window's bottom"]}),e.jsx("br",{}),e.jsx(f,{...c,options:J,style:i,_ref:o=>{console.info("get trigger element from _ref",o)}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{height:"200vh"}})]})}const x={render:K,args:{$size:"small",$placeholder:"select value",defaultOpen:!1,disabled:!1,style:{width:"50vw"},dropdownConfig:{triggerType:"click"},options:G,resetText:"-- please choose",onSelect:t=>console.info("onOptionSelect",t)}},U=[{key:"true",text:`The lexical units are combined to form even larger building blocks such as expressions according to the rules given by the expression part of the Modelica grammar in appendix A. For example, they can be built from operators, function references, components, or component references (referring to components) and literals. Each expression has a type and a variability. 
 This chapter describes the evaluation rules for expressions, the concept of expression variability, built-in mathematical operators and functions, and the built-in special Modelica operators with function syntax. 
 Expressions can contain variables and constants, which have types, predefined or user defined. The predefined built-in types of Modelica are Real, Integer, Boolean, String, and enumeration types which are presented in more detail in section 4.9.`},{key:"false",text:"It is also possible to define functions and call them in a normal fashion. The function call syntax for both positional and named arguments is described in section 12.4.1 and for vectorized calls in section 12.4.4. The built-in array functions are given in section 10.1.1 and other built-in operators in section 3.7."},{key:"none"}];var V,q,O;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    onSelect: item => console.info("onOptionSelect", item)
  }
}`,...(O=(q=x.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const he=["SelectionTrigger"];export{x as SelectionTrigger,he as __namedExportsOrder,fe as default};
//# sourceMappingURL=SelectionMenu.stories-8216762c.js.map
