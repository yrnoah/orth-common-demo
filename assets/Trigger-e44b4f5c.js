import{j as o}from"./jsx-runtime-94f6e698.js";import{r as f}from"./index-8db94870.js";import{p as s,c as y}from"./styled-components.browser.esm-6dd904cc.js";import{I as w}from"./IconArrowSm-8c383373.js";const h=f.forwardRef((e,t)=>{const{$text:n,$placeholder:c,children:r,$open:d,...l}=e,[x,_]=f.useState(()=>!!d),u=typeof d=="boolean"?d:x,$=!n&&!r&&!!c;return o.jsxs(p,{...l,$open:u,onClick:b=>{var m;(m=l.onClick)==null||m.call(l,b),_(!u)},ref:t,children:[$&&o.jsx(a,{isPlaceholder:!0,children:c}),!!n&&o.jsx(a,{children:n}),!n&&typeof r=="string"&&o.jsx(a,{children:r}),typeof r!="string"&&r,o.jsx(i,{})]})}),T={type:"button",role:"select"},p=s.button.attrs(T)`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.ellipsis}
  ${e=>e.theme.fonts["Caption-Large/Regular"]}
  outline: none;
  border: none;
  color: ${e=>e.theme.colors.textInput.default};
  background-color: ${e=>e.theme.colors.themeColor.Airblue1};
  width: 136px;
  height: ${e=>I(e.$size)}px;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  position: relative;
  padding-left: 8px;
  padding-right: 36px;
  overflow: hidden;
  border-radius: ${e=>e.theme.radius.xxxs}px;
  gap: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.themeColor.Airblue2};
  }

  ${({$open:e,disabled:t})=>{if(e&&!t)return y`
        ${i} {
          transform: translateY(-50%) rotate(-180deg);
        }
      `}}

  &:disabled {
    color: ${e=>e.theme.colors.buttonInput.disabled};
    background-color: ${e=>e.theme.colors.button.disabled};
    cursor: not-allowed;
  }
`,i=s(w).attrs({width:16,height:16})`
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%) rotate(0deg);
  transition: transform 0.4s ease;
`,a=s.span`
  display: inline-block;
  width: 100%;
  ${e=>e.theme.ellipsis}
  text-align: left;

  ${({isPlaceholder:e,theme:{colors:t}})=>e&&y`
      color: ${t.textInput.minor};
    `}
`;function I(e){return e==="small"?24:e==="medium"?32:24}const g=s.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: calc(100% - 36px);
  border: none;
  outline: none;
  padding: 0;
  padding-left: ${e=>e.theme.padding.xxs}px;
  ${e=>e.theme.fonts["Caption-Large/Regular"]}
  background: transparent;
  color: ${e=>e.theme.colors.textInput.default};
  caret-color: ${e=>e.theme.colors.textInput.link};

  &::selection {
    background: ${e=>e.theme.colors.brandColor.Primary2};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textInput.minor};
  }

  &:disabled {
    color: ${e=>e.theme.colors.textInput.minor};
  }
`;try{h.displayName="SelectionTrigger",h.__docgenInfo={description:"",displayName:"SelectionTrigger",props:{children:{defaultValue:null,description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;",name:"children",required:!1,type:{name:"ReactNode"}},$size:{defaultValue:{value:'"small"'},description:`@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},$open:{defaultValue:null,description:"@description if selection options is open",name:"$open",required:!1,type:{name:"boolean"}},$text:{defaultValue:null,description:"@description display text",name:"$text",required:!1,type:{name:"string"}},$placeholder:{defaultValue:null,description:"@description when selected not provided and $placeholder existed, render $placeholder",name:"$placeholder",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="Trigger",p.__docgenInfo={description:"",displayName:"Trigger",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="TriggerIcon",i.__docgenInfo={description:"",displayName:"TriggerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{a.displayName="TextContainer",a.__docgenInfo={description:"",displayName:"TextContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="Input",g.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{g as I,h as S,i as T,p as a};
//# sourceMappingURL=Trigger-e44b4f5c.js.map
