import{j as $,a as r}from"./jsx-runtime-a888423b.js";import{r as n}from"./index-8db94870.js";import{c as b,p as I}from"./styled-components.browser.esm-6dd904cc.js";import{P as C,t as P}from"./Portal-847ba74d.js";import{T as D}from"./Tooltip-c494eb8d.js";import{t as B}from"./styled-components.browser.esm-7ed061eb.js";import{D as x}from"./DmIcon20Add-8a2014f9.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";import"./index-8ce4a492.js";import"./TooltipPoint-61ad6988.js";const c=n.forwardRef((e,a)=>{const{tooltip:m,portalID:y=P,tooltipPosition:T="bottom",children:g,tooltipStyle:w,tooltipProps:S,...t}=e,l=n.useRef(null),[p,u]=n.useState(0);return n.useEffect(()=>()=>{l.current&&(l.current=null)},[]),$(_,{...t,onMouseOver:o=>{var i;(i=t.onMouseOver)==null||i.call(t,o),u(Date.now())},onMouseOut:o=>{var i;(i=t.onMouseOut)==null||i.call(t,o),u(0)},onWheel:o=>{var i;(i=t.onWheel)==null||i.call(t,o),u(Date.now())},ref:o=>{l.current=o,a&&(typeof a=="function"&&a(o),"current"in a&&(a.current=o))},children:[!!m&&r(C,{id:y,children:n.createElement(D,{...S||{},tooltip:m,tooltipPosition:T,parent:l,key:`${p}`,show:!!p,style:w})}),g]})}),d=b`
  color: ${e=>e.theme.colors.elementsContentFocus};
  background-color: ${e=>e.theme.colors.elementsLayerActivated};

  ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
`;b`
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
`;const _=I.button.attrs({type:"button"})`
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
`;try{c.displayName="IconButton",c.__docgenInfo={description:"",displayName:"IconButton",props:{$active:{defaultValue:null,description:"",name:"$active",required:!1,type:{name:"boolean"}},portalID:{defaultValue:null,description:"@description which portal container to render tooltip",name:"portalID",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "style" | "tooltip" | "tooltipPosition" | "parent" | "show">'}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-top"'},{value:'"left"'},{value:'"left-bottom"'},{value:'"right-top"'},{value:'"right"'},{value:'"right-bottom"'}]}},tooltipStyle:{defaultValue:null,description:"",name:"tooltipStyle",required:!1,type:{name:"CSSProperties"}},$activeThemes:{defaultValue:null,description:"@description override active styles",name:"$activeThemes",required:!1,type:{name:"CSSProperties"}},$hoverThemes:{defaultValue:null,description:"@description override hover styles",name:"$hoverThemes",required:!1,type:{name:"CSSProperties"}},$disableThemes:{defaultValue:null,description:"@description override disabled styles",name:"$disableThemes",required:!1,type:{name:"CSSProperties"}}}}}catch{}const W={title:"ODE Library/Buttons/Tab/IconButton",tags:["autodocs"],component:c,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function k({...e}){const{colors:a}=B();return $("div",{style:{padding:20,background:a.container500},children:[r("a",{target:"blank",href:"https://www.figma.com/design/gNhCiOwsW1zXM0DAiLr7Ck/%F0%9F%A7%AD-Plus-DS?node-id=3280-44423&t=UYSbf1B5mzuwpQK3-4",rel:"noreferrer",children:"design reference"}),r("br",{}),r("br",{}),r("h4",{children:"- default Tab Icon Button"}),r("br",{}),r(c,{...e}),r("div",{style:{height:"80dvw"}})]})}const s={render:k,args:{children:r(x,{width:20,height:20}),disabled:!1,$active:!1,tooltip:"Resource ⌥1",tooltipPosition:"top",$disableThemes:{backgroundColor:"red"}}};var h,v,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const z=["IconButton"];export{s as IconButton,z as __namedExportsOrder,W as default};
//# sourceMappingURL=TabIconButton.stories-9028db4c.js.map
