(function(){
const _0x1a=document, _0x2b=_0x1a.getElementById('editor'), _0x3c=_0x1a.getElementById('docTitle'), _0x3d=_0x1a.getElementById('introBox'), _0x4d=_0x1a.getElementById('documentSubtitle'), _0x5e=_0x1a.getElementById('subtitlePreview'), _0x6f=_0x1a.getElementById('imageLoader'), _0x6fp=_0x1a.getElementById('projectFileLoader'), _0x7a=_0x1a.getElementById('imageAlign'), _0x8b=_0x1a.getElementById('imageAlignError'), _0x9c=_0x1a.getElementById('addImage'), _0x10d=_0x1a.getElementById('imgSize'), _0x11e=_0x1a.getElementById('printBtn'), _0x12f=_0x1a.getElementById('exportPdf');
function _0x3f(){
const h=Boolean(_0x7a.value&&_0x7a.value!=='');
_0x7a.classList.toggle('invalid',!h);
if(!h){
_0x8b.textContent='Selecciona la alineación antes de subir la imagen.';
_0x8b.classList.add('visible');
_0x7a.focus();
return false;
}
_0x8b.textContent='';
_0x8b.classList.remove('visible');
_0x7a.classList.remove('invalid');
return true;
}
function _0x4f(c,v=null){
_0x2b.focus();
if(c==='formatBlock'){
_0x1a.execCommand('formatBlock',false,v||'p');
return;
}
_0x1a.execCommand(c,false,v);
}
_0x1a.querySelectorAll('[data-command]').forEach(b=>{
b.addEventListener('click',()=>{
_0x4f(b.dataset.command,b.dataset.value||null);
});
});
_0x4d.addEventListener('input',e=>{
_0x5e.textContent=e.target.value||'Digitalización y Gestión del Dato para tu Comercio';
});
_0x11e.addEventListener('click',()=>window.print());
_0x12f.addEventListener('click',()=>window.print());
function _0x5f(n){
const s=window.getSelection();
if(!s||s.rangeCount===0){
_0x2b.focus();
_0x2b.appendChild(n);
return;
}
const r=s.getRangeAt(0);
r.deleteContents();
r.insertNode(n);
r.collapse(false);
s.removeAllRanges();
s.addRange(r);
}
function _0x6f2(){
const c=_0x1a.createElement('div');
c.className='image-inline-controls';
c.innerHTML='<button type="button" data-align="left" title="Alinear izquierda">←</button><button type="button" data-align="center" title="Centrar">↔</button><button type="button" data-align="right" title="Alinear derecha">→</button><button type="button" data-action="delete" title="Eliminar imagen">✕</button>';
return c;
}
function _0x7f2(){
const c=_0x1a.createElement('div');
c.className='card-inline-controls no-print';
c.contentEditable='false';
c.innerHTML='<button type="button" data-action="delete-card" title="Eliminar elemento">✕</button>';
return c;
}
function _0x8f2(b,a){
if(!b)return;
b.classList.remove('align-left','align-right','align-center');
b.classList.add(a==='left'?'align-left':a==='right'?'align-right':'align-center');
_0x7a.value=a||'center';
if(_0x7a.value){_0x3f();}
}
function _0x9f2(){
_0x2b.querySelectorAll('.img_steps').forEach(b=>{
const i=b.querySelector('img'), t=b.textContent.trim().length>0;
if(!i&&!t){b.remove();}
});
}
_0x9c.addEventListener('click',()=>{
if(!_0x3f())return;
_0x6f.click();
});
_0x7a.addEventListener('change',()=>{
if(_0x7a.value){_0x3f();}
});
_0x6f.addEventListener('change',e=>{
if(!_0x3f()){
_0x6f.value='';
return;
}
const f=e.target.files&&e.target.files[0];
if(!f)return;
const r=new FileReader();
r.onload=()=>{
const w=_0x1a.createElement('div');
w.className='img_steps selected';
w.tabIndex=0;
w.contentEditable='false';
w.classList.add(_0x7a.value==='left'?'align-left':_0x7a.value==='right'?'align-right':'align-center');
w.appendChild(_0x6f2());
const img=_0x1a.createElement('img');
img.src=r.result;
img.alt='Imagen de la píldora';
img.contentEditable='false';
img.draggable=false;
img.style.width=`${_0x10d.value}%`;
img.style.margin='0 auto';
img.style.display='block';
img.classList.add('selected');
w.appendChild(img);
const cap=_0x1a.createElement('div');
cap.className='image-caption';
cap.contentEditable='true';
w.appendChild(cap);
w.dataset.alignment=_0x7a.value||'center';
const its=w.querySelector('img');
if(its){its.focus();}
_0x5f(w);
_0x2b.focus();
_0x6f.value='';
_0x7a.value='';
_0x7a.classList.remove('invalid');
_0x8b.textContent='';
_0x8b.classList.remove('visible');
};
r.readAsDataURL(f);
});
_0x10d.addEventListener('input',()=>{
const sb=_0x2b.querySelector('.img_steps.selected'), si=sb?sb.querySelector('img'):_0x2b.querySelector('img.selected');
if(si){si.style.width=`${_0x10d.value}%`;}
});
_0x7a.addEventListener('change',()=>{
if(!_0x7a.value)return;
const sb=_0x2b.querySelector('.img_steps.selected');
if(!sb)return;
_0x8f2(sb,_0x7a.value);
sb.dataset.alignment=_0x7a.value||'center';
_0x3f();
});
_0x2b.addEventListener('click',e=>{
const dc=e.target.closest('[data-action="delete-card"]');
if(dc){
const c=dc.closest('.info-card, .didactic-card, .val-tools, .checklist, .goal-box, .highlight, .state-box, .page-break-divider');
if(c){c.remove();}
return;
}
const ta=e.target.closest('[data-align]');
if(ta){
const sb=_0x2b.querySelector('.img_steps.selected');
if(sb){
_0x8f2(sb,ta.dataset.align);
sb.dataset.alignment=ta.dataset.align||'center';
_0x3f();
}
return;
}
const da=e.target.closest('[data-action="delete"]');
if(da){
const sb=_0x2b.querySelector('.img_steps.selected');
if(sb){sb.remove();}
return;
}
const sb=e.target.closest('.img_steps'), ci=e.target.closest('img'), sc=e.target.closest('.info-card, .didactic-card, .val-tools, .checklist, .goal-box, .highlight, .state-box, .page-break-divider');
_0x2b.querySelectorAll('.img_steps').forEach(i=>i.classList.remove('selected'));
_0x2b.querySelectorAll('img').forEach(i=>i.classList.remove('selected'));
_0x2b.querySelectorAll('.info-card, .didactic-card, .val-tools, .checklist, .goal-box, .highlight, .state-box, .page-break-divider').forEach(c=>{
if(c!==sc){
c.classList.remove('selected');
const ctrl=c.querySelector('.card-inline-controls');
if(ctrl)ctrl.remove();
}
});
if(sb){
sb.classList.add('selected');
const si=sb.querySelector('img');
if(si){
si.classList.add('selected');
if(!e.target.closest('.image-caption')){si.focus();}
_0x10d.value=Math.min(100,Math.max(30,Math.round((si.clientWidth/sb.clientWidth)*100||65)));
const al=sb.classList.contains('align-left')?'left':sb.classList.contains('align-right')?'right':'center';
_0x7a.value=al;
if(!sb.querySelector('.image-inline-controls')){sb.appendChild(_0x6f2());}
}
return;
}
if(ci){
const pb=ci.closest('.img_steps');
if(pb){pb.classList.add('selected');}
ci.classList.add('selected');
ci.focus();
_0x10d.value=Math.min(100,Math.max(30,Math.round((ci.clientWidth/ci.parentElement.clientWidth)*100||65)));
return;
}
if(sc){
sc.classList.add('selected');
if(!sc.querySelector('.card-inline-controls')){sc.appendChild(_0x7f2());}
}
});
_0x2b.addEventListener('keydown',e=>{
if(e.target.closest('.image-caption'))return;
const sb=_0x2b.querySelector('.img_steps.selected'), si=_0x2b.querySelector('img.selected');
if((e.key==='Delete'||e.key==='Backspace')&&(sb||si)){
e.preventDefault();
if(sb){sb.remove();}else if(si){si.remove();}
return;
}
if(e.key==='Tab'){
e.preventDefault();
_0x1a.execCommand('insertText',false,'\t');
}
});
_0x3c.addEventListener('input',()=>{
if(!_0x3c.textContent.trim()){_0x3c.innerHTML='';}
});
_0x2b.addEventListener('input',_0x9f2);
_0x2b.addEventListener('keydown',e=>{
if(e.key==='Tab'){
e.preventDefault();
_0x1a.execCommand('insertText',false,'\t');
}
});
_0x1a.addEventListener('DOMContentLoaded',()=>{
_0x3c.focus();
const s=window.getSelection();
if(s&&_0x3c.firstChild){
const r=_0x1a.createRange();
r.selectNodeContents(_0x3c);
r.collapse(false);
s.removeAllRanges();
s.addRange(r);
}
});
_0x3c.addEventListener('paste',e=>{
e.preventDefault();
const t=e.clipboardData.getData('text/plain').replace(/[\r\n]+/g,' ');
_0x1a.execCommand('insertText',false,t);
});
_0x3d.addEventListener('paste',e=>{
e.preventDefault();
const t=e.clipboardData.getData('text/plain');
_0x1a.execCommand('insertText',false,t);
});
_0x2b.addEventListener('paste',e=>{
e.preventDefault();
const t=e.clipboardData.getData('text/plain');
_0x1a.execCommand('insertText',false,t);
});
const _0x13g=_0x1a.getElementById('addRecommendation');
_0x13g.addEventListener('click',()=>{
const c=_0x1a.createElement('div');
c.className='info-card';
c.innerHTML='<strong>Recomendación</strong><p>Escribe aquí tu recomendación...</p>';
_0x5f(c);
const p=_0x1a.createElement('p');
p.innerHTML='<br>';
_0x5f(p);
_0x2b.focus();
});
const _0x13h=_0x1a.getElementById('addPageBreak');
_0x13h.addEventListener('click',()=>{
const d=_0x1a.createElement('div');
d.className='page-break-divider no-print';
d.contentEditable='false';
d.innerHTML='<span>Salto de página (No se imprime)</span>';
_0x5f(d);
const p=_0x1a.createElement('p');
p.innerHTML='<br>';
_0x5f(p);
_0x2b.focus();
});
const _0x14h=_0x1a.getElementById('newProject'), _0x15i=_0x1a.getElementById('saveProject');
_0x14h.addEventListener('click',()=>{
if(confirm('¿Estás seguro de que quieres empezar una nueva píldora? Se perderán los cambios no guardados.')){
_0x3c.innerHTML='Título de la píldora formativa';
_0x4d.value='Digitalización y Gestión del Dato para tu Comercio';
_0x5e.textContent='Digitalización y Gestión del Dato para tu Comercio';
_0x3d.innerHTML='<p>Escribe aquí una introducción clara para explicar el objetivo, la utilidad y el público de la tarea o proceso.</p>';
_0x2b.innerHTML='<h2>Paso a paso</h2><ol><li>Identifica la situación actual y los puntos problemáticos.</li><li>Define la estructura del proceso y los responsables.</li><li>Documenta la solución con criterios claros.</li></ol><h2>Recomendaciones</h2><div class="info-card"><strong>Recomendación</strong><p>Prioriza la claridad y la trazabilidad para evitar errores y mejorar la ejecución.</p></div><h2>Checklist</h2><ul><li>Revisar incidencias pendientes.</li><li>Actualizar documentación.</li><li>Confirmar prioridad de tareas.</li></ul>';
_0x3c.focus();
}
});
_0x15i.addEventListener('click',()=>{
const pd={title:_0x3c.innerHTML,subtitle:_0x4d.value,intro:_0x3d.innerHTML,content:_0x2b.innerHTML};
const js=JSON.stringify(pd,null,2), bl=new Blob([js],{type:'application/json'}), u=URL.createObjectURL(bl), a=_0x1a.createElement('a');
const ct=_0x3c.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,30)||'proyecto';
a.href=u;
a.download=`pildora-${ct}.json`;
_0x1a.body.appendChild(a);
a.click();
_0x1a.body.removeChild(a);
URL.revokeObjectURL(u);
});

// Cargar Proyecto a través de acciones ocultas (doble clic en el logo o atajo de teclado Ctrl+Alt+L)
const _0x16j=_0x1a.querySelector('.brand-logo');
if(_0x16j){
_0x16j.style.cursor='pointer';
_0x16j.addEventListener('dblclick',()=>{
_0x6fp.click();
});
}
window.addEventListener('keydown',e=>{
if(e.ctrlKey&&e.altKey&&e.key.toLowerCase()==='l'){
e.preventDefault();
_0x6fp.click();
}
});

_0x6fp.addEventListener('change',e=>{
const f=e.target.files&&e.target.files[0];
if(!f)return;
const r=new FileReader();
r.onload=ev=>{
try{
const d=JSON.parse(ev.target.result);
if(d.title!==undefined&&d.subtitle!==undefined&&d.content!==undefined){
_0x3c.innerHTML=d.title;
_0x4d.value=d.subtitle;
_0x5e.textContent=d.subtitle;
if(d.intro!==undefined){
_0x3d.innerHTML=d.intro;
}else{
_0x3d.innerHTML='<p>Escribe aquí una introducción clara para explicar el objetivo, la utilidad y el público de la tarea o proceso.</p>';
}
_0x2b.innerHTML=d.content;
_0x2b.querySelectorAll('.img_steps').forEach(b=>{
b.classList.remove('selected');
const img=b.querySelector('img');
if(img)img.classList.remove('selected');
});
alert('Proyecto cargado correctamente.');
}else{
alert('El archivo no tiene el formato correcto de Píldora DICA.');
}
}catch(err){
alert('Error al leer el archivo del proyecto.');
}
_0x6fp.value='';
};
r.readAsText(f);
});
})();
