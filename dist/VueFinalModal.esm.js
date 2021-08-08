import{ref as e,reactive as n,computed as t,watch as o,onMounted as r,onBeforeUnmount as i,nextTick as a,withScopeId as l,pushScopeId as u,popScopeId as s,withDirectives as f,openBlock as d,createBlock as c,withKeys as v,createVNode as p,Transition as m,mergeProps as y,createCommentVNode as h,withModifiers as b,renderSlot as g,Fragment as w,renderList as x,vShow as E,resolveDynamicComponent as S,toHandlers as O,createSlots as z,withCtx as M,shallowReactive as T}from"vue";function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,n,t,o,r,i,a){try{var l=e[i](a),u=l.value}catch(e){return void t(e)}l.done?n(u):Promise.resolve(u).then(o,r)}function k(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){L(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var I=function(e){return function(e,n){return j(e.querySelectorAll(n)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},V=function(e){return e==document.activeElement},D=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,t,o;return n=e,(t=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||V(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;V(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=I(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&k(n.prototype,t),o&&k(n,o),e}(),N=function(e){var n=e.targetTouches?e.targetTouches[0]:e;return{x:n.clientX,y:n.clientY}},R=function(e,n,t){return"number"!=typeof e&&(e=Math.min(n,t)||n),"number"!=typeof t&&(t=Math.max(n,e)),Math.min(Math.max(n,e),t)},$=function(e){return e&&Number(e.replace(/px$/,""))||0},H={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},K=function(e,n,t){n&&n.addEventListener(H[e].pc,t),n&&n.addEventListener(H[e].m,t,{passive:!1})},U=function(e,n,t){n&&n.removeEventListener(H[e].pc,t),n&&n.removeEventListener(H[e].m,t)},F=!1;if("undefined"!=typeof window){var W={get passive(){F=!0}};window.addEventListener("testPassive",null,W),window.removeEventListener("testPassive",null,W)}var Y,q,G="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),X=[],Z=!1,J=0,Q=-1,ee=function(e,n){var t=!1;return function(e){for(var n=[];e;){if(n.push(e),e.classList.contains("vfm"))return n;e=e.parentElement}return n}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e);return["auto","scroll"].includes(n.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,n){return!(0===e.scrollTop&&n<0||e.scrollTop+e.clientHeight+n>=e.scrollHeight&&n>0)}(e,n)&&(t=!0)})),t},ne=function(e){return X.some((function(){return ee(e,-J)}))},te=function(e){var n=e||window.event;return!!ne(n.target)||(n.touches.length>1||(n.preventDefault&&n.preventDefault(),!1))},oe=function(e,n){if(e){if(!X.some((function(n){return n.targetElement===e}))){var t={targetElement:e,options:n||{}};X=[].concat(j(X),[t]),G?(e.ontouchstart=function(e){1===e.targetTouches.length&&(Q=e.targetTouches[0].clientY)},e.ontouchmove=function(n){1===n.targetTouches.length&&function(e,n){J=e.targetTouches[0].clientY-Q,!ne(e.target)&&(n&&0===n.scrollTop&&J>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(n)&&J<0?te(e):e.stopPropagation())}(n,e)},Z||(document.addEventListener("touchmove",te,F?{passive:!1}:void 0),Z=!0)):function(e){if(void 0===q){var n=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(n&&t>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);q=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+t,"px")}}void 0===Y&&(Y=document.body.style.overflow,document.body.style.overflow="hidden")}(n)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},re=function(e){e?(X=X.filter((function(n){return n.targetElement!==e})),G?(e.ontouchstart=null,e.ontouchmove=null,Z&&0===X.length&&(document.removeEventListener("touchmove",te,F?{passive:!1}:void 0),Z=!1)):X.length||(void 0!==q&&(document.body.style.paddingRight=q,q=void 0),void 0!==Y&&(document.body.style.overflow=Y,Y=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},ie=function(){},ae="enter",le="entering",ue="leave",se="leavng",fe={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},de={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var n=C(e);return"boolean"===n||"string"===n||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(n){return-1!==e.indexOf(n)})).length===e.length}},resetOnScreenResize:{type:Boolean,default:!1},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(l,u){var s=u.emit,f=Symbol("vfm"),d=e(null),c=e(null),v=e(null),p=e(null),m=e(null),y=e(null),h=e(null),b=new D,g=e(!1),w=n({modal:!1,overlay:!1,resize:!1}),x=e(null),E=e(null),S=e(!1),O=e({}),z=e({}),M=e(null),T=e(null),C=ie,A=ie,k=t((function(){return"string"==typeof l.overlayTransition?{name:l.overlayTransition}:_({},l.overlayTransition)})),B=t((function(){return"string"==typeof l.transition?{name:l.transition}:_({},l.transition)})),P=t((function(){return(l.hideOverlay||x.value===ue)&&E.value===ue})),I=t((function(){return!1===l.zIndex?!!l.zIndexAuto&&+l.zIndexBase+2*(h.value||0):l.zIndex})),V=t((function(){return _({},!1!==I.value&&{zIndex:I.value})})),H=t((function(){var e=[z.value];return Array.isArray(l.contentStyle)?e.push.apply(e,j(l.contentStyle)):e.push(l.contentStyle),e}));function F(){return{uid:f,props:l,emit:s,vfmContainer:c,vfmContent:v,vfmResize:p,vfmOverlayTransition:m,vfmTransition:y,getAttachElement:G,modalStackIndex:h,visibility:w,handleLockScroll:q,$focusTrap:b,toggle:Q,params:O}}function W(){if(l.modelValue){if(s("_before-open",X({type:"_before-open"})),Z("before-open",!1))return void A("show");var e=G();if(e||!1===l.attach){!1!==l.attach&&e.appendChild(d.value);var n=l.api.openedModals.findIndex((function(e){return e.uid===f}));-1!==n&&l.api.openedModals.splice(n,1),l.api.openedModals.push(F()),h.value=l.api.openedModals.length-1,q(),l.api.openedModals.filter((function(e){return e.uid!==f})).forEach((function(n,t){n.getAttachElement()===e&&(n.modalStackIndex.value=t,n.visibility.overlay=!1)})),g.value=!0,w.overlay=!0,w.modal=!0}else!1!==e&&console.warn("Unable to locate target ".concat(l.attach))}}function Y(){var e=l.api.openedModals.findIndex((function(e){return e.uid===f}));if(-1!==e&&l.api.openedModals.splice(e,1),l.api.openedModals.length>0){var n=l.api.openedModals[l.api.openedModals.length-1];n.props.focusTrap&&n.$focusTrap.firstElement().focus(),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}l.drag&&te(),l.resize&&ce(),M.value=null,w.overlay=!1,w.modal=!1}function q(){l.modelValue&&a((function(){l.lockScroll?oe(c.value,{reserveScrollBarGap:!0}):re(c.value)}))}function G(){return!1!==l.attach&&("string"==typeof l.attach?!!window&&window.document.querySelector(l.attach):l.attach)}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _({ref:F()},e)}function Z(e,n){var t=!1,o=X({type:e,stop:function(){t=!0}});return s(e,o),!!t&&(S.value=!0,a((function(){s("update:modelValue",n)})),!0)}function J(e,n,t){M.value="".concat(n,":").concat(t),s(M.value,e)}function Q(e,n){var t=arguments;return new Promise((function(o,r){C=function(e){o(e),C=ie},A=function(e){r(e),A=ie};var i="boolean"==typeof e?e:!l.modelValue;i&&2===t.length&&(O.value=n),s("update:modelValue",i)}))}function ee(e){e.stopPropagation();var n,t="resize",o="drag",r=e.target.getAttribute("direction");if(r)n=t;else{if(!function(e,n,t){return""===t||j(n.querySelectorAll(t)).includes(e.target)}(e,v.value,l.dragSelector))return;n=o}J(e,n,"start");var i,a,u,s,f=N(e),d=c.value.getBoundingClientRect(),p=v.value.getBoundingClientRect(),m="absolute"===window.getComputedStyle(v.value).position,y=$(z.value.top),h=$(z.value.left),b=function(){if(l.fitParent){var e={absolute:function(){return{minTop:0,minLeft:0,maxTop:d.height-p.height,maxLeft:d.width-p.width}},relative:function(){return{minTop:y+d.top-p.top,minLeft:h+d.left-p.left,maxTop:y+d.bottom-p.bottom,maxLeft:h+d.right-p.right}}};return m?e.absolute():e.relative()}return{}}(),g=n===t&&(i=document.body,a="cursor",u=fe[r],s=i.style[a],i.style[a]=u,function(){i.style[a]=s}),w=function(e){e.stopPropagation(),J(e,n,"move");var i,a,u=N(e),s={x:u.x-f.x,y:u.y-f.y};n===t&&(s=function(e,n,t,o,r){var i=function(e){var t,o=n[e.axis];o=l.fitParent?R(e.min,o,e.max):o;var i=R(e.minEdge,e.getEdge(o),e.maxEdge);return o=e.getOffsetAxis(i,r),L(t={},e.edgeName,i),L(t,e.axis,o),t},a=function(e,n,r,i){var a,u=o[n],s=t[e]-o[e],f=(a=n).charAt(0).toUpperCase()+a.slice(1);return{axis:r,edgeName:n,min:i?s:-u,max:i?u:s,minEdge:l["min".concat(f)],maxEdge:l["max".concat(f)],getEdge:function(e){return o[n]-e*(i?1:-1)},getOffsetAxis:function(e,t){var r=o[n]-e;return t?i?r:0:(i?1:-1)*r/2}}},u={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},s={x:0,y:0};return e.split("").forEach((function(e){var n=a.apply(void 0,j(u[e]));s=_(_({},s),i(n))})),s}(r,s,d,p,m)),m?(i=p.top-d.top+s.y,a=p.left-d.left+s.x):(i=y+s.y,a=h+s.x),n===o&&l.fitParent&&(i=R(b.minTop,i,b.maxTop),a=R(b.minLeft,a,b.maxLeft));var c=_(_(_({position:"relative",top:i+"px",left:a+"px",margin:"unset",touchAction:"none"},m&&{position:"absolute",transform:"unset",width:p.width+"px",height:p.height+"px"}),s.width&&{width:s.width+"px"}),s.height&&{height:s.height+"px"});z.value=_(_({},z.value),c)};K("move",document,w),K("up",document,(function e(o){o.stopPropagation(),n===t&&g&&g(),setTimeout((function(){J(o,n,"end")})),U("move",document,w),U("up",document,e)}))}function ne(){K("down",v.value,ee),z.value.touchAction="none"}function te(){U("down",v.value,ee)}function de(){w.resize=!0,a((function(){K("down",p.value,ee)}))}function ce(){U("down",p.value,ee),w.resize=!1}function ve(){window.addEventListener("resize",pe)}function pe(){z.value=_(_({},z.value),{},{top:"0px",left:"0px"})}return o((function(){return l.modelValue}),(function(e){if(S.value)S.value=!1;else if(W(),!e){if(Z("before-close",!0))return void A("hide");Y()}})),o((function(){return l.lockScroll}),q),o((function(){return l.hideOverlay}),(function(e){l.modelValue&&!e&&(w.overlay=!0)})),o((function(){return l.attach}),W),o(P,(function(e){e&&(g.value=!1,c.value.style.display="none")}),{flush:"post"}),o((function(){return l.drag}),(function(e){g.value&&(e?ne():te())})),o((function(){return l.resize}),(function(e){g.value&&(e?de():ce())})),o((function(){return l.keepChangedStyle}),(function(e){e||(z.value={})})),o((function(){return l.resetOnScreenResize}),(function(e){e&&(e?ve():window.removeEventListener("resize",pe))})),l.api.modals.push(F()),r((function(){W()})),i((function(){var e;Y(),l.lockScroll&&c.value&&re(c.value),null==d||null===(e=d.value)||void 0===e||e.remove();var n=l.api.modals.findIndex((function(e){return e.uid===f}));l.api.modals.splice(n,1)})),{root:d,vfmContainer:c,vfmContent:v,vfmResize:p,vfmOverlayTransition:m,vfmTransition:y,computedOverlayTransition:k,computedTransition:B,visible:g,visibility:w,params:O,calculateZIndex:I,bindStyle:V,bindContentStyle:H,beforeOverlayEnter:function(){x.value=le},afterOverlayEnter:function(){x.value=ae},beforeOverlayLeave:function(){x.value=se},afterOverlayLeave:function(){x.value=ue},beforeModalEnter:function(){E.value=le},afterModalEnter:function(){E.value=ae,(l.focusRetain||l.focusTrap)&&c.value.focus(),l.focusTrap&&b.enable(c.value),l.drag&&ne(),l.resize&&de(),l.resetOnScreenResize&&ve(),s("_opened"),s("opened",X({type:"opened"})),C("show")},beforeModalLeave:function(){E.value=se,b.enabled()&&b.disable()},afterModalLeave:function(){E.value=ue,h.value=null,l.lockScroll&&re(c.value),l.keepChangedStyle||(z.value={});var e=!1,n=X({type:"closed",stop:function(){e=!0}});s("_closed"),s("closed",n),C("hide"),e||(O.value={})},onMousedown:function(e){T.value=null==e?void 0:e.target},onMouseupContainer:function(){T.value===c.value&&"resize:move"!==M.value&&(s("click-outside",X({type:"click-outside"})),l.clickToClose&&s("update:modelValue",!1))},onEsc:function(){g.value&&l.escToClose&&s("update:modelValue",!1)}}}},ce=l("data-v-2836fdb5");u("data-v-2836fdb5");var ve={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"};s();var pe=ce((function(e,n,t,o,r,i){return t.ssr||o.visible?f((d(),c("div",{key:0,ref:"root",style:o.bindStyle,class:["vfm vfm--inset",[!1===t.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":t.preventClick}]],onKeydown:n[4]||(n[4]=v((function(){return o.onEsc&&o.onEsc.apply(o,arguments)}),["esc"]))},[p(m,y(o.computedOverlayTransition,{onBeforeEnter:o.beforeOverlayEnter,onAfterEnter:o.afterOverlayEnter,onBeforeLeave:o.beforeOverlayLeave,onAfterLeave:o.afterOverlayLeave}),{default:ce((function(){return[!t.hideOverlay&&o.visibility.overlay?(d(),c("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",t.overlayClass],style:t.overlayStyle},null,6)):h("v-if",!0)]})),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),p(m,y(o.computedTransition,{onBeforeEnter:o.beforeModalEnter,onAfterEnter:o.afterModalEnter,onBeforeLeave:o.beforeModalLeave,onAfterLeave:o.afterModalLeave}),{default:ce((function(){return[f(p("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",t.classes],style:t.styles,"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[2]||(n[2]=b((function(){return o.onMouseupContainer&&o.onMouseupContainer.apply(o,arguments)}),["self"])),onMousedown:n[3]||(n[3]=b((function(){return o.onMousedown&&o.onMousedown.apply(o,arguments)}),["self"]))},[p("div",{ref:"vfmContent",class:["vfm__content",[t.contentClass,{"vfm--prevent-auto":t.preventClick}]],style:o.bindContentStyle,onMousedown:n[1]||(n[1]=function(e){return o.onMousedown(null)})},[g(e.$slots,"default",{params:o.params,close:function(){return e.$emit("update:modelValue")}}),o.visibility.resize&&o.visibility.modal?(d(),c("div",ve,[(d(!0),c(w,null,x(t.resizeDirections,(function(e){return d(),c("div",{key:e,direction:e,class:["vfm--resize-".concat(e),"vfm--absolute vfm--prevent-auto"]},null,10,["direction"])})),128))],512)):h("v-if",!0)],38)],46,["aria-expanded"]),[[E,o.visibility.modal]])]})),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[E,!t.ssr||o.visible]]):h("v-if",!0)}));!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-2836fdb5] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-2836fdb5] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-2836fdb5],\n.vfm--resize-br[data-v-2836fdb5],\n.vfm--resize-bl[data-v-2836fdb5],\n.vfm--resize-tl[data-v-2836fdb5] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-2836fdb5] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-2836fdb5] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-2836fdb5] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-2836fdb5] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-2836fdb5] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-2836fdb5] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-2836fdb5] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-2836fdb5] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),de.render=pe,de.__scopeId="data-v-2836fdb5",de.__file="lib/VueFinalModal.vue";var me={props:{},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,n,t){var o,r=this;return(o=function*(){e.ref.params.value=n.params,yield r.$nextTick(),yield r.$nextTick(),n.value||(r.slice(t),n.reject("show"))},function(){var e=this,n=arguments;return new Promise((function(t,r){var i=o.apply(e,n);function a(e){A(i,t,r,a,l,"next",e)}function l(e){A(i,t,r,a,l,"throw",e)}a(void 0)}))})()},isString:function(e){return"string"==typeof e}}},ye={class:"modals-container"};function he(e,n){var t=_(_({},e),{},{props:_({},e.props)});return Object.assign(t.props,{api:{type:Object,default:function(){return n}}}),t}me.render=function(e,n,t,o,r,i){return d(),c("div",ye,[(d(!0),c(w,null,x(e.api.dynamicModals,(function(e,n){return d(),c(S(e.component),y({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(n){return e.value=n}},O(e.on),{on_closed:function(e){return i.slice(n)},on_beforeOpen:function(n){return i.beforeOpen(n,e)},on_opened:e.opened}),z({_:2},[x(e.slots,(function(e,n){return{name:n,fn:M((function(){return[h(" eslint-disable vue/no-v-html "),i.isString(e)?(d(),c("div",{key:0,innerHTML:e},null,8,["innerHTML"])):(d(),c(S(e.component),y({key:1},e.bind,O(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","on_closed","on_beforeOpen","on_opened"])})),128))])},me.__file="lib/ModalsContainer.vue";var be=0,ge=function(){var e,n,t=(n=null,{show:function(e){for(var t=this,o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];switch(C(e)){case"string":return this.toggle.apply(this,[e,!0].concat(r));case"object":return Promise.allSettled([new Promise((function(o,i){var a={value:!0,id:Symbol("dynamicModal"),component:n,bind:{},slots:{},on:{},params:r[0],reject:i,opened:function(){o("show")}};t.dynamicModals.push(T(Object.assign(a,e)))}))])}},hide:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.toggle(n,!1)},hideAll:function(){return this.hide.apply(this,j(this.openedModals.map((function(e){return e.props.name}))))},toggle:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var r=Array.isArray(e)?this.get.apply(this,j(e)):this.get(e);return Promise.allSettled(r.map((function(e){return e.toggle.apply(e,t)})))},get:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.modals.filter((function(e){return n.includes(e.props.name)}))},dynamicModals:T([]),openedModals:[],modals:[],_setDefaultModal:function(e){n=e}});return L(e={},"$vfm",t),L(e,"VueFinalModal",function(e){var n=he(de,e);return e._setDefaultModal(n),n}(t)),L(e,"ModalsContainer",function(e){return he(me,e)}(t)),e},we=ge(),xe=we.$vfm,Ee=we.VueFinalModal,Se=we.ModalsContainer,Oe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=0===be?we:ge(),o=t.$vfm,r=t.VueFinalModal,i=t.ModalsContainer;be+=1;var a=n.key||"$vfm",l=n.componentName||"VueFinalModal",u=n.dynamicContainerName||"ModalsContainer";Object.defineProperty(e.config.globalProperties,a,{get:function(){return o}}),e.provide(a,o),e.component(l,r),e.component(u,i)},ze=function(e){return{install:function(n,t){var o=Object.assign({},e,t);Oe(n,o)}}};ze.install=Oe;export default ze;export{xe as $vfm,Se as ModalsContainer,Ee as VueFinalModal,ge as defineVfm,ze as vfmPlugin};
//# sourceMappingURL=VueFinalModal.esm.js.map
