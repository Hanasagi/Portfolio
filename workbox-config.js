module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{png,scss}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'src/sw.js'
};