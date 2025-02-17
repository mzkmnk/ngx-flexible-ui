module.exports = {
  brunches: ['main'],
  plugins: [
    [

      "@semantic-release/commit-analyzer",

      {preset: "conventionalcommits"},

    ],

    [

      "@semantic-release/release-notes-generator",

      {preset: "conventionalcommits"},

    ],

    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/libs',
      }
    ],

    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
      },
    ],

    '@semantic-release/github',
  ],
};