const btnEl=document.querySelector("button"),list=document.querySelector("ul"),modal=document.querySelector(".createModal"),createBtn=document.querySelector(".createBtn"),modalBody=document.querySelector(".modalBody"),modalTitle=document.querySelector(".modalTitle");btnEl.addEventListener("click",(()=>{modal.showModal()}));const closeBtn=document.querySelector(".closeBtn");closeBtn.addEventListener("click",(()=>{modal.close(),modalBody.value="",modalTitle.value=""}));const listItem=document.createElement("li");createBtn.addEventListener("click",(()=>{if(modalTitle.value){const e=document.createElement("li");e.classList.add("listItem");const t=document.createElement("h1");t.classList.add("listItemContainer-title");const l=document.createElement("p");l.classList.add("listItemContainer-message"),t.textContent=modalTitle.value,l.textContent=modalBody.value;const o=document.createElement("div");o.classList.add("listItemContainer");const a=document.createElement("div");a.classList.add("listItemContainer-button");const n=document.createElement("button"),s=document.createElement("button");n.innerHTML='<i class="fa-solid fa-circle-check"></i>',s.innerHTML='<i class="fa-solid fa-trash"></i>',list.appendChild(e),o.appendChild(t),o.appendChild(l),e.appendChild(o),e.appendChild(a),a.appendChild(n),a.appendChild(s),list.removeChild(emptyMessage),modal.close(),modalBody.value="",modalTitle.value="",n.addEventListener("click",(()=>{t.style.cssText="text-decoration:line-through;   color: gray",l.style.cssText="text-decoration:line-through;   color: gray"})),s.addEventListener("click",(()=>{list.removeChild(e)}))}else alert("Error")}));const emptyMessage=document.createElement("p");emptyMessage.classList.add("emptyMessage"),emptyMessage.textContent="looks like you don't have plans for today....",emptyMessage.style.cssText="color: black; opacity: 0.2; font-size: 1rem",list.contains(listItem)||list.appendChild(emptyMessage);
//# sourceMappingURL=index.0123239f.js.map
