import{j as l}from"./jsx-runtime-94f6e698.js";import{r as b}from"./index-8db94870.js";import{s as T,A as v}from"./styled-components.browser.esm-6007d051.js";import{h as N}from"./colors-0fffe0c4.js";import"./_commonjsHelpers-042e6b4d.js";const s=b.forwardRef((e,a)=>{const{size:t=10,borderWidth:u=0,width:c,defaultChecked:y=!1,checked:f,disabled:o=!1,onChange:p,style:r,padding:_=3,minPadding:V=3,...W}=e,[F,M]=b.useState(y),q=typeof f=="boolean"?f:F,m=b.useMemo(()=>{const d=Math.max(_,V),n=u||parseFloat(`${r==null?void 0:r.borderWidth}`)||0,O=t+d*2+n,j=c||A(t)+d*2+n,D=d+t*.5+n;return{...r||{},padding:d,borderRadius:D,width:Math.max(j,O),borderWidth:Math.max(n,0)}},[r,_,V,t,c,u]);if(t<=0)return null;const E=m.width-t-m.borderWidth-m.padding*2;return l.jsx(C,{type:"button",...W,ref:a,active:q,size:t,translateX:E,disabled:o,style:m,onClick:d=>{if(o)return;const n=!q;p&&p(n,d),M(n)},children:l.jsx(i,{})})});b.memo(s);const i=T.div({}),C=T.button`
  box-sizing: border-box;
  background-color: ${e=>e.defaultBackgroundColor||"#f0f0f0"};
  width: max-content;
  border-style: solid;
  border-color: ${e=>e.defaultBorderColor||"rgba(0, 0, 0, 0.1)"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  ${i} {
    width: ${({size:e})=>e}px;
    height: ${({size:e})=>e}px;
    border-radius: ${({size:e})=>e*.5}px;
    background-color: ${e=>e.defaultColor||e.theme.colors.Neutral_300};
    transform: translateX(0);
  }

  ${({duration:e,transitionTiming:a})=>v`
    transition: all ${e??300}ms ${a||"linear"};
    ${i} {
      transition: all ${e??300}ms ${a||"linear"};
    }
  `}

  ${({active:e,theme:a,disabled:t,translateX:u,activeBorderColor:c,activeColor:y,activeBackgroundColor:f})=>{if(e){if(t)return v`
          ${i} {
            transform: translateX(${u}px);
          }
        `;let o=c,p=y||a.colors.Oxfordblue_200;if(!o){const r=N(a.colors.Oxfordblue_500);o=r?`rgba(${r.r},${r.g},${r.b},0.2)`:a.colors.Oxfordblue_500}return v`
        border-color: ${o};
        background-color: ${f||"#f0f0f0"};
        ${i} {
          background-color: ${p};
          transform: translateX(${u}px);
        }
      `}}}
`,A=e=>e*2.6;try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{activeColor:{defaultValue:{value:'Oxfordblue_200: "#457D96"'},description:"@description active color for slider dot",name:"activeColor",required:!1,type:{name:"string"}},activeBackgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"activeBackgroundColor",required:!1,type:{name:"string"}},defaultColor:{defaultValue:{value:'Neutral_300: "#BFBFBF"'},description:"@description default color for button wrapper",name:"defaultColor",required:!1,type:{name:"string"}},defaultBackgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"defaultBackgroundColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"rgba(0,0,0,0.1)"},description:"@description default color for button border",name:"defaultBorderColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"theme.colors.Oxfordblue_500 opacity 0.2"},description:"",name:"activeBorderColor",required:!1,type:{name:"string"}},borderWidth:{defaultValue:{value:"0"},description:"",name:"borderWidth",required:!1,type:{name:"number"}},checked:{defaultValue:{value:"undefined"},description:"@description if set, state outside control the switch",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"300"},description:`@unit million seconds
@description transition duration`,name:"duration",required:!1,type:{name:"number"}},transitionTiming:{defaultValue:{value:"linear"},description:"@description transition timing function",name:"transitionTiming",required:!1,type:{name:"TransitionTimingFunction"}},padding:{defaultValue:{value:"3"},description:`@min 3
@unit pixel`,name:"padding",required:!1,type:{name:"number"}},minPadding:{defaultValue:{value:"3"},description:"@unit pixel",name:"minPadding",required:!1,type:{name:"number"}},size:{defaultValue:{value:"10"},description:`@unit pixel
@description dot size`,name:"size",required:!1,type:{name:"number"}},width:{defaultValue:null,description:`@min size + padding * 2 + borderWidth
@description container width, if not set, width = size * 2.6 + padding + border-size`,name:"width",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}try{i.displayName="Dot",i.__docgenInfo={description:"",displayName:"Dot",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{C.displayName="Wrapper",C.__docgenInfo={description:"",displayName:"Wrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},defaultColor:{defaultValue:{value:'Neutral_300: "#BFBFBF"'},description:"@description default color for button wrapper",name:"defaultColor",required:!1,type:{name:"string"}},activeColor:{defaultValue:{value:'Oxfordblue_200: "#457D96"'},description:"@description active color for slider dot",name:"activeColor",required:!1,type:{name:"string"}},defaultBorderColor:{defaultValue:{value:"rgba(0,0,0,0.1)"},description:"@description default color for button border",name:"defaultBorderColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"theme.colors.Oxfordblue_500 opacity 0.2"},description:"",name:"activeBorderColor",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:`@unit million seconds
@description transition duration`,name:"duration",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!0,type:{name:"number"}},activeBackgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"activeBackgroundColor",required:!1,type:{name:"string"}},defaultBackgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"defaultBackgroundColor",required:!1,type:{name:"string"}},transitionTiming:{defaultValue:{value:"linear"},description:"@description transition timing function",name:"transitionTiming",required:!1,type:{name:"TransitionTimingFunction"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const P={title:"PAAS/Switch",tags:["autodocs"],component:s};function z({...e}){return l.jsxs(l.Fragment,{children:[l.jsx(s,{...e}),!!e.id&&l.jsx("label",{htmlFor:e.id,style:{marginLeft:10},children:e.id})]})}const g={render:z,args:{size:10,padding:3,transitionTiming:"linear"}},h={render:z,args:{size:20,padding:5,defaultChecked:!0,activeColor:"orange",transitionTiming:"ease-out",id:"test switch",onChange:e=>console.info("change checked to: ",e)}};var w,x,k;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: SwitchStory,
  args: {
    size: 10,
    padding: 3,
    transitionTiming: "linear"
  }
}`,...(k=(x=g.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var B,$,S;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=($=h.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};const G=["Switch","DefaultCheckedSwitch"];export{h as DefaultCheckedSwitch,g as Switch,G as __namedExportsOrder,P as default};
//# sourceMappingURL=Switch.stories-6407406b.js.map
