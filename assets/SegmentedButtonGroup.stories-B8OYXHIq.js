import{r as d,j as t,l as x,d as b}from"./iframe-D12yBJYT.js";import{S as k}from"./SegmentedButton-Bt3g0dJM.js";import"./preload-helper-D9Z9MdNV.js";const p=e=>{const{option:o,$size:i="medium",active:n,disabled:s=!1,onActiveChange:f,...g}=e,[v,h]=d.useState(()=>typeof n=="string"?n:""),l=typeof n=="string"?n:v;return t.jsx(S,{...g,$size:i,disabled:s,children:o.map(r=>{const u=l===r.key,c={$size:i};return s&&(c.disabled=!0),s&&!u&&(c.style={...r.properties?.style||{},backgroundColor:"transparent"}),d.createElement(k,{...r.properties,...c,$active:u,onClick:m=>{s||l!==r.key&&(r.properties?.onClick?.(m),f?.(r.key,m),h(r.key))},key:r.key})})})},S=b.div`
  ${e=>e.theme.flex.row}
  width: fit-content;
  overflow: hidden;
  background-color: #f8fafc;
  transition: background-color 0.2s ease;
  padding: 2px;
  border-radius: ${e=>e.theme.radius.xxxs}px;

  ${({disabled:e})=>{if(e)return x`
        background-color: ${o=>o.theme.colors.button.disabled};
      `}}
`;p.__docgenInfo={description:`@design https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=6011-9842&t=FAzx6jwix7ISvVDA-4
@description radio (single) active`,methods:[],displayName:"SegmentedButtonGroup",props:{active:{required:!1,tsType:{name:"string"},description:"@description option.key | option.key array"},onActiveChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  activeKey: TOption["key"],
  event: React.MouseEvent<HTMLButtonElement>
) => void`,signature:{arguments:[{type:{name:'TOption["key"]',raw:'TOption["key"]'},name:"activeKey"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},option:{required:!0,tsType:{name:"Array",elements:[{name:"TOption"}],raw:"TOption[]"},description:"@description button array"},$size:{required:!1,tsType:{name:'SegmentedButtonProps["$size"]',raw:'SegmentedButtonProps["$size"]'},description:"@default medium"},disabled:{required:!1,tsType:{name:"boolean"},description:`@default false
@description override single button disable;`}},composes:["ComponentProps"]};const y=[{key:"1",properties:{children:"1"}},{key:"2",properties:{children:"2"}},{key:"3",properties:{children:"3"}}],w=[{key:"1",properties:{children:"true",style:{flex:1}}},{key:"2",properties:{children:"false",style:{flex:1}}},{key:"3",properties:{children:"others",style:{flex:2}}}],A={title:"ODE Library/Buttons/SegmentedButtonGroup",tags:["autodocs"],component:p,argTypes:{$size:{control:"select",options:["medium","small","large"]},theme:{table:{disable:!0}}}};function j({...e}){const[o,i]=d.useState(e.active);return d.useEffect(()=>i(e.active||""),[e.active]),t.jsxs("div",{children:[t.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=6011-9842&t=FAzx6jwix7ISvVDA-4",rel:"noreferrer",children:"design reference"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- default SegmentedButton Group"}),t.jsx("br",{}),t.jsx(p,{...e,active:o,option:e.option||[],onActiveChange:n=>i(n)}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- controlled size (option.properties.style.flex = number) "}),t.jsx("h4",{children:'- container style: width: "50vw", height: 80; item style: flex: 1 1 2'}),t.jsx("br",{}),t.jsx(p,{...e,active:o,option:w||[],style:{width:"50vw",height:80},onActiveChange:n=>i(n)})]})}const a={render:j,args:{active:y[1].key,disabled:!1,option:y,$size:"medium"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: SegmentedButtonGroupStory,
  args: {
    active: option[1].key,
    disabled: false,
    option,
    $size: "medium"
  }
}`,...a.parameters?.docs?.source}}};const $=["SegmentedButtonGroup"];export{a as SegmentedButtonGroup,$ as __namedExportsOrder,A as default};
