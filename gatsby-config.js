const tsconfig = require('./tsconfig.json');

const tsconfigAliases = Object.entries(tsconfig.compilerOptions.paths).reduce((acc, [k, [v]]) => {
	const key = k.replace(/\/\*$/, '');
	const value = v.replace(/^\./, 'src').replace(/\/\*$/, '');

	acc[key] = value;

	return acc;
}, {});

module.exports = {
	siteMetadata: {
		name: 'Sam A. Horvath-Hunt — Portfolio',
		tagline: 'Sam A. Horvath-Hunt\'s portfolio.',
	},
  plugins: [
		{
			resolve: 'gatsby-plugin-favicon',
			options: {
				logo: './static/favicon.png',
			},
		},
		'gatsby-plugin-typescript',
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/data/`,
			}
		},
		{
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: tsconfigAliases,
      },
    },
	],
};

