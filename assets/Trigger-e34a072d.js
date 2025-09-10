import{j as b,a}from"./jsx-runtime-a888423b.js";import{r as m}from"./index-8db94870.js";import{p as s,c as x}from"./styled-components.browser.esm-6dd904cc.js";import{I}from"./IconArrowSm-99e81fe8.js";const g=m.forwardRef((e,t)=>{const{$text:n,$placeholder:p,children:o,$open:c,...i}=e,[_,$]=m.useState(()=>!!c),u=typeof c=="boolean"?c:_;return b(d,{...i,$open:u,onClick:y=>{var h;(h=i.onClick)==null||h.call(i,y),$(!u)},ref:t,children:[!n&&!o&&!!p&&a(r,{isPlaceholder:!0,children:p}),!!n&&a(r,{children:n}),!n&&typeof o=="string"&&a(r,{children:o}),typeof o!="string"&&o,a(l,{})]})}),w={type:"button",role:"select"},d=s.button.attrs(w)`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.ellipsis}
  ${e=>e.theme.fonts["Caption-Large/Regular"]}
  outline: none;
  border: none;
  color: ${e=>e.theme.colors.textInput.default};
  background-color: ${e=>e.theme.colors.themeColor.Airblue1};
  width: 136px;
  height: ${e=>T(e.$size)}px;
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

  ${({$open:e,disabled:t})=>{if(e&&!t)return x`
        ${l} {
          transform: translateY(-50%) rotate(-180deg);
        }
      `}}

  &:disabled {
    color: ${e=>e.theme.colors.buttonInput.disabled};
    background-color: ${e=>e.theme.colors.button.disabled};
    cursor: not-allowed;
  }
`,l=s(I).attrs({width:16,height:16})`
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%) rotate(0deg);
  transition: transform 0.4s ease;
`,r=s.span`
  display: inline-block;
  width: 100%;
  ${e=>e.theme.ellipsis}
  text-align: left;

  ${({isPlaceholder:e,theme:{colors:t}})=>e&&x`
      color: ${t.textInput.minor};
    `}
`;function T(e){return e==="small"?24:e==="medium"?32:24}const f=s.input`
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
`;try{g.displayName="SelectionTrigger",g.__docgenInfo={description:"",displayName:"SelectionTrigger",props:{children:{defaultValue:null,description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;",name:"children",required:!1,type:{name:"ReactNode"}},$size:{defaultValue:{value:'"small"'},description:`@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},$open:{defaultValue:null,description:"@description if selection options is open",name:"$open",required:!1,type:{name:"boolean"}},$text:{defaultValue:null,description:"@description display text",name:"$text",required:!1,type:{name:"string"}},$placeholder:{defaultValue:null,description:"@description when selected not provided and $placeholder existed, render $placeholder",name:"$placeholder",required:!1,type:{name:"string"}}}}}catch{}try{d.displayName="Trigger",d.__docgenInfo={description:"",displayName:"Trigger",props:{}}}catch{}try{l.displayName="TriggerIcon",l.__docgenInfo={description:"",displayName:"TriggerIcon",props:{}}}catch{}try{r.displayName="TextContainer",r.__docgenInfo={description:"",displayName:"TextContainer",props:{}}}catch{}try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}export{f as I,g as S,l as T,d as a};
//# sourceMappingURL=Trigger-e34a072d.js.map
