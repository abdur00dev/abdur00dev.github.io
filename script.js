(() => {
  const c = window.SITE_CONTENT;
  const $ = id => document.getElementById(id);
  const link = (label,url,cls="") => {
    const a=document.createElement("a"); a.textContent=label; a.href=url; a.target="_blank"; a.rel="noreferrer"; if(cls)a.className=cls; return a;
  };
  const profileIcon = (name) => {
    const span=document.createElement("span");
    span.className="profile-link-icon";
    span.setAttribute("aria-hidden","true");
    const icons={
      scholar:'<svg viewBox="0 0 24 24"><path d="M3 10.2 12 5l9 5.2-9 5.2L3 10.2Z"/><path d="M6.8 12.4V17c2.8 2 7.6 2 10.4 0v-4.6"/><path d="M20.8 10.6v5"/></svg>',
      github:'<svg viewBox="0 0 24 24"><path d="M9 19c-4.5 1.4-4.5-2.4-6.3-3m12.6 5v-3.5c0-1 .1-1.5-.5-2.1 3.1-.3 6.4-1.5 6.4-6.9 0-1.5-.5-2.8-1.4-3.8.1-.4.6-1.8-.1-3.7 0 0-1.1-.4-3.9 1.5a13.3 13.3 0 0 0-7 0C6 0.6 4.9 1 4.9 1c-.7 1.9-.2 3.3-.1 3.7A5.5 5.5 0 0 0 3.4 8.5c0 5.4 3.3 6.6 6.4 6.9-.4.4-.7.9-.8 1.7V21"/></svg>',
      linkedin:'<svg viewBox="0 0 24 24"><path d="M6 9v10M6 5.5v.1M10.5 19v-6c0-2 1-3.4 2.8-3.4 1.7 0 2.7 1.1 2.7 3.4v6M10.5 10v9"/><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/></svg>',
      cv:'<svg viewBox="0 0 24 24"><path d="M6 3.5h8l4 4V20.5H6z"/><path d="M14 3.5v4h4M9 12h6M9 15.5h6"/></svg>',
      orcid:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M9 9.2v5.6M9 7.2h.01M12 14.8v-5.6h2.1c1.8 0 2.9 1 2.9 2.8s-1.1 2.8-2.9 2.8H12Z"/></svg>',
      email:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.8"/><path d="m4.2 6.2 7.8 6.2 7.8-6.2"/></svg>'
    };
    span.innerHTML=icons[name]||"";
    return span;
  };
  const profileLink=(item)=>{
    const a=document.createElement("a");
    a.className="profile-icon-link";
    a.href=item.url;
    a.target=item.url.startsWith("mailto:")?"_self":"_blank";
    if(a.target==="_blank") a.rel="noreferrer";
    if(item.icon) a.append(profileIcon(item.icon));
    a.append(document.createTextNode(item.label));
    return a;
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
  const email=$("profile-email");
  email.replaceChildren(profileIcon("email"),document.createTextNode(c.profile.email));
  email.href="mailto:"+c.profile.email;
  email.classList.add("profile-icon-link");
  const pl=$("profile-links"); pl.replaceChildren();
  c.profile.links.forEach((x,i)=>{
    if(i){ const sep=document.createElement("span"); sep.className="profile-slash"; sep.textContent="/"; pl.append(sep); }
    pl.append(profileLink(x));
  });
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