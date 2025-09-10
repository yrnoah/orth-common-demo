import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{c as m,p as w}from"./styled-components.browser.esm-6dd904cc.js";import{P as j,t as L}from"./Portal-01fdeda0.js";import{T as S}from"./Tooltip-a379440d.js";import{t as D}from"./styled-components.browser.esm-7ed061eb.js";import{D as B}from"./DmIcon20Add-61b2a945.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";import"./index-8ce4a492.js";import"./TooltipPoint-976e1e10.js";const s=a.forwardRef((t,o)=>{const{tooltip:c,portalID:y=L,tooltipPosition:v="bottom",children:g,tooltipStyle:x,tooltipProps:$,...l}=t,u=a.useRef(null),[d,p]=a.useState(0);return e.jsxs(C,{...l,onMouseOver:n=>{var r;(r=l.onMouseOver)==null||r.call(l,n),p(Date.now())},onMouseOut:n=>{var r;(r=l.onMouseOut)==null||r.call(l,n),p(0)},onWheel:n=>{var r;(r=l.onWheel)==null||r.call(l,n),p(Date.now())},ref:n=>{u.current=n,o&&(typeof o=="function"&&o(n),"current"in o&&(o.current=n))},children:[!!c&&e.jsx(j,{id:y,children:a.createElement(S,{...$||{},tooltip:c,tooltipPosition:v,parent:u,key:`${d}`,show:!!d,style:x})}),g]})}),_=m`
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
`,C=w.button.attrs({type:"button"})`
  ${_}
`;try{s.displayName="LabelButton",s.__docgenInfo={description:"",displayName:"LabelButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},$active:{defaultValue:null,description:"@description focused",name:"$active",required:!1,type:{name:"boolean"}},portalID:{defaultValue:null,description:"@description which portal container to render tooltip",name:"portalID",required:!1,type:{name:"string"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "style" | "tooltip" | "show" | "tooltipPosition" | "parent">'}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"left-top"'},{value:'"left-bottom"'},{value:'"right-top"'},{value:'"right-bottom"'}]}},tooltipStyle:{defaultValue:null,description:"",name:"tooltipStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const N={title:"ODE Library/Buttons/LabelButton",tags:["autodocs"],component:s,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function P({...t}){const{colors:o}=D();return e.jsxs("div",{style:{padding:20,background:o.container500},children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1127-1058&t=Vcy9wfbTrlCfAp8z-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default Label Button"}),e.jsx("br",{}),e.jsx(s,{...t}),e.jsx("div",{style:{height:"80dvw"}})]})}const i={render:P,args:{style:{position:"absolute",left:"95%",top:150},children:e.jsxs(e.Fragment,{children:[e.jsx(B,{width:20,height:20})," Label text"]}),disabled:!1,$active:!1,tooltip:"notification"}};var f,h,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const K=["LabelButton"];export{i as LabelButton,K as __namedExportsOrder,N as default};
//# sourceMappingURL=LabelButton.stories-0c840afa.js.map
