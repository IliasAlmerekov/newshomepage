let languages = ['en', 'de']
function getTransLink(language, slug) {
  return language === 'en' ? slug : `/${language}/${slug}`
}
export { getTransLink, languages }
