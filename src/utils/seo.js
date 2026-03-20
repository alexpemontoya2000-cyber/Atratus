function upsertMeta(attr, attrValue, content) {
  let el = document.querySelector(`meta[${attr}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function setSEO({ title, description, canonical, keywords, ogImage }) {
  if (title) document.title = title
  if (description) {
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:description', description)
  }
  if (title) upsertMeta('property', 'og:title', title)
  if (canonical) {
    upsertLink('canonical', canonical)
    upsertMeta('property', 'og:url', canonical)
  }
  if (keywords) upsertMeta('name', 'keywords', keywords)
  if (ogImage) upsertMeta('property', 'og:image', ogImage)
}
