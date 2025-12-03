import{r as y,j as a,d as x,l as w,h as E}from"./iframe-BY0Ds_wu.js";import"./preload-helper-D9Z9MdNV.js";const g=e=>{const{size:t=10,borderWidth:l=0,width:d,defaultChecked:b=!1,checked:u,disabled:p=!1,onChange:o,style:s,padding:n=3,minPadding:C=3,...$}=e,[S,q]=y.useState(b),k=typeof u=="boolean"?u:S,f=y.useMemo(()=>{const i=Math.max(n,C),r=l||parseFloat(`${s?.borderWidth}`)||0,B=t+i*2+r,_=d||M(t)+i*2+r,z=i+t*.5+r;return{...s||{},padding:i,borderRadius:z,width:Math.max(_,B),borderWidth:Math.max(r,0)}},[s,n,C,t,d,l]);if(t<=0)return null;const v=f.width-t-f.borderWidth-f.padding*2;return a.jsx(F,{type:"button",...$,active:k,size:t,translateX:v,disabled:p,style:f,onClick:i=>{if(p)return;const r=!k;o&&o(r,i),q(r)},children:a.jsx(c,{})})};y.memo(g);const c=x.div({}),F=x.button`
  box-sizing: border-box;
  background-color: ${e=>e.defaultBackgroundColor||"#f0f0f0"};
  width: max-content;
  border-style: solid;
  border-color: ${e=>e.defaultBorderColor||"rgba(0, 0, 0, 0.1)"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  ${c} {
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: ${({size:e})=>e*.5}px;
    background-color: ${e=>e.defaultColor||e.theme.colors.Neutral_300};
    transform: translateX(0);
  }

  ${({duration:e,transitionTiming:t})=>w`
    transition: all ${e??300}ms ${t||"linear"};
    ${c} {
      transition: all ${e??300}ms ${t||"linear"};
    }
  `}

  ${({active:e,theme:t,disabled:l,translateX:d,activeBorderColor:b,activeColor:u,activeBackgroundColor:p})=>{if(e){if(l)return w`
          ${c} {
            transform: translateX(${d}px);
          }
        `;let o=b;const s=u||t.colors.brandColor.Primary7;if(!o){const n=E(t.colors.Oxfordblue_500);o=n?`rgba(${n.r},${n.g},${n.b},0.2)`:t.colors.Oxfordblue_500}return w`
        border-color: ${o};
        background-color: ${p||"#f0f0f0"};
        ${c} {
          background-color: ${s};
          transform: translateX(${d}px);
        }
      `}}}
`,M=e=>e*2.6;g.__docgenInfo={description:`@link https://www.figma.com/file/l4NEBUfwUwaVNZZAkcTARj/FrontPanel-(Copy)?type=design&node-id=1904-32855&mode=design&t=kq8wVW73QlMqbP5I-0
@link https://www.figma.com/file/l4NEBUfwUwaVNZZAkcTARj/FrontPanel-(Copy)?type=design&node-id=1785-23057&mode=design&t=AR5HnHCGhclCF8U4-0`,methods:[],displayName:"Switch",props:{activeColor:{required:!1,tsType:{name:"string"},description:`@default brandColor.Primary7: "#457D96"
@description active color for slider dot`},activeBackgroundColor:{required:!1,tsType:{name:"string"},description:"@default #f0f0f0"},defaultColor:{required:!1,tsType:{name:"string"},description:`@default Neutral_300: "#BFBFBF"
@description default color for button wrapper`},defaultBackgroundColor:{required:!1,tsType:{name:"string"},description:"@default #f0f0f0"},defaultBorderColor:{required:!1,tsType:{name:"string"},description:`@default rgba(0,0,0,0.1)
@description default color for button border`},activeBorderColor:{required:!1,tsType:{name:"string"},description:"@default theme.colors.Oxfordblue_500 opacity 0.2"},borderWidth:{required:!1,tsType:{name:"number"},description:"@default 0"},checked:{required:!1,tsType:{name:"boolean"},description:`@default undefined
@description if set, state outside control the switch`},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"@default false"},disabled:{required:!1,tsType:{name:"boolean"},description:"@default false"},duration:{required:!1,tsType:{name:"number"},description:"@default 300 @unit million seconds @description transition duration"},transitionTiming:{required:!1,tsType:{name:'ReactCSSProperties["transitionTimingFunction"]',raw:'React.CSSProperties["transitionTimingFunction"]'},description:"@default linear @description transition timing function"},padding:{required:!1,tsType:{name:"number"},description:"@default 3 @min 3 @unit pixel"},minPadding:{required:!1,tsType:{name:"number"},description:"@default 3 @unit pixel"},size:{required:!1,tsType:{name:"number"},description:`@default 10
@unit pixel
@description dot size`},width:{required:!1,tsType:{name:"number"},description:`@min size + padding * 2 + borderWidth
@description container width, if not set, width = size * 2.6 + padding + border-size`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement>
) => void`,signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const P={title:"PAAS/Switch",tags:["autodocs"],component:g};function T({...e}){return a.jsxs(a.Fragment,{children:[a.jsx(g,{...e}),!!e.id&&a.jsx("label",{htmlFor:e.id,style:{marginLeft:10},children:e.id})]})}const m={render:T,args:{size:10,padding:3,transitionTiming:"linear"}},h={render:T,args:{size:20,padding:5,defaultChecked:!0,activeColor:"orange",transitionTiming:"ease-out",id:"test switch",onChange:e=>console.info("change checked to: ",e)}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: SwitchStory,
  args: {
    size: 10,
    padding: 3,
    transitionTiming: "linear"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: SwitchStory,
  args: {
    size: 20,
    padding: 5,
    defaultChecked: true,
    activeColor: "orange",
    transitionTiming: "ease-out",
    id: "test switch",
    onChange: checked => console.info("change checked to: ", checked)
  }
}`,...h.parameters?.docs?.source}}};const j=["Switch","DefaultCheckedSwitch"];export{h as DefaultCheckedSwitch,m as Switch,j as __namedExportsOrder,P as default};
