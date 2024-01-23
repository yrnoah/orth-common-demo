import{j as t}from"./jsx-runtime-94f6e698.js";import{c as l}from"./colors-0fffe0c4.js";import{r as u}from"./index-8db94870.js";import{s as r,A as p,X}from"./styled-components.browser.esm-6007d051.js";import{a as z,b as Y,I as J,D as K}from"./Dynamic-b27796d8.js";import{D as ee}from"./DmIcon20History-f09108bc.js";import{c as S,F as te,e as ne}from"./common-d4e29412.js";import{f as E,a as re}from"./commons-95cc4cba.js";import{t as v,s as B}from"./typography-46bf24ce.js";import{u as W,a as R}from"./react-spring-web.esm-788c8f7b.js";import{D as oe}from"./DmIcon20Search-3d1cbfe2.js";import{T as ae}from"./Tooltip-08eaffb2.js";import{I as ie}from"./Icon12Warning-8aed6788.js";import{D as se}from"./DmIcon12Down-dcd36aab.js";import{u as le}from"./useClickAway-7b3ab22c.js";import{D as de}from"./DmIcon12Right-630a0046.js";import{B as ce}from"./styles-d589f758.js";import{S as ue}from"./SpringActor-7c0b11e4.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./util-051783c3.js";const k=r.div`
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
`;try{k.displayName="CTAButtonWrapper",k.__docgenInfo={description:"",displayName:"CTAButtonWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const A=r.div`
  ${E.column}
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`,y=({label:e,children:n})=>t.jsxs(T,{children:[e&&t.jsx(C,{children:e}),n]}),T=r.div`
  ${E.row}
  align-items: center;
  justify-content: flex-start;
  min-height: 36px;
  width: 100%;
`,C=r.span`
  ${v.dymenu_MenuTitle}
  width: 100px;
  flex-shrink: 0;
`,V=r.span`
  display: flex;
  gap: 8px;
  width: 100%;
`;try{A.displayName="Form",A.__docgenInfo={description:"",displayName:"Form",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{y.displayName="FormRow",y.__docgenInfo={description:"",displayName:"FormRow",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{T.displayName="FormRowWrapper",T.__docgenInfo={description:"",displayName:"FormRowWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{C.displayName="FormLabel",C.__docgenInfo={description:"",displayName:"FormLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{V.displayName="FormContent",V.__docgenInfo={description:"",displayName:"FormContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const P=p`
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
`,$=r.input`
  ${P}
  padding: 9px 12px;
`,Z=({keyword:e,setKeyword:n,...i})=>{const{currentTheme:d}=z();return t.jsxs(pe,{$theme:d,...i,children:[t.jsx(fe,{}),t.jsx(me,{value:e,onChange:s=>n(s.target.value)})]})},pe=r.div`
  ${P}
  padding: 8px 16px;
  gap: 8px;
  ${e=>he[e.$theme]}
`,me=r.input`
  width: 100%;
  border: none;
  background: none;
  outline: none;
`,fe=r(oe)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,he={plus:p`
    color: ${l.plus_woodwhite};
  `,minus:p`
    color: ${l.plus_woodwhite};
  `,none:""};try{$.displayName="Input",$.__docgenInfo={description:"",displayName:"Input",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{Z.displayName="Search",Z.__docgenInfo={description:"",displayName:"Search",props:{keyword:{defaultValue:null,description:"",name:"keyword",required:!0,type:{name:"string"}},setKeyword:{defaultValue:null,description:"",name:"setKeyword",required:!0,type:{name:"(keyword: string) => void"}}}}}catch{}const F=({state:e,onSwitch:n})=>{const[i,d]=u.useState(!1),{currentTheme:s}=z(),a=u.useMemo(()=>{const c=e?l.Oxfordblue_200:l.plus_air;return i?`color-mix(in srgb, ${c}, #ffffff 20%)`:c},[e,i]),[m]=W(()=>{const c={on:{x:23,backgroundColor:a},off:{x:3,backgroundColor:a}};return{from:c.off,to:e?c.on:c.off,config:S}},[e,a]);return t.jsx(ye,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>n(!e),$theme:s,children:t.jsx(ge,{style:m})})},ye=r.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  ${e=>xe[e.$theme]}
`,ge=r(R.div)`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  top: 3px;
  transition: background-color 300ms ease-out;
`,xe={plus:p`
    background-color: black;
  `,minus:p`
    background-color: black;
  `,none:""};try{F.displayName="OnOffSwitch",F.__docgenInfo={description:"",displayName:"OnOffSwitch",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"boolean"}},onSwitch:{defaultValue:null,description:"",name:"onSwitch",required:!0,type:{name:"(state: boolean) => void"}}}}}catch{}function L({onClick:e,expand:n}){const[i,d]=u.useState(!1),[s]=W(()=>({from:{rotate:0},to:{rotate:n?180:0},config:S}),[n]);return t.jsxs(_e,{onClick:e,onMouseEnter:()=>!i&&d(!0),onMouseLeave:()=>i&&d(!1),children:[t.jsx(be,{style:s}),i&&t.jsx(we,{})]})}const _e=r.div`
  display: flex;
  ${E.center}
  position: absolute;
  right: 4px;
  top: 4px;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  transition: background-color 150ms ease-out;
  background-color: ${l.plus_ash};
`,we=r.div`
  ${re}
  background: ${l.addHoveredGradient};
`,be=r(R(se))`
  width: 12px;
  height: 12px;
`;try{L.displayName="DropdownBtn",L.__docgenInfo={description:"",displayName:"DropdownBtn",props:{expand:{defaultValue:null,description:"",name:"expand",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}const q=u.forwardRef(({options:e,placeholder:n,stayOnClick:i,freeze:d,value:s,setValue:a},m)=>{var w;const c=u.useRef(null),f=u.useMemo(()=>e.findIndex(o=>o.value===s),[e,s]),[x,h]=u.useState(!1);le(m??c,()=>{h(!1)});const{currentTheme:_}=z(),[b,M]=W(()=>({from:{y:0,opacity:0},to:{y:f*te,opacity:f===-1?0:1},config:S}),[f]);return t.jsxs(Ie,{$theme:_,ref:m??c,children:[!s&&t.jsx(je,{children:n}),!!s&&t.jsx("span",{children:((w=e.find(o=>o.value===s))==null?void 0:w.text)??s}),t.jsx(L,{onClick:()=>!d&&h(o=>!o),expand:x}),x&&t.jsxs(Se,{$theme:_,ref:o=>{if(!o)return;o.focus();const I=m??c,H=o.getBoundingClientRect();I.current&&H.y+H.height<(I.current.clientHeight??0)+40?o.style.top="40px":o.style.bottom="40px"},tabIndex:-1,children:[e.map((o,I)=>t.jsx(ve,{onClick:()=>{f===-1&&M.set({y:I*36}),a(o.value),!i&&h(!1)},children:o.text??o.value},o.value)),t.jsx(De,{style:b})]})]})}),Me={plus:p`
    color: white;
  `,minus:p`
    color: ${l.plus_ash};
  `,none:""},Ie=r.div`
  position: relative;
  box-sizing: border-box;
  background-color: ${l.plus_deeper_85};
  border-radius: 4px;
  width: 100%;
  padding: 9px 12px;
  min-height: 36px;
  user-select: none;
  ${v.dymenu_MenuBody}
  ${e=>Me[e.$theme]}
`,je=r.span`
  color: ${e=>e.theme.colors.Neutral_400};
`,Se=r.div`
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
`,ve=r.div`
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
`,Ne={plus:p`
    background-color: ${l.plus_deeper_85};
    box-shadow: ${B.floatingDark};
  `,minus:p`
    background-color: ${l.background_warmwhite};
    box-shadow: ${B.floatingLight};
  `,none:""},De=r(R(de))`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 18px;
  left: 16px;
  cursor: pointer;
`;try{q.displayName="Select",q.__docgenInfo={description:"",displayName:"Select",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string | number; text?: string | undefined; }[]"}},stayOnClick:{defaultValue:null,description:"",name:"stayOnClick",required:!1,type:{name:"boolean"}},freeze:{defaultValue:null,description:"",name:"freeze",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number | undefined"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!0,type:{name:"(value: string | number) => void"}}}}}catch{}function O({message:e}){const{colors:n}=X();return t.jsx(ae,{text:e,position:"top",align:"end",style:{backgroundColor:n.Beyellow_400,padding:"4px 8px",fontSize:10,lineHeight:1.5,zIndex:10,transform:"translateX(12px)"},gap:16,children:t.jsx(ke,{children:t.jsx(ie,{style:{position:"absolute",left:0,top:0}})})})}const ke=r.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${e=>e.theme.colors.plus_deeper_85};
`;try{O.displayName="InputWarning",O.__docgenInfo={description:"",displayName:"InputWarning",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const j=e=>{const n=u.useRef(null),[i,d]=u.useState(!1),{colors:s}=X();return t.jsxs(Ae,{style:e.message?{outline:`1px solid ${s.Beyellow_400}`}:void 0,children:[t.jsx($,{ref:n,...e,type:"search",onFocus:a=>{d(!0),e.onFocus&&e.onFocus(a)},onBlur:a=>{d(!1),e.onBlur&&e.onBlur(a)}}),!i&&e.message&&t.jsx(Te,{children:t.jsx(O,{message:e.message})})]})},Ae=r.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 4px;
`,Te=r.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 12px;
  height: 12px;
`;try{j.displayName="InputWithFunction",j.__docgenInfo={description:"",displayName:"InputWithFunction",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const N={config:S},D={config:ne};function Ce(){const e=u.useContext(Y),n=u.useContext(J),[i,d]=u.useState(0),s=()=>{var a,m,c,f,x,h,_,b,M,w,o;switch(d((i+1)%4),i){case 0:(a=e.returnToInitialStyle)==null||a.call(e),(m=n.x)==null||m.start(0),(c=n.y)==null||c.start(0);return;case 1:(f=e.startSizeTo)==null||f.call(e,{width:132,x:200}),(x=n.x)==null||x.start(80);return;case 2:(h=e.scaleSizeTo)==null||h.call(e,{width:232,height:192,y:20,config:D}),(_=n.x)==null||_.start(120,D),(b=n.y)==null||b.start(140,D);return;case 3:(M=e.startSizeTo)==null||M.call(e,{width:232,height:232,y:20,config:N}),(w=n.x)==null||w.start(0,N),(o=n.y)==null||o.start(180,N);return}};return t.jsx(Ve,{onClick:s,onMouseEnter:()=>{var a;return(a=n.opacity)==null?void 0:a.start(1)},onMouseLeave:()=>{var a;return(a=n.opacity)==null?void 0:a.start(.5)}})}const Ve=r(ee)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
`,ot={title:"PAAS/DynamicMenu",argTypes:{theme:{control:"select",options:["plus","minus"]},stayOnClick:{control:"boolean"}}},$e=[{value:1,text:"Option 1"},{value:2,text:"Option 2"},{value:3,text:"Option 3"}],Fe=e=>{const[n,i]=u.useState(!1),d=[{x:24,y:24,opacity:.5},{x:24,y:84,opacity:1}];return t.jsx(Le,{children:t.jsx(K,{init:{x:10,y:10,width:500,height:200},theme:e.theme,children:t.jsx(ue,{init:{x:24,y:24,opacity:.5},to:d[n?1:0],children:t.jsx("div",{children:t.jsxs(A,{style:{width:"400px"},children:[t.jsx(y,{label:"Switch",children:t.jsx(F,{state:n,onSwitch:i})}),t.jsx(y,{label:"Title",children:t.jsx(j,{message:"test error message"})}),t.jsx(y,{label:"Title",children:t.jsxs(V,{children:[t.jsx(j,{}),t.jsx(q,{placeholder:"placeholder",options:$e,stayOnClick:e.stayOnClick,value:void 0,setValue:function(s){}})]})}),t.jsx(y,{label:" ",children:t.jsx(k,{style:{width:188,backgroundColor:l.plus_air,marginTop:4},children:"Confirm"})})]})})})})})},g=Fe.bind({});g.args={children:t.jsx(Ce,{}),theme:"plus",stayOnClick:!1};g.parameters={controls:{include:["theme","stayOnClick"]}};const Le=r.div`
  width: 600px;
  height: 400px;
`;var Q,G,U;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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
}`,...(U=(G=g.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};const at=["Functional"];export{g as Functional,at as __namedExportsOrder,ot as default};
//# sourceMappingURL=Functional.stories-fd7e5e92.js.map
