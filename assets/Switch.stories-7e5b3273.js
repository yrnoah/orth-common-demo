import{a as b,j as I,F as O}from"./jsx-runtime-a888423b.js";import{r as g}from"./index-8db94870.js";import{p as W,c as C}from"./styled-components.browser.esm-6dd904cc.js";import{h as j}from"./colors-1c1355f0.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";const s=g.forwardRef((e,a)=>{const{size:t=10,borderWidth:l=0,width:c,defaultChecked:y=!1,checked:u,disabled:i=!1,onChange:p,style:r,padding:v=3,minPadding:w=3,...T}=e,[F,N]=g.useState(y),k=typeof u=="boolean"?u:F,f=g.useMemo(()=>{const d=Math.max(v,w),o=l||parseFloat(`${r==null?void 0:r.borderWidth}`)||0,D=t+d*2+o,P=c||R(t)+d*2+o,E=d+t*.5+o;return{...r||{},padding:d,borderRadius:E,width:Math.max(P,D),borderWidth:Math.max(o,0)}},[r,v,w,t,c,l]);if(t<=0)return null;const M=f.width-t-f.borderWidth-f.padding*2;return b(_,{type:"button",...T,ref:a,active:k,size:t,translateX:M,disabled:i,style:f,onClick:d=>{if(i)return;const o=!k;p&&p(o,d),N(o)},children:b(n,{})})});g.memo(s);const n=W.div({}),_=W.button`
  box-sizing: border-box;
  background-color: ${e=>e.defaultBackgroundColor||"#f0f0f0"};
  width: max-content;
  border-style: solid;
  border-color: ${e=>e.defaultBorderColor||"rgba(0, 0, 0, 0.1)"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  ${n} {
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: ${({size:e})=>e*.5}px;
    background-color: ${e=>e.defaultColor||e.theme.colors.Neutral_300};
    transform: translateX(0);
  }

  ${({duration:e,transitionTiming:a})=>C`
    transition: all ${e??300}ms ${a||"linear"};
    ${n} {
      transition: all ${e??300}ms ${a||"linear"};
    }
  `}

  ${({active:e,theme:a,disabled:t,translateX:l,activeBorderColor:c,activeColor:y,activeBackgroundColor:u})=>{if(e){if(t)return C`
          ${n} {
            transform: translateX(${l}px);
          }
        `;let i=c,p=y||a.colors.brandColor.Primary7;if(!i){const r=j(a.colors.Oxfordblue_500);i=r?`rgba(${r.r},${r.g},${r.b},0.2)`:a.colors.Oxfordblue_500}return C`
        border-color: ${i};
        background-color: ${u||"#f0f0f0"};
        ${n} {
          background-color: ${p};
          transform: translateX(${l}px);
        }
      `}}}
`,R=e=>e*2.6;try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{activeColor:{defaultValue:{value:'brandColor.Primary7: "#457D96"'},description:"@description active color for slider dot",name:"activeColor",required:!1,type:{name:"string"}},activeBackgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"activeBackgroundColor",required:!1,type:{name:"string"}},defaultColor:{defaultValue:{value:'Neutral_300: "#BFBFBF"'},description:"@description default color for button wrapper",name:"defaultColor",required:!1,type:{name:"string"}},defaultBackgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"defaultBackgroundColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"rgba(0,0,0,0.1)"},description:"@description default color for button border",name:"defaultBorderColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"theme.colors.Oxfordblue_500 opacity 0.2"},description:"",name:"activeBorderColor",required:!1,type:{name:"string"}},borderWidth:{defaultValue:{value:"0"},description:"",name:"borderWidth",required:!1,type:{name:"number"}},checked:{defaultValue:{value:"undefined"},description:"@description if set, state outside control the switch",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"300"},description:`@unit million seconds
@description transition duration`,name:"duration",required:!1,type:{name:"number"}},transitionTiming:{defaultValue:{value:"linear"},description:"@description transition timing function",name:"transitionTiming",required:!1,type:{name:"TransitionTimingFunction"}},padding:{defaultValue:{value:"3"},description:`@min 3
@unit pixel`,name:"padding",required:!1,type:{name:"number"}},minPadding:{defaultValue:{value:"3"},description:"@unit pixel",name:"minPadding",required:!1,type:{name:"number"}},size:{defaultValue:{value:"10"},description:`@unit pixel
@description dot size`,name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:`@min size + padding * 2 + borderWidth
@description container width, if not set, width = size * 2.6 + padding + border-size`,name:"width",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}}}catch{}try{n.displayName="Dot",n.__docgenInfo={description:"",displayName:"Dot",props:{}}}catch{}try{_.displayName="Wrapper",_.__docgenInfo={description:"",displayName:"Wrapper",props:{}}}catch{}const K={title:"PAAS/Switch",tags:["autodocs"],component:s};function z({...e}){return I(O,{children:[b(s,{...e}),!!e.id&&b("label",{htmlFor:e.id,style:{marginLeft:10},children:e.id})]})}const m={render:z,args:{size:10,padding:3,transitionTiming:"linear"}},h={render:z,args:{size:20,padding:5,defaultChecked:!0,activeColor:"orange",transitionTiming:"ease-out",id:"test switch",onChange:e=>console.info("change checked to: ",e)}};var $,x,S;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: SwitchStory,
  args: {
    size: 10,
    padding: 3,
    transitionTiming: "linear"
  }
}`,...(S=(x=m.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var V,q,B;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(q=h.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Q=["Switch","DefaultCheckedSwitch"];export{h as DefaultCheckedSwitch,m as Switch,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Switch.stories-7e5b3273.js.map
