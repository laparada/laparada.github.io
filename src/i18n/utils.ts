import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export interface NavLink {
  href: string;
  label: string;
  key: string;
}

export function getNavLinks(lang: Lang): NavLink[] {
  const t = useTranslations(lang);
  const base = `/${lang}`;
  return [
    { href: `${base}/`, label: t('nav.restaurante'), key: 'index' },
    { href: `${base}/el-restaurante/`, label: t('nav.restaurante'), key: 'el-restaurante' },
    { href: `${base}/nuestro-entorno/`, label: t('nav.entorno'), key: 'nuestro-entorno' },
    { href: `${base}/galeria/`, label: t('nav.galeria'), key: 'galeria' },
    { href: `${base}/carta/`, label: t('nav.carta'), key: 'carta' },
    { href: `${base}/contacto/`, label: t('nav.contacto'), key: 'contacto' },
    { href: `${base}/enlaces/`, label: t('nav.enlaces'), key: 'enlaces' },
    { href: `${base}/plan-recuperacion/`, label: t('nav.plan'), key: 'plan-recuperacion' },
  ];
}
