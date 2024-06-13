import{j as t}from"./jsx-runtime-94f6e698.js";import{c as l}from"./colors-0fffe0c4.js";import{r as p}from"./index-8db94870.js";import{p as n,c as u,t as P}from"./styled-components.browser.esm-8c817f58.js";import{a as O,b as X,I as J,D as K}from"./Dynamic-993557e0.js";import{D as ee}from"./DmIcon20History-f09108bc.js";import{c as S,F as te,e as re}from"./common-d4e29412.js";import{f as L,a as ne}from"./commons-26f23e02.js";import{t as v,s as Z}from"./typography-05e40c9f.js";import{u as R,a as B}from"./react-spring-web.esm-788c8f7b.js";import{D as oe}from"./DmIcon20Search-3d1cbfe2.js";import{T as ae}from"./Tooltip-5f29b0c6.js";import{I as se}from"./Icon12Warning-8aed6788.js";import{D as ie}from"./DmIcon12Down-dcd36aab.js";import{u as le}from"./useClickAway-7b3ab22c.js";import{D as de}from"./DmIcon12Right-630a0046.js";import{B as ce}from"./styles-86b3dc18.js";import{S as pe}from"./SpringActor-2e0032f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./util-051783c3.js";const T=n.div`
  ${ce}
  ${v.dymenu_MenuBtnText}
  transition: background 150ms ease-out;

  :hover {
    background: ${l.plus_cloud};
  }

  :focus::after {
    border: 3px solid ${l.plus_woodwhite};
  }

  :disabled {
    background-color: ${l.plus_air};
  }
`;try{T.displayName="CTAButtonWrapper",T.__docgenInfo={description:"",displayName:"CTAButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const k=n.div`
  ${L.column}
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`,g=({label:e,children:r})=>t.jsxs(A,{children:[e&&t.jsx(C,{children:e}),r]}),A=n.div`
  ${L.row}
  align-items: center;
  justify-content: flex-start;
  min-height: 36px;
  width: 100%;
`,C=n.span`
  ${v.dymenu_MenuTitle}
  width: 100px;
  flex-shrink: 0;
`,V=n.span`
  display: flex;
  gap: 8px;
  width: 100%;
`;try{k.displayName="Form",k.__docgenInfo={description:"",displayName:"Form",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="FormRow",g.__docgenInfo={description:"",displayName:"FormRow",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{A.displayName="FormRowWrapper",A.__docgenInfo={description:"",displayName:"FormRowWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="FormLabel",C.__docgenInfo={description:"",displayName:"FormLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{V.displayName="FormContent",V.__docgenInfo={description:"",displayName:"FormContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Y=u`
  ${v.dymenu_MenuBody}
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  color: white;
  background-color: ${l.plus_deeper_85};

  ::placeholder {
    color: ${l.Neutral_400};
  }

  ::-webkit-search-cancel-button {
    appearance: none;
    width: 12px;
    height: 12px;
    cursor: pointer;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ljk2NyA2TDMgNC4wMzNMNC4wMzMgM0w2IDQuOTY3TDcuOTY3IDNMOSA0LjAzM0w3LjAzMyA2TDkgNy45NjdMNy45NjcgOUw2IDcuMDMzTDQuMDMzIDlMMyA3Ljk2N0w0Ljk2NyA2WiIgZmlsbD0iI0JGQkZCRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMS43NUMzLjY1Mjc5IDEuNzUgMS43NSAzLjY1Mjc5IDEuNzUgNkMxLjc1IDguMzQ3MjEgMy42NTI3OSAxMC4yNSA2IDEwLjI1QzguMzQ3MjEgMTAuMjUgMTAuMjUgOC4zNDcyMSAxMC4yNSA2QzEwLjI1IDMuNjUyNzkgOC4zNDcyMSAxLjc1IDYgMS43NVpNMC4yNSA2QzAuMjUgMi44MjQzNiAyLjgyNDM2IDAuMjUgNiAwLjI1QzkuMTc1NjQgMC4yNSAxMS43NSAyLjgyNDM2IDExLjc1IDZDMTEuNzUgOS4xNzU2NCA5LjE3NTY0IDExLjc1IDYgMTEuNzVDMi44MjQzNiAxMS43NSAwLjI1IDkuMTc1NjQgMC4yNSA2WiIgZmlsbD0iI0JGQkZCRiIvPgo8L3N2Zz4K");
  }
`,$=n.input`
  ${Y}
  padding: 9px 12px;
`,Q=({keyword:e,setKeyword:r,...s})=>{const{currentTheme:d}=O();return t.jsxs(ue,{$theme:d,...s,children:[t.jsx(he,{}),t.jsx(me,{value:e,onChange:i=>r(i.target.value)})]})},ue=n.div`
  ${Y}
  padding: 8px 16px;
  gap: 8px;
  ${e=>fe[e.$theme]}
`,me=n.input`
  width: 100%;
  border: none;
  background: none;
  outline: none;
`,he=n(oe)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,fe={plus:u`
    color: ${l.plus_woodwhite};
  `,minus:u`
    color: ${l.plus_woodwhite};
  `,none:""};try{$.displayName="Input",$.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Q.displayName="Search",Q.__docgenInfo={description:"",displayName:"Search",props:{keyword:{defaultValue:null,description:"",name:"keyword",required:!0,type:{name:"string"}},setKeyword:{defaultValue:null,description:"",name:"setKeyword",required:!0,type:{name:"(keyword: string) => void"}}}}}catch{}const W=({state:e,onSwitch:r})=>{const[s,d]=p.useState(!1),{currentTheme:i}=O(),a=p.useMemo(()=>{const c=e?l.Oxfordblue_200:l.plus_air;return s?`color-mix(in srgb, ${c}, #ffffff 20%)`:c},[e,s]),[m]=R(()=>{const c={on:{x:23,backgroundColor:a},off:{x:3,backgroundColor:a}};return{from:c.off,to:e?c.on:c.off,config:S}},[e,a]);return t.jsx(ge,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>r(!e),$theme:i,children:t.jsx(ye,{style:m})})},ge=n.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  ${e=>xe[e.$theme]}
`,ye=n(B.div)`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  top: 3px;
  transition: background-color 300ms ease-out;
`,xe={plus:u`
    background-color: black;
  `,minus:u`
    background-color: black;
  `,none:""};try{W.displayName="OnOffSwitch",W.__docgenInfo={description:"",displayName:"OnOffSwitch",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"boolean"}},onSwitch:{defaultValue:null,description:"",name:"onSwitch",required:!0,type:{name:"(state: boolean) => void"}}}}}catch{}function F({onClick:e,expand:r}){const[s,d]=p.useState(!1),[i]=R(()=>({from:{rotate:0},to:{rotate:r?180:0},config:S}),[r]);return t.jsxs(_e,{onClick:e,onMouseEnter:()=>!s&&d(!0),onMouseLeave:()=>s&&d(!1),children:[t.jsx(be,{style:i}),s&&t.jsx(we,{})]})}const _e=n.div`
  display: flex;
  ${L.center}
  position: absolute;
  right: 4px;
  top: 4px;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  transition: background-color 150ms ease-out;
  background-color: ${l.plus_ash};
`,we=n.div`
  ${ne}
  background: ${l.addHoveredGradient};
`,be=n(B(ie))`
  width: 12px;
  height: 12px;
`;try{F.displayName="DropdownBtn",F.__docgenInfo={description:"",displayName:"DropdownBtn",props:{expand:{defaultValue:null,description:"",name:"expand",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}const z=p.forwardRef(({options:e,placeholder:r,stayOnClick:s,freeze:d,value:i,setValue:a},m)=>{var w;const c=p.useRef(null),h=p.useMemo(()=>e.findIndex(o=>o.value===i),[e,i]),[x,f]=p.useState(!1);le(m??c,()=>{f(!1)});const{currentTheme:_}=O(),[b,I]=R(()=>({from:{y:0,opacity:0},to:{y:h*te,opacity:h===-1?0:1},config:S}),[h]);return t.jsxs(Me,{$theme:_,ref:m??c,children:[!i&&t.jsx(je,{children:r}),!!i&&t.jsx("span",{children:((w=e.find(o=>o.value===i))==null?void 0:w.text)??i}),t.jsx(F,{onClick:()=>!d&&f(o=>!o),expand:x}),x&&t.jsxs(Se,{$theme:_,ref:o=>{if(!o)return;o.focus();const M=m??c,E=o.getBoundingClientRect();M.current&&E.y+E.height<(M.current.clientHeight??0)+40?o.style.top="40px":o.style.bottom="40px"},tabIndex:-1,children:[e.map((o,M)=>t.jsx(ve,{onClick:()=>{h===-1&&I.set({y:M*36}),a(o.value),!s&&f(!1)},children:o.text??o.value},o.value)),t.jsx(De,{style:b})]})]})}),Ie={plus:u`
    color: white;
  `,minus:u`
    color: ${l.plus_ash};
  `,none:""},Me=n.div`
  position: relative;
  box-sizing: border-box;
  background-color: ${l.plus_deeper_85};
  border-radius: 4px;
  width: 100%;
  padding: 9px 12px;
  min-height: 36px;
  user-select: none;
  ${v.dymenu_MenuBody}
  ${e=>Ie[e.$theme]}
`,je=n.span`
  color: ${e=>e.theme.colors.Neutral_400};
`,Se=n.div`
  position: absolute;
  left: 0;
  width: 100%;
  ${e=>e.theme.flexCSS.column}
  border-radius: 4px;
  z-index: 11;
  overflow: hidden;
  outline: none;
  padding: 6px 0;
  ${e=>Ne[e.$theme]}
`,ve=n.div`
  padding: 9px 16px 9px 40px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  transition: transform 150ms ease-out;

  &:hover {
    transform: translateX(5px);
    background-color: ${l.addHoveredDeep};
  }
`,Ne={plus:u`
    background-color: ${l.plus_deeper_85};
    box-shadow: ${Z.floatingDark};
  `,minus:u`
    background-color: ${l.background_warmwhite};
    box-shadow: ${Z.floatingLight};
  `,none:""},De=n(B(de))`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 18px;
  left: 16px;
  cursor: pointer;
`;try{z.displayName="Select",z.__docgenInfo={description:"",displayName:"Select",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string | number; text?: string | undefined; }[]"}},stayOnClick:{defaultValue:null,description:"",name:"stayOnClick",required:!1,type:{name:"boolean"}},freeze:{defaultValue:null,description:"",name:"freeze",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number | undefined"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!0,type:{name:"(value: string | number) => void"}}}}}catch{}function q({message:e}){const{colors:r}=P();return t.jsx(ae,{text:e,position:"top",align:"end",style:{backgroundColor:r.Beyellow_400,padding:"4px 8px",fontSize:10,lineHeight:1.5,zIndex:10,transform:"translateX(12px)"},gap:16,children:t.jsx(Te,{children:t.jsx(se,{style:{position:"absolute",left:0,top:0}})})})}const Te=n.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${e=>e.theme.colors.plus_deeper_85};
`;try{q.displayName="InputWarning",q.__docgenInfo={description:"",displayName:"InputWarning",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const j=e=>{const r=p.useRef(null),[s,d]=p.useState(!1),{colors:i}=P();return t.jsxs(ke,{style:e.message?{outline:`1px solid ${i.Beyellow_400}`}:void 0,children:[t.jsx($,{ref:r,...e,type:"search",onFocus:a=>{d(!0),e.onFocus&&e.onFocus(a)},onBlur:a=>{d(!1),e.onBlur&&e.onBlur(a)}}),!s&&e.message&&t.jsx(Ae,{children:t.jsx(q,{message:e.message})})]})},ke=n.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 4px;
`,Ae=n.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 12px;
  height: 12px;
`;try{j.displayName="InputWithFunction",j.__docgenInfo={description:"",displayName:"InputWithFunction",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const N={config:S},D={config:re};function Ce(){const e=p.useContext(X),r=p.useContext(J),[s,d]=p.useState(0),i=()=>{var a,m,c,h,x,f,_,b,I,w,o;switch(d((s+1)%4),s){case 0:(a=e.returnToInitialStyle)==null||a.call(e),(m=r.x)==null||m.start(0),(c=r.y)==null||c.start(0);return;case 1:(h=e.startSizeTo)==null||h.call(e,{width:132,x:200}),(x=r.x)==null||x.start(80);return;case 2:(f=e.scaleSizeTo)==null||f.call(e,{width:232,height:192,y:20,config:D}),(_=r.x)==null||_.start(120,D),(b=r.y)==null||b.start(140,D);return;case 3:(I=e.startSizeTo)==null||I.call(e,{width:232,height:232,y:20,config:N}),(w=r.x)==null||w.start(0,N),(o=r.y)==null||o.start(180,N);return}};return t.jsx(Ve,{onClick:i,onMouseEnter:()=>{var a;return(a=r.opacity)==null?void 0:a.start(1)},onMouseLeave:()=>{var a;return(a=r.opacity)==null?void 0:a.start(.5)}})}const Ve=n(ee)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
`,ot={title:"PAAS/DynamicMenu",argTypes:{theme:{control:"select",options:["plus","minus"]},stayOnClick:{control:"boolean"}}},$e=[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"}],We=e=>{const[r,s]=p.useState(!1),d=[{x:24,y:24,opacity:.5},{x:24,y:84,opacity:1}];return t.jsx(Fe,{children:t.jsx(K,{init:{x:10,y:10,width:500,height:200},theme:e.theme,children:t.jsx(pe,{init:{x:24,y:24,opacity:.5},to:d[r?1:0],children:t.jsx("div",{children:t.jsxs(k,{style:{width:"400px"},children:[t.jsx(g,{label:"Switch",children:t.jsx(W,{state:r,onSwitch:s})}),t.jsx(g,{label:"Title",children:t.jsx(j,{message:"test error message"})}),t.jsx(g,{label:"Title",children:t.jsxs(V,{children:[t.jsx(j,{}),t.jsx(z,{placeholder:"placeholder",options:$e,stayOnClick:e.stayOnClick,value:void 0,setValue:function(i){}})]})}),t.jsx(g,{label:" ",children:t.jsx(T,{style:{width:188,backgroundColor:l.plus_air,marginTop:4},children:"Confirm"})})]})})})})})},y=We.bind({});y.args={children:t.jsx(Ce,{}),theme:"plus",stayOnClick:!1};y.parameters={controls:{include:["theme","stayOnClick"]}};const Fe=n.div`
  width: 600px;
  height: 400px;
`;var G,H,U;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [state, setState] = useState(false);
  const states = [{
    x: 24,
    y: 24,
    opacity: 0.5
  }, {
    x: 24,
    y: 84,
    opacity: 1
  }];
  return <Wrapper>
      <DynamicMenu init={{
      x: 10,
      y: 10,
      width: 500,
      height: 200
    }} theme={args.theme}>
        <SpringActor init={{
        x: 24,
        y: 24,
        opacity: 0.5
      }} to={states[state ? 1 : 0]}>
          <div>
            <Form style={{
            width: "400px"
          }}>
              <FormRow label="Switch">
                <OnOffSwitch state={state} onSwitch={setState} />
              </FormRow>
              <FormRow label="Title">
                <InputWithFunction message="test error message" />
              </FormRow>
              <FormRow label="Title">
                <FormContent>
                  <InputWithFunction />
                  <Select placeholder="placeholder" options={options} stayOnClick={args.stayOnClick} value={undefined} setValue={function (value: string | number): void {}} />
                </FormContent>
              </FormRow>
              <FormRow label=" ">
                <CTAButtonWrapper style={{
                width: 188,
                backgroundColor: colors.plus_air,
                marginTop: 4
              }}>
                  Confirm
                </CTAButtonWrapper>
              </FormRow>
            </Form>
          </div>
        </SpringActor>
      </DynamicMenu>
    </Wrapper>;
}`,...(U=(H=y.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const at=["Functional"];export{y as Functional,at as __namedExportsOrder,ot as default};
//# sourceMappingURL=Functional.stories-d7aaece6.js.map
