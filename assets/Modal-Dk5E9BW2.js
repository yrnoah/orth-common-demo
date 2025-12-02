import{r as a,j as m,d as y,R as p,m as x}from"./iframe-AucjWJ36.js";import{P as v,m as R}from"./Portal-Cf1ZhHdQ.js";const g=200;function h({open:e,children:t,onBGClick:r,disableBG:n,portalID:o=R,duration:l=g,style:c,backgroundColor:u,backgroundStyle:s}){const i=a.useRef(null),{_open:b,enter:d,leave:f}=k(!!e,l,i.current);return!b||!t?null:m.jsx(v,{id:o,children:m.jsxs(T,{ref:i,enter:d,leave:f,duration:l,style:c,children:[!n&&m.jsx(_,{enter:d,leave:f,onClick:r,duration:l,style:s,backgroundColor:u}),S(t,{enter:d,leave:f})]})})}const S=(e,t)=>!e||!t||!p.isValidElement(e)?e:e instanceof Array?e.map(r=>p.cloneElement(r,t)):p.cloneElement(e,t);function k(e,t=g,r){const[n,o]=a.useState(e),[l,c]=a.useState(!1),[u,s]=a.useState(!1);return a.useEffect(()=>{e&&o(!0)},[e]),a.useEffect(()=>{n&&!e&&s(!0)},[e,n]),a.useEffect(()=>{n&&c(!0),n||c(!1)},[n]),a.useEffect(()=>{if(u)if(r)Promise.all(r.getAnimations({subtree:!0}).map(i=>i.finished)).then(()=>{o(!1),s(!1)});else{const i=window.setTimeout(()=>{o(!1),s(!1)},t);return()=>clearTimeout(i)}},[u,r,t]),a.useEffect(()=>()=>{s(!1),o(!1)},[]),{enter:l,leave:u,_open:n}}function C(e){return e.leave?"transparent":e.enter?e.backgroundColor||"rgba(0, 0, 0, 0.15)":"transparent"}function E(e){return e.leave?0:e.enter?1:0}const P=x`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,T=y.div`
  ${e=>e.theme.fixedFill}
  z-index: ${e=>e.theme.zIndexes.modal};
  ${e=>e.theme.flexCSS.column}
  ${e=>e.theme.flexCSS.center}
  animation: ${e=>e.duration}ms ${P} ease;
  animation-fill-mode: forwards;
  opacity: ${e=>E(e)};
  transition: opacity ${e=>e.duration}ms ease;
`,_=y.div`
  ${e=>e.theme.absoluteFillCSS}
  background-color: ${e=>C(e)};
  transition: background-color ${e=>e.duration}ms ease;
  touch-action: none;
`;h.__docgenInfo={description:`@example
export function DemoModal() {
  const [open, setOpen] = useState(true);
  return (
    <Modal open={open} onBGClick={setOpen.bind(null, false)}>
      <>111</>
    </Modal>
  );
}`,methods:[],displayName:"Modal",props:{open:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"content"},onBGClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"click function on click background layer"},disableBG:{required:!1,tsType:{name:"boolean"},description:`cancel background layer
@default false`},portalID:{required:!1,tsType:{name:"string"},description:`which root div will be considered as modal's parent
@default ModalPortalID "orthogonal-modals"`,defaultValue:{value:'"orthogonal-modals"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:`display & dismiss animation duration
@unit million seconds
@default 200`,defaultValue:{value:"200",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},backgroundStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:"replace default bg color (rgba(0, 0, 0, 0.4))"}}};S.__docgenInfo={description:"",methods:[],displayName:"attachProps"};export{h as M};
