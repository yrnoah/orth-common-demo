import{r as x,j as r,d as n,l as c}from"./iframe-D12yBJYT.js";import{S as f}from"./IconArrowSm-B3wviign.js";const $=e=>{const{$text:t,$placeholder:l,children:o,$open:i,...a}=e,[h,u]=x.useState(()=>!!i),d=typeof i=="boolean"?i:h,m=!t&&!o&&!!l;return r.jsxs(w,{...a,$open:d,onClick:g=>{a.onClick?.(g),u(!d)},children:[m&&r.jsx(s,{isPlaceholder:!0,children:l}),!!t&&r.jsx(s,{children:t}),!t&&typeof o=="string"&&r.jsx(s,{children:o}),typeof o!="string"&&o,r.jsx(p,{})]})},b={type:"button",role:"select"},w=n.button.attrs(b)`
  ${e=>e.theme.flex.row}
  ${e=>e.theme.ellipsis}
  ${e=>e.theme.fonts["Caption-Large/Regular"]}
  outline: none;
  border: none;
  color: ${e=>e.theme.colors.textInput.default};
  background-color: ${e=>e.theme.colors.themeColor.Airblue1};
  width: 136px;
  height: ${e=>y(e.$size)}px;
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

  ${({$open:e,disabled:t})=>{if(e&&!t)return c`
        ${p} {
          transform: translateY(-50%) rotate(-180deg);
        }
      `}}

  &:disabled {
    color: ${e=>e.theme.colors.buttonInput.disabled};
    background-color: ${e=>e.theme.colors.button.disabled};
    cursor: not-allowed;
  }
`,p=n(f).attrs({width:16,height:16})`
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%) rotate(0deg);
  transition: transform 0.4s ease;
`,s=n.span`
  display: inline-block;
  width: 100%;
  ${e=>e.theme.ellipsis}
  text-align: left;

  ${({isPlaceholder:e,theme:{colors:t}})=>e&&c`
      color: ${t.textInput.minor};
    `}
`;function y(e){return e==="small"?24:e==="medium"?32:24}const k=n.input`
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
`;$.__docgenInfo={description:"@design https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=5528-41514&t=J9rabVBDwI2Vbsh4-4",methods:[],displayName:"SelectionTrigger",props:{$open:{required:!1,tsType:{name:"boolean"},description:"@description if selection options is open"},$text:{required:!1,tsType:{name:"string"},description:"@description display text"},$placeholder:{required:!1,tsType:{name:"string"},description:"@description when selected not provided and $placeholder existed, render $placeholder"},$size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:`@default "small"
@description only effect height currently;
default width 136;
when small height = 24;
when medium height = 32`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"@description Slot for custom nodes, usually use $text will be fine.\nString type children with `TextContainer` has conflict with $text, so it's blocked when $text exists;"}}};export{k as I,$ as S,p as T,w as a};
