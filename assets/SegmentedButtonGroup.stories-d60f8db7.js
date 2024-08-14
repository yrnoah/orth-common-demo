import{j as t}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{S as E}from"./SegmentedButton-a48b2d42.js";import{p as G,c as f}from"./styled-components.browser.esm-655d472d.js";import"./_commonjsHelpers-042e6b4d.js";const a=s.forwardRef((e,n)=>{const{option:i,$instance:o=!1,$size:y="medium",active:d,disabled:l=!1,onActiveChange:u,...j}=e,[B,z]=s.useState(()=>typeof d=="string"?d:""),h=typeof d=="string"?d:B;return t.jsx(_,{...j,$size:y,disabled:l,ref:n,children:i.map(r=>{var v;const g=h===r.key,m={$size:y,$instance:o};return l&&(m.disabled=!0),l&&!g&&(m.style={...((v=r.properties)==null?void 0:v.style)||{},backgroundColor:"transparent"}),s.createElement(E,{...r.properties,...m,$active:g,onClick:x=>{var p,b;l||h!==r.key&&((b=(p=r.properties)==null?void 0:p.onClick)==null||b.call(p,x),u==null||u(r.key,x),z(r.key))},key:r.key})})})}),_=G.div`
  ${e=>e.theme.flex.row}
  width: fit-content;
  overflow: hidden;
  background-color: #f8fafc;
  transition: background-color 0.2s ease;
  ${({$size:e,theme:n})=>e==="large"?f`
        padding: 4px;
        border-radius: ${n.radius.s}px;
      `:f`
      padding: 2px;
      border-radius: ${n.radius.xxxs}px;
    `}

  ${({disabled:e})=>{if(e)return f`
        background-color: transparent;
      `}}
`;try{a.displayName="SegmentedButtonGroup",a.__docgenInfo={description:"",displayName:"SegmentedButtonGroup",props:{option:{defaultValue:null,description:"@description button array",name:"option",required:!0,type:{name:"SegmentedButtonGroupOption[]"}},active:{defaultValue:null,description:"@description option.key | option.key array",name:"active",required:!1,type:{name:"string"}},onActiveChange:{defaultValue:null,description:"",name:"onActiveChange",required:!1,type:{name:"((activeKey: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},$instance:{defaultValue:{value:"false"},description:`@description override single button $instance;
when true: width=fit-content | min-width=unset
when false width=auto | min-width=64`,name:"$instance",required:!1,type:{name:"boolean"}},$size:{defaultValue:{value:"medium"},description:`@description override single button $size;
small: min-height=32, horizontal-padding=6 | medium: min-height=36, horizontal-padding=12`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"@description override single button disable;",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const k=[{key:"1",properties:{children:"1"}},{key:"2",properties:{children:"2"}},{key:"3",properties:{children:"3"}}],A=[{key:"1",properties:{children:"true",style:{flex:1}}},{key:"2",properties:{children:"false",style:{flex:1}}},{key:"3",properties:{children:"others",style:{flex:2}}}],L={title:"ODE Library/Buttons/SegmentedButtonGroup",tags:["autodocs"],component:a,argTypes:{$size:{control:"select",options:["medium","small","large"]},theme:{table:{disable:!0}}}};function q({...e}){const[n,i]=s.useState(e.active);return s.useEffect(()=>i(e.active||""),[e.active]),t.jsxs("div",{children:[t.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=6011-9842&t=FAzx6jwix7ISvVDA-4",rel:"noreferrer",children:"design reference"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- default SegmentedButton Group"}),t.jsx("br",{}),t.jsx(a,{...e,active:n,option:e.option||[],onActiveChange:o=>i(o)}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- controlled size (option.properties.style.flex = number) "}),t.jsx("h4",{children:'- container style: width: "50vw", height: 80; item style: flex: 1 1 2'}),t.jsx("br",{}),t.jsx(a,{...e,active:n,option:A||[],style:{width:"50vw",height:80},onActiveChange:o=>i(o)})]})}const c={render:q,args:{active:k[1].key,disabled:!1,$instance:!1,option:k,$size:"medium"}};var S,$,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: SegmentedButtonGroupStory,
  args: {
    active: option[1].key,
    disabled: false,
    $instance: false,
    option,
    $size: "medium"
  }
}`,...(w=($=c.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const R=["SegmentedButtonGroup"];export{c as SegmentedButtonGroup,R as __namedExportsOrder,L as default};
//# sourceMappingURL=SegmentedButtonGroup.stories-d60f8db7.js.map
