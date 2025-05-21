import{j as e}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{c as m,p as v,t as j}from"./styled-components.browser.esm-655d472d.js";import{P as w,t as L}from"./Portal-01fdeda0.js";import{T as S}from"./Tooltip-fc84eb61.js";import{D}from"./DmIcon20Add-61b2a945.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const i=c.forwardRef((t,o)=>{const{tooltip:d,portalID:x=L,tooltipPosition:y="bottom",children:g,tooltipStyle:$,...n}=t,p=c.useRef(null),[u,s]=c.useState(0);return e.jsxs(_,{...n,onMouseOver:r=>{var a;(a=n.onMouseOver)==null||a.call(n,r),s(Date.now())},onMouseOut:r=>{var a;(a=n.onMouseOut)==null||a.call(n,r),s(0)},onWheel:r=>{var a;(a=n.onWheel)==null||a.call(n,r),s(Date.now())},ref:r=>{p.current=r,o&&(typeof o=="function"&&o(r),"current"in o&&(o.current=r))},children:[!!d&&e.jsx(w,{id:x,children:e.jsx(S,{tooltip:d,tooltipPosition:y,parent:p,show:!!u,style:$},`${u}`)}),g]})}),B=m`
  ${t=>t.theme.button.reset}
  ${t=>t.theme.flex.row}
  ${t=>t.theme.flex.center}
  ${t=>t.theme.fonts.Default}
  position: relative;
  gap: 4px;
  color: ${t=>t.theme.colors.elementsContentMain};
  padding: 4px 0;
  transition: all ${t=>t.theme.animation.duration};

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    transition: all ${t=>t.theme.animation.duration};
  }

  &:hover {
    color: ${t=>t.theme.colors.elementsContentFocus};
  }

  &:active {
    color: ${t=>t.theme.colors.elementsContentFocus};
  }

  ${t=>t.$active&&m`
      color: ${o=>o.theme.colors.elementsContentMain};

      &::after {
        background-color: ${o=>o.theme.colors.elementsContentFocus};
      }
    `}

  &:disabled {
    color: ${t=>t.theme.colors.elementsContentMain};
    opacity: 0.3;
    cursor: not-allowed;
  }
`,_=v.button.attrs({type:"button"})`
  ${B}
`;try{i.displayName="LabelButton",i.__docgenInfo={description:"",displayName:"LabelButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},$active:{defaultValue:null,description:"@description focused",name:"$active",required:!1,type:{name:"boolean"}},portalID:{defaultValue:null,description:"@description which portal container to render tooltip",name:"portalID",required:!1,type:{name:"string"}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},tooltipStyle:{defaultValue:null,description:"",name:"tooltipStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const k={title:"ODE Library/Buttons/LabelButton",tags:["autodocs"],component:i,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function C({...t}){const{colors:o}=j();return e.jsxs("div",{style:{padding:20,background:o.container500},children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1127-1058&t=Vcy9wfbTrlCfAp8z-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default Label Button"}),e.jsx("br",{}),e.jsx(i,{...t}),e.jsx("div",{style:{height:"80dvw"}})]})}const l={render:C,args:{style:{position:"absolute",left:"95%",top:150},children:e.jsxs(e.Fragment,{children:[e.jsx(D,{width:20,height:20})," Label text"]}),disabled:!1,$active:!1,tooltip:"notification"}};var f,h,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: LabelButtonStory,
  args: {
    style: {
      position: "absolute",
      left: "95%",
      top: 150
    },
    children: <>
        <DmIcon20Add width={20} height={20} /> Label text
      </>,
    disabled: false,
    $active: false,
    tooltip: "notification"
    // tooltip:
    //   "在这里显示 有几个result了，有Result 才可以点击 有没有Result都可以Load Result 在Diagram 页面选完成功后再跳转",
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const E=["LabelButton"];export{l as LabelButton,E as __namedExportsOrder,k as default};
//# sourceMappingURL=LabelButton.stories-c2e1625d.js.map
