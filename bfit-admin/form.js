'use strict';
const sections = [
  {
    "title": "Alcance",
    "questions": [
      [
        1,
        "¿Qué empresas, razones sociales, marcas y ubicaciones atiende tu departamento?",
        "Confirma su relación con BFIT y FTN.",
        "rows",
        [
          "Empresa o razón social",
          "Marca / ubicación",
          "Servicios del departamento",
          "Responsable local"
        ]
      ],
      [
        2,
        "¿Qué debe garantizar tu departamento y qué resultados esperan de ti los CEOs de BFIT y FTN?",
        "Distingue las expectativas acordadas de las que todavía debes aclarar. ¿Qué funciona bien y qué requiere atención?"
      ],
      [
        3,
        "¿Qué responsabilidades o decisiones no están claramente delimitadas?",
        "Incluye decisiones que puedes tomar, autorizaciones necesarias y cómo resuelven prioridades entre empresas. Describe un ejemplo reciente."
      ]
    ]
  },
  {
    "title": "Equipo",
    "questions": [
      [
        4,
        "¿Quiénes participan en el departamento y qué hace cada persona?",
        "Incluye apoyos y funciones compartidas entre ubicaciones.",
        "rows",
        [
          "Persona y puesto",
          "Ubicación / empresas",
          "A quién reporta",
          "Responsabilidades principales",
          "Entregables y frecuencia",
          "Quién la cubre"
        ]
      ],
      [
        5,
        "Si tú o una persona clave se ausenta una semana, ¿qué podría dejar de funcionar?",
        "Identifica actividades críticas, instrucciones disponibles y quién ha probado cubrirlas."
      ],
      [
        6,
        "¿Qué puede resolver el equipo por su cuenta y qué requiere tu revisión?",
        "Distingue revisiones necesarias por control de las que haces para asegurar la calidad."
      ]
    ]
  },
  {
    "title": "Carga de trabajo",
    "questions": [
      [
        7,
        "Mapeo de actividades del departamento",
        "Incluye pagos, proveedores, conciliaciones, ingresos, facturación, portales, contabilidad, cierre, reportes y recursos humanos. Usa estimaciones.",
        "rows",
        [
          "Actividad y resultado esperado",
          "Empresa / ubicación",
          "Quién ejecuta / revisa",
          "Frecuencia y volumen",
          "Horas semanales aproximadas",
          "Archivo o sistema",
          "Retraso o problema habitual"
        ]
      ],
      [
        8,
        "¿Cómo se compara la carga de trabajo de Puebla y Aguascalientes?",
        "Compara volumen, complejidad y capacidad con ejemplos. No es necesario que exista una diferencia; identifica también prácticas que podrían compartirse."
      ],
      [
        9,
        "¿Qué actividades se retrasan, se hacen parcialmente o han dejado de hacerse?",
        "Indica desde cuándo, consecuencias y causas."
      ],
      [
        10,
        "¿Dónde se genera más retrabajo?",
        "Selecciona lo que aplique y describe dos o tres ejemplos con el tiempo que consumen.",
        "checks",
        [
          "Capturas duplicadas",
          "Correcciones",
          "Buscar información",
          "Cambios de archivos",
          "Aclaraciones con otras áreas",
          "Otro"
        ]
      ]
    ]
  },
  {
    "title": "Procesos",
    "questions": [
      [
        11,
        "Describe el último cierre mensual",
        "¿Cuándo debía terminar y cuándo terminó? ¿Qué se entregó, qué quedó pendiente, de quién dependía y quién dio el cierre por concluido?"
      ],
      [
        12,
        "¿Cómo se comprueba que las ventas coincidan con los ingresos recibidos?",
        "Quién entrega información, realiza el amarre, investiga diferencias y confirma su resolución. Aclara la participación de ventas, contabilidad y tesorería."
      ],
      [
        13,
        "¿Cómo funciona el proceso de proveedores y pagos?",
        "¿Quién da de alta proveedores, modifica sus cuentas bancarias, solicita, autoriza, ejecuta y concilia pagos? ¿Qué revisiones separan estas funciones y cómo se atienden excepciones? No incluyas números de cuenta."
      ],
      [
        14,
        "¿Cómo determinan el efectivo disponible y anticipan los compromisos de pago?",
        "Describe la proyección de caja, su horizonte y frecuencia. Explica cómo opera actualmente el “profit”: asignaciones, reservas, responsables y cuándo se modifican o utilizan."
      ],
      [
        15,
        "¿Qué archivos y sistemas sostienen la operación?",
        "¿Qué se captura más de una vez y cuál es el registro oficial? Para el ERP/Odoo, si aplica: etapa, responsable, problemas que debe resolver y quién validará los datos.",
        "checks",
        [
          "Excel / hojas de cálculo",
          "Sistema contable",
          "Portales de clientes / proveedores",
          "ERP en implementación",
          "ERP en uso",
          "Otro"
        ]
      ],
      [
        16,
        "¿Qué decisiones se retrasan o se toman con información incompleta?",
        "Describe hasta tres casos: quién decide, qué información necesita, cuándo y qué ocurre si falta.",
        "rows",
        [
          "Decisión",
          "Quién la necesita",
          "Información faltante",
          "Cuándo se requiere",
          "Consecuencia"
        ]
      ],
      [
        17,
        "¿Qué cifras consideras confiables y cuáles requieren revisión?",
        "Describe cómo se validan, de qué registro provienen y qué diferencias están pendientes.",
        "rows",
        [
          "Cifra o reporte",
          "Fuente oficial",
          "Cómo se valida",
          "Pendiente o diferencia",
          "Responsable"
        ]
      ],
      [
        18,
        "¿Cómo elaboran y controlan el presupuesto?",
        "Indica si existe por empresa, ubicación o área; quién prepara y autoriza; cómo consideran gastos comprometidos y qué hacen ante desviaciones. Si no existe, describe cómo deciden cuánto gastar."
      ],
      [
        19,
        "¿Dónde hay oportunidades para proteger efectivo o mejorar la rentabilidad?",
        "Incluye hasta tres: gastos evitables, duplicidades, recargos, condiciones de compra, cartera o inventarios. Distingue ahorro, recuperación de efectivo y prevención de pérdidas.",
        "rows",
        [
          "Oportunidad",
          "Evidencia o ejemplo",
          "Impacto estimado, si lo conoces",
          "Acción posible"
        ]
      ]
    ]
  },
  {
    "title": "Tu rol",
    "questions": [
      [
        20,
        "¿Cómo distribuyes actualmente tu tiempo?",
        "Ajusta las barras o escribe los porcentajes. Usa una semana habitual. El total debe sumar 100%.",
        "sliders",
        [
          "Ejecutar tareas operativas",
          "Revisar y corregir trabajo",
          "Coordinar, capacitar y dar seguimiento",
          "Analizar información y proponer decisiones",
          "Atender urgencias y solicitudes no planeadas"
        ]
      ],
      [
        21,
        "¿Qué tres actividades deberías delegar y qué impide hacerlo?",
        "A quién podrían pasar y qué necesita: claridad, capacitación, acceso, práctica, autoridad o tiempo."
      ],
      [
        22,
        "¿Qué apoyo necesitas para ejercer mejor tu rol de gerente?",
        "¿Qué te gustaría resolver con mayor autonomía en tres meses? Selecciona apoyos y explica.",
        "checks",
        [
          "Autoridad para decidir",
          "Respaldo de Dirección",
          "Colaboración de otras áreas",
          "Capacitación técnica",
          "Delegación y liderazgo",
          "Tiempo para análisis",
          "Otro"
        ]
      ]
    ]
  },
  {
    "title": "Desarrollo del equipo",
    "questions": [
      [
        23,
        "¿Qué fortalezas tiene el equipo y qué capacidades necesita desarrollar?",
        "Considera al equipo completo. Describe conductas y resultados observables; los planes individuales se trabajarán por separado.",
        "rows",
        [
          "Puesto o función",
          "Fortaleza que conviene aprovechar",
          "Capacidad por desarrollar",
          "Ejemplo observable",
          "Apoyo o capacitación"
        ]
      ],
      [
        24,
        "¿Qué factores explican las dificultades del equipo?",
        "Distingue conocimientos, instrucciones, carga, herramientas y apoyo. Describe un ejemplo y qué se ha intentado para resolverlo.",
        "checks",
        [
          "Instrucciones poco claras",
          "Conocimientos",
          "Manejo de archivos",
          "Cambios de herramienta",
          "Carga de trabajo",
          "Información incompleta",
          "Seguimiento",
          "Otro"
        ]
      ],
      [
        25,
        "¿Qué mejoras del equipo serían razonables en los próximos 90 días?",
        "Incluye hasta tres mejoras y el apoyo necesario. Puedes referirte a puestos o funciones.",
        "rows",
        [
          "Mejora esperada",
          "Situación actual",
          "Evidencia para medirla",
          "Apoyo o capacitación",
          "Fecha de revisión"
        ]
      ],
      [
        26,
        "¿Cómo asignan y revisan los compromisos del departamento?",
        "Describe reuniones, responsables, fechas y evidencia de cumplimiento. ¿Qué hacen ante retrasos, errores y problemas que se repiten?"
      ]
    ]
  },
  {
    "title": "Próximos proyectos",
    "questions": [
      [
        27,
        "¿Qué trabajo adicional traerán los proyectos próximos?",
        "Incluye únicamente proyectos confirmados o previstos y aclara su estado: aperturas, planta, banco, ERP u otros.",
        "rows",
        [
          "Proyecto",
          "Fecha / siguiente hito",
          "Entregables del departamento",
          "Responsable",
          "Capacidad adicional estimada",
          "Dependencias o bloqueos"
        ]
      ],
      [
        28,
        "¿Dónde ves una necesidad real de refuerzo y qué evidencia la sustenta?",
        "Incluye recursos humanos. ¿Qué resolverías reorganizando o simplificando y qué requeriría capacidad adicional?"
      ]
    ]
  },
  {
    "title": "Prioridades",
    "questions": [
      [
        29,
        "Si dentro de 12 meses el departamento funcionara como debería, ¿qué sería diferente?",
        "Describe cambios observables en información, controles, presupuesto, procesos y autonomía. ¿Qué tendría que cambiar en tu propio rol?"
      ],
      [
        30,
        "¿Qué tres problemas priorizarías en los primeros 90 días?",
        "Describe también la disponibilidad real de tu equipo para implementar mejoras.",
        "rows",
        [
          "Prioridad (1, 2 o 3)",
          "Problema",
          "Impacto actual",
          "Resultado a 90 días",
          "Apoyo requerido"
        ]
      ]
    ]
  }
];
const form=document.querySelector('#questionnaire'),fields=document.querySelector('#fields'),nav=document.querySelector('#sections'),status=document.querySelector('#status');
let step=0,busy=false,serial=0;
const qnodes=new Map();
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function input(label,name,type='text',parent){const box=el('label',label),i=el(type==='textarea'?'textarea':'input');i.name=name;i.id=`field-${++serial}`;if(type!=='textarea')i.type=type;i.maxLength=8000;box.htmlFor=i.id;box.append(i);parent.append(box);return i;}
const info=el('div',undefined,'row-fields');fields.append(info);input('Tu nombre','Nombre','text',info).required=true;input('Correo de contacto','email','email',info).required=true;
function addRow(container,q){const row=el('div',undefined,'repeat-row'),grid=el('div',undefined,'row-fields');row.append(grid);q[4].forEach((label,i)=>input(label,`q${q[0]}-row${serial}-${i}`,'text',grid));const remove=el('button','Eliminar fila','secondary');remove.type='button';remove.onclick=()=>{if([...row.querySelectorAll('input')].some(i=>i.value)&&!confirm('¿Eliminar esta fila y sus respuestas?'))return;row.remove();};row.append(remove);container.append(row);return row;}
sections.forEach((section,idx)=>{const button=el('button',`${idx+1}. ${section.title}`);button.type='button';button.onclick=()=>show(idx,true);nav.append(button);const panel=el('section');panel.dataset.step=idx;const title=el('h2',section.title);title.tabIndex=-1;panel.append(title);for(const q of section.questions){const fs=el('fieldset',undefined,'question');fs.append(el('legend',`${q[0]}. ${q[1]}`),el('p',q[2]));fs.dataset.q=q[0];qnodes.set(q[0],fs);
 if(q[3]==='rows'){const rows=el('div',undefined,'rows');fs.append(rows);addRow(rows,q);const b=el('button','Agregar fila','secondary');b.type='button';b.onclick=()=>{const r=addRow(rows,q);r.querySelector('input').focus();};fs.append(b);}
 else if(q[3]==='checks'){q[4].forEach(option=>{const l=el('label',undefined,'check'),i=el('input');i.type='checkbox';i.name=`q${q[0]}-options`;i.value=option;l.append(i,el('span',option));fs.append(l);});input('Explica con ejemplos',`q${q[0]}-detail`,'textarea',fs);}
 else if(q[3]==='sliders'){q[4].forEach((label,i)=>{const wrap=el('div',undefined,'slider'),head=el('div',undefined,'slider-head');const range=el('input'),number=el('input'),lab=el('label',label);range.type='range';number.type='number';range.min=number.min='0';range.max=number.max='100';range.step=number.step='1';range.value=number.value='0';range.id=`time-${i}`;range.name=`time-${i}`;number.name=`time-number-${i}`;range.setAttribute('aria-label',`${label}, porcentaje`);number.setAttribute('aria-label',`${label}, porcentaje numérico`);lab.htmlFor=range.id;head.append(lab,number);wrap.append(head,range);range.oninput=()=>{number.value=range.value;total();};number.oninput=()=>{if(number.validity.valid&&number.value!=='')range.value=number.value;total();};fs.append(wrap);});const t=el('p',undefined,'total');t.id='time-total';t.setAttribute('aria-live','polite');fs.append(t);}
 else input('Tu respuesta',`q${q[0]}`,'textarea',fs);
 panel.append(fs);}fields.append(panel);});
const last=fields.querySelector('[data-step="7"]');input('Disponibilidad semanal de la gerente y del equipo','Disponibilidad','textarea',last);input('Documentos de apoyo existentes y dónde revisarlos (sin contraseñas ni enlaces públicos con datos sensibles)','Documentos','textarea',last);
function total(){const nums=[...document.querySelectorAll('.slider input[type=number]')];const sum=nums.reduce((a,n)=>a+Number(n.value||0),0),valid=nums.every(n=>n.value!==''&&n.validity.valid)&&sum===100;const t=document.querySelector('#time-total');t.textContent=`Total: ${sum}%${valid?' · Distribución completa':' · Ajusta hasta sumar 100%'}`;t.classList.toggle('invalid',!valid);return valid;}
function answer(q){const node=qnodes.get(q[0]);if(q[3]==='rows')return [...node.querySelectorAll('.repeat-row')].map(r=>[...r.querySelectorAll('input')].map((i,j)=>`${q[4][j]}: ${i.value.trim()||'Pendiente'}`).join('\n')).join('\n\n');if(q[3]==='sliders')return [...node.querySelectorAll('input[type=number]')].map((n,i)=>`${q[4][i]}: ${n.value}%`).join('\n');if(q[3]==='checks')return [...node.querySelectorAll('input:checked')].map(n=>n.value).join(', ')+'\n'+node.querySelector('textarea').value;return node.querySelector('textarea').value;}
function review(){const target=document.querySelector('#answers');target.replaceChildren();const id=el('p',`${form.elements.Nombre.value} · ${form.elements.email.value}`);target.append(id);sections.forEach(sec=>{target.append(el('h2',sec.title));sec.questions.forEach(q=>{const item=el('div',undefined,'review-item');item.append(el('h3',`${q[0]}. ${q[1]}`),el('p',answer(q).trim()||'Pendiente / sin respuesta'));target.append(item);});});for(const name of ['Disponibilidad','Documentos']){target.append(el('h3',name),el('p',form.elements[name].value||'Pendiente'));}}
function show(n,focus=false){if(busy)return;step=n;info.hidden=n!==0;fields.querySelectorAll('[data-step]').forEach(p=>p.hidden=Number(p.dataset.step)!==n);nav.querySelectorAll('button').forEach((b,i)=>{if(i===n)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});fields.hidden=n===8;document.querySelector('#review').hidden=n!==8;document.querySelector('#back').hidden=n===0;document.querySelector('#next').hidden=n===8;document.querySelector('#send').hidden=n!==8;document.querySelector('#step-text').textContent=`Paso ${n+1} de 9 · ${n===8?'Revisión':sections[n].title}`;document.querySelector('#progress').value=n+1;status.textContent='';if(n===8)review();if(focus)(n===8?document.querySelector('#review h2'):fields.querySelector(`[data-step="${n}"] h2`)).focus();}
function identityValid(){for(const name of ['Nombre','email'])if(!form.elements[name].checkValidity()||!form.elements[name].value.trim()){show(0);form.elements[name].reportValidity();form.elements[name].focus();return false;}return true;}
document.querySelector('#back').onclick=()=>show(Math.max(0,step-1),true);
document.querySelector('#next').onclick=()=>{if(step===0&&!identityValid())return;if(step===4&&!total()){status.textContent='La distribución debe sumar 100% antes de continuar.';return;}show(Math.min(8,step+1),true);};
const endpoint=window.BFIT_FORM_CONFIG?.endpoint||'',enabled=/^https:\/\/formspree\.io\/(?:p\/[0-9]+\/)?f\/[a-zA-Z0-9]+$/.test(endpoint);
document.querySelector('#setup').hidden=enabled;document.querySelector('#send').disabled=!enabled;
form.onsubmit=async e=>{e.preventDefault();if(busy||!enabled)return;if(step!==8){show(8,true);return;}if(!identityValid())return;if(!total()){show(4,true);status.textContent='Ajusta la distribución del tiempo hasta sumar 100%.';return;}if(!document.querySelector('#consent').checked){status.textContent='Confirma que revisaste tus respuestas para enviarlas.';document.querySelector('#consent').focus();return;}busy=true;const buttons=[...document.querySelectorAll('button')];buttons.forEach(b=>b.disabled=true);status.textContent='Enviando respuestas…';status.className='';const payload={Nombre:form.elements.Nombre.value.trim(),email:form.elements.email.value.trim(),_subject:'Diagnóstico administrativo BFIT y FTN',Version:'BFIT-ADMIN-2',Disponibilidad:form.elements.Disponibilidad.value,Documentos:form.elements.Documentos.value};sections.forEach(s=>s.questions.forEach(q=>payload[`${q[0]}. ${q[1]}`]=answer(q).trim()||'Pendiente / sin respuesta'));const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),30000);try{const res=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload),signal:controller.signal});const result=await res.json();if(!res.ok||result.errors||result.error)throw new Error('server');form.hidden=true;nav.hidden=true;document.querySelector('.progress-row').hidden=true;document.querySelector('#success').hidden=false;document.querySelector('#success').focus();}catch(err){status.className='error';status.textContent=err.name==='AbortError'?'No pudimos confirmar la recepción a tiempo. Conservamos tus respuestas en esta página. Verifica con el asesor antes de reenviar para evitar duplicados.':'No pudimos confirmar el envío. Conservamos tus respuestas en esta página. Revisa tu conexión e inténtalo de nuevo.';}finally{clearTimeout(timer);busy=false;buttons.forEach(b=>b.disabled=false);}};
total();show(0);document.querySelector('#app').hidden=false;
