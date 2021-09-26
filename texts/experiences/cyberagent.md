#### 役割

Web アプリ開発エンジニア

#### なぜ入社したか

前職の[[株式会社グッドパッチ]]はミスマッチとなってしまい、日々辛い思いになっていました。
そんな中で転職ドラフトに参加したところ、以下の条件が揃い転職を決めました。

- Atomic Design の話で AbemaTV の人と盛り上がった。自分が Atomic Design について記事を書いていたのもあって、Atomic Design を実践している会社に行きたくなった
- より良い年収を提示された
- 知り合いが現在いる人・過去いた人含め多くいた
- 配属先のサービスが知っているものばかりで少なくとも現在よりは良くなると思った

#### 働いている期間はどれくらいか

2017/04 ～

#### なにをしているか

Web フロントエンドエンジニアとして、約 15 〜 20 人の Web フロントエンドチームの一員として ABEMA の開発を担当しています。

ABEMA で主に使っている技術スタックとしては「React」「RxJS」「TypeScript」となります。
状態管理は Redux や Recoil といったものは使わず、[React + RxJS で始める状態管理 - VOYAGE GROUP techlog](https://techlog.voyagegroup.com/entry/2017/08/31/102915) の記事で紹介されている状態管理をベースに管理しています。

自分の ABEMA における役割は、上記に挙げた技術スタックを使って新機能実装を担当することが多かったですが、直近ではアクセシビリティやパフォーマンスの向上を通して事業 KPI を向上させることを担当しています。

アクセシビリティ向上はタスクフォースを立ち上げ、タスクフォースメンバーとともにビジョンや長期 OKR・短期 OKR の定義をおこないました。現在はサービスのアクセシビリティのクオリティ基準を決めようとしています。
またパフォーマンス向上は直近だと Core Web Vitals 対応を進めています。

他には次に挙げることもやったり、進行したりしています。

- CSS 周りを CSS Modules から BEM + PostCSS ベースに置き換えるなどの「捨てやすく」「秩序がある」コードにするリファクタリング
- プロダクトに適した Reset CSS の適用の推進
- Redux ベースの状態管理・データフローへ置き換えるための評価

またフロントエンド関連だけをやるのではなく次のこともやりました。

- デプロイの自動化を導入すべく Dockerfile や Kubernetes の設定ファイルの変更
- SSR の実装のために各種マイクロサービスと gRPC でやり取りし初期表示用の HTML を React の renderToString() を使って組み立てたあと返すような実装

#### 使った技術スタック

- HTML
  - EJS
- CSS
  - CSS Modules
  - BEM
  - PostCSS
- JavaScript
- TypeScript
- Flow
- Node.js
  - React
  - RxJS
  - ioredis
  - Loadable Component
  - Polyfill-library
  - Universal Router
  - option-t
  - Express
  - Luxon
  - Webpack
  - AVA
  - ESLint
  - Prettier
  - Storybook
- Makefile
- Git
- Circle CI
- gRPC (クライアント側からリクエストしてレスポンスを得るためだけに使用)
- Kubernetes (既存の設定ファイルをちょっと変更したくらい)

#### なにを得たか

- Web フロントエンドだけに限らず BFF (Backend for Frontend) などを通したサーバー側の実装のやり方
- パフォーマンスチューニングにおける事前・事後の計測とそこからの検証の大事さ
- 機能開発時の事前の KPI 決めとそれに達した・達しなかった場合の計画の大事さ
- [[コードを書き始める前に Design doc などで設計を共有する重要性]]
- ライブラリのバージョンを定期的に更新する重要性
  - [毎週のように依存パッケージを上げ続ける努力 - VOYAGE GROUP techlog](https://techlog.voyagegroup.com/entry/2016/06/27/080000)
  - 追従しないことでパッケージ更新が一大プロジェクトになってしまい、サービスの機能開発やバグ修正がその分おろそかになる
  - だいたいは機能開発のほうが優先されるので、パッケージ更新はいつまでも後回しになる
    - この場合他のリファクタリングもおざなりになりがちなので、開発体験が悪くなりがち
    - ライブラリのドキュメントもわざわざ古いものを見ないものを行けなかったり、効率的なコードの書き方ができなかったりといった弊害がある
- Rx の書き方

#### これからなにをしたいか

- パフォーマンス面では、日本国内最速のサービスを目指して、定期的な Synthetic Monitoring や Real-User Monitoring をしていき、そこから改善点を見つけ計画を立ててパフォーマンス向上をしていくことを目指します
- アクセシビリティ面では「だれもが思い通りに楽しめる」をビジョンに、JIS X 8341-3:2016 への適合を進めるとともに、組織にもアクセシビリティ向上を楽しく苦にならない形で根付かせることを目指します

#### 関連リンク

- [AbemaTV における CSS is too fragile 問題に対する解 / Solution of "CSS is too fragile" by AbemaTV \- Speaker Deck](https://speakerdeck.com/kubosho/solution-of-css-is-too-fragile-by-abematv)
- [ABEMA Web で Polyfill のコードをモダンブラウザ向けに 99% 削減した話 \| CyberAgent Developers Blog](https://developers.cyberagent.co.jp/blog/archives/30373/)
