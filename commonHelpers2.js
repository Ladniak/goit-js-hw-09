import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form"),l=document.querySelector("input"),s=document.querySelector("textarea");let t={email:"",message:""};const m=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){t=e;for(const a in e)e.hasOwnProperty(a)&&(o.elements[a].value=e[a])}};m();const n=e=>{const a=e.target.name,r=e.target.value.trim();t[a]=r,localStorage.setItem("feedback-form-state",JSON.stringify(t))},c=e=>{e.preventDefault(),l.value===""||s.value===""?alert("Fill please all fields"):(e.target.reset(),localStorage.removeItem("feedback-form-state"),console.log(t),t.email="",t.message="")};o.addEventListener("change",n);o.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map
