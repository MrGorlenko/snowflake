const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
	images: {
		domains: ["127.0.0.1", "0.0.0.0", "localhost", "bo.snowflake.club"],
	},
});
