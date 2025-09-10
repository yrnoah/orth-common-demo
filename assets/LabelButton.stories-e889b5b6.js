import{j as c,a as n,F as L}from"./jsx-runtime-a888423b.js";import{r}from"./index-8db94870.js";import{c as f,p as S}from"./styled-components.browser.esm-6dd904cc.js";import{P as D,t as B}from"./Portal-847ba74d.js";import{T as _}from"./Tooltip-c494eb8d.js";import{t as C}from"./styled-components.browser.esm-7ed061eb.js";import{D as F}from"./DmIcon20Add-8a2014f9.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";import"./index-8ce4a492.js";import"./TooltipPoint-61ad6988.js";const s=r.forwardRef((t,e)=>{const{tooltip:u,portalID:v=B,tooltipPosition:g="bottom",children:$,tooltipStyle:w,tooltipProps:x,...o}=t,d=r.useRef(null),[m,p]=r.useState(0);return c(V,{...o,onMouseOver:l=>{var a;(a=o.onMouseOver)==null||a.call(o,l),p(Date.now())},onMouseOut:l=>{var a;(a=o.onMouseOut)==null||a.call(o,l),p(0)},onWheel:l=>{var a;(a=o.onWheel)==null||a.call(o,l),p(Date.now())},ref:l=>{d.current=l,e&&(typeof e=="function"&&e(l),"current"in e&&(e.current=l))},children:[!!u&&n(D,{id:v,children:r.createElement(_,{...x||{},tooltip:u,tooltipPosition:g,parent:d,key:`${m}`,show:!!m,style:w})}),$]})}),P=f`
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

  ${t=>t.$active&&f`
      color: ${e=>e.theme.colors.elementsContentMain};

      &::after {
        background-color: ${e=>e.theme.colors.elementsContentFocus};
      }
    `}

  &:disabled {
    color: ${t=>t.theme.colors.elementsContentMain};
    opacity: 0.3;
    cursor: not-allowed;
  }
`,V=S.button.attrs({type:"button"})`
  ${P}
`;try{s.displayName="LabelButton",s.__docgenInfo={description:"",displayName:"LabelButton",props:{$active:{defaultValue:null,description:"@description focused",name:"$active",required:!1,type:{name:"boolean"}},portalID:{defaultValue:null,description:"@description which portal container to render tooltip",name:"portalID",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:'Omit<TooltipProps, "style" | "tooltip" | "tooltipPosition" | "parent" | "show">'}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-top"'},{value:'"left"'},{value:'"left-bottom"'},{value:'"right-top"'},{value:'"right"'},{value:'"right-bottom"'}]}},tooltipStyle:{defaultValue:null,description:"",name:"tooltipStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const W={title:"ODE Library/Buttons/LabelButton",tags:["autodocs"],component:s,argTypes:{tooltipPosition:{control:"select",options:["top","bottom"]},theme:{table:{disable:!0}},children:{table:{disable:!0}}}};function q({...t}){const{colors:e}=C();return c("div",{style:{padding:20,background:e.container500},children:[n("a",{target:"blank",href:"https://www.figma.com/design/xySxqdUKe9sSfV8SLimvdi/%F0%9F%8C%8F-Global-DS-Kit?node-id=1127-1058&t=Vcy9wfbTrlCfAp8z-4",rel:"noreferrer",children:"design reference"}),n("br",{}),n("br",{}),n("h4",{children:"- default Label Button"}),n("br",{}),n(s,{...t}),n("div",{style:{height:"80dvw"}})]})}const i={render:q,args:{style:{position:"absolute",left:"95%",top:150},children:c(L,{children:[n(F,{width:20,height:20})," Label text"]}),disabled:!1,$active:!1,tooltip:"notification"}};var h,b,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const z=["LabelButton"];export{i as LabelButton,z as __namedExportsOrder,W as default};
//# sourceMappingURL=LabelButton.stories-e889b5b6.js.map
