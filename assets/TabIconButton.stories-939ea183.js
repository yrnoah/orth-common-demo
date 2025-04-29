import{j as t}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{c as g,p as x,t as S}from"./styled-components.browser.esm-655d472d.js";import{P as I,t as w}from"./Portal-01fdeda0.js";import{T as j}from"./Tooltip-80518b4d.js";import{D}from"./DmIcon20Add-61b2a945.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const c=a.forwardRef((e,s)=>{const{tooltip:u,portalID:$=w,tooltipPosition:b="bottom",children:y,tooltipStyle:T,...o}=e,i=a.useRef(null),[m,d]=a.useState(0);return a.useEffect(()=>()=>{i.current&&(i.current=null)},[]),t.jsxs(B,{...o,onMouseOver:r=>{var n;(n=o.onMouseOver)==null||n.call(o,r),d(Date.now())},onMouseOut:r=>{var n;(n=o.onMouseOut)==null||n.call(o,r),d(0)},onWheel:r=>{var n;(n=o.onWheel)==null||n.call(o,r),d(Date.now())},ref:r=>{i.current=r,s&&(typeof s=="function"&&s(r),"current"in s&&(s.current=r))},children:[!!u&&t.jsx(I,{id:$,children:t.jsx(j,{tooltip:u,tooltipPosition:b,parent:i,show:!!m,style:T},`${m}`)}),y]})}),p=g`
  color: ${e=>e.theme.colors.elementsContentFocus};
  background-color: ${e=>e.theme.colors.elementsLayerActivated};

  ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
`,B=x.button.attrs({type:"button"})`
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
    ${p}

    ${e=>e.$activeThemes?{...e.$activeThemes}:void 0}
  }

  ${e=>e.$active&&p}

  &:disabled {
    color: ${e=>e.theme.colors.elementsContentMain};
    background-color: transparent;
    opacity: 0.3;
    cursor: not-allowed;

    ${e=>e.$disableThemes?{...e.$disableThemes}:void 0}
  }
`;try{c.displayName="IconButton",c.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},$active:{defaultValue:null,description:"",name:"$active",required:!1,type:{name:"boolean"}},portalID:{defaultValue:null,description:"@description which portal container to render tooltip",name:"portalID",required:!1,type:{name:"string"}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},tooltipStyle:{defaultValue:null,description:"",name:"tooltipStyle",required:!1,type:{name:"CSSProperties"}},$activeThemes:{defaultValue:null,description:"@description override active styles",name:"$activeThemes",required:!1,type:{name:"CSSProperties"}},$hoverThemes:{defaultValue:null,description:"@description override hover styles",name:"$hoverThemes",required:!1,type:{name:"CSSProperties"}},$disableThemes:{defaultValue:null,description:"@description override disabled styles",name:"$disableThemes",required:!1,type:{name:"CSSProperties"}}}}}catch{}const R={title:"ODE Library/Buttons/Tab/IconButton",tags:["autodocs"],component:c,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function C({...e}){const{colors:s}=S();return t.jsxs("div",{style:{padding:20,background:s.container500},children:[t.jsx("a",{target:"blank",href:"https://www.figma.com/design/gNhCiOwsW1zXM0DAiLr7Ck/%F0%9F%A7%AD-Plus-DS?node-id=3280-44423&t=UYSbf1B5mzuwpQK3-4",rel:"noreferrer",children:"design reference"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- default Tab Icon Button"}),t.jsx("br",{}),t.jsx(c,{...e}),t.jsx("div",{style:{height:"80dvw"}})]})}const l={render:C,args:{children:t.jsx(D,{width:20,height:20}),disabled:!1,$active:!1,tooltip:"Resource ⌥1",tooltipPosition:"top",$disableThemes:{backgroundColor:"red"}}};var h,f,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const E=["IconButton"];export{l as IconButton,E as __namedExportsOrder,R as default};
//# sourceMappingURL=TabIconButton.stories-939ea183.js.map
