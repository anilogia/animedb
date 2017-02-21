# Anime DB

![Anilogia Logo](/anilogia.png)

[![CircleCI](https://circleci.com/gh/anilogia/animedb.svg?style=svg)](https://circleci.com/gh/anilogia/animedb)

アニメ作品リストデータベース。本データベースの背景は以下の記事を参照すること。

- [アニメ初心者におすすめしたい10137作品からの250選（前編） - 本しゃぶり](http://honeshabri.hatenablog.com/entry/anime-100years-1)
- [アニメ初心者におすすめしたい10137作品からの250選（後編） - 本しゃぶり](http://honeshabri.hatenablog.com/entry/anime-100years-2)
- [100年分のアニメ作品リストをExcelデータで公開した - 本しゃぶり](http://honeshabri.hatenablog.com/entry/animedb_shared)

本リポジトリは、[本しゃぶり](http://honeshabri.hatenablog.com/)の読者からも要望されたように、アニメ作品リストのバージョン管理、issue 管理、編集コラボレーションを行うために作成された。

## TL;DR

`animedb.yml` がデータベース本体である。今のところ、本データベースを利用・編集する場合、このファイルだけで完結する。アニメを追加したい場合は、[テンプレート](https://anilogia.github.io/animedb/template)を利用すると良い。

## 編集規則

[Anime DB 編集規則](https://github.com/anilogia/animedb/blob/master/docs/rules.md)を参照すること。

## `animedb.yml`

`animedb.yml` は、アニメ作品データのリストからなる。各アニメデータの構造を以下の表に示す。
詳細は [Anime DB 編集規則](https://github.com/anilogia/animedb/blob/master/docs/rules.md)を参照すること。

|     **キー名**     |      **項目名**      |                     **説明**                     |
|:------------------:|:--------------------:|:------------------------------------------------:|
| **madb_id**        |   アニメシリーズID   | メディア芸術データベースにおけるアニメシリーズID |
| **medium**         | メディア             | 作品の媒体                                       |
| **duplicated**     | ダブリ               | MADBで同一作品に複数のIDが振られている場合、一つを除いてダブリが付いている。 |
| **id**             | 識別子               | 作品ごとに一意に決まる11文字のランダム Base57 文字列。 |
| **title**          | 作品名               | 作品の名前。その作品の一般的な名称を採用。             |
| **suffix**         | 添え名               | 同一名の作品を区別するために付け加える名前。           |
| **ruby**           | よみがな             | 作品名のよみがな。数字などもカタカナ表記にしている。声に出さない記号などは表記しない。|
| **started_year**   | 開始年               | 放映開始、あるいは販売開始日の年部分。最速放映日となる。TV局のような「5時〜29時」ではなく、「0時〜24時」の実日実時間で表記している。|
| **started_month**  | 開始月               | 上記の月部分                                       |
| **started_day**    | 開始日               | 上記の日部分                                       |
| **ended_year**     | 終了年               | 開始年月日の終了版の年部分。1話完結だと開始年月日と同じになる。|
| **ended_month**    | 終了月               | 上記の月部分                                       |
| **ended_day**      | 終了日               | 上記の日部分                                       |
| **broadcast**      | 放送局／劇場／販売元   | 放送局や販売元の情報                                |
| **author**         | 原作者               | 原作者の名前                                       |
| **original_title** | 原作名               | 原作の名前                                         |
| **madb_uri**       | MADB URI            | メディア芸術データベースから取得したデータを元にしている場合、そのページのURIが入っている。 |
| **official_uri**   | 公式URI              | 公式サイトのURI                                    |
| **memo**           | メモ                 | 他の項目にあてはまらないが書いておきたいことを書く項目   |
| **episodes**       | 各話情報             | 各話情報のリスト（放送開始日時順）。構造は次節で示す     |

### `episodes`

|     **キー名**     |      **項目名**      |                     **説明**                     |
|:------------------:|:--------------------:|:------------------------------------------------:|
| **title**          | エピソードタイトル    | 「第1話」といった表記を除いた、そのエピソードのタイトル |
| **prefix**         | タイトル接頭部        | 「第1話」といった、エピソードの位置を示す接頭部       |
| **literal_title**  | 生タイトル           | 接頭部も含めた、タイトルの生の表現                   |
| **ruby**           | タイトルよみがな      | タイトル（`title`）のよみがな                       |
| **started_at**     | 放送開始日時         | 最速の放送開始日時。フォーマットは `YYYY/MM/DD HH:mm` |
| **ended_at**       | 放送終了日時         | 最速の放送終了日時。フォーマットは `YYYY/MM/DD HH:mm` |

## 出典

本データベースは、[100年分のアニメ作品リストをExcelデータで公開した - 本しゃぶり](http://honeshabri.hatenablog.com/entry/animedb_shared)で述べた通り、2015年11月1日時点の[メディア芸術データベース](https://mediaarts-db.jp/)（[利用規約](https://mediaarts-db.jp/user_terms.html)）の内容から、[『アニメ作品事典―解説・原作データ付き』](https://www.amazon.co.jp/dp/4816922687)（2010、スティングレイ、 日外アソシエーツ）や Wikipedia などを参考に大幅に加筆修正を行ったものである。
2015年11月1日時点でメディア芸術データベースに存在する作品については、**madb_uri** に当該作品のメディア芸術データベースにおける URI が記載されている。

## Anime DB に貢献する

本データベースは現状 GitHub 上（[anilogia/animedb](https://github.com/anilogia/animedb)）でのコラボレーションを行っている。
本データベースに関することなら、データの加筆・修正はもちろん、データの編集方針や今後の活動についての質問・提案の [issue](https://github.com/anilogia/animedb/issues) および [Pull Request](https://github.com/anilogia/animedb/pulls) を歓迎する。

アニメを追加したい場合、[テンプレート](https://anilogia.github.io/animedb/template)が役に立つ。

## おまけ

- [Google IME 用の辞書](https://github.com/anilogia/animedb/blob/master/dict/google-ime-dict.txt)
- [Microsoft IME 用の辞書](https://github.com/anilogia/animedb/blob/master/dict/ms-ime-dict.txt)
- [Anime DB の一部を CSV フォーマットにしたもの](https://github.com/anilogia/animedb/blob/master/csv/animes.csv)

## ライセンス

本ソフトウェア（ソースコードおよびデータベース）の利用は[MIT ライセンス](https://github.com/anilogia/animedb/blob/master/LICENSE)に基づく。
また、[メディア芸術データベース利用規約](https://mediaarts-db.jp/user_terms.html)に準ずること。
