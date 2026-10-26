(function(){
var d=document,de=d.documentElement;
var dr=d.querySelector('.mob-drawer'),ov=d.querySelector('.mob-overlay'),bg=d.querySelector('.burger'),cl=d.querySelector('.mob-close');
function open(){dr.classList.add('open');ov.classList.add('open');de.style.overflow='hidden';bg.setAttribute('aria-expanded','true');}
function close(){dr.classList.remove('open');ov.classList.remove('open');de.style.overflow='';bg.setAttribute('aria-expanded','false');}
if(bg&&dr){bg.addEventListener('click',open);ov.addEventListener('click',close);cl.addEventListener('click',close);
d.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
window.addEventListener('resize',function(){if(window.innerWidth>768)close();});}
d.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){
var it=b.parentNode,o=it.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});});
})();
