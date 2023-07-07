import{H as E,ah as F,r as P,av as oe,b as ne,V as se,aw as Z,ax as K,ae as W,c as i,ap as z,J as L,U as X,o as _,af as ae,as as ue}from"./entry.1e4cad17.js";const de=E({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function fe(o){const l=F("useRender");l.render=o}function ie(o){const l=P(),v=P();if(oe){const a=new ResizeObserver(n=>{o==null||o(n,a),n.length&&(v.value=n[0].contentRect)});ne(()=>{a.disconnect()}),se(l,(n,r)=>{r&&(a.unobserve(Z(r)),v.value=void 0),n&&a.observe(Z(n))},{flush:"post"})}return{resizeRef:l,contentRect:K(v)}}const C=Symbol.for("vuetify:layout"),le=Symbol.for("vuetify:layout-item"),q=1e3,pe=E({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function ye(){const o=W(C);if(!o)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:o.getLayoutItem,mainRect:o.mainRect,mainStyles:o.mainStyles}}const re=(o,l,v,a)=>{let n={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...n}}];for(const f of o){const y=l.get(f),g=v.get(f),$=a.get(f);if(!y||!g||!$)continue;const h={...n,[y.value]:parseInt(n[y.value],10)+($.value?parseInt(g.value,10):0)};r.push({id:f,layer:h}),n=h}return r};function me(o){const l=W(C,null),v=i(()=>l?l.rootZIndex.value-100:q),a=P([]),n=z(new Map),r=z(new Map),f=z(new Map),y=z(new Map),g=z(new Map),{resizeRef:$,contentRect:h}=ie(),D=i(()=>{const t=new Map,c=o.overlaps??[];for(const e of c.filter(u=>u.includes(":"))){const[u,s]=e.split(":");if(!a.value.includes(u)||!a.value.includes(s))continue;const p=n.get(u),m=n.get(s),S=r.get(u),R=r.get(s);!p||!m||!S||!R||(t.set(s,{position:p.value,amount:parseInt(S.value,10)}),t.set(u,{position:m.value,amount:-parseInt(R.value,10)}))}return t}),b=i(()=>{const t=[...new Set([...f.values()].map(e=>e.value))].sort((e,u)=>e-u),c=[];for(const e of t){const u=a.value.filter(s=>{var p;return((p=f.get(s))==null?void 0:p.value)===e});c.push(...u)}return re(c,n,r,y)}),H=i(()=>!Array.from(g.values()).some(t=>t.value)),x=i(()=>b.value[b.value.length-1].layer),G=i(()=>({"--v-layout-left":L(x.value.left),"--v-layout-right":L(x.value.right),"--v-layout-top":L(x.value.top),"--v-layout-bottom":L(x.value.bottom),...H.value?void 0:{transition:"none"}})),I=i(()=>b.value.slice(1).map((t,c)=>{let{id:e}=t;const{layer:u}=b.value[c],s=r.get(e),p=n.get(e);return{id:e,...u,size:Number(s.value),position:p.value}})),T=t=>I.value.find(c=>c.id===t),O=F("createLayout"),V=X(!1);_(()=>{V.value=!0}),ae(C,{register:(t,c)=>{let{id:e,order:u,position:s,layoutSize:p,elementSize:m,active:S,disableTransitions:R,absolute:Q}=c;f.set(e,u),n.set(e,s),r.set(e,p),y.set(e,S),R&&g.set(e,R);const j=ue(le,O==null?void 0:O.vnode).indexOf(t);j>-1?a.value.splice(j,0,e):a.value.push(e);const N=i(()=>I.value.findIndex(w=>w.id===e)),B=i(()=>v.value+b.value.length*2-N.value*2),k=i(()=>{const w=s.value==="left"||s.value==="right",M=s.value==="right",te=s.value==="bottom",U={[s.value]:0,zIndex:B.value,transform:`translate${w?"X":"Y"}(${(S.value?0:-110)*(M||te?-1:1)}%)`,position:Q.value||v.value!==q?"absolute":"fixed",...H.value?void 0:{transition:"none"}};if(!V.value)return U;const d=I.value[N.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const A=D.value.get(e);return A&&(d[A.position]+=A.amount),{...U,height:w?`calc(100% - ${d.top}px - ${d.bottom}px)`:m.value?`${m.value}px`:void 0,left:M?void 0:`${d.left}px`,right:M?`${d.right}px`:void 0,top:s.value!=="bottom"?`${d.top}px`:void 0,bottom:s.value!=="top"?`${d.bottom}px`:void 0,width:w?m.value?`${m.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),ee=i(()=>({zIndex:B.value-1}));return{layoutItemStyles:k,layoutItemScrimStyles:ee,zIndex:B}},unregister:t=>{f.delete(t),n.delete(t),r.delete(t),y.delete(t),g.delete(t),a.value=a.value.filter(c=>c!==t)},mainRect:x,mainStyles:G,getLayoutItem:T,items:I,layoutRect:h,rootZIndex:v});const J=i(()=>["v-layout",{"v-layout--full-height":o.fullHeight}]),Y=i(()=>({zIndex:v.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:J,layoutStyles:Y,getLayoutItem:T,items:I,layoutRect:h,layoutRef:$}}const ge=E({tag:{type:String,default:"div"}},"tag");function he(){const o=X(!1);return _(()=>{window.requestAnimationFrame(()=>{o.value=!0})}),{ssrBootStyles:i(()=>o.value?void 0:{transition:"none !important"}),isBooted:K(o)}}export{ge as a,he as b,pe as c,me as d,ye as e,de as m,fe as u};
