module.exports = {
  branches: ['main'],
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
        pkgRoot: 'dist/libs/ui',
      }
    ],

    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
      },
    ],

    '@semantic-release/github',
  ],
};