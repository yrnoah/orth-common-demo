import{j as s}from"./jsx-runtime-94f6e698.js";import{G as r,n as a,i as x}from"./styled-components.browser.esm-7ed061eb.js";import{c as l}from"./colors-1c1355f0.js";import{c as e,p as c}from"./styled-components.browser.esm-6dd904cc.js";import{f as p,b as d}from"./fonts-d9df4e72.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";const n=(t=2)=>({overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:t,lineClamp:t}),u={row:{display:"flex",flexDirection:"row"},column:{display:"flex",flexDirection:"column"},center:{alignItems:"center",justifyContent:"center"}},m=e`
  display: flex;
  flex-direction: row;
`,h=e`
  display: flex;
  flex-direction: column;
`,b=e`
  align-items: center;
  justify-content: center;
`,f=e`
  align-items: center;
  justify-content: space-between;
`,g={row:m,column:h,center:b,between:f},w={position:"absolute",left:0,top:0,right:0,bottom:0,width:"100%",height:"100%"},k=e`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`,I=e`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`,O={width:"100vw",height:"100vh",minWidth:800,minHeight:600},_=`
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 600px;
`,v=e`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,o=e`
  position: relative;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    right: 5px;
    bottom: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: transparent;
    transition: all 0.2s ease;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${t=>t.theme.colors.elementsGridBorder};
    }
  }
`,S=e`
  ${o}

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
  }
`,y={flex:u,flexCSS:g,absoluteFill:w,absoluteFillCSS:k,fixedFill:I,minDesktopFullSize:O,minDesktopFullSizeCSS:_,ellipsis:v,ellipsisLineTwo:n(),ellipsisLineThree:n(3),ellipsisLineFour:n(4),scrollbar:o,scrollbarWithoutWidth:S};c.div`
  flex: 1;
`;const C={padding_xs:"4px",padding_s:"6px",padding_m:"8px",padding_l:"12px",padding_xl:"16px",padding_xxl:"24px",padding_xxxl:"36px",radius_xs:"4px",radius_s:"6px",radius_m:"8px",radius_l:"16px",radius_xl:"36px"},Q={xxxxs:4,xxxs:6,xxs:8,xs:12,s:16,m:20,l:24,xl:32,xxl:36,xxxl:40,xxxxl:48},j={xxxxs:4,xxxs:6,xxs:8,xs:12,s:16,m:20,l:24,xl:32,xxl:36,xxxl:40,xxxxl:48},B={xs:12,s:16,m:20,l:24,xl:32,xxl:36,xxxl:40,xxxxl:48},F=20,D=21,E=99,L=100,W={dropdownZIndex:D,navbar:F,mask:E,modal:L},z={xs:"500px",s:"812px",m:"1024px",l:"1366px",xl:"1920px",xs_n:500,s_n:812,m_n:1024,l_n:1366,xl_n:1920},$={border:"none",outline:"none",background:"transparent",margin:0,padding:0,flexShrink:0,userSelect:"none"},G={reset:$},P={duration:"80ms",longDuration:"200ms",longEffect:"ease-out",easings:{easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]}},R={fonts:p,fontBold:d,colors:l,zIndexes:W,spacing:C,...y,padding:Q,radius:j,size:B,screenBreakpoints:z,button:G,animation:P},N={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/},exclude:["forwardedAs","as","ref"]}}},U=[t=>s.jsx(r,{shouldForwardProp:T,enableVendorPrefixes:!0,children:s.jsx(a,{theme:R,children:s.jsx(t,{})})})];function T(t,i){return typeof i=="string"?x(t):!0}export{U as decorators,N as default};
//# sourceMappingURL=preview-3b667ab0.js.map
