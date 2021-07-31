module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{svg,webp,scss}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'src/sw.js'
};