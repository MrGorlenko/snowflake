// /** @type {import('next').NextConfig} */

// // const nextTranslate = require("next-translate");

// const nextConfig = {
// 	i18n: {
// 		locales: ["en", "ru", "lv"],
// 		defaultLocale: "en",
// 	},
// };

// module.exports = nextConfig;

// // module.exports = nextTranslate({
// // 	webpack: (config, { isServer, webpack }) => {
// // 		return config;
// // 	},
// // });

// // const nextTranslate = require("next-translate-plugin");

// // module.exports = nextTranslate();

const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate();
