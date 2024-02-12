import{i as c,S as p}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u=document.querySelector(".form"),d=document.querySelector(".gallery"),l=document.querySelector(".loader");u.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.input.value;y(),m(t).then(r=>{h(r)}).then(()=>{g(),a(),s.target.reset(),lightbox.refresh()}).catch(()=>{a()})});function m(s){if(s.trim()===""){a(),c.error({title:"Помилка",message:"Поле не може бути порожнім.",position:"topRight"});return}const t={key:"42321641-23e42709c41860fd235775557",q:`${s.trim()}`.split(" ").map(i=>i.toLowerCase().trim()).join("+"),image_type:"photo",orientation:"horizontal",safesearch:!0},r=`https://pixabay.com/api/?key=${t.key}&q=${t.q}&image_type=${t.image_type}&orientation=${t.orientation}&safesearch=${t.safesearch}`;return fetch(r).then(i=>i.json()).then(i=>{if(i.totalHits===0)throw new Error;return i.hits}).catch(()=>{c.error({title:"Помилка",message:"Відсутні результати пошуку. Спробуйте знову!",position:"topRight"})})}function f(s){return s.map(r=>`<li class="gallery-item">
 <a href="${r.largeImageURL}"> <img
    class="galery-img"
    src="${r.webformatURL}"
    alt="${r.tags}"
    
    width="360"
    height="200px"/>
    </a>
  <div class="description">
    <p class="description-item">
      Likes<span>${r.likes}</span>
    </p>
    <p class="description-item">
      Views<span>${r.views}</span>
    </p>
    <p class="description-item">
      Comments<span>${r.comments}</span>
    </p>
    <p class="description-item">
      Downloads<span>${r.downloads}</span>
    </p>
  </div>
</li>`).join("")}function h(s){const t=f(s);d.innerHTML=t}function g(){new p(".gallery a",{captionsData:"alt",captionDelay:250})}function a(){l.classList.add("is-hidden")}function y(){l.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
