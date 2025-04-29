import{j as e}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{p as v,c as $,t as j}from"./styled-components.browser.esm-655d472d.js";import{P as w,t as L}from"./Portal-01fdeda0.js";import{T as D}from"./Tooltip-80518b4d.js";import{D as S}from"./DmIcon20Add-61b2a945.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const i=c.forwardRef((t,o)=>{const{tooltip:d,portalID:b=L,tooltipPosition:x="bottom",children:y,tooltipStyle:g,...n}=t,p=c.useRef(null),[u,s]=c.useState(0);return e.jsxs(B,{...n,onMouseOver:r=>{var a;(a=n.onMouseOver)==null||a.call(n,r),s(Date.now())},onMouseOut:r=>{var a;(a=n.onMouseOut)==null||a.call(n,r),s(0)},onWheel:r=>{var a;(a=n.onWheel)==null||a.call(n,r),s(Date.now())},ref:r=>{p.current=r,o&&(typeof o=="function"&&o(r),"current"in o&&(o.current=r))},children:[!!d&&e.jsx(w,{id:b,children:e.jsx(D,{tooltip:d,tooltipPosition:x,parent:p,show:!!u,style:g},`${u}`)}),y]})}),B=v.button.attrs({type:"button"})`
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

  ${t=>t.$active&&$`
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
`;try{i.displayName="LabelButton",i.__docgenInfo={description:"",displayName:"LabelButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},$active:{defaultValue:null,description:"@description focused",name:"$active",required:!1,type:{name:"boolean"}},portalID:{defaultValue:null,description:"@description which portal container to render tooltip",name:"portalID",required:!1,type:{name:"string"}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},tooltipStyle:{defaultValue:null,description:"",name:"tooltipStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const T={title:"ODE Library/Buttons/LabelButton",tags:["autodocs"],component:i,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function _({...t}){const{colors:o}=j();return e.jsxs("div",{style:{padding:20,background:o.container500},children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1127-1058&t=Vcy9wfbTrlCfAp8z-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default Label Button"}),e.jsx("br",{}),e.jsx(i,{...t}),e.jsx("div",{style:{height:"80dvw"}})]})}const l={render:_,args:{style:{position:"absolute",left:"95%",top:150},children:e.jsxs(e.Fragment,{children:[e.jsx(S,{width:20,height:20})," Label text"]}),disabled:!1,$active:!1,tooltip:"notification"}};var m,f,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const k=["LabelButton"];export{l as LabelButton,k as __namedExportsOrder,T as default};
//# sourceMappingURL=LabelButton.stories-fbd0cdd7.js.map
