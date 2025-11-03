const toggleBtn = document.querySelector('.nav__toggle');
const menu = document.querySelector('[data-menu]');
if (toggleBtn && menu){
  toggleBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggleBtn?.setAttribute('aria-expanded', 'false');
  }));
}

/* =============================
   I18N — ES/EN para TODO (texto, HTML y atributos)
   ============================= */

const I18N = {
  es: {
    // Navbar
    "nav.home":"Inicio","nav.benefits":"Beneficio","nav.how":"Funcionamiento","nav.plans":"Planes","nav.team":"Equipo","nav.contact":"Contacto","nav.meetings":"Reuniones",

    // Hero
    "hero.title":"Tu doctor de plantas en tu bolsillo",
    "hero.subtitle":"Diagnostica al instante los problemas de tus plantas.",
    "hero.desc":"CropCodex ofrece a agricultores y jardineros peruanos soluciones basadas en IA para cosechas más sanas y abundantes.",
    "hero.cta":"Comience a diagnosticar ahora",

    // Ofertas
    "offers.title":"Lo que ofrecemos",
    "offers.card1.title":"Diagnóstico instantáneo",
    "offers.card1.text":"Obtén respuestas rápidas con una sola foto.",
    "offers.card2.title":"Resultados precisos",
    "offers.card2.text":"IA entrenada con expertos locales.",
    "offers.card3.title":"Orientación clara",
    "offers.card3.text":"Pasos sencillos para recuperar la salud de tus plantas.",

    // Cómo funciona
    "how.title":"Tres sencillos pasos para tener plantas más sanas",
    "how.step1.title":"Tomar una foto",
    "how.step1.text":"Utilice su teléfono inteligente para capturar una imagen clara de la hoja o el área de la planta afectada.",
    "how.step2.title":"Obtenga análisis instantáneo",
    "how.step2.text":"Nuestra IA analiza la imagen y proporciona un diagnóstico detallado y probabilidad de éxito en segundos.",
    "how.step3.title":"Siga pasos claros",
    "how.step3.text":"Reciba recomendaciones sencillas y prácticas para tratar el problema y proteger su cosecha.",

    // Planes
    "plans.title":"Estos son nuestros planes",
    "plans.free.name":"GRATIS",
    "plans.free.includes":"Lo que incluye",
    "plans.free.li1":"Número 1",
    "plans.free.li2":"Acceso limitado a funcionalidades",
    "plans.free.li3":"Número 2",
    "plans.free.li4":"Registro de 1 proyecto personal",
    "plans.free.li5":"Número 3",
    "plans.free.li6":"Panel de control básico",
    "plans.free.li7":"Número 4",
    "plans.free.li8":"Recordatorios por correo electrónico",
    "plans.free.cta":"COMIENZA $0",

    "plans.basic.name":"BÁSICO",
    "plans.basic.includes":"Lo que incluye",
    "plans.basic.li1":"Número 1",
    "plans.basic.li2":"Todo en el plan Gratis",
    "plans.basic.li3":"Número 2",
    "plans.basic.li4":"Hasta 5 proyectos simultáneos",
    "plans.basic.li5":"Número 3",
    "plans.basic.li6":"Estadísticas básicas y reportes",
    "plans.basic.li7":"Número 4",
    "plans.basic.li8":"Acceso a actualizaciones básicas",
    "plans.basic.cta":"COMIENZA $5",

    "plans.premium.name":"PREMIUM",
    "plans.premium.includes":"Lo que incluye",
    "plans.premium.li1":"Número 1",
    "plans.premium.li2":"Todo en el plan Básico",
    "plans.premium.li3":"Número 2",
    "plans.premium.li4":"Proyectos ilimitados",
    "plans.premium.li5":"Número 3",
    "plans.premium.li6":"Estadísticas en tiempo real",
    "plans.premium.li7":"Número 4",
    "plans.premium.li8":"Soporte 24/7 personalizado",
    "plans.premium.cta":"COMIENZA $10",

    // Equipo
    "team.title":"Nuestro Equipo",
    "team.renzoL.role":"(Product Owner)",
    "team.renzoL.bio":"Responsable y orientado a la calidad en todos mis proyectos.",
    "team.pieroE.role":"(Scrum Developer)",
    "team.pieroE.bio":"Estudiante de Ingeniería de Software. Habilidades en C++ y Python.",
    "team.rafaelD.role":"(Scrum Master)",
    "team.rafaelD.bio":"Habilidades blandas sólidas y foco en ejecución.",
    "team.renzoV.role":"(Scrum Developer)",
    "team.renzoV.bio":"C++, estructuras de datos y POO.",
    "team.micaelaA.role":"(Scrum Developer)",
    "team.micaelaA.bio":"Gestión de proyectos, análisis y documentación técnica.",

    // Contacto
    "contact.title":"Contáctanos",
    "contact.legend":"Información",
    "contact.email.label":"Correo",
    "contact.email.placeholder":"tucorreo@ejemplo.com",
    "contact.phone.label":"Teléfono",
    "contact.phone.placeholder":"+51 999 999 999",
    "contact.name.label":"Nombres",
    "contact.name.placeholder":"Tu nombre completo",
    "contact.message.label":"Comentario",
    "contact.message.placeholder":"Escribe tu consulta aquí...",
    "contact.send":"Enviar",
    "contact.asideTitle":"Realízanos cualquier tipo de consulta",
    "contact.image.alt":"Ilustración de contacto",

    // Reuniones
    "meetings.title":"Nuestras Reuniones",
    "meetings.image.alt":"Captura de una reunión del equipo",

    // Footer
    "footer.social.title":"Nuestras redes sociales",
    "footer.copy":"©2025 CropCodex. All rights reserved",
    "footer.link.privacy":"Políticas de Privacidad",
    "footer.link.liability":"Limitaciones de Responsabilidad",
    "footer.link.terms":"Términos y Servicios",
    "footer.link.about":"Acerca de Nosotros",
    "footer.link.contact":"Contacto",
    "footer.link.stats":"Estadísticas",
    "footer.edited":"Esta página se editó por última vez el 4 oct 2025 a las 06:13."
  },

  en: {
    // Navbar
    "nav.home":"Home","nav.benefits":"Benefits","nav.how":"How it works","nav.plans":"Plans","nav.team":"Team","nav.contact":"Contact","nav.meetings":"Meetings",

    // Hero
    "hero.title":"Your plant doctor in your pocket",
    "hero.subtitle":"Instantly diagnose your plants’ problems.",
    "hero.desc":"CropCodex brings AI-powered solutions to Peruvian growers and gardeners for healthier, more abundant harvests.",
    "hero.cta":"Start diagnosing now",

    // Offers
    "offers.title":"What we offer",
    "offers.card1.title":"Instant diagnosis",
    "offers.card1.text":"Get quick answers with a single photo.",
    "offers.card2.title":"Accurate results",
    "offers.card2.text":"AI trained with local experts.",
    "offers.card3.title":"Clear guidance",
    "offers.card3.text":"Simple steps to restore your plants’ health.",

    // How
    "how.title":"Three simple steps to healthier plants",
    "how.step1.title":"Take a photo",
    "how.step1.text":"Use your smartphone to capture a clear image of the leaf or affected area.",
    "how.step2.title":"Get instant analysis",
    "how.step2.text":"Our AI analyzes the image and provides a detailed diagnosis and success probability in seconds.",
    "how.step3.title":"Follow clear steps",
    "how.step3.text":"Receive practical, easy-to-follow recommendations to treat the issue and protect your harvest.",

    // Plans
    "plans.title":"Our plans",
    "plans.free.name":"FREE","plans.free.includes":"What’s included",
    "plans.free.li1":"Item 1","plans.free.li2":"Limited feature access","plans.free.li3":"Item 2","plans.free.li4":"1 personal project slot","plans.free.li5":"Item 3","plans.free.li6":"Basic dashboard","plans.free.li7":"Item 4","plans.free.li8":"Email reminders","plans.free.cta":"START $0",
    "plans.basic.name":"BASIC","plans.basic.includes":"What’s included",
    "plans.basic.li1":"Item 1","plans.basic.li2":"Everything in Free","plans.basic.li3":"Item 2","plans.basic.li4":"Up to 5 concurrent projects","plans.basic.li5":"Item 3","plans.basic.li6":"Basic analytics & reports","plans.basic.li7":"Item 4","plans.basic.li8":"Access to basic updates","plans.basic.cta":"START $5",
    "plans.premium.name":"PREMIUM","plans.premium.includes":"What’s included",
    "plans.premium.li1":"Item 1","plans.premium.li2":"Everything in Basic","plans.premium.li3":"Item 2","plans.premium.li4":"Unlimited projects","plans.premium.li5":"Item 3","plans.premium.li6":"Real-time analytics","plans.premium.li7":"Item 4","plans.premium.li8":"24/7 personalized support","plans.premium.cta":"START $10",

    // Team
    "team.title":"Our Team",
    "team.renzoL.role":"(Product Owner)",
    "team.renzoL.bio":"Responsible and quality-driven across all projects.",
    "team.pieroE.role":"(Scrum Developer)",
    "team.pieroE.bio":"Software Engineering student. Skills in C++ and Python.",
    "team.rafaelD.role":"(Scrum Master)",
    "team.rafaelD.bio":"Strong soft skills and execution focus.",
    "team.renzoV.role":"(Scrum Developer)",
    "team.renzoV.bio":"C++, data structures and OOP.",
    "team.micaelaA.role":"(Scrum Developer)",
    "team.micaelaA.bio":"Project management, requirements analysis and technical documentation.",

    // Contact
    "contact.title":"Contact us",
    "contact.legend":"Information",
    "contact.email.label":"Email",
    "contact.email.placeholder":"you@example.com",
    "contact.phone.label":"Phone",
    "contact.phone.placeholder":"+1 555 555 5555",
    "contact.name.label":"Full name",
    "contact.name.placeholder":"Your full name",
    "contact.message.label":"Message",
    "contact.message.placeholder":"Write your message here...",
    "contact.send":"Send",
    "contact.asideTitle":"Ask us anything",
    "contact.image.alt":"Contact illustration",

    // Meetings
    "meetings.title":"Our Meetings",
    "meetings.image.alt":"Screenshot of a team meeting",

    // Footer
    "footer.social.title":"Our social networks",
    "footer.copy":"©2025 CropCodex. All rights reserved",
    "footer.link.privacy":"Privacy Policy",
    "footer.link.liability":"Liability Limitations",
    "footer.link.terms":"Terms & Services",
    "footer.link.about":"About Us",
    "footer.link.contact":"Contact",
    "footer.link.stats":"Statistics",
    "footer.edited":"This page was last edited on Oct 4, 2025 at 06:13."
  }
};

const langSwitch = document.getElementById('langSwitch');
const langLabels = document.querySelectorAll('.lang__label'); // [EN, ES]

function setActiveLangLabel(lang){
  if (langLabels.length === 2){
    const [en, es] = langLabels;
    en.classList.toggle('lang__label--active', lang === 'en');
    es.classList.toggle('lang__label--active', lang === 'es');
  }
  if (langSwitch){
    langSwitch.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
  }
}

function translatePage(lang){
  const dict = I18N[lang] || I18N.es;
  document.documentElement.setAttribute('lang', lang);

  // texto plano
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });

  // html rico (permitido por ti)
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  // atributos (placeholder, title, aria-label, value, etc.)
  document.querySelectorAll('[data-i18n-attrs]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const attrs = el.getAttribute('data-i18n-attrs').split(',').map(a=>a.trim());
    attrs.forEach(attr=>{
      const k = `${key}.${attr}`; // p.ej. contact.email.placeholder
      if (dict[k] != null) el.setAttribute(attr, dict[k]);
    });
  });

  localStorage.setItem('lang', lang);
  setActiveLangLabel(lang);
}

// init
(function(){
  const saved = localStorage.getItem('lang');
  translatePage(saved === 'en' ? 'en' : 'es');
})();

// toggle por switch y por click en EN/ES
if (langSwitch){
  langSwitch.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('lang') || 'es';
    translatePage(cur === 'es' ? 'en' : 'es');
  });
  langSwitch.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); langSwitch.click(); }
  });
}
langLabels.forEach(lbl=>{
  lbl.addEventListener('click', ()=>{
    const t = lbl.textContent.trim().toLowerCase();
    translatePage(t === 'en' ? 'en' : 'es');
  });
});

/* Scroll suave */
try{ document.documentElement.style.scrollBehavior = 'smooth'; }catch{}
