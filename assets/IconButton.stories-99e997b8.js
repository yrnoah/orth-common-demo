import{j as r}from"./jsx-runtime-94f6e698.js";import{I as t}from"./IconButton-8049ed1e.js";import{p as f}from"./styled-components.browser.esm-8c817f58.js";import{D as b}from"./DmIcon20Add-61b2a945.js";import{D as h}from"./DmIcon12Down-dcd36aab.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const v={title:"PAAS/IconButton",tags:["autodocs"],component:t,argTypes:{children:{table:{disable:!0}},theme:{table:{disable:!0}},ref:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},as:{table:{disable:!0}}}};function u({...n}){return r.jsx(t,{...n,children:n.children})}const m={active:!1,disabled:!1,defaultColor:"#000",hoverColor:"#000",activeColor:"#000",disabledColor:"#000",defaultBGColor:"transparent",hoverBGColor:"#DCEBF3",activeBGColor:"#457D96",disabledBGColor:"transparent"},p=f(h)`
  transition: all 0.2s;

  ${t}:hover:not(:disabled) & {
    transform: rotate(180deg);
  }
`,o={render:u,args:{...m,children:r.jsx(p,{fill:"currentColor",width:20,height:20})}},e={render:u,args:{...m,defaultColor:"#bfbfbf",defaultBorderColor:"#bfbfbf",hoverBorderColor:"#457D96",children:r.jsx(r.Fragment,{children:r.jsx(b,{fill:"currentColor",width:20,height:20})}),style:{transition:"none",padding:6,borderRadius:"50%"}}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ButtonStory,
  args: {
    ...commonStyles,
    children: <Arrow fill="currentColor" width={20} height={20} />
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,i,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const w=["IconButton","IconButtonWithStyles"];export{o as IconButton,e as IconButtonWithStyles,w as __namedExportsOrder,v as default};
//# sourceMappingURL=IconButton.stories-99e997b8.js.map
