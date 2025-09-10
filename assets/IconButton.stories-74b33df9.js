import{a as d,F as S}from"./jsx-runtime-a888423b.js";import{p as $,c as I}from"./styled-components.browser.esm-6dd904cc.js";import{p as _}from"./styled-components.browser.esm-7ed061eb.js";import{D as w}from"./DmIcon20Add-8a2014f9.js";import{D as x}from"./DmIcon12Down-f40e2fd4.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";const s=$.button`
  border: none;
  outline: none;
  box-sizing: border-box;
  ${r=>r.theme.flexCSS.row}
  ${r=>r.theme.flexCSS.center}
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  padding: 3.6px;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};

  ${({theme:{colors:r},active:y,disabled:m,...o})=>{let t=o.defaultColor||"#000",l=o.hoverColor||"#000",e=o.defaultBGColor||"transparent",i=o.defaultBorderColor||e,c=o.hoverBGColor||r.baseColor.Blue1;return y&&!m&&(t=o.activeColor||t,l=o.activeColor||l,e=o.activeBGColor||r.brandColor.Primary7,i=o.activeBorderColor||e,c=o.activeBGColor||r.brandColor.Primary7),m&&(t=o.disabledColor||t,i=o.disabledBorderColor||e,e=o.disabledBGColor||e),I`
      color: ${t};
      border-color: ${i};
      background-color: ${e};
      transition: all 0.2s;

      &:hover:not(:disabled) {
        color: ${l};
        border-color: ${o.hoverBorderColor||c};
        background-color: ${c};
      }
    `}}
`,u=s;try{s.displayName="IconButton",s.__docgenInfo={description:"",displayName:"IconButton",props:{}}}catch{}const W={title:"PAAS/IconButton",tags:["autodocs"],component:u,argTypes:{children:{table:{disable:!0}}}};function g({...r}){return d(u,{...r,children:r.children})}const v={active:!1,disabled:!1,defaultColor:"#000",hoverColor:"#000",activeColor:"#000",disabledColor:"#000",defaultBGColor:"transparent",hoverBGColor:"#DCEBF3",activeBGColor:"#457D96",disabledBGColor:"transparent"},D=_(x)`
  transition: all 0.2s;

  ${u}:hover:not(:disabled) & {
    transform: rotate(180deg);
  }
`,n={render:g,args:{...v,children:d(D,{fill:"currentColor",width:20,height:20})}},a={render:g,args:{...v,defaultColor:"#bfbfbf",defaultBorderColor:"#bfbfbf",hoverBorderColor:"#457D96",children:d(S,{children:d(w,{fill:"currentColor",width:20,height:20})}),style:{transition:"none",padding:6,borderRadius:"50%"}}};var b,p,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ButtonStory,
  args: {
    ...commonStyles,
    children: <Arrow fill="currentColor" width={20} height={20} />
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,B,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ButtonStory,
  args: {
    ...commonStyles,
    defaultColor: "#bfbfbf",
    defaultBorderColor: "#bfbfbf",
    hoverBorderColor: "#457D96",
    children: <>
        <DmIcon20Add fill="currentColor" width={20} height={20} />
      </>,
    style: {
      transition: "none",
      padding: 6,
      borderRadius: "50%"
    }
  }
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const j=["IconButton","IconButtonWithStyles"];export{n as IconButton,a as IconButtonWithStyles,j as __namedExportsOrder,W as default};
//# sourceMappingURL=IconButton.stories-74b33df9.js.map
