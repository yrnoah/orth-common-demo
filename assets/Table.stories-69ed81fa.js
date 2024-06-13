import{j as r}from"./jsx-runtime-94f6e698.js";import{p as s,c as u}from"./styled-components.browser.esm-8c817f58.js";import{r as i}from"./index-8db94870.js";import{a as A,D as z}from"./Dynamic-993557e0.js";import{b as H,a as P}from"./react-spring-web.esm-788c8f7b.js";import{c as g}from"./colors-0fffe0c4.js";import{f as w}from"./commons-26f23e02.js";import{t as N}from"./typography-05e40c9f.js";import{D as E}from"./DmIconSmallFmu-3287988d.js";import{S as F}from"./SpringActor-2e0032f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./common-d4e29412.js";import"./index-8ce4a492.js";function b({children:e,axis:t="vertical",alwaysVisible:o,offset:a=4}){const{currentTheme:c}=A(),d=H(0),[n,m]=i.useState(o??!1),p=i.useRef(0),x=i.useRef(null),[$,T]=i.useState(0),V=_=>{if(_.target){const l=_.target,f=l.querySelector("div:first-child");if(!f)return;const j=f.getBoundingClientRect(),M=t==="horizontal"?l.scrollLeft:l.scrollTop,q=t==="horizontal"?j.width:j.height,C=(t==="horizontal"?l.clientWidth:l.clientHeight)-a-4;if(d.start(M/q*C,{immediate:!0}),$===0){t==="vertical"?T(l.clientHeight/f.clientHeight*l.clientHeight):t==="horizontal"&&T(l.clientWidth/f.clientWidth*l.clientWidth);return}o||(m(!0),p.current!==0&&window.clearTimeout(p.current),p.current=window.setTimeout(()=>{m(!1),p.current=0},100))}};return r.jsxs(I,{ref:x,onScroll:V,children:[e,r.jsx(O,{offset:a,$show:n,$theme:c,children:r.jsx(L,{style:{y:d},height:$,$theme:c})})]})}const I=s.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`,O=s.div`
  border-radius: 2px;
  width: 4px;
  height: calc(100% - ${e=>e.offset}px - 4px);
  position: absolute;
  top: ${e=>e.offset}px;
  right: 4px;
  opacity: ${e=>e.$show?1:0};
  transition: opacity 150ms linear;
  ${e=>Y[e.$theme]}
`,L=s(P.div)`
  position: absolute;
  border-radius: 2px;
  width: 4px;
  height: ${e=>e.height}%;
  ${e=>G[e.$theme]}
`,Y={plus:u`
    background-color: ${g.Neutral_400};
  `,minus:u`
    background-color: ${g.Neutral_400};
  `,none:""},G={plus:u`
    background-color: ${g.plus_woodwhite};
  `,minus:u`
    background-color: ${g.plus_woodwhite};
  `,none:""};try{b.displayName="Scrollbar",b.__docgenInfo={description:"",displayName:"Scrollbar",props:{axis:{defaultValue:{value:"vertical"},description:"",name:"axis",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alwaysVisible:{defaultValue:null,description:"",name:"alwaysVisible",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"4"},description:"",name:"offset",required:!1,type:{name:"number"}}}}}catch{}const J=s.div`
  position: relative;
  width: 100%;
  ${w.column}
  border-radius: 4px;
  ${N.dymenu_MenuBody}
  ${e=>K[e.$theme]}
`,K={plus:u`
    color: ${({theme:e})=>e.colors.Neutral_100};
    background-color: ${({theme:e})=>e.colors.plus_deeper_85};
  `,minus:u`
    color: ${({theme:e})=>e.colors.Neutral_100};
    background-color: ${({theme:e})=>e.colors.plus_deeper_85};
  `,none:""},W=u`
  display: flex;
  padding: 6px 16px;
  gap: ${e=>e.gap}px;
  ${N.dymenu_MenuBody}
`,Q=s.div`
  background-color: black;
  ${W}
  color: white;
  border-radius: 4px 4px 0 0;
  position: sticky;
`,U=s.div`
  ${W}
  overflow: ${e=>e.overflow?e.overflow:"hidden"};
`,B=s.div`
  display: flex;
  ${w.center}
  gap: 8px;
  width: ${e=>e.$colPercent}%;
  justify-content: ${e=>e.align};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,X=s.div`
  ${w.column}
  height: fit-content;
`,v=i.createContext({distribute:[50,50],align:["start","end"],gap:8});function D({template:e,alignment:t,gap:o,...a}){const{currentTheme:c}=A(),d=i.useMemo(()=>{const m=e.reduce((p,x)=>p+x,0);return e.map(p=>p*100/m)},[e]),n=i.useMemo(()=>t instanceof Array&&t.length>=e.length?t:t instanceof Array?t.concat(new Array(e.length-t.length).fill(t[t.length-1])):new Array(e.length).fill(t),[t,e]);return r.jsx(v.Provider,{value:{distribute:d,align:n,gap:o??8},children:r.jsx(J,{...a,$theme:c})})}function Z({children:e,...t}){const{distribute:o,align:a,gap:c}=i.useContext(v);return r.jsx(U,{...t,gap:c,children:o.map((d,n)=>r.jsx(B,{$colPercent:d,align:a[n],children:e[n]},n))})}function ee({children:e,...t}){const{distribute:o,align:a,gap:c}=i.useContext(v);return r.jsx(Q,{...t,gap:c,children:o.map((d,n)=>r.jsx(B,{$colPercent:d,align:a[n],children:e[n]},n))})}const y=i.forwardRef(({children:e,scrollOffset:t},o)=>r.jsx(b,{offset:t,children:r.jsx(X,{ref:o,children:e})}));y.displayName="TableBody";try{y.displayName="TableBody",y.__docgenInfo={description:"Renders a table using the provided props and template.",displayName:"TableBody",props:{template:{defaultValue:null,description:"",name:"template",required:!0,type:{name:"number[]"}},alignment:{defaultValue:null,description:"",name:"alignment",required:!0,type:{name:"TAlignment | TAlignment[]"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}}}}}catch{}const ye={title:"PAAS/DynamicMenu",component:D,argTypes:{theme:{control:"select",options:["plus","minus"]}}},te=e=>r.jsx(oe,{children:r.jsx(z,{init:{x:10,y:10,width:500,height:220},...e,children:r.jsx(F,{init:{x:24,y:24},children:r.jsxs(D,{...e,style:{width:400,height:180},children:[r.jsxs(ee,{children:[r.jsx("div",{children:"Name"}),r.jsx("div",{children:"Type"}),r.jsx("div",{children:"Version"})]}),r.jsx(y,{scrollOffset:32,children:re.map((t,o)=>r.jsx(Z,{children:t},o))})]})})})}),re=new Array(20).fill([r.jsxs(r.Fragment,{children:[r.jsx(E,{width:25,height:16}),"File Name"]}),"me","alpha"]),h=te.bind({});h.args={theme:"plus",gap:4,template:[2,1,1],alignment:["start","center"]};const oe=s.div`
  position: relative;
  width: 600px;
  height: 400px;
  display: flex;
  ${e=>e.theme.flexCSS.center}
`;var S,R,k;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`args => <Wrapper>
    <DynamicMenu init={{
    x: 10,
    y: 10,
    width: 500,
    height: 220
  }} {...args}>
      <SpringActor init={{
      x: 24,
      y: 24
    }}>
        <Table {...args} style={{
        width: 400,
        height: 180
      }}>
          <TitleRow>
            <div>Name</div>
            <div>Type</div>
            <div>Version</div>
          </TitleRow>
          <TableBody scrollOffset={32}>
            {mock.map((row, i) => <Row key={i}>{row}</Row>)}
          </TableBody>
        </Table>
      </SpringActor>
    </DynamicMenu>
  </Wrapper>`,...(k=(R=h.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const xe=["DymenuTable"];export{h as DymenuTable,xe as __namedExportsOrder,ye as default};
//# sourceMappingURL=Table.stories-69ed81fa.js.map
