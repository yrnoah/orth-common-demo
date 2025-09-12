import{l as B,d as b,j as n}from"./iframe-D12yBJYT.js";import{S as C}from"./DmIcon20Add-BC5fNFyf.js";import{S as p}from"./DmIcon12Down-HPZGJ0jp.js";import"./preload-helper-D9Z9MdNV.js";const s=b.button`
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

  ${({theme:{colors:r},active:m,disabled:u,...o})=>{let t=o.defaultColor||"#000",a=o.hoverColor||"#000",e=o.defaultBGColor||"transparent",i=o.defaultBorderColor||e,c=o.hoverBGColor||r.baseColor.Blue1;return m&&!u&&(t=o.activeColor||t,a=o.activeColor||a,e=o.activeBGColor||r.brandColor.Primary7,i=o.activeBorderColor||e,c=o.activeBGColor||r.brandColor.Primary7),u&&(t=o.disabledColor||t,i=o.disabledBorderColor||e,e=o.disabledBGColor||e),B`
      color: ${t};
      border-color: ${i};
      background-color: ${e};
      transition: all 0.2s;

      &:hover:not(:disabled) {
        color: ${a};
        border-color: ${o.hoverBorderColor||c};
        background-color: ${c};
      }
    `}}
`,$={title:"PAAS/IconButton",tags:["autodocs"],component:s,argTypes:{children:{table:{disable:!0}}}};function f({...r}){return n.jsx(s,{...r,children:r.children})}const h={active:!1,disabled:!1,defaultColor:"#000",hoverColor:"#000",activeColor:"#000",disabledColor:"#000",defaultBGColor:"transparent",hoverBGColor:"#DCEBF3",activeBGColor:"#457D96",disabledBGColor:"transparent"},g=b(p)`
  transition: all 0.2s;

  ${s}:hover:not(:disabled) & {
    transform: rotate(180deg);
  }
`,l={render:f,args:{...h,children:n.jsx(g,{fill:"currentColor",width:20,height:20})}},d={render:f,args:{...h,defaultColor:"#bfbfbf",defaultBorderColor:"#bfbfbf",hoverBorderColor:"#457D96",children:n.jsx(n.Fragment,{children:n.jsx(C,{fill:"currentColor",width:20,height:20})}),style:{transition:"none",padding:6,borderRadius:"50%"}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ButtonStory,
  args: {
    ...commonStyles,
    children: <Arrow fill="currentColor" width={20} height={20} />
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const w=["IconButton","IconButtonWithStyles"];export{l as IconButton,d as IconButtonWithStyles,w as __namedExportsOrder,$ as default};
