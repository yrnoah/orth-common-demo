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
`,a={row:l,column:s,center:r,between:c},p={position:"absolute",left:0,top:0,right:0,bottom:0,width:"100%",height:"100%"},h=t`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`,d={width:"100vw",height:"100vh",minWidth:800,minHeight:600},b=`
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 600px;
`,w=t`
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
`,f={flex:n,flexCSS:a,absoluteFill:p,absoluteFillCSS:h,minDesktopFullSize:d,minDesktopFullSizeCSS:b,ellipsis:w,ellipsisLineTwo:e(),ellipsisLineThree:e(3),ellipsisLineFour:e(4),scrollbar:m};o.div`
  flex: 1;
`;export{f as c,a as f};
//# sourceMappingURL=commons-2a828b44.js.map
