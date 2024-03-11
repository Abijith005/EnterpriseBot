"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[571],{9571:(M,m,o)=>{o.r(m),o.d(m,{UserModule:()=>S});var l=o(6814),u=o(1730),b=o(8645),g=o(9773),d=o(4064),t=o(9468),h=o(1064),v=o(9862);let f=(()=>{class e{constructor(i){this._http=i}getTeams(){return this._http.get("/v1/service/user/getTeams")}subscribeTeam(i,n){return this._http.post("/v1/service/user/subscribeTeam",{data:i,teamId:n})}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(v.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var p=o(95);let T=(()=>{class e{constructor(i,n,s,r){this.id=i,this._matdialogeRef=n,this._ngToaster=s,this._userService=r,this.subscriptionData={captain:!1,coach:!1,players:!1},this._ngUnsbscribe=new b.x}submit(){if(!this.subscriptionData.captain&&!this.subscriptionData.coach&&!this.subscriptionData.players)return console.log("thid satisfied"),void this._ngToaster.error({detail:"At least one subscription required",duration:2e3,position:"topCenter"});this._userService.subscribeTeam(this.subscriptionData,this.id).pipe((0,g.R)(this._ngUnsbscribe)).subscribe(i=>{this._ngToaster.success({position:"topCenter",duration:2e3,detail:i.message}),this.close()})}close(){this._matdialogeRef.close()}ngOnDestroy(){this._ngUnsbscribe.next(),this._ngUnsbscribe.complete()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.WI),t.Y36(d.so),t.Y36(h.s),t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-subscription"]],decls:27,vars:3,consts:[[1,"bg-[#001F3F]","text-white","h-full","p-2"],[1,"text-center","pt-2"],[1,"flex","flex-col","gap-4","p-4"],[1,"flex","justify-between"],["for","coachToggle",1,"bg-gray-100","relative","w-20","h-10","rounded-full","cursor-pointer"],["type","checkbox","id","coachToggle",1,"sr-only","peer",3,"ngModel","ngModelChange"],[1,"w-2/5","h-4/5","bg-rose-300","absolute","rounded-full","left-1","top-1","peer-checked:border-rose-600","peer-checked:left-11","transition-all","duration-500"],["for","captainToggle",1,"bg-gray-100","relative","w-20","h-10","rounded-full","cursor-pointer"],["type","checkbox","id","captainToggle",1,"sr-only","peer",3,"ngModel","ngModelChange"],["for","playerToggle",1,"bg-gray-100","relative","w-20","h-10","rounded-full","cursor-pointer"],["type","checkbox","id","playerToggle",1,"sr-only","peer",3,"ngModel","ngModelChange"],[1,"flex","justify-end","gap-3"],["type","button",1,"bg-red-600","text-white","rounded-xl","py-2","px-3","mt-3","hover:scale-105","duration-300",3,"click"],["type","submit",1,"bg-green-600","text-white","rounded-xl","py-2","px-3","mt-3","hover:scale-105","duration-300",3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Subscribe"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"label"),t._uU(6,"Coach"),t.qZA(),t.TgZ(7,"label",4)(8,"input",5),t.NdJ("ngModelChange",function(c){return s.subscriptionData.coach=c}),t.qZA(),t._UZ(9,"span",6),t.qZA()(),t.TgZ(10,"div",3)(11,"label"),t._uU(12,"Captain"),t.qZA(),t.TgZ(13,"label",7)(14,"input",8),t.NdJ("ngModelChange",function(c){return s.subscriptionData.captain=c}),t.qZA(),t._UZ(15,"span",6),t.qZA()(),t.TgZ(16,"div",3)(17,"label"),t._uU(18,"Player"),t.qZA(),t.TgZ(19,"label",9)(20,"input",10),t.NdJ("ngModelChange",function(c){return s.subscriptionData.players=c}),t.qZA(),t._UZ(21,"span",6),t.qZA()()(),t.TgZ(22,"div",11)(23,"button",12),t.NdJ("click",function(){return s.close()}),t._uU(24," Cancel "),t.qZA(),t.TgZ(25,"button",13),t.NdJ("click",function(){return s.submit()}),t._uU(26," Submit "),t.qZA()()()),2&n&&(t.xp6(8),t.Q6J("ngModel",s.subscriptionData.coach),t.xp6(6),t.Q6J("ngModel",s.subscriptionData.captain),t.xp6(6),t.Q6J("ngModel",s.subscriptionData.players))},dependencies:[p.Wl,p.JJ,p.On]})}return e})();var _=o(6689);function x(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(i);const s=t.oxw().$implicit,r=t.oxw();return t.KtG(r.subscribeTeam(s._id))}),t._uU(1," Subscribe "),t.qZA()}}function C(e,a){1&e&&(t.TgZ(0,"p",12),t._uU(1,"Subscribed"),t.qZA())}function y(e,a){if(1&e&&(t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"h2"),t._uU(5),t.qZA()(),t.TgZ(6,"div",6)(7,"div",7)(8,"h3"),t._uU(9),t.qZA(),t.TgZ(10,"h2"),t._uU(11),t.qZA()(),t.TgZ(12,"div",8),t.YNc(13,x,2,0,"button",9),t.YNc(14,C,2,0,"ng-template",null,10,t.W1O),t.qZA()()()),2&e){const i=a.$implicit,n=t.MAs(15);t.xp6(5),t.Oqu(i.name),t.xp6(4),t.hij("Captain:",i.captain,""),t.xp6(2),t.hij("Coach:",i.coach,""),t.xp6(2),t.Q6J("ngIf",!i.subscribed)("ngIfElse",n)}}let Z=(()=>{class e{constructor(i,n,s,r){this._userServices=i,this._matDialoge=n,this._communicationServices=s,this._ngToaster=r,this.teamData=[],this._ngUnsbscribe$=new b.x}ngOnInit(){this._userServices.getTeams().pipe((0,g.R)(this._ngUnsbscribe$)).subscribe(i=>{this.teamData=i.teams}),this._communicationServices.receiveNotification().pipe((0,g.R)(this._ngUnsbscribe$)).subscribe(i=>{"players"!==i.field&&(this.teamData=this.teamData.map(n=>n._id===i.teamId?{...n,[i.field]:i.name}:n)),console.log(i),this._ngToaster.success({position:"topCenter",duration:4e3,detail:i.message})})}subscribeTeam(i){this._matDialoge.open(T,{width:"450px",height:"330px",disableClose:!0,data:i})}ngOnDestroy(){this._ngUnsbscribe$.next(),this._ngUnsbscribe$.complete()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(f),t.Y36(d.uw),t.Y36(_.O),t.Y36(h.s))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:2,vars:1,consts:[[1,"flex","flex-row","flex-wrap","justify-between","p-4"],["class","w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3",4,"ngFor","ngForOf"],[1,"w-full","max-w-sm","bg-white","border","border-gray-200","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700","m-3"],[1,"h-80"],["src","../../../../assets/images/rcb.jpg","alt","product image",1,"p-4","w-full","h-full","object-cover","rounded-t-lg"],[1,"flex","justify-center"],[1,"px-5","pb-1","m-2"],[1,"flex","items-center","gap-3","mt-3","justify-between"],[1,"flex","items-center","justify-end","gap-3"],["style","font-size: 9px","class","bg-[green] text-white text-xs rounded-xl p-2 mt-3 hover:scale-105 duration-300",3,"click",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"bg-[green]","text-white","text-xs","rounded-xl","p-2","mt-3","hover:scale-105","duration-300",2,"font-size","9px",3,"click"],[1,"mt-3"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.YNc(1,y,16,5,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",s.teamData))},dependencies:[l.sg,l.O5]})}return e})();const w=function(e,a){return{"top-[-100%] ":e,"top-[8%]":a}},U=function(e,a){return{"bi-list":e,"bi-x":a}},k=[{path:"",component:(()=>{class e{constructor(i,n,s){this._router=i,this._communicationService=n,this._ngToaster=s,this.isClicked=!1}toggle(){this.isClicked=!this.isClicked}logout(){localStorage.clear(),this._communicationService.offline(),this._ngToaster.info({position:"topCenter",duration:2e3,detail:"Log out"}),this._router.navigate(["/auth"])}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(u.F0),t.Y36(_.O),t.Y36(h.s))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-nav-bar"]],decls:11,vars:8,consts:[[1,"bg-white"],[1,"flex","justify-between","items-center","w-[92%]","mx-auto","py-3"],[1,"text-4xl","font-bold"],[1,"md:static","duration-300","md:min-h-fit","absolute","bg-white","min-h-[30vh]","left-0","top-[-100%]","md:w-auto","w-full","flex","items-center","px-5",3,"ngClass"],[1,"flex","items-center","gap-6"],[1,"bg-[#a6c1ee]","text-white","px-5","py-2","rounded-full","hover:bg-[#87aece]",3,"click"],[1,"bi","bi-list","text-3xl","cursor-pointer","md:hidden",3,"ngClass","click"]],template:function(n,s){1&n&&(t.TgZ(0,"header",0)(1,"nav",1)(2,"div")(3,"h1",2),t._uU(4,"USER"),t.qZA()(),t._UZ(5,"div",3),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return s.logout()}),t._uU(8," Log Out "),t.qZA(),t.TgZ(9,"i",6),t.NdJ("click",function(){return s.toggle()}),t.qZA()()()(),t._UZ(10,"router-outlet")),2&n&&(t.xp6(5),t.Q6J("ngClass",t.WLB(2,w,!s.isClicked,s.isClicked)),t.xp6(4),t.Q6J("ngClass",t.WLB(5,U,!s.isClicked,s.isClicked)))},dependencies:[l.mk,u.lC]})}return e})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Z}]}];let A=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(k),u.Bz]})}return e})(),S=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[l.ez,A,p.u5]})}return e})()}}]);