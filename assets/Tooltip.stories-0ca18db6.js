import{j as e}from"./jsx-runtime-94f6e698.js";import{p as x}from"./styled-components.browser.esm-655d472d.js";import{I as f}from"./IconWarning-75f2a4c4.js";import{T as m}from"./Tooltip-7860af6a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const W={title:"PAAS/Tooltip"},g=["top","bottom","left","right"],$=["start","center","end"],j=t=>e.jsx(b,{children:g.map((i,h)=>$.map((s,l)=>e.jsx(m,{position:i,align:s,gap:10,text:l%2===0?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx(f,{style:{flex:"none",color:"#EE8152"},width:12,height:12}),e.jsxs("span",{style:{flex:"none"},children:[i," ",s]})]}):`${i} ${s}`,children:v[h][l]},i+s)))}),p=j.bind({}),n=88,r=32,b=x.div`
  position: relative;
  ${t=>t.theme.flexCSS.row}
  flex-wrap: wrap;
  top: ${60}px;
  left: ${60}px;
  width: ${n*5}px;
  height: ${r*5}px;
  gap: 8px;
`,o=x.div`
  ${t=>t.top!==void 0?`top: ${t.top}px`:""};
  ${t=>t.bottom!==void 0?`bottom: ${t.bottom}px`:""};
  ${t=>t.left!==void 0?`left: ${t.left}px`:""};
  ${t=>t.right!==void 0?`right: ${t.right}px`:""};
  position: absolute;
  ${t=>t.theme.flexCSS.row}
  ${t=>t.theme.flexCSS.center}
  width: ${n}px;
  height: ${r}px;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
  font-size: 12px;
`,v=[[e.jsx(o,{left:n,top:0,children:"top start"},"ts"),e.jsx(o,{left:n*2,top:0,children:"top center"},"tc"),e.jsx(o,{left:n*3,top:0,children:"top end"},"te")],[e.jsx(o,{left:n,top:r*4,children:"bottom start"},"bs"),e.jsx(o,{left:n*2,top:r*4,children:"bottom center"},"bc"),e.jsx(o,{left:n*3,top:r*4,children:"bottom end"},"be")],[e.jsx(o,{left:0,top:r,children:"left start"},"ls"),e.jsx(o,{left:0,top:r*2,children:"left center"},"lc"),e.jsx(o,{left:0,top:r*3,children:"left end"},"le")],[e.jsx(o,{left:n*4,top:r,children:"right start"},"rs"),e.jsx(o,{left:n*4,top:r*2,children:"right center"},"rc"),e.jsx(o,{left:n*4,top:r*3,children:"right end"},"re")]];var a,c,d;p.parameters={...p.parameters,docs:{...(a=p.parameters)==null?void 0:a.docs,source:{originalSource:`args => <Wrapper>
    {pos.map((position, i) => align.map((align, j) => <RawTooltip key={position + align} position={position} align={align} gap={10} text={j % 2 === 0 ? <div style={{
    display: "flex",
    alignItems: "center",
    gap: 4
  }}>
                <IconWarning style={{
      flex: "none",
      color: "#EE8152"
    }} width={12} height={12} />
                <span style={{
      flex: "none"
    }}>
                  {position} {align}
                </span>
              </div> : \`\${position} \${align}\`}>
          {divs[i][j]}
        </RawTooltip>))}
  </Wrapper>`,...(d=(c=p.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["Tooltip"];export{p as Tooltip,C as __namedExportsOrder,W as default};
//# sourceMappingURL=Tooltip.stories-0ca18db6.js.map
