(()=>{var f=null;function r(){return f}function s(t){f=t}var o=class{constructor(e){this.props=e,this._state={},this._dependencies=[],this._memo=null}update(){s(this);let e=this._container;e.innerHTML=this.render(),s(null)}mount(e){this._container=e,this.update()}render(){throw new Error("Render method should be implemented by the component")}};function c(t){let e=r();if(e===null)throw new Error("useState must be used within a component's render method");return[e._state||t,u=>{e._state=u,e.update()}]}function p(t,e){let n=r();if(n===null)throw new Error("useEffect must be used within a component's render method");e.some((u,a)=>u!==n._dependencies[a])&&(t(),n._dependencies=e)}var m=class extends o{constructor(){super(),this._state={},this._dependencies=[],this._memo=null}render(){let[e,n]=c(0);return p(()=>{console.log("Count changed:",e)},[e]),`
      <div>
        <p>Hello world from reactivity</p>
        <p>Count: ${e}</p>
        <button onclick="(${()=>n(e+1)})()">Increment</button>
      </div>
    `}},i=m;var d=new i,x=document.getElementById("app");d.mount(x);})();
//# sourceMappingURL=bundle.js.map
