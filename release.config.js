module.exports = {
  plugins: [
    // 1. コミット履歴から次期バージョン番号を算出する。
    [

      "@semantic-release/commit-analyzer",

      {preset: "conventionalcommits"},

    ],

    // 2. リリースノートのためのコンテンツ（テキスト）を生成する。
    [

      "@semantic-release/release-notes-generator",

      {preset: "conventionalcommits"},

    ],

    // 3. "2" で生成されたリリースノート用コンテンツを Changelog ファイルに記述する。
    '@semantic-release/changelog',

    // 4-a. package.json の version フィールドを次期バージョン番号で更新する。
    // 4-b. npmjs にパッケージを公開する。
    // 4-c. npm dist-tag コマンドを実行して npmjs で公開するパッケージにタグを追加する。
    '@semantic-release/npm',

    // 5. リリースフローで発生したアセットの更新差分をリポジトリにコミットする。
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
      },
    ],

    // 6. "2" で生成されたリリースノート用コンテンツを用いて GitHub Release を追加する。
    '@semantic-release/github',
  ],
};