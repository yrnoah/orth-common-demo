import{j as o}from"./jsx-runtime-94f6e698.js";import{I as e}from"./IconButton-878f1a35.js";import{p as f}from"./styled-components.browser.esm-655d472d.js";import{D as h,a as p}from"./DmIcon20Add-dad4deb4.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const D={title:"PAAS/IconButton",tags:["autodocs"],component:e,argTypes:{children:{table:{disable:!0}}}};function m({...n}){return o.jsx(e,{...n,children:n.children})}const u={active:!1,disabled:!1,defaultColor:"#000",hoverColor:"#000",activeColor:"#000",disabledColor:"#000",defaultBGColor:"transparent",hoverBGColor:"#DCEBF3",activeBGColor:"#457D96",disabledBGColor:"transparent"},b=f(p)`
  transition: all 0.2s;

  ${e}:hover:not(:disabled) & {
    transform: rotate(180deg);
  }
`,r={render:m,args:{...u,children:o.jsx(b,{fill:"currentColor",width:20,height:20})}},t={render:m,args:{...u,defaultColor:"#bfbfbf",defaultBorderColor:"#bfbfbf",hoverBorderColor:"#457D96",children:o.jsx(o.Fragment,{children:o.jsx(h,{fill:"currentColor",width:20,height:20})}),style:{transition:"none",padding:6,borderRadius:"50%"}}};var a,s,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ButtonStory,
  args: {
    ...commonStyles,
    children: <Arrow fill="currentColor" width={20} height={20} />
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,i,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const v=["IconButton","IconButtonWithStyles"];export{r as IconButton,t as IconButtonWithStyles,v as __namedExportsOrder,D as default};
//# sourceMappingURL=IconButton.stories-5702c35e.js.map
