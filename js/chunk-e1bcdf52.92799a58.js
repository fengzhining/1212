(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1bcdf52"],{"2b5e":function(t,e,i){"use strict";var s=i("c31d"),n=i("2b0e"),a=i("e41f"),u=i("d399"),o=i("2638"),r=i.n(o),c=i("a142"),h=i("6605"),l=i("3875"),d=i("5596"),m=i("2bb1"),f=Object(c["j"])("image-preview"),p=f[0],v=f[1],g=3,k=1/3;function S(t){return Math.sqrt(Math.abs((t[0].clientX-t[1].clientX)*(t[0].clientY-t[1].clientY)))}var b,y=p({mixins:[h["a"],l["a"]],props:{images:Array,className:null,lazyLoad:Boolean,asyncClose:Boolean,startPosition:Number,showIndicators:Boolean,loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},overlayClass:{type:String,default:"van-image-preview__overlay"},closeOnClickOverlay:{type:Boolean,default:!0}},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,active:0}},computed:{imageStyle:function(){var t=this.scale,e={transition:this.zooming||this.moving?"":".3s all"};return 1!==t&&(e.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),e}},watch:{value:function(){this.active=this.startPosition},startPosition:function(t){this.active=t}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){t.preventDefault();var e=new Date-this.touchStartTime,i=this.$refs.swipe||{},s=i.offsetX,n=void 0===s?0:s,a=i.offsetY,u=void 0===a?0:a;if(e<300&&n<10&&u<10){var o=this.active;this.resetScale(),this.$emit("close",{index:o,url:this.images[o]}),this.asyncClose||this.$emit("input",!1)}},startMove:function(t){var e=t.currentTarget,i=e.getBoundingClientRect(),s=window.innerWidth,n=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-s)/2),this.maxMoveY=Math.max(0,(i.height-n)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=S(t.touches)},onTouchStart:function(t){var e=t.touches,i=this.$refs.swipe||{},s=i.offsetX,n=void 0===s?0:s;1===e.length&&1!==this.scale?this.startMove(t):2!==e.length||n||this.startZoom(t)},onTouchMove:function(t){var e=t.touches;if((this.moving||this.zooming)&&(t.preventDefault(),t.stopPropagation()),this.moving){this.touchMove(t);var i=this.deltaX+this.startMoveX,s=this.deltaY+this.startMoveY;this.moveX=Object(c["i"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(c["i"])(s,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var n=S(e),a=this.startScale*n/this.startDistance;this.scale=Object(c["i"])(a,k,g)}},onTouchEnd:function(t){if(this.moving||this.zooming){var e=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),e&&(t.preventDefault(),t.stopPropagation())}},onChange:function(t){this.resetScale(),this.active=t},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0}},render:function(t){var e=this;if(this.value){var i=this.active,s=this.images,n=this.showIndex&&t("div",{class:v("index")},[i+1+"/"+s.length]),a=t(d["a"],{ref:"swipe",attrs:{loop:this.loop,indicatorColor:"white",initialSwipe:this.startPosition,showIndicators:this.showIndicators},on:{change:this.onChange}},[s.map(function(s,n){var a={class:v("image"),style:n===i?e.imageStyle:null,on:{touchstart:e.onTouchStart,touchmove:e.onTouchMove,touchend:e.onTouchEnd,touchcancel:e.onTouchEnd}};return t(m["a"],[e.lazyLoad?t("img",r()([{directives:[{name:"lazy",value:s}]},a])):t("img",r()([{attrs:{src:s}},a]))])})]);return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[v(),this.className],on:{touchstart:this.onWrapperTouchStart,touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[n,a])])}}}),F={images:[],loop:!0,value:!0,className:"",lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,showIndicators:!1},C=function(){b=new(n["a"].extend(y))({el:document.createElement("div")}),document.body.appendChild(b.$el)},w=function(t,e){if(void 0===e&&(e=0),!c["g"]){b||C();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(s["a"])(b,F,i),b.$once("input",function(t){b.value=t}),i.onClose&&b.$once("close",i.onClose),b}};w.install=function(){n["a"].use(y)};var x=w,O=i("ba31"),T=i("ad06"),j=Object(c["j"])("sku-header"),$=j[0],M=j[1];function _(t,e){var i=e.s1;if(i){var s=t.tree.filter(function(t){return"s1"===t.k_s})[0]||{};if(s.v){var n=s.v.filter(function(t){return t.id===i})[0];if(n)return n.imgUrl||n.img_url}}}function I(t,e,i,s){var n=e.sku,a=e.goods,u=e.skuEventBus,o=e.selectedSku,c=_(n,o)||a.picture,h=function(){u.$emit("sku:previewImage",c)};return t("div",r()([{class:[M(),"van-hairline--bottom"]},Object(O["b"])(s)]),[t("div",{class:M("img-wrap"),on:{click:h}},[t("img",{attrs:{src:c}})]),t("div",{class:M("goods-info")},[t("div",{class:"van-sku__goods-name van-ellipsis"},[a.title]),i["default"]&&i["default"](),t(T["a"],{attrs:{name:"close"},class:"van-sku__close-icon",on:{click:function(){u.$emit("sku:close")}}})])])}I.props={sku:Object,goods:Object,skuEventBus:Object,selectedSku:Object};var B=$(I),z=Object(c["j"])("sku-row"),D=z[0],N=z[1];function E(t,e,i,s){return t("div",r()([{class:N()},Object(O["b"])(s)]),[t("div",{class:N("title")},[e.skuRow.k,"："]),i["default"]&&i["default"]()])}E.props={skuRow:Object};var A=D(E),V={QUOTA_LIMIT:0,STOCK_LIMIT:1},L="",q={LIMIT_TYPE:V,UNSELECTED_SKU_VALUE_ID:L},P=function(t){var e={};return t.forEach(function(t){e[t.k_s]=t.v}),e},R=function(t,e){var i=Object.keys(e).filter(function(t){return e[t]!==L});return t.length===i.length},X=function(t,e){var i=t.filter(function(t){return Object.keys(e).every(function(i){return String(t[i])===String(e[i])})});return i[0]},Y=function(t,e){var i=P(t);return Object.keys(e).reduce(function(t,s){var n=i[s],a=e[s];if(a!==L){var u=n.filter(function(t){return t.id===a})[0];u&&t.push(u)}return t},[])},U=function(t,e,i){var n,a=i.key,u=i.valueId,o=Object(s["a"])({},e,(n={},n[a]=u,n)),r=Object.keys(o).filter(function(t){return o[t]!==L}),c=t.filter(function(t){return r.every(function(e){return String(o[e])===String(t[e])})}),h=c.reduce(function(t,e){return t+=e.stock_num,t},0);return h>0},H={normalizeSkuTree:P,getSkuComb:X,getSelectedSkuValues:Y,isAllSelected:R,isSkuChoosable:U},K=Object(c["j"])("sku-row-item"),W=K[0],Q=W({props:{skuList:Array,skuValue:Object,skuKeyStr:String,skuEventBus:Object,selectedSku:Object},computed:{choosable:function(){return U(this.skuList,this.selectedSku,{key:this.skuKeyStr,valueId:this.skuValue.id})}},methods:{onSelect:function(){this.choosable&&this.skuEventBus.$emit("sku:select",Object(s["a"])({},this.skuValue,{skuKeyStr:this.skuKeyStr}))}},render:function(t){var e=this.skuValue.id===this.selectedSku[this.skuKeyStr];return t("span",{class:["van-sku-row__item",{"van-sku-row__item--active":e,"van-sku-row__item--disabled":!this.choosable}],on:{click:this.onSelect}},[this.skuValue.name])}}),G=Object(c["j"])("stepper"),J=G[0],Z=G[1],tt=J({props:{value:null,integer:Boolean,disabled:Boolean,inputWidth:String,asyncChange:Boolean,disableInput:Boolean,min:{type:[String,Number],default:1},max:{type:[String,Number],default:1/0},step:{type:[String,Number],default:1},defaultValue:{type:[String,Number],default:1}},data:function(){var t=this.range(Object(c["d"])(this.value)?this.value:this.defaultValue);return t!==+this.value&&this.$emit("input",t),{currentValue:t}},computed:{minusDisabled:function(){return this.disabled||this.currentValue<=this.min},plusDisabled:function(){return this.disabled||this.currentValue>=this.max}},watch:{value:function(t){t!==this.currentValue&&(this.currentValue=this.format(t))},currentValue:function(t){this.$emit("input",t),this.$emit("change",t)}},methods:{format:function(t){return t=String(t).replace(/[^0-9.-]/g,""),""===t?0:this.integer?Math.floor(t):+t},range:function(t){return Math.max(Math.min(this.max,this.format(t)),this.min)},onInput:function(t){var e=t.target.value,i=this.format(e);this.asyncChange?(t.target.value=this.currentValue,this.$emit("input",i),this.$emit("change",i)):(+e!==i&&(t.target.value=i),this.currentValue=i)},onChange:function(t){if(this[t+"Disabled"])this.$emit("overlimit",t);else{var e="minus"===t?-this.step:+this.step,i=Math.round(100*(this.currentValue+e))/100;this.asyncChange?(this.$emit("input",i),this.$emit("change",i)):this.currentValue=this.range(i),this.$emit(t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){this.currentValue=this.range(this.currentValue),this.$emit("blur",t),0===this.currentValue&&(t.target.value=this.currentValue)}},render:function(t){var e=this,i=function(t){return function(){e.onChange(t)}};return t("div",{class:Z()},[t("button",{class:Z("minus",{disabled:this.minusDisabled}),on:{click:i("minus")}}),t("input",{attrs:{type:"number",disabled:this.disabled||this.disableInput},class:Z("input"),domProps:{value:this.currentValue},style:{width:this.inputWidth},on:{input:this.onInput,focus:this.onFocus,blur:this.onBlur}}),t("button",{class:Z("plus",{disabled:this.plusDisabled}),on:{click:i("plus")}})])}}),et=Object(c["j"])("sku-stepper"),it=et[0],st=V.QUOTA_LIMIT,nt=V.STOCK_LIMIT,at=it({props:{quota:Number,quotaUsed:Number,hideStock:Boolean,skuEventBus:Object,skuStockNum:Number,selectedSku:Object,selectedNum:Number,stepperTitle:String,hideQuotaText:Boolean,selectedSkuComb:Object,disableStepperInput:Boolean,customStepperConfig:Object},data:function(){return{currentNum:this.selectedNum,limitType:nt}},watch:{currentNum:function(t){this.skuEventBus.$emit("sku:numChange",t)},stepperLimit:function(t){t<this.currentNum&&(this.currentNum=t)}},computed:{stock:function(){var t=this.customStepperConfig.stockNum;return void 0!==t?t:this.selectedSkuComb?this.selectedSkuComb.stock_num:this.skuStockNum},stockText:function(){var t=this.customStepperConfig.stockFormatter;return t?t(this.stock):"剩余"+this.stock+"件"},quotaText:function(){var t=this.customStepperConfig,e=t.quotaText,i=t.hideQuotaText;if(i)return"";var s="";return e?s=e:this.quota>0&&(s="每人限购"+this.quota+"件"),s},stepperLimit:function(){var t,e=this.quota-this.quotaUsed;return this.quota>0&&e<=this.stock?(t=e<0?0:e,this.limitType=st):(t=this.stock,this.limitType=nt),t}},methods:{setCurrentNum:function(t){this.currentNum=t},onOverLimit:function(t){this.skuEventBus.$emit("sku:overLimit",{action:t,limitType:this.limitType,quota:this.quota,quotaUsed:this.quotaUsed})},onChange:function(t){var e=this.customStepperConfig.handleStepperChange;e&&e(t),this.$emit("change",t)}},render:function(t){var e=this;return t("div",{class:"van-sku-stepper-stock"},[t("div",{class:"van-sku-stepper-container"},[t("div",{class:"van-sku__stepper-title"},[this.stepperTitle||"购买数量","："]),t(tt,{class:"van-sku__stepper",attrs:{max:this.stepperLimit,disableInput:this.disableStepperInput},on:{overlimit:this.onOverLimit,change:this.onChange},model:{value:e.currentNum,callback:function(t){e.currentNum=t}}})]),!this.hideStock&&t("div",{class:"van-sku__stock"},[this.stockText]),!this.hideQuotaText&&this.quotaText&&t("div",{class:"van-sku__quota"},[this.quotaText])])}}),ut=i("7744"),ot=i("34e9"),rt=i("565f");function ct(t){var e=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;return e.test(t)}function ht(t){return/^\d+$/.test(t)}var lt=i("543e"),dt=Object(c["j"])("uploader"),mt=dt[0],ft=dt[1],pt=mt({inheritAttrs:!1,props:{disabled:Boolean,beforeRead:Function,afterRead:Function,accept:{type:String,default:"image/*"},resultType:{type:String,default:"dataUrl"},maxSize:{type:Number,default:Number.MAX_VALUE}},computed:{detail:function(){return{name:this.$attrs.name||""}}},methods:{onChange:function(t){var e=this,i=t.target.files;!this.disabled&&i.length&&(i=1===i.length?i[0]:[].slice.call(i,0),!i||this.beforeRead&&!this.beforeRead(i,this.detail)?this.resetInput():Array.isArray(i)?Promise.all(i.map(this.readFile)).then(function(t){var s=!1,n=i.map(function(n,a){return n.size>e.maxSize&&(s=!0),{file:i[a],content:t[a]}});e.onAfterRead(n,s)}):this.readFile(i).then(function(t){e.onAfterRead({file:i,content:t},i.size>e.maxSize)}))},readFile:function(t){var e=this;return new Promise(function(i){var s=new FileReader;s.onload=function(t){i(t.target.result)},"dataUrl"===e.resultType?s.readAsDataURL(t):"text"===e.resultType&&s.readAsText(t)})},onAfterRead:function(t,e){e?this.$emit("oversize",t):this.afterRead&&this.afterRead(t,this.detail),this.resetInput()},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")}},render:function(t){var e=this.accept,i=this.disabled;return t("div",{class:ft()},[this.slots(),t("input",{attrs:Object(s["a"])({},this.$attrs,{type:"file",accept:e,disabled:i}),ref:"input",class:ft("input"),on:{change:this.onChange}})])}}),vt=Object(c["j"])("sku-img-uploader"),gt=vt[0],kt=vt[1],St=gt({props:{value:String,uploadImg:Function,maxSize:{type:Number,default:6}},data:function(){return{paddingImg:""}},computed:{imgList:function(){return this.value&&!this.paddingImg?[this.value]:[]}},methods:{afterReadFile:function(t){var e=this;this.paddingImg=t.content,this.uploadImg(t.file,t.content).then(function(t){e.$emit("input",t),e.$nextTick(function(){e.paddingImg=""})})["catch"](function(){e.paddingImg=""})},onOversize:function(){this.$toast("最大可上传图片为"+this.maxSize+"MB，请尝试压缩图片尺寸")}},render:function(t){var e=this,i=this.imgList,s=this.paddingImg,n=(s||i.length>0)&&t("div",{class:"van-clearfix"},[i.map(function(i){return t("div",{class:kt("img")},[t("img",{attrs:{src:i}}),t(T["a"],{attrs:{name:"clear"},class:kt("delete"),on:{click:function(){e.$emit("input","")}}})])}),s&&t("div",{class:kt("img")},[t("img",{attrs:{src:s}}),t(lt["a"],{attrs:{type:"spinner"},class:kt("uploading")})])]);return t("div",{class:kt()},[t(pt,{attrs:{disabled:!!s,afterRead:this.afterReadFile,maxSize:1024*this.maxSize*1024},on:{oversize:this.onOversize}},[t("div",{class:kt("header")},[s?t("div",["正在上传..."]):[t(T["a"],{attrs:{name:"photograph"}}),t("span",{class:"label"},[this.value?"重拍":"拍照"," 或 "]),t(T["a"],{attrs:{name:"photo"}}),t("span",{class:"label"},[this.value?"重新选择照片":"选择照片"])]])]),n])}}),bt=Object(c["j"])("sku-messages"),yt=bt[0],Ft=bt[1],Ct={id_no:"输入身份证号码",text:"输入文本",tel:"输入数字",email:"输入邮箱",date:"点击选择日期",time:"点击选择时间",textarea:"点击填写段落文本",mobile:"输入手机号码"},wt=yt({props:{messages:Array,messageConfig:Object,goodsId:[Number,String]},data:function(){return{messageValues:this.resetMessageValues(this.messages)}},watch:{messages:function(t){this.messageValues=this.resetMessageValues(t)}},methods:{resetMessageValues:function(t){return(t||[]).map(function(){return{value:""}})},getType:function(t){return 1===+t.multiple?"textarea":"id_no"===t.type?"text":t.datetime>0?"datetime-local":t.type},getMessages:function(){var t=this,e={};return this.messageValues.forEach(function(i,s){var n=i.value;t.messages[s].datetime>0&&(n=n.replace(/T/g," ")),e["message_"+s]=n}),e},getCartMessages:function(){var t=this,e={};return this.messageValues.forEach(function(i,s){var n=i.value,a=t.messages[s];a.datetime>0&&(n=n.replace(/T/g," ")),e[a.name]=n}),e},getPlaceholder:function(t){var e=1===+t.multiple?"textarea":t.type,i=this.messageConfig.placeholderMap||{};return i[e]||Ct[e]},validateMessages:function(){for(var t=this.messageValues,e=0;e<t.length;e++){var i=t[e].value,s=this.messages[e];if(""===i){if("1"===String(s.required)){var n="image"===s.type?"请上传":"请填写";return n+s.name}}else{if("tel"===s.type&&!ht(i))return"请填写正确的数字格式留言";if("mobile"===s.type&&!/^\d{6,20}$/.test(i))return"手机号长度为6-20位数字";if("email"===s.type&&!ct(i))return"请填写正确的邮箱";if("id_no"===s.type&&(i.length<15||i.length>18))return"请填写正确的身份证号码"}}},onBlur:function(){Object(c["e"])()&&window.scrollTo(0,0)}},render:function(t){var e=this;return t(ot["a"],{class:Ft()},[this.messages.map(function(i,s){return"image"===i.type?t(ut["a"],{class:Ft("image-cell"),attrs:{label:"仅限一张",title:i.name,required:"1"===String(i.required)},key:e.goodsId+"-"+s},[t(St,{attrs:{uploadImg:e.messageConfig.uploadImg,maxSize:e.messageConfig.uploadMaxSize},model:{value:e.messageValues[s].value,callback:function(t){e.messageValues[s].value=t}}})]):t(rt["a"],{attrs:{maxlength:"200",label:i.name,required:"1"===String(i.required),placeholder:e.getPlaceholder(i),type:e.getType(i)},key:e.goodsId+"-"+s,on:{blur:e.onBlur},model:{value:e.messageValues[s].value,callback:function(t){e.messageValues[s].value=t}}})})])}}),xt=i("b650"),Ot=Object(c["j"])("sku-actions"),Tt=Ot[0],jt=Ot[1];function $t(t,e,i,s){var n=function(t){return function(){e.skuEventBus.$emit(t)}};return t("div",r()([{class:jt()},Object(O["b"])(s)]),[e.showAddCartBtn&&t(xt["a"],{attrs:{bottomAction:!0,text:"加入购物车"},on:{click:n("sku:addCart")}}),t(xt["a"],{attrs:{type:"primary",bottomAction:!0,text:e.buyText||"立即购买"},on:{click:n("sku:buy")}})])}$t.props={buyText:String,skuEventBus:Object,showAddCartBtn:Boolean};var Mt=Tt($t),_t=Object(c["j"])("sku"),It=_t[0],Bt=V.QUOTA_LIMIT,zt=It({props:{sku:Object,goods:Object,quota:Number,value:Boolean,buyText:String,quotaUsed:Number,goodsId:[Number,String],hideStock:Boolean,hideQuotaText:Boolean,stepperTitle:String,getContainer:Function,customSkuValidator:Function,closeOnClickOverlay:Boolean,disableStepperInput:Boolean,resetStepperOnHide:Boolean,resetSelectedSkuOnHide:Boolean,initialSku:{type:Object,default:function(){return{}}},showSoldoutSku:{type:Boolean,default:!0},showAddCartBtn:{type:Boolean,default:!0},bodyOffsetTop:{type:Number,default:200},messageConfig:{type:Object,default:function(){return{placeholderMap:{},uploadImg:function(){return Promise.resolve()},uploadMaxSize:5}}},customStepperConfig:{type:Object,default:function(){return{}}}},data:function(){return{selectedSku:{},selectedNum:1,show:this.value}},watch:{show:function(t){if(this.$emit("input",t),!t){var e=Y(this.sku.tree,this.selectedSku);this.$emit("sku-close",{selectedSkuValues:e,selectedNum:this.selectedNum,selectedSkuComb:this.selectedSkuComb}),this.resetStepperOnHide&&this.resetStepper(),this.resetSelectedSkuOnHide&&this.resetSelectedSku(this.skuTree)}},value:function(t){this.show=t},skuTree:function(t){this.resetSelectedSku(t)}},computed:{skuGroupClass:function(){return["van-sku-group-container","van-hairline--bottom",{"van-sku-group-container--hide-soldout":!this.showSoldoutSku}]},bodyStyle:function(){if(!this.$isServer){var t=window.innerHeight-this.bodyOffsetTop;return{maxHeight:t+"px"}}},isSkuCombSelected:function(){return R(this.sku.tree,this.selectedSku)},isSkuEmpty:function(){return 0===Object.keys(this.sku).length},hasSku:function(){return!this.sku.none_sku},selectedSkuComb:function(){return this.hasSku?this.isSkuCombSelected?X(this.sku.list,this.selectedSku):null:{id:this.sku.collection_id,price:Math.round(100*this.sku.price),stock_num:this.sku.stock_num}},price:function(){return this.selectedSkuComb?(this.selectedSkuComb.price/100).toFixed(2):this.sku.price},skuTree:function(){return this.sku.tree||[]},imageList:function(){var t=[this.goods.picture];if(this.skuTree.length>0){var e=this.skuTree.filter(function(t){return"s1"===t.k_s})[0]||{};if(!e.v)return;e.v.forEach(function(e){var i=e.imgUrl||e.img_url;i&&t.push(i)})}return t}},created:function(){var t=new n["a"];this.skuEventBus=t,t.$on("sku:close",this.onClose),t.$on("sku:select",this.onSelect),t.$on("sku:numChange",this.onNumChange),t.$on("sku:previewImage",this.onPreviewImage),t.$on("sku:overLimit",this.onOverLimit),t.$on("sku:addCart",this.onAddCart),t.$on("sku:buy",this.onBuy),this.resetStepper(),this.resetSelectedSku(this.skuTree),this.$emit("after-sku-create",t)},methods:{resetStepper:function(){var t=this.$refs.skuStepper,e=this.initialSku.selectedNum,i=Object(c["d"])(e)?e:1;t?t.setCurrentNum(i):this.selectedNum=i},resetSelectedSku:function(t){var e=this;this.selectedSku={},t.forEach(function(t){e.selectedSku[t.k_s]=e.initialSku[t.k_s]||L}),t.forEach(function(t){var i=t.k_s,s=t.v[0].id;1===t.v.length&&U(e.sku.list,e.selectedSku,{key:i,valueId:s})&&(e.selectedSku[i]=s)})},getSkuMessages:function(){return this.$refs.skuMessages?this.$refs.skuMessages.getMessages():{}},getSkuCartMessages:function(){return this.$refs.skuMessages?this.$refs.skuMessages.getCartMessages():{}},validateSkuMessages:function(){return this.$refs.skuMessages?this.$refs.skuMessages.validateMessages():""},validateSku:function(){if(0===this.selectedNum)return"商品已经无法购买啦";if(this.isSkuCombSelected)return this.validateSkuMessages();if(this.customSkuValidator){var t=this.customSkuValidator(this);if(t)return t}return"请先选择商品规格"},onClose:function(){this.show=!1},onSelect:function(t){var e,i;this.selectedSku=this.selectedSku[t.skuKeyStr]===t.id?Object(s["a"])({},this.selectedSku,(e={},e[t.skuKeyStr]=L,e)):Object(s["a"])({},this.selectedSku,(i={},i[t.skuKeyStr]=t.id,i)),this.$emit("sku-selected",{skuValue:t,selectedSku:this.selectedSku,selectedSkuComb:this.selectedSkuComb})},onNumChange:function(t){this.selectedNum=t},onPreviewImage:function(t){var e=this,i=this.imageList.findIndex(function(e){return e===t}),s={index:i,imageList:this.imageList,indexImage:t};this.$emit("preview-on",s),x({images:this.imageList,startPosition:i,onClose:function(){e.$emit("preview-close",s)}})},onOverLimit:function(t){var e=t.action,i=t.limitType,s=t.quota,n=t.quotaUsed,a=this.customStepperConfig.handleOverLimit;if(a)a(t);else if("minus"===e)Object(u["a"])("至少选择一件");else if("plus"===e)if(i===Bt){var o="限购"+s+"件";n>0&&(o+="，你已购买"+n+"件"),Object(u["a"])(o)}else Object(u["a"])("库存不足")},onAddCart:function(){this.onBuyOrAddCart("add-cart")},onBuy:function(){this.onBuyOrAddCart("buy-clicked")},onBuyOrAddCart:function(t){var e=this.validateSku();e?Object(u["a"])(e):this.$emit(t,this.getSkuData())},getSkuData:function(){return{goodsId:this.goodsId,selectedNum:this.selectedNum,selectedSkuComb:this.selectedSkuComb,messages:this.getSkuMessages(),cartMessages:this.getSkuCartMessages()}}},render:function(t){var e=this;if(!this.isSkuEmpty){var i=this.sku,s=this.goods,n=this.price,u=this.skuEventBus,o=this.selectedSku,r=this.selectedNum,c=this.stepperTitle,h=this.hideQuotaText,l=this.selectedSkuComb,d={price:n,selectedNum:r,skuEventBus:u,selectedSku:o,selectedSkuComb:l},m=function(t){return e.slots(t,d)},f=m("sku-header")||t(B,{attrs:{sku:i,goods:s,skuEventBus:u,selectedSku:o}},[m("sku-header-price")||t("div",{class:"van-sku__goods-price"},[t("span",{class:"van-sku__price-symbol"},["￥"]),t("span",{class:"van-sku__price-num"},[n])])]),p=m("sku-group")||this.hasSku&&t("div",{class:this.skuGroupClass},[this.skuTree.map(function(e){return t(A,{attrs:{skuRow:e}},[e.v.map(function(s){return t(Q,{attrs:{skuList:i.list,skuValue:s,selectedSku:o,skuEventBus:u,skuKeyStr:e.k_s}})})])})]),v=m("sku-stepper")||t(at,{ref:"skuStepper",attrs:{quota:this.quota,hideStock:this.hideStock,quotaUsed:this.quotaUsed,skuEventBus:u,selectedNum:r,selectedSku:o,stepperTitle:c,skuStockNum:i.stock_num,hideQuotaText:h,selectedSkuComb:l,disableStepperInput:this.disableStepperInput,customStepperConfig:this.customStepperConfig},on:{change:function(t){e.$emit("stepper-change",t)}}}),g=m("sku-messages")||t(wt,{ref:"skuMessages",attrs:{goodsId:this.goodsId,messageConfig:this.messageConfig,messages:i.messages}}),k=m("sku-actions")||t(Mt,{attrs:{buyText:this.buyText,skuEventBus:u,showAddCartBtn:this.showAddCartBtn}});return t(a["a"],{attrs:{position:"bottom",getContainer:this.getContainer,closeOnClickOverlay:this.closeOnClickOverlay},class:"van-sku-container",model:{value:e.show,callback:function(t){e.show=t}}},[f,t("div",{class:"van-sku-body",style:this.bodyStyle},[m("sku-body-top"),p,m("extra-sku-group"),v,g]),k])}}});zt.SkuActions=Mt,zt.SkuHeader=B,zt.SkuMessages=wt,zt.SkuStepper=at,zt.SkuRow=A,zt.SkuRowItem=Q,zt.skuHelper=H,zt.skuConstants=q;e["a"]=zt},"2bb1":function(t,e,i){"use strict";var s=i("c31d"),n=i("a142"),a=Object(n["j"])("swipe-item"),u=a[0],o=a[1];e["a"]=u({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var e=this.$parent,i=e.vertical,n=e.computedWidth,a=e.computedHeight,u={width:n+"px",height:i?a+"px":"100%",transform:"translate"+(i?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:o(),style:u,on:Object(s["a"])({},this.$listeners)},[this.slots()])}})},"34e9":function(t,e,i){"use strict";var s=i("2638"),n=i.n(s),a=i("a142"),u=i("ba31"),o=Object(a["j"])("cell-group"),r=o[0],c=o[1];function h(t,e,i,s){var a=t("div",n()([{class:[c(),{"van-hairline--top-bottom":e.border}]},Object(u["b"])(s,!0)]),[i["default"]&&i["default"]()]);return e.title?t("div",[t("div",{class:c("title")},[e.title]),a]):a}h.props={title:String,border:{type:Boolean,default:!0}},e["a"]=r(h)},"504b":function(t,e,i){},5596:function(t,e,i){"use strict";var s=i("a142"),n=i("db78"),a=i("3875"),u=Object(s["j"])("swipe"),o=u[0],r=u[1];e["a"]=o({mixins:[a["a"]],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,initialSwipe:Number,indicatorColor:String,loop:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},mounted:function(){this.initialize(),this.$isServer||Object(n["b"])(window,"resize",this.onResize,!0)},activated:function(){this.rendered&&this.initialize(),this.rendered=!0},destroyed:function(){this.clear(),this.$isServer||Object(n["a"])(window,"resize",this.onResize,!0)},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",i=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var e=this.$el.getBoundingClientRect();this.computedWidth=this.width||e.width,this.computedHeight=this.height||e.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(t.preventDefault(),t.stopPropagation(),this.move({offset:Math.min(Math.max(this.delta,-this.size),this.size)})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},move:function(t){var e=t.pace,i=void 0===e?0:e,s=t.offset,n=void 0===s?0:s,a=t.emitChange,u=this.delta,o=this.active,r=this.count,c=this.swipes,h=this.trackSize,l=0===o,d=o===r-1,m=!this.loop&&(l&&(n>0||i<0)||d&&(n<0||i>0));m||r<=1||(c[0]&&(c[0].offset=d&&(u<0||i>0)?h:0),c[r-1]&&(c[r-1].offset=l&&(u>0||i<0)?-h:0),i&&o+i>=-1&&o+i<=r&&(this.active+=i,a&&this.$emit("change",this.activeIndicator)),this.offset=Math.round(n-this.active*this.size))},swipeTo:function(t){var e=this;this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),setTimeout(function(){e.swiping=!1,e.move({pace:t%e.count-e.active,emitChange:!0})},30)},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),setTimeout(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()},30)},e))}},render:function(t){var e=this,i=this.count,s=this.activeIndicator,n=this.slots("indicator")||this.showIndicators&&i>1&&t("div",{class:r("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map(function(i,n){return t("i",{class:r("indicator",{active:n===s}),style:n===s?e.indicatorStyle:null})})]);return t("div",{class:r()},[t("div",{ref:"track",style:this.trackStyle,class:r("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),n])}})},"66b9":function(t,e,i){"use strict";i("68ef")},"786d":function(t,e,i){},8270:function(t,e,i){},bcd3:function(t,e,i){},d10a:function(t,e,i){},e415:function(t,e,i){"use strict";i("68ef"),i("4d75"),i("b258"),i("8270"),i("786d"),i("504b"),i("fb6c"),i("1146"),i("bcd3"),i("d10a")},e41f:function(t,e,i){"use strict";var s=i("a142"),n=i("6605"),a=Object(s["j"])("popup"),u=a[0],o=a[1];e["a"]=u({mixins:[n["a"]],props:{position:String,transition:String,overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},render:function(t){var e,i=this;if(this.shouldRender){var s=this.position,n=function(t){return function(){return i.$emit(t)}},a=this.transition||(s?"van-popup-slide-"+s:"van-fade");return t("transition",{attrs:{name:a},on:{afterEnter:n("opened"),afterLeave:n("closed")}},[t("div",{directives:[{name:"show",value:this.value}],class:o((e={},e[s]=s,e))},[this.slots()])])}}})},e666:function(t,e,i){"use strict";e["a"]={sku:{tree:[{k:"颜色",k_id:"1",v:[{id:"1215",name:"白色"}],k_s:"s1"}],list:[{price:300,s1:"1215",stock_num:9999999,goods_id:946755,name:"",img:""}],none_sku:!1,hide_stock:!0},goods_info:{title:"水壶",picture:"https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg"}}},fb6c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-e1bcdf52.92799a58.js.map