import{j as l}from"./jsx-runtime-94f6e698.js";import{r as b}from"./index-8db94870.js";import{p as B,c as v}from"./styled-components.browser.esm-655d472d.js";import{h as E}from"./colors-e320fa4b.js";import"./_commonjsHelpers-042e6b4d.js";const c=b.forwardRef((e,a)=>{const{size:t=10,borderWidth:s=0,width:u,defaultChecked:y=!1,checked:p,disabled:i=!1,onChange:f,style:r,padding:_=3,minPadding:w=3,...z}=e,[D,N]=b.useState(y),x=typeof p=="boolean"?p:D,m=b.useMemo(()=>{const d=Math.max(_,w),n=s||parseFloat(`${r==null?void 0:r.borderWidth}`)||0,F=t+d*2+n,M=u||P(t)+d*2+n,A=d+t*.5+n;return{...r||{},padding:d,borderRadius:A,width:Math.max(M,F),borderWidth:Math.max(n,0)}},[r,_,w,t,u,s]);if(t<=0)return null;const j=m.width-t-m.borderWidth-m.padding*2;return l.jsx(C,{type:"button",...z,ref:a,active:x,size:t,translateX:j,disabled:i,style:m,onClick:d=>{if(i)return;const n=!x;f&&f(n,d),N(n)},children:l.jsx(o,{})})});b.memo(c);const o=B.div({}),C=B.button`
  box-sizing: border-box;
  background-color: ${e=>e.defaultBackgroundColor||"#f0f0f0"};
  width: max-content;
  border-style: solid;
  border-color: ${e=>e.defaultBorderColor||"rgba(0, 0, 0, 0.1)"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  ${o} {
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: ${({size:e})=>e*.5}px;
    background-color: ${e=>e.defaultColor||e.theme.colors.Neutral_300};
    transform: translateX(0);
  }

  ${({duration:e,transitionTiming:a})=>v`
    transition: all ${e??300}ms ${a||"linear"};
    ${o} {
      transition: all ${e??300}ms ${a||"linear"};
    }
  `}

  ${({active:e,theme:a,disabled:t,translateX:s,activeBorderColor:u,activeColor:y,activeBackgroundColor:p})=>{if(e){if(t)return v`
          ${o} {
            transform: translateX(${s}px);
          }
        `;let i=u,f=y||a.colors.brandColor.Primary7;if(!i){const r=E(a.colors.Oxfordblue_500);i=r?`rgba(${r.r},${r.g},${r.b},0.2)`:a.colors.Oxfordblue_500}return v`
        border-color: ${i};
        background-color: ${p||"#f0f0f0"};
        ${o} {
          background-color: ${f};
          transform: translateX(${s}px);
        }
      `}}}
`,P=e=>e*2.6;try{c.displayName="Switch",c.__docgenInfo={description:"",displayName:"Switch",props:{activeColor:{defaultValue:{value:'brandColor.Primary7: "#457D96"'},description:"@description active color for slider dot",name:"activeColor",required:!1,type:{name:"string"}},activeBackgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"activeBackgroundColor",required:!1,type:{name:"string"}},defaultColor:{defaultValue:{value:'Neutral_300: "#BFBFBF"'},description:"@description default color for button wrapper",name:"defaultColor",required:!1,type:{name:"string"}},defaultBackgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"defaultBackgroundColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"rgba(0,0,0,0.1)"},description:"@description default color for button border",name:"defaultBorderColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"theme.colors.Oxfordblue_500 opacity 0.2"},description:"",name:"activeBorderColor",required:!1,type:{name:"string"}},borderWidth:{defaultValue:{value:"0"},description:"",name:"borderWidth",required:!1,type:{name:"number"}},checked:{defaultValue:{value:"undefined"},description:"@description if set, state outside control the switch",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"300"},description:`@unit million seconds
@description transition duration`,name:"duration",required:!1,type:{name:"number"}},transitionTiming:{defaultValue:{value:"linear"},description:"@description transition timing function",name:"transitionTiming",required:!1,type:{name:"TransitionTimingFunction"}},padding:{defaultValue:{value:"3"},description:`@min 3
@unit pixel`,name:"padding",required:!1,type:{name:"number"}},minPadding:{defaultValue:{value:"3"},description:"@unit pixel",name:"minPadding",required:!1,type:{name:"number"}},size:{defaultValue:{value:"10"},description:`@unit pixel
@description dot size`,name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:`@min size + padding * 2 + borderWidth
@description container width, if not set, width = size * 2.6 + padding + border-size`,name:"width",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}try{o.displayName="Dot",o.__docgenInfo={description:"",displayName:"Dot",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="Wrapper",C.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const G={title:"PAAS/Switch",tags:["autodocs"],component:c};function T({...e}){return l.jsxs(l.Fragment,{children:[l.jsx(c,{...e}),!!e.id&&l.jsx("label",{htmlFor:e.id,style:{marginLeft:10},children:e.id})]})}const h={render:T,args:{size:10,padding:3,transitionTiming:"linear"}},g={render:T,args:{size:20,padding:5,defaultChecked:!0,activeColor:"orange",transitionTiming:"ease-out",id:"test switch",onChange:e=>console.info("change checked to: ",e)}};var k,$,V;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: SwitchStory,
  args: {
    size: 10,
    padding: 3,
    transitionTiming: "linear"
  }
}`,...(V=($=h.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var q,S,W;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(S=g.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};const H=["Switch","DefaultCheckedSwitch"];export{g as DefaultCheckedSwitch,h as Switch,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Switch.stories-b6f1accb.js.map
