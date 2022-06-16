# Nextjs + Typescript + Storybook + TailwindCss + MSW

## ライブラリ説明

<table>
<thead>
  <tr>
    <th>ライブラリ名</th>
    <th>バージョン</th>
    <th>説明</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>tailwindcss</td>
    <td>^3.1.2</td>
    <td>流行りのCSSフレームワーク</td>
  </tr>
  <tr>
    <td>@tailwindcss/forms</td>
    <td>^0.5.2</td>
    <td>tailwindcssフォームスタイルを簡単に扱えるようにするプラグイン</td>
  </tr>
  <tr>
    <td>sb (storybook)</td>
    <td>^6.5.9</td>
    <td>
      UIのカタログを作るツール<br>
      2022年現在、フロントエンド開発において必要不可欠
    </td>
  </tr>
  <tr>
    <td>@storybook/addon-XXX</td>
    <td>^6.5.9</td>
    <td>
      Storybookを便利に使うためのアドオン<br>
      a11y: Webサイトを使いやすく保つためのベストプラクティス<br>
      postcss: tailwindを表示する為に必要 ※css-moduleに不具合あり<br>
    </td>
  </tr>
  <tr>
    <td>msw</td>
    <td>^0.42.1</td>
    <td>
      モックAPIを簡単に作成できる。
    </td>
  </tr>
  <tr>
    <td>msw-storybook-addon</td>
    <td>^1.6.3</td>
    <td>
      mswをstorybookで使用できるようにするための作業を簡単にするアドオン<br>
      storybookでAPI取得する画面で異常系と正常系を確認出来る。
    </td>
  </tr>
  <tr>
    <td>Cypress</td>
    <td>^10.1.0</td>
    <td>
      Cypress はフロントエンドのテストツールであり、以下のすべてのを作成・テストできる。<br>
      - エンドツーエンド(E2E)テスト<br>
      - 統合(インテグレーション)テスト<br>
      - ユニットテスト<br>
    </td>
  </tr>
</tbody>
</table>
