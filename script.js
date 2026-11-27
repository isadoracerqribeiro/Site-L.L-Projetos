/* ---------- Textos (PT / EN) ---------- */
const I18N = {
  pt: {
    nav_projects:"Projetos", nav_about:"Escritório", nav_contact:"Contato",
    hero_title:"Arquitetura com presença, silêncio e propósito.",
    hero_sub:"Projetos residenciais, comerciais e de interiores.",
    about_text:"Espaços atemporais, onde luz, material e proporção conduzem cada decisão.",
    contact_text:"Vamos conversar sobre o seu projeto.",
    f_name:"Nome", f_email:"E-mail", f_msg:"Mensagem", f_send:"Enviar",
    back:"← Projetos", home:"← Início", view_all:"Ver todos os projetos →", about_cta:"Entre em contato →",
    all:"Todos", filter:"Filtro", next:"Próximo projeto", notfound:"Projeto não encontrado."
  },
  en: {
    nav_projects:"Projects", nav_about:"Studio", nav_contact:"Contact",
    hero_title:"Architecture with presence, silence and purpose.",
    hero_sub:"Residential, commercial and interior projects.",
    about_text:"Timeless spaces, where light, material and proportion guide every decision.",
    contact_text:"Let's talk about your project.",
    f_name:"Name", f_email:"E-mail", f_msg:"Message", f_send:"Send",
    back:"← Projects", home:"← Home", view_all:"View all projects →", about_cta:"Get in touch →",
    all:"All", filter:"Filter", next:"Next project", notfound:"Project not found."
  }
};

let lang = "pt";
try{ lang = localStorage.getItem("lang") || ((navigator.language||"pt").toLowerCase().startsWith("en") ? "en" : "pt"); }catch(e){}

const t = k => I18N[lang][k] || k;
const PH = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#7a6e65"/></svg>');
const img = (src, alt="", cls="tint") => `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${PH}'">`;

/* ---------- Lista de projetos ---------- */
let filter = "all";
const card = (p,i) => `
  <a class="card reveal ${["","d1","d2"][i%3]}" href="projeto.html?id=${p.id}">
    <div class="frame">${img(p.cover,p.title[lang])}</div>
    <div class="meta"><div class="row"><b>${p.title[lang]}</b><span>${p.place}</span></div>
    <p class="short">${p.short[lang]}</p></div>
  </a>`;

function renderHome(){
  const grid = document.getElementById("grid"); if(!grid) return;
  const all = !!grid.dataset.all;
  const fb = document.getElementById("filters");
  if(fb){
    const types = [...new Set(PROJECTS.map(p=>p.type.pt))];
    fb.innerHTML = [["all",t("all")], ...types.map(k=>[k,PROJECTS.find(p=>p.type.pt===k).type[lang]])]
      .map(([k,l])=>`<button class="${k===filter?"on":""}" data-f="${k}">${l}</button>`).join("");
    fb.querySelectorAll("button").forEach(b=>b.onclick=()=>{filter=b.dataset.f; renderHome(); observe();});
  }
  const list = PROJECTS.filter(p=> all ? (filter==="all"||p.type.pt===filter) : p.featured);
  const c = document.getElementById("count");
  if(c){ const n=list.length; c.textContent = lang==="pt" ? `Exibindo ${n} ${n===1?"projeto":"projetos"}` : `Showing ${n} ${n===1?"project":"projects"}`; }
  grid.innerHTML = (all?'<div class="spacer"></div>':"") + list.map(card).join("");
}

/* ---------- Página do projeto ---------- */
/* Detecta foto vertical (v) ou horizontal (h) e ajusta o layout */
function orient(i){ i.closest(".shot").classList.add(i.naturalHeight>i.naturalWidth?"v":"h"); }
function renderProject(){
  const el = document.getElementById("project"); if(!el) return;
  const i = PROJECTS.findIndex(p=>p.id===new URLSearchParams(location.search).get("id"));
  if(i<0){ el.innerHTML = `<p style="padding:160px 56px">${t("notfound")}</p>`; return; }
  const p = PROJECTS[i], n = PROJECTS[(i+1)%PROJECTS.length];
  document.title = p.title[lang] + " – Lippo Leahy Arquitetura";
  el.innerHTML = `
    <section class="hero-p">
      ${img(p.hero||p.cover,p.title[lang],"")}
      <div class="hp-txt">
        <h1 class="reveal${p.id === "Apartamento CB" ? " hp-title-apartment-cb" : ""}">${p.title[lang]}</h1>
        <div class="hp-meta reveal d1"><span>${p.year}</span><span>${p.place}</span><span>${p.type[lang]}</span></div>
        <p class="reveal d2">${p.desc[lang]}</p>
      </div>
    </section>
    <div class="gallery">${p.images.map(s=>{const o=typeof s==="string"?{src:s}:s;return `<div class="shot ${o.plan?"plan ":""}reveal">${img(o.src,p.title[lang],"").replace(' loading="lazy"',' onload="orient(this)"')}</div>`;}).join("")}</div>
    <a class="next reveal" href="projeto.html?id=${n.id}"><small>${t("next")}</small>${n.title[lang]} →</a>`;
}

function applyLang(){
  document.documentElement.lang = lang==="pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-ph]").forEach(e=>e.placeholder=t(e.dataset.i18nPh));
  document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("on",b.dataset.lang===lang));
  renderHome(); renderProject(); observe();
}

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
}),{threshold:.12, rootMargin:"0px 0px -6% 0px"});
function observe(){ document.querySelectorAll(".reveal:not(.in)").forEach(e=>io.observe(e)); }

/* ---------- Eventos ---------- */
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{
  lang = b.dataset.lang; try{localStorage.setItem("lang",lang);}catch(e){} applyLang();
}));

const ft = document.getElementById("ftoggle");
if(ft) ft.onclick = ()=>{
  const o = ft.getAttribute("aria-expanded")==="true";
  ft.setAttribute("aria-expanded", String(!o));
  document.getElementById("filters").classList.toggle("open", !o);
};

const form = document.getElementById("form");
if(form) form.addEventListener("submit",e=>{
  e.preventDefault();
  const d = new FormData(form);
  location.href = `mailto:contato@seudominio.com.br?subject=${encodeURIComponent("Contato via site – "+d.get("nome"))}&body=${encodeURIComponent(d.get("msg")+"\n\n"+d.get("nome")+" ("+d.get("email")+")")}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLang();

/* Cabeçalho transparente sobre a imagem de abertura do projeto */
if(document.querySelector(".hero-p")){
  const h = document.querySelector(".header"); h.classList.add("over");
  const f = ()=>h.classList.toggle("solid", scrollY > innerHeight*.75);
  addEventListener("scroll", f, {passive:true}); f();
}

/* Barra de progresso de leitura (marsala) */
(()=>{const h=document.querySelector(".header"),b=document.createElement("div");b.className="progress";h.appendChild(b);
const f=()=>{b.style.width=(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+"%"};
addEventListener("scroll",f,{passive:true});f();})();