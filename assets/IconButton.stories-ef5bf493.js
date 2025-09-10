import{j as n}from"./jsx-runtime-94f6e698.js";import{p as x,c as S}from"./styled-components.browser.esm-6dd904cc.js";import{p as $}from"./styled-components.browser.esm-7ed061eb.js";import{D as I}from"./DmIcon20Add-61b2a945.js";import{D as w}from"./DmIcon12Down-dcd36aab.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";const s=x.button`
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

  ${({theme:{colors:r},active:y,disabled:m,...o})=>{let t=o.defaultColor||"#000",d=o.hoverColor||"#000",e=o.defaultBGColor||"transparent",i=o.defaultBorderColor||e,c=o.hoverBGColor||r.baseColor.Blue1;return y&&!m&&(t=o.activeColor||t,d=o.activeColor||d,e=o.activeBGColor||r.brandColor.Primary7,i=o.activeBorderColor||e,c=o.activeBGColor||r.brandColor.Primary7),m&&(t=o.disabledColor||t,i=o.disabledBorderColor||e,e=o.disabledBGColor||e),S`
      color: ${t};
      border-color: ${i};
      background-color: ${e};
      transition: all 0.2s;

      &:hover:not(:disabled) {
        color: ${d};
        border-color: ${o.hoverBorderColor||c};
        background-color: ${c};
      }
    `}}
`,u=s;try{s.displayName="IconButton",s.__docgenInfo={description:"",displayName:"IconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const E={title:"PAAS/IconButton",tags:["autodocs"],component:u,argTypes:{children:{table:{disable:!0}}}};function g({...r}){return n.jsx(u,{...r,children:r.children})}const v={active:!1,disabled:!1,defaultColor:"#000",hoverColor:"#000",activeColor:"#000",disabledColor:"#000",defaultBGColor:"transparent",hoverBGColor:"#DCEBF3",activeBGColor:"#457D96",disabledBGColor:"transparent"},D=$(w)`
  transition: all 0.2s;

  ${u}:hover:not(:disabled) & {
    transform: rotate(180deg);
  }
`,a={render:g,args:{...v,children:n.jsx(D,{fill:"currentColor",width:20,height:20})}},l={render:g,args:{...v,defaultColor:"#bfbfbf",defaultBorderColor:"#bfbfbf",hoverBorderColor:"#457D96",children:n.jsx(n.Fragment,{children:n.jsx(I,{fill:"currentColor",width:20,height:20})}),style:{transition:"none",padding:6,borderRadius:"50%"}}};var f,p,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ButtonStory,
  args: {
    ...commonStyles,
    children: <Arrow fill="currentColor" width={20} height={20} />
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,B,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const P=["IconButton","IconButtonWithStyles"];export{a as IconButton,l as IconButtonWithStyles,P as __namedExportsOrder,E as default};
//# sourceMappingURL=IconButton.stories-ef5bf493.js.map
