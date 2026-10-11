(() => {
  const c = window.SITE_CONTENT;
  const $ = id => document.getElementById(id);
  const link = (label,url,cls="") => {
    const a=document.createElement("a"); a.textContent=label; a.href=url; a.target="_blank"; a.rel="noreferrer"; if(cls)a.className=cls; return a;
  };
  const text = (tag, value, cls="") => { const e=document.createElement(tag); e.textContent=value||""; if(cls)e.className=cls; return e; };
  const paperPreview = title => {
    const safe=(title||"Publication").replace(/[&<>"']/g,s=>"");
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="#f6fafc"/><rect x="28" y="28" width="584" height="304" rx="16" fill="#fff" stroke="#d8dde3"/><circle cx="120" cy="180" r="52" fill="#dcecf5"/><circle cx="320" cy="125" r="36" fill="#e9f2f7"/><circle cx="480" cy="215" r="44" fill="#d8e8f1"/><path d="M165 177 L280 135 M352 143 L442 195" stroke="#1772a8" stroke-width="6"/><text x="320" y="305" text-anchor="middle" font-family="Georgia,serif" font-size="21" fill="#43515e">'+safe.slice(0,48)+'</text></svg>';
    return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
  };

  document.title = c.profile.name;
  $("site-name").textContent=c.profile.name;
  $("profile-name").textContent=c.profile.name;
  $("profile-title").textContent=c.profile.title;
  const aff=$("profile-affiliation");
  aff.replaceChildren(link(c.profile.affiliation,c.profile.affiliationUrl));
  $("profile-avatar").src=c.profile.avatar;
  $("profile-avatar").alt=c.profile.name;
  $("profile-email").textContent="Email";
  $("profile-email").href="mailto:"+c.profile.email;
  const pl=$("profile-links"); pl.replaceChildren();
  c.profile.links.forEach((x,i)=>{ if(i) pl.append(document.createTextNode(" / ")); pl.append(link(x.label,x.url)); });
  $("scholar-link").href=c.profile.scholar;

  const about=$("about-content"); about.replaceChildren();
  c.about.forEach(p=>about.append(text("p",p)));
  $("collaboration-note").textContent=c.collaboration;

  const research=$("research-content"); research.replaceChildren();
  c.researchInterests.forEach(x=>{ const d=document.createElement("article"); d.className="research-item"; d.append(text("h3",x.title),text("p",x.text)); research.append(d); });

  const news=$("news-content"); news.replaceChildren();
  c.news.forEach(y=>{ const b=document.createElement("div"); b.className="year-block"; b.append(text("div",y.year,"year-label")); const ul=document.createElement("ul"); ul.className="news-list"; y.items.forEach(n=>{ const li=document.createElement("li"); li.append(text("span",n.date+" ","date-tag"),document.createTextNode(n.text)); ul.append(li); }); b.append(ul); news.append(b); });

  const pubs=$("selected-publications"); pubs.replaceChildren();
  c.selectedPublications.forEach(p=>{
    const a=document.createElement("article"); a.className="publication"; a.id=p.id;
    const img=document.createElement("img"); img.className="pub-image"; img.src=paperPreview(p.title); img.alt=p.title+" preview"; img.loading="lazy";
    const body=document.createElement("div"); body.append(text("h3",p.title,"pub-title"), text("p",p.authors,"pub-authors"), text("p",p.venue,"pub-venue"));
    if(p.contribution) body.append(text("span",p.contribution,"pub-contribution"));
    if(p.note) body.append(text("p",p.note,"pub-note"));
    if(p.links?.length){ const div=document.createElement("div"); div.className="pub-links"; p.links.forEach(x=>div.append(link(x.label,x.url))); body.append(div); }
    a.append(img,body); pubs.append(a);
  });
  $("more-publications").hidden=true;

  const renderEntries=(id,items)=>{
    const root=$(id); root.replaceChildren();
    items.forEach(x=>{ const e=document.createElement("article"); e.className="entry"; e.append(text("div",x.period,"entry-period")); const copy=document.createElement("div"); copy.className="entry-copy"; copy.append(text("h3",x.title),text("p",x.organization)); const detail=[x.location,x.detail].filter(Boolean).join(" · "); if(detail)copy.append(text("p",detail)); if(x.summary)copy.append(text("p",x.summary,"entry-summary")); e.append(copy); root.append(e); });
  };
  renderEntries("education-content",c.education);

  const awards=$("awards-content"); awards.replaceChildren();
  c.awards.forEach(x=>awards.append(text("li",x)));

  const service=$("service-content"); service.replaceChildren();
  c.serviceGroups.forEach(g=>{ service.append(text("h3",g.title)); const ul=document.createElement("ul"); ul.className="simple-list"; g.items.forEach(x=>ul.append(text("li",x))); service.append(ul); });

  $("footer-name").textContent=c.profile.name;
  $("footer-year").textContent=new Date().getFullYear();
  $("footer-updated").textContent=c.siteMeta.lastUpdated;

  const nav=[...document.querySelectorAll(".nav-list a")];
  const sections=nav.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const activate=()=>{ let current=sections[0]?.id; sections.forEach(s=>{ if(s.getBoundingClientRect().top<=140)current=s.id; }); nav.forEach(a=>a.classList.toggle("is-active",a.getAttribute("href")==="#"+current)); };
  addEventListener("scroll",activate,{passive:true}); activate();
})();