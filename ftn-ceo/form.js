'use strict';
const sections = [
  {
    "title": "Expectativas",
    "questions": [
      [
        1,
        "¿Cuáles son los tres resultados más importantes que necesitas de Claudia y del departamento durante los próximos 12 meses?",
        "Selecciona tus prioridades y describe el resultado que necesitas en cada una.",
        "priorities",
        [
          "Resultado esperado",
          "Por qué importa",
          "Cómo reconocerías que se logró"
        ]
      ],
      [
        2,
        "¿Qué hace especialmente bien Claudia y deberíamos conservar o aprovechar más?",
        "Describe hasta tres fortalezas con ejemplos recientes.",
        "rows",
        [
          "Fortaleza",
          "Ejemplo reciente",
          "Cómo aprovecharla"
        ]
      ],
      [
        3,
        "¿Qué comportamientos o capacidades necesita desarrollar Claudia?",
        "Describe hechos observables, su efecto y lo que esperas que cambie.",
        "rows",
        [
          "Situación observada",
          "Efecto en la empresa",
          "Comportamiento o capacidad esperada"
        ]
      ]
    ]
  },
  {
    "title": "Liderazgo e información",
    "questions": [
      [
        4,
        "¿Cómo evalúas el desempeño de Claudia?",
        "1: requiere intervención constante · 2: cumple parcialmente · 3: cumple lo esperado · 4: cumple y se anticipa. Selecciona «No tengo evidencia suficiente» cuando corresponda.",
        "ratings",
        [
          "Cumplimiento de compromisos y fechas",
          "Confiabilidad de la información",
          "Anticipación de problemas y riesgos",
          "Análisis y propuestas para decidir",
          "Control y cuidado de los recursos",
          "Liderazgo, delegación y desarrollo del equipo",
          "Comunicación y coordinación con otras áreas"
        ]
      ],
      [
        5,
        "¿Qué información necesitas para dirigir la empresa y cómo la recibes actualmente?",
        "Indica los reportes o datos que más influyen en tus decisiones.",
        "rows",
        [
          "Información",
          "Frecuencia requerida",
          "¿Llega a tiempo?",
          "¿Es confiable? ¿Cómo lo sabes?",
          "Qué falta"
        ]
      ],
      [
        6,
        "Describe una decisión reciente que se haya retrasado o complicado por falta de información administrativa o financiera.",
        "Indica la decisión, la información faltante y la consecuencia. Puedes responder «No identifico un caso»."
      ]
    ]
  },
  {
    "title": "Control y equipo",
    "questions": [
      [
        7,
        "¿Dónde ves los principales riesgos o debilidades de control del departamento?",
        "Selecciona hasta tres y explica el caso más importante.",
        "checks",
        [
          "Ingresos",
          "Cobranza",
          "Pagos",
          "Proveedores",
          "Presupuesto",
          "Efectivo",
          "Documentación",
          "Accesos",
          "Otros",
          "No tengo visibilidad suficiente"
        ]
      ],
      [
        8,
        "¿Cómo participa hoy Claudia en el control del presupuesto y la mejora de la rentabilidad?",
        "Distingue su participación actual de lo que esperas que aporte. Incluye ejemplos de seguimiento al gasto, desviaciones u oportunidades de mejora."
      ],
      [
        9,
        "¿Qué tan confiable y autónomo consideras al equipo administrativo?",
        "Selecciona una opción y explica con un ejemplo.",
        "choice",
        [
          "Cumple consistentemente",
          "Requiere seguimiento ocasional",
          "Requiere intervención frecuente",
          "No tengo suficiente visibilidad"
        ]
      ]
    ]
  },
  {
    "title": "Autoridad y acuerdos",
    "questions": [
      [
        10,
        "¿Qué decisiones puede tomar Claudia sin consultarte y cuáles necesitan autorización?",
        "Señala también dónde existe ambigüedad.",
        "rows",
        [
          "Puede decidir",
          "Debe escalar",
          "Falta definir"
        ]
      ],
      [
        11,
        "¿Qué obstáculos de Dirección u otras áreas dificultan que Claudia cumpla?",
        "Selecciona lo que aplique y explica qué apoyo podrías aportar.",
        "checks",
        [
          "Prioridades cambiantes",
          "Información tardía",
          "Instrucciones contradictorias",
          "Falta de autoridad",
          "Recursos insuficientes",
          "Sistemas",
          "Otros",
          "Ninguno identificado"
        ]
      ],
      [
        12,
        "¿Qué tres cambios te harían decir, dentro de 90 días, que este acompañamiento está funcionando?",
        "Incluye lo que te comprometes a aportar para lograrlos.",
        "rows",
        [
          "Resultado observable a 90 días",
          "Cómo lo mediremos",
          "Mi compromiso como CEO"
        ]
      ]
    ]
  },
  {
    "title": "Prioridades de FTN",
    "questions": [
      [
        13,
        "¿Cuáles son las principales prioridades de FTN para los próximos 12 meses y qué debe aportar Administración y Finanzas a cada una?",
        "Incluye proyectos, cambios operativos y fechas relevantes.",
        "rows",
        [
          "Prioridad",
          "Apoyo requerido",
          "Fecha",
          "Consecuencia si no se atiende"
        ]
      ],
      [
        14,
        "¿Qué características de la operación de FTN requieren atención administrativa específica?",
        "Identifica qué procesos, controles o reportes no responden suficientemente a esas necesidades.",
        "rows",
        [
          "Necesidad particular",
          "Solución actual",
          "Limitación",
          "Mejora esperada"
        ]
      ],
      [
        15,
        "¿La atención que recibe FTN corresponde a sus necesidades?",
        "Cuando sus prioridades coinciden o compiten con las de BFIT u otras empresas, ¿cómo se decide qué atender primero y qué cambiarías? Puedes responder «No identifico conflicto de prioridades»."
      ]
    ]
  }
];
const priorityTopics = [["Control y protección de recursos",["Conciliación de ventas e ingresos","Cobranza y recuperación de cartera","Pagos, proveedores y autorizaciones","Controles internos y prevención de fugas","Cumplimiento fiscal y obligaciones"]],["Información y planeación financiera",["Cierre contable oportuno y confiable","Reportes e indicadores para tomar decisiones","Presupuesto y control de desviaciones","Flujo de efectivo y liquidez","Disciplina de asignación de efectivo y reservas"]],["Rentabilidad y eficiencia",["Costos y rentabilidad por empresa, unidad o producto","Compras, negociación y eficiencia del gasto","Capital de trabajo: cartera, inventarios y proveedores"]],["Equipo y sistemas",["Liderazgo, delegación y desarrollo del equipo","Procesos documentados y continuidad operativa","ERP, automatización y calidad de datos"]],["Dirección financiera / CFO",["Planeación financiera y escenarios","Evaluación de inversiones, aperturas y proyectos","Financiamiento y relación con bancos","Información para socios y seguimiento estratégico"]],["Otro",["Otro tema"]]];
const form=document.querySelector('#questionnaire'),fields=document.querySelector('#fields'),nav=document.querySelector('#sections'),status=document.querySelector('#status');
let step=0,busy=false,serial=0;
const qnodes=new Map();
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function input(label,name,type='text',parent){const box=el('label',label),i=el(type==='textarea'?'textarea':'input');i.name=name;i.id=`field-${++serial}`;if(type!=='textarea')i.type=type;i.maxLength=8000;box.htmlFor=i.id;box.append(i);parent.append(box);return i;}
const info=el('div',undefined,'row-fields');fields.append(info);input('Tu nombre','Nombre','text',info).required=true;input('Correo de contacto','email','email',info).required=true;
function addRow(container,q){const row=el('div',undefined,'repeat-row'),grid=el('div',undefined,'row-fields');row.append(grid);q[4].forEach((label,i)=>input(label,`q${q[0]}-row${serial}-${i}`,'text',grid));const remove=el('button','Eliminar fila','secondary');remove.type='button';remove.onclick=()=>{if([...row.querySelectorAll('input')].some(i=>i.value)&&!confirm('¿Eliminar esta fila y sus respuestas?'))return;row.remove();};row.append(remove);container.append(row);return row;}
sections.forEach((section,idx)=>{const button=el('button',`${idx+1}. ${section.title}`);button.type='button';button.onclick=()=>show(idx,true);nav.append(button);const panel=el('section');panel.dataset.step=idx;const title=el('h2',section.title);title.tabIndex=-1;panel.append(title);for(const q of section.questions){const fs=el('fieldset',undefined,'question');fs.append(el('legend',`${q[0]}. ${q[1]}`),el('p',q[2]));fs.dataset.q=q[0];qnodes.set(q[0],fs);
 if(q[3]==='priorities'){
 const hint=el('p','Puedes elegir hasta tres temas distintos, en orden de importancia.');fs.append(hint);
 for(let k=0;k<3;k++){
  const row=el('div',undefined,'repeat-row');row.dataset.priority=k+1;
  row.append(el('h3',`Prioridad ${k+1}`));
  const label=el('label','Tema prioritario'),select=el('select');select.name=`priority-${k+1}`;select.append(new Option('Selecciona un tema',''));
  for(const [group,options] of priorityTopics){const og=el('optgroup');og.label=group;for(const topic of options)og.append(new Option(topic,topic));select.append(og);}
  label.append(select);row.append(label);
  const otherBox=el('div');const other=input('Especifica el otro tema',`priority-other-${k+1}`,'text',otherBox);otherBox.hidden=true;row.append(otherBox);
  const details=el('div',undefined,'row-fields');input('Resultado concreto que esperas',`priority-result-${k+1}`,'textarea',details);input('Por qué importa',`priority-why-${k+1}`,'textarea',details);input('Cómo reconocerías que se logró',`priority-measure-${k+1}`,'textarea',details);row.append(details);
  select.onchange=()=>{otherBox.hidden=select.value!=='Otro tema';other.required=!otherBox.hidden;const selects=[...fs.querySelectorAll('select')];if(select.value&&selects.some(s=>s!==select&&s.value===select.value)){select.value='';otherBox.hidden=true;other.required=false;status.textContent='Elige un tema diferente para cada prioridad.';}else status.textContent='';};
  fs.append(row);
 }
}
 else if(q[3]==='rows'){const rows=el('div',undefined,'rows');fs.append(rows);addRow(rows,q);const b=el('button','Agregar fila','secondary');b.type='button';b.onclick=()=>{const r=addRow(rows,q);r.querySelector('input').focus();};fs.append(b);}
 else if(q[3]==='checks'){q[4].forEach(option=>{const l=el('label',undefined,'check'),i=el('input');i.type='checkbox';i.name=`q${q[0]}-options`;i.value=option;l.append(i,el('span',option));fs.append(l);});input('Explica con ejemplos',`q${q[0]}-detail`,'textarea',fs);}
 else if(q[3]==='ratings'){q[4].forEach((dimension,i)=>{const label=el('label',dimension),select=el('select');select.name=`q${q[0]}-rating-${i}`;select.append(new Option('Selecciona una opción',''));['1 · Requiere intervención constante','2 · Cumple parcialmente','3 · Cumple lo esperado','4 · Cumple y se anticipa','No tengo evidencia suficiente'].forEach(v=>select.append(new Option(v,v)));label.append(select);fs.append(label);});input('¿Qué ejemplo explica mejor tus evaluaciones?',`q${q[0]}-detail`,'textarea',fs);}
 else if(q[3]==='choice'){q[4].forEach(option=>{const l=el('label',undefined,'check'),i=el('input');i.type='radio';i.name=`q${q[0]}-choice`;i.value=option;l.append(i,el('span',option));fs.append(l);});input('Explica con un ejemplo',`q${q[0]}-detail`,'textarea',fs);}
 else if(q[3]==='sliders'){q[4].forEach((label,i)=>{const wrap=el('div',undefined,'slider'),head=el('div',undefined,'slider-head');const range=el('input'),number=el('input'),lab=el('label',label);range.type='range';number.type='number';range.min=number.min='0';range.max=number.max='100';range.step=number.step='1';range.value=number.value='0';range.id=`time-${i}`;range.name=`time-${i}`;number.name=`time-number-${i}`;range.setAttribute('aria-label',`${label}, porcentaje`);number.setAttribute('aria-label',`${label}, porcentaje numérico`);lab.htmlFor=range.id;head.append(lab,number);wrap.append(head,range);range.oninput=()=>{number.value=range.value;total();};number.oninput=()=>{if(number.validity.valid&&number.value!=='')range.value=number.value;total();};fs.append(wrap);});const t=el('p',undefined,'total');t.id='time-total';t.setAttribute('aria-live','polite');fs.append(t);}
 else input('Tu respuesta',`q${q[0]}`,'textarea',fs);
 panel.append(fs);}fields.append(panel);});
function total(){return true;}
function answer(q){const node=qnodes.get(q[0]);if(q[3]==='priorities')return [...node.querySelectorAll('[data-priority]')].filter(row=>row.querySelector('select').value).map(row=>{const k=row.dataset.priority,topic=row.querySelector('select').value;return `Prioridad ${k}: ${topic==='Otro tema'?form.elements['priority-other-'+k].value.trim():topic}\nResultado esperado: ${form.elements['priority-result-'+k].value.trim()||'Pendiente'}\nPor qué importa: ${form.elements['priority-why-'+k].value.trim()||'Pendiente'}\nCómo reconocerías que se logró: ${form.elements['priority-measure-'+k].value.trim()||'Pendiente'}`;}).join('\n\n');if(q[3]==='rows')return [...node.querySelectorAll('.repeat-row')].map(r=>[...r.querySelectorAll('input')].map((i,j)=>`${q[4][j]}: ${i.value.trim()||'Pendiente'}`).join('\n')).join('\n\n');if(q[3]==='sliders')return [...node.querySelectorAll('input[type=number]')].map((n,i)=>`${q[4][i]}: ${n.value}%`).join('\n');if(q[3]==='ratings')return [...node.querySelectorAll('select')].map((n,i)=>`${q[4][i]}: ${n.value||'Sin respuesta'}`).join('\n')+'\nEjemplo: '+node.querySelector('textarea').value;if(q[3]==='choice'||q[3]==='checks')return [...node.querySelectorAll('input:checked')].map(n=>n.value).join(', ')+'\n'+node.querySelector('textarea').value;return node.querySelector('textarea').value;}
function review(){const target=document.querySelector('#answers');target.replaceChildren();const id=el('p',`${form.elements.Nombre.value} · ${form.elements.email.value}`);target.append(id);sections.forEach(sec=>{target.append(el('h2',sec.title));sec.questions.forEach(q=>{const item=el('div',undefined,'review-item');item.append(el('h3',`${q[0]}. ${q[1]}`),el('p',answer(q).trim()||'Pendiente / sin respuesta'));target.append(item);});});}
function show(n,focus=false){if(busy)return;step=n;info.hidden=n!==0;fields.querySelectorAll('[data-step]').forEach(p=>p.hidden=Number(p.dataset.step)!==n);nav.querySelectorAll('button').forEach((b,i)=>{if(i===n)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});fields.hidden=n===sections.length;document.querySelector('#review').hidden=n!==sections.length;document.querySelector('#back').hidden=n===0;document.querySelector('#next').hidden=n===sections.length;document.querySelector('#send').hidden=n!==sections.length;document.querySelector('#step-text').textContent=`Paso ${n+1} de ${sections.length+1} · ${n===sections.length?'Revisión':sections[n].title}`;document.querySelector('#progress').value=n+1;status.textContent='';if(n===sections.length)review();if(focus)(n===sections.length?document.querySelector('#review h2'):fields.querySelector(`[data-step="${n}"] h2`)).focus();}
function prioritiesValid(){for(const row of qnodes.get(1).querySelectorAll('[data-priority]')){const select=row.querySelector('select'),k=row.dataset.priority;const other=form.elements['priority-other-'+k];const details=['result','why','measure'].some(part=>form.elements['priority-'+part+'-'+k].value.trim());if((!select.value&&details)||(select.value==='Otro tema'&&!other.value.trim())){show(0);status.textContent=select.value?'Especifica el tema de la opción Otro.':'Selecciona el tema para la prioridad que describiste.';(select.value?other:select).focus();return false;}}return true;}
function identityValid(){for(const name of ['Nombre','email'])if(!form.elements[name].checkValidity()||!form.elements[name].value.trim()){show(0);form.elements[name].reportValidity();form.elements[name].focus();return false;}return true;}
document.querySelector('#back').onclick=()=>show(Math.max(0,step-1),true);
document.querySelector('#next').onclick=()=>{if(step===0&&(!identityValid()||!prioritiesValid()))return;if(step===4&&!total()){status.textContent='La distribución debe sumar 100% antes de continuar.';return;}show(Math.min(sections.length,step+1),true);};
const endpoint=window.BFIT_FORM_CONFIG?.endpoint||'',enabled=/^https:\/\/formspree\.io\/(?:p\/[0-9]+\/)?f\/[a-zA-Z0-9]+$/.test(endpoint);
document.querySelector('#setup').hidden=enabled;document.querySelector('#send').disabled=!enabled;
form.onsubmit=async e=>{e.preventDefault();if(busy||!enabled)return;if(step!==sections.length){show(sections.length,true);return;}if(!identityValid()||!prioritiesValid())return;if(!total()){show(4,true);status.textContent='Ajusta la distribución del tiempo hasta sumar 100%.';return;}if(!document.querySelector('#consent').checked){status.textContent='Confirma que revisaste tus respuestas para enviarlas.';document.querySelector('#consent').focus();return;}busy=true;const buttons=[...document.querySelectorAll('button')];buttons.forEach(b=>b.disabled=true);status.textContent='Enviando respuestas…';status.className='';const payload={Nombre:form.elements.Nombre.value.trim(),email:form.elements.email.value.trim(),_subject:'Perspectiva CEO FTN · J49',Version:'CEO-1',Empresa:'FTN'};sections.forEach(s=>s.questions.forEach(q=>payload[`${q[0]}. ${q[1]}`]=answer(q).trim()||'Pendiente / sin respuesta'));const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),30000);try{const res=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload),signal:controller.signal});const result=await res.json();if(!res.ok||result.errors||result.error)throw new Error('server');form.hidden=true;nav.hidden=true;document.querySelector('.progress-row').hidden=true;document.querySelector('#success').hidden=false;document.querySelector('#success').focus();}catch(err){status.className='error';status.textContent=err.name==='AbortError'?'No pudimos confirmar la recepción a tiempo. Conservamos tus respuestas en esta página. Verifica con el asesor antes de reenviar para evitar duplicados.':'No pudimos confirmar el envío. Conservamos tus respuestas en esta página. Revisa tu conexión e inténtalo de nuevo.';}finally{clearTimeout(timer);busy=false;buttons.forEach(b=>b.disabled=false);}};
total();show(0);document.querySelector('#app').hidden=false;

// Keep exclusive options consistent and limit the risk priorities to three.
for(const id of [7,11]){const node=qnodes.get(id),boxes=[...node.querySelectorAll('input[type=checkbox]')],exclusive=boxes.at(-1);boxes.forEach(box=>box.addEventListener('change',()=>{if(box.checked){if(box===exclusive)boxes.slice(0,-1).forEach(b=>b.checked=false);else exclusive.checked=false;}if(id===7&&boxes.filter(b=>b.checked).length>3){box.checked=false;status.textContent='Selecciona como máximo tres riesgos.';}}));}
