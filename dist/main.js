!function(){"use strict";var e,t={5675:function(e,t,n){var i=n(8081),o=n.n(i),s=n(3645),r=n.n(s)()(o());r.push([e.id,"html {\n  font-family: var(--lumo-font-family);\n  --lumo-clickable-cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n}\n\nmain {\n  height: 100%;\n}",""]),t.Z=r},4462:function(e,t,n){var i=n(9625);new(n(8219).F)(document.getElementById("main")).setRoutes([{path:"/",component:"application-route",children:[{path:"/",component:"index-route"}]}]);var o=n(655),s=n(9392),r=n(7408);n(2146);let a=class extends s.oi{static get styles(){return s.iv`
      h1 {
        font-size: var(--lumo-font-size-l);
        margin: var(--lumo-space-m);
      }
    `}render(){return s.dy` <vaadin-app-layout>
      <h1 slot="navbar">Catur</h1>

      <slot></slot>
    </vaadin-app-layout>`}};a=(0,o.gn)([(0,r.Mo)("application-route")],a),n(1753),n(3547),n(7316),n(2301),n(6253);class l{constructor(e,t){this.name=e,this.time=t}}class c{constructor(e,t){this.name=e,this._steps=t||[new l(`Cook ${this.name}`,25)]}get cookTime(){return this._steps.reduce(((e,t)=>e+t.time),0)}get steps(){return this._steps}}n(3092),n(4501);const u=["Potatoes","Yorkshire Puddings","Carrots","Broccoli","Stuffing","Cauliflower Cheese"];let d=class extends s.oi{constructor(){super(...arguments),this.endTime="14:00",this.chickenCookTime=60,this.selectedExtraNames=["Potatoes","Yorkshire Puddings"],this.responsiveSteps=[{minWidth:0,columns:1},{minWidth:"600px",columns:2}]}static get styles(){return s.iv`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: var(--lumo-space-m);
        padding-right: var(--lumo-space-m);
      }

      .steps {
        display: flex;
        flex-direction: column;
      }

      .instructions {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      vaadin-number-field > input {
        height: var(--lumo-size-l);
      }

      vaadin-time-picker > input {
        height: var(--lumo-size-l);
      }
    `}get totalCookTime(){return this.chickenCookTime+25}get startTime(){const e=new Date;return e.setHours(Number(this.endTime.split(":")[0])),e.setMinutes(Number(this.endTime.split(":")[1])),e.setSeconds(0),e.setMilliseconds(0),new Date(e.getTime()-60*this.totalCookTime*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderSteps(e,t,n){const i=new c("Yorkshire Puddings"),o=new c("Carrots"),r=new c("Broccoli"),a=new c("Stuffing"),u=new c("Cauliflower Cheese"),d=new c("Chicken",[new l("Cook chicken",e),new l("Rest chicken",25)]),h=[...[i,o,r,a,u,d,new c("Potatoes",[new l("Put the oven tray for the potatoes in",e+25-60),new l("Put the potatoes in",35),new l("Turn potatoes, and put back in",25)])].filter((e=>t.includes(e.name))),d],p=[];for(const e of h){let t=m(n);for(const n of e.steps.reverse()){const e=new Date(t.getTime()-60*n.time*1e3);p.push({step:n,time:e}),t=e}}const v=p.sort(((e,t)=>e.time.getTime()-t.time.getTime())).reduce(((e,t)=>{const n=t.time.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return e[n]||(e[n]=[]),e[n].push(t.step),e}),{});return s.dy`
      <div class="steps">
        ${Object.keys(v).map((e=>s.dy`
            <div>
              <h4>${e}</h4>
              <ul>
                ${v[e].map((e=>s.dy`<li>${e.name} - ${e.time} minutes</li>`))}
              </ul>
            </div>
          `))}
      </div>
    `}render(){return s.dy`
      <vaadin-form-layout .responsiveSteps="${this.responsiveSteps}">
        <vaadin-checkbox-group
          colspan="2"
          label="Extras"
          .value="${this.selectedExtraNames}"
          @value-changed="${e=>{this.selectedExtraNames=e.detail.value}}"
          theme="vertical"
        >
          ${u.map((e=>s.dy`
              <vaadin-checkbox value="${e}">${e}</vaadin-checkbox>
            `))}
        </vaadin-checkbox-group>
        <vaadin-time-picker
          label="End Time"
          value=${this.endTime}
          .step="${900}"
          @value-changed=${e=>{this.endTime=e.detail.value}}
        ></vaadin-time-picker>
        <vaadin-number-field
          label="Chicken Cook Time"
          value=${this.chickenCookTime}
          @value-changed="${e=>{this.chickenCookTime=Number(e.detail.value)}}"
          min="0"
          max="240"
          step="5"
          has-controls
        ></vaadin-number-field>
      </vaadin-form-layout>

      <div class="instructions">
        <h3>Start Time: ${this.startTime}</h3>

        ${this.renderSteps(this.chickenCookTime,this.selectedExtraNames,this.endTime)}
        <div><h3>End Time: ${this.endTime}</h3></div>
      </div>
    `}};function m(e){const t=new Date;return t.setHours(Number(e.split(":")[0])),t.setMinutes(Number(e.split(":")[1])),t.setSeconds(0),t.setMilliseconds(0),t}(0,o.gn)([(0,r.SB)()],d.prototype,"endTime",void 0),(0,o.gn)([(0,r.SB)()],d.prototype,"chickenCookTime",void 0),(0,o.gn)([(0,r.SB)()],d.prototype,"selectedExtraNames",void 0),d=(0,o.gn)([(0,r.Mo)("index-route")],d);var h=n(3379),p=n.n(h),v=n(7795),f=n.n(v),g=n(569),k=n.n(g),y=n(3565),b=n.n(y),T=n(9216),w=n.n(T),x=n(4589),C=n.n(x),$=n(5675),S={};S.styleTagTransform=C(),S.setAttributes=b(),S.insert=k().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=w(),p()($.Z,S),$.Z&&$.Z.locals&&$.Z.locals;const _=document.createElement("template");_.innerHTML=`<style>${i.$_.toString().replace(":host","html")}</style>`,document.head.appendChild(_.content)}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={id:e,exports:{}};return t[e](s,s.exports,i),s.exports}i.m=t,e=[],i.O=function(t,n,o,s){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(a=!1,s<r&&(r=s));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,r=n[0],a=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var u=l(i)}for(t&&t(n);c<r.length;c++)s=r[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},n=self.webpackChunk_lit_lit_starter_ts=self.webpackChunk_lit_lit_starter_ts||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),i.nc=void 0;var o=i.O(void 0,[304],(function(){return i(4462)}));o=i.O(o)}();