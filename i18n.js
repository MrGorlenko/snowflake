module.exports = {
	locales: ["en", "ru", "lv"],
	defaultLocale: "en",
	pages: {
		"*": ["common"],
	},
	// loadLocaleFrom: (lang, ns) =>
	// 	// You can use a dynamic import, fetch, whatever. You should
	// 	// return a Promise with the JSON file.
	// 	import(`/locales/${lang}/${ns}.json`).then((m) => m.default),
};
