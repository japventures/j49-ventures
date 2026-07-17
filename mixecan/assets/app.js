const slides=[...document.querySelectorAll('.slide')];
const nav=document.getElementById('deckNav');
slides.forEach((s,i)=>{const a=document.createElement('a');a.href=`#${s.id}`;a.textContent=String(i+1).padStart(2,'0');a.title=s.dataset.title;nav.appendChild(a)});
const navLinks=[...nav.querySelectorAll('a')];
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));const idx=slides.indexOf(e.target);navLinks.forEach((a,i)=>a.classList.toggle('active',i===idx));}})},{threshold:.35});
slides.forEach(s=>io.observe(s));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;document.getElementById('progressBar').style.width=`${h?scrollY/h*100:0}%`},{passive:true});

const svg=document.getElementById('financialChart');
if(svg){
 const NS='http://www.w3.org/2000/svg', years=[2026,2027,2028,2029,2030], revenue=[.25,1.27,1.97,3.05,4.73], gm=[46,50,52,54,55], eb=[-46,28,35,39,42];
 const W=800,H=390,m={l:56,r:55,t:42,b:48}, cw=W-m.l-m.r,ch=H-m.t-m.b,max=5;
 const el=(tag,attrs={})=>{const n=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));return n};
 for(let i=0;i<=5;i++){let y=m.t+ch-i*ch/5;svg.append(el('line',{x1:m.l,y1:y,x2:W-m.r,y2:y,stroke:'rgba(255,255,255,.10)'}));let t=el('text',{x:m.l-10,y:y+4,'text-anchor':'end',fill:'#8493a5','font-size':'10'});t.textContent=`$${i}M`;svg.append(t)}
 const step=cw/years.length,bw=55;
 revenue.forEach((v,i)=>{let x=m.l+i*step+step/2-bw/2,y=m.t+ch-v/max*ch;svg.append(el('rect',{x,y,width:bw,height:m.t+ch-y,fill:'#d8a03d',rx:3}));let t=el('text',{x:x+bw/2,y:y-9,'text-anchor':'middle',fill:'#fff','font-size':'10'});t.textContent=v<1?`$${Math.round(v*1000)}K`:`$${v.toFixed(2)}M`;svg.append(t);let yr=el('text',{x:x+bw/2,y:H-18,'text-anchor':'middle',fill:'#9dabb9','font-size':'10'});yr.textContent=years[i];svg.append(yr)});
 const path=(arr,color)=>{let d=arr.map((v,i)=>{let x=m.l+i*step+step/2,y=m.t+ch-(v+50)/110*ch;return `${i?'L':'M'}${x},${y}`}).join(' ');svg.append(el('path',{d,fill:'none',stroke:color,'stroke-width':3}));arr.forEach((v,i)=>{let x=m.l+i*step+step/2,y=m.t+ch-(v+50)/110*ch;svg.append(el('circle',{cx:x,cy:y,r:4,fill:color}))})};
 path(gm,'#ffffff');path(eb,'#7890aa');
}
