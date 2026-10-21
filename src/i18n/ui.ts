export const languages = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'nav.restaurante': 'El Restaurante',
    'nav.entorno': 'Nuestro Entorno',
    'nav.galeria': 'Galería',
    'nav.carta': 'Carta',
    'nav.enlaces': 'Enlaces',
    'nav.contacto': 'Contacto',
    'nav.legal': 'Aviso Legal',
    'nav.plan': 'Plan de Recuperación',
    'contact.phone': '+34 602 294 143',
    'contact.cta': 'Información y reservas',
    'contact.email': 'inacango@gmail.com',
    'footer.legal': 'Aviso Legal',
    'footer.rights': '© La Parada del Arriero. Todos los derechos reservados.',
    'hero.subtitle': 'Bar Restaurante en el Puerto del Pico',
  },
  en: {
    'nav.restaurante': 'The Restaurant',
    'nav.entorno': 'Our Surroundings',
    'nav.galeria': 'Gallery',
    'nav.carta': 'Menu',
    'nav.enlaces': 'Links',
    'nav.contacto': 'Contact',
    'nav.legal': 'Legal Notice',
    'nav.plan': 'Recovery Plan',
    'contact.phone': '+34 602 294 143',
    'contact.cta': 'Information and reservations',
    'contact.email': 'inacango@gmail.com',
    'footer.legal': 'Legal Notice',
    'footer.rights': '© La Parada del Arriero. All rights reserved.',
    'hero.subtitle': 'Bar Restaurant at Puerto del Pico',
  },
  de: {
    'nav.restaurante': 'Das Restaurant',
    'nav.entorno': 'Unsere Umgebung',
    'nav.galeria': 'Galerie',
    'nav.carta': 'Speisekarte',
    'nav.enlaces': 'Links',
    'nav.contacto': 'Kontakt',
    'nav.legal': 'Impressum',
    'nav.plan': 'Wiederherstellungsplan',
    'contact.phone': '+34 602 294 143',
    'contact.cta': 'Information und Reservierungen',
    'contact.email': 'inacango@gmail.com',
    'footer.legal': 'Impressum',
    'footer.rights': '© La Parada del Arriero. Alle Rechte vorbehalten.',
    'hero.subtitle': 'Bar Restaurant am Puerto del Pico',
  },
} as const;
