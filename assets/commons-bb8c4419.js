import{c as t,p as o}from"./styled-components.browser.esm-655d472d.js";const e=(i=2)=>({overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:i,lineClamp:i}),n={row:{display:"flex",flexDirection:"row"},column:{display:"flex",flexDirection:"column"},center:{alignItems:"center",justifyContent:"center"}},l=t`
  display: flex;
  flex-direction: row;
`,s=t`
  display: flex;
  flex-direction: column;
`,r=t`
  align-items: center;
  justify-content: center;
`,c=t`
  align-items: center;
  justify-content: space-between;
`,a={row:l,column:s,center:r,between:c},h={position:"absolute",left:0,top:0,right:0,bottom:0,width:"100%",height:"100%"},p=t`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`,d=t`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`,b={width:"100vw",height:"100vh",minWidth:800,minHeight:600},w=`
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 600px;
`,f=t`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,m=t`
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
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
      background: #d9d9d9;
    }
  }
`,u={flex:n,flexCSS:a,absoluteFill:h,absoluteFillCSS:p,fixedFill:d,minDesktopFullSize:b,minDesktopFullSizeCSS:w,ellipsis:f,ellipsisLineTwo:e(),ellipsisLineThree:e(3),ellipsisLineFour:e(4),scrollbar:m};o.div`
  flex: 1;
`;export{u as c,a as f};
//# sourceMappingURL=commons-bb8c4419.js.map
