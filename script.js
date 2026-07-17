const slides=[...document.querySelectorAll('.slide')];
const nav=document.getElementById('navList');
slides.forEach((slide,i)=>{const b=document.createElement('button');b.type='button';b.textContent=String(i+1).padStart(2,'0');b.setAttribute('aria-label',`Go to slide ${i+1}: ${slide.dataset.title}`);b.addEventListener('click',()=>slide.scrollIntoView({behavior:'smooth'}));nav.appendChild(b)});
const buttons=[...nav.querySelectorAll('button')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const i=slides.indexOf(e.target);buttons.forEach((b,j)=>b.classList.toggle('active',i===j));history.replaceState(null,'',`#slide-${i+1}`)}}),{threshold:.58});
slides.forEach((s,i)=>{s.id=`slide-${i+1}`;io.observe(s)});
document.addEventListener('keydown',e=>{const active=Math.max(0,buttons.findIndex(b=>b.classList.contains('active')));if(['ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();slides[Math.min(active+1,slides.length-1)].scrollIntoView({behavior:'smooth'})}if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();slides[Math.max(active-1,0)].scrollIntoView({behavior:'smooth'})}});
