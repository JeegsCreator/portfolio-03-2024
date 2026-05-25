import { ui, defaultLang } from "./ui"

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/")
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function setLangInUrl(url: URL, lang: keyof typeof ui) {
  return `/${lang}/${url.pathname.split("/").slice(2).join("/")}`
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
