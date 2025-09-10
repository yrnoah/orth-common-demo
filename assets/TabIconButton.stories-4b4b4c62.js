import{j as t}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{c as $,p as w}from"./styled-components.browser.esm-6dd904cc.js";import{P as S,t as I}from"./Portal-01fdeda0.js";import{T as C}from"./Tooltip-a379440d.js";import{t as P}from"./styled-components.browser.esm-7ed061eb.js";import{D as j}from"./DmIcon20Add-61b2a945.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";import"./index-8ce4a492.js";import"./TooltipPoint-976e1e10.js";const c=s.forwardRef((e,n)=>{const{tooltip:m,portalID:b=I,tooltipPosition:y="bottom",children:T,tooltipStyle:g,tooltipProps:x,...o}=e,a=s.useRef(null),[p,u]=s.useState(0);return s.useEffect(()=>()=>{a.current&&(a.current=null)},[]),t.jsxs(D,{...o,onMouseOver:r=>{var i;(i=o.onMouseOver)==null||i.call(o,r),u(Date.now())},onMouseOut:r=>{var i;(i=o.onMouseOut)==null||i.call(o,r),u(0)},onWheel:r=>{var i;(i=o.onWheel)==null||i.call(o,r),u(Date.now())},ref:r=>{a.current=r,n&&(typeof n=="function"&&n(r),"current"in n&&(n.current=r))},children:[!!m&&t.jsx(S,{id:b,children:s.createElement(C,{...x||{},tooltip:m,tooltipPosition:y,parent:a,key:`${p}`,show:!!p,style:g})}),T]})}),d=$`
  color: ${e=>e.theme.colors.elementsContentFocus};
  background-color: ${e=>e.theme.colors.elementsLayerActivated};

  ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
`;$`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  padding: 8px;
  border-radius: 50%;
  color: ${e=>e.theme.colors.elementsContentMain};
  transition: all 0.2s ease-out;

  &:hover {
    color: ${e=>e.theme.colors.elementsContentFocus};

    ${e=>e.$hoverThemes?{...e.$hoverThemes}:void 0}
  }

  &:active {
    ${d}

    ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
  }

  ${e=>e.$active&&d}

  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: transparent;
    opacity: 0.3;
    cursor: not-allowed;

    ${e=>e.$disableThemes?{...e.$disableThemes}:void 0}
  }
`;const D=w.button.attrs({type:"button"})`
  ${e=>e.theme.button.reset}
  ${e=>e.theme.flex.row}
  ${e=>e.theme.flex.center}
  padding: 8px;
  border-radius: 50%;
  color: ${e=>e.theme.colors.elementsContentMain};
  transition: all 0.2s ease-out;

  &:hover {
    color: ${e=>e.theme.colors.elementsContentFocus};

    ${e=>e.$hoverThemes?{...e.$hoverThemes}:void 0}
  }

  &:active {
    ${d}

    ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
  }

  ${e=>e.$active&&d}

  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: transparent;
    opacity: 0.3;
    cursor: not-allowed;

    ${e=>e.$disableThemes?{...e.$disableThemes}:void 0}
  }
`;try{c.displayName="IconButton",c.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},$active:{defaultValue:null,description:"",name:"$active",required:!1,type:{name:"boolean"}},portalID:{defaultValue:null,description:"@description which portal container to render tooltip",name:"portalID",required:!1,type:{name:"string"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "style" | "tooltip" | "show" | "tooltipPosition" | "parent">'}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"left-top"'},{value:'"left-bottom"'},{value:'"right-top"'},{value:'"right-bottom"'}]}},tooltipStyle:{defaultValue:null,description:"",name:"tooltipStyle",required:!1,type:{name:"CSSProperties"}},$activeThemes:{defaultValue:null,description:"@description override active styles",name:"$activeThemes",required:!1,type:{name:"CSSProperties"}},$hoverThemes:{defaultValue:null,description:"@description override hover styles",name:"$hoverThemes",required:!1,type:{name:"CSSProperties"}},$disableThemes:{defaultValue:null,description:"@description override disabled styles",name:"$disableThemes",required:!1,type:{name:"CSSProperties"}}}}}catch{}const L={title:"ODE Library/Buttons/Tab/IconButton",tags:["autodocs"],component:c,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function B({...e}){const{colors:n}=P();return t.jsxs("div",{style:{padding:20,background:n.container500},children:[t.jsx("a",{target:"blank",href:"https://www.figma.com/design/gNhCiOwsW1zXM0DAiLr7Ck/%F0%9F%A7%AD-Plus-DS?node-id=3280-44423&t=UYSbf1B5mzuwpQK3-4",rel:"noreferrer",children:"design reference"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- default Tab Icon Button"}),t.jsx("br",{}),t.jsx(c,{...e}),t.jsx("div",{style:{height:"80dvw"}})]})}const l={render:B,args:{children:t.jsx(j,{width:20,height:20}),disabled:!1,$active:!1,tooltip:"Resource ⌥1",tooltipPosition:"top",$disableThemes:{backgroundColor:"red"}}};var h,v,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: TabIconButtonStory,
  args: {
    children: <DmIcon20Add width={20} height={20} />,
    disabled: false,
    $active: false,
    tooltip: "Resource ⌥1",
    tooltipPosition: "top",
    $disableThemes: {
      backgroundColor: "red"
    }
  }
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const W=["IconButton"];export{l as IconButton,W as __namedExportsOrder,L as default};
//# sourceMappingURL=TabIconButton.stories-4b4b4c62.js.map
