# Anime DB

アニメ作品リストデータベース。本データベースの背景は以下の記事を参照すること。

- [アニメ初心者におすすめしたい10137作品からの250選（前編） - 本しゃぶり](http://honeshabri.hatenablog.com/entry/anime-100years-1)
- [アニメ初心者におすすめしたい10137作品からの250選（後編） - 本しゃぶり](http://honeshabri.hatenablog.com/entry/anime-100years-2)
- [100年分のアニメ作品リストをExcelデータで公開した - 本しゃぶり](http://honeshabri.hatenablog.com/entry/animedb_shared)

本リポジトリは、[本しゃぶり](http://honeshabri.hatenablog.com/)の読者からも要望されたように、アニメ作品リストのバージョン管理、issue 管理、編集コラボレーションを行うために作成された。

## TL;DR

`animedb.yml` がデータベース本体である。今のところ、本データベースを利用・編集する場合、このファイルだけで完結する。

## `animedb.yml`

`animedb.yml` は、アニメ作品データのリストからなる。各アニメデータの構造を以下の表に示す。

|     **キー名**     |      **項目名**      |                     **説明**                     |
|:------------------:|:--------------------:|:------------------------------------------------:|
| **madb_id**        |   アニメシリーズID   | メディア芸術データベースにおけるアニメシリーズID |
| **medium**         | メディア             | 作品の媒体                                       |
| **duplicated**     | ダブリ               |                                                  |
| **id**             | 識別名               |                                                  |
| **title**          | 作品名               |                                                  |
| **suffix**         | 添え名               |                                                  |
| **ruby**           | よみがな             |                                                  |
| **started_year**   | 開始年               |                                                  |
| **started_month**  | 開始月               |                                                  |
| **started_day**    | 開始日               |                                                  |
| **ended_year**     | 終了年               |                                                  |
| **ended_month**    | 終了月               |                                                  |
| **ended_day**      | 終了日               |                                                  |
| **broadcast**      | 放送局／劇場／販売元   |                                                  |
| **author**         | 原作者               |                                                  |
| **original_title** | 原作名               |                                                  |
| **madb_uri**       | MADB URI            |                                                  |
| **official_uri**   | 公式URI              |                                                  |
| **memo**           | メモ                 |                                                  |

## 出典

本データベースは、[100年分のアニメ作品リストをExcelデータで公開した - 本しゃぶり](http://honeshabri.hatenablog.com/entry/animedb_shared)で述べた通り、2015年11月1日時点の[メディア芸術データベース](https://mediaarts-db.jp/)（[利用規約](https://mediaarts-db.jp/user_terms.html)）の内容から、[『アニメ作品事典―解説・原作データ付き』](https://www.amazon.co.jp/dp/4816922687)（2010、スティングレイ、 日外アソシエーツ）や Wikipedia などを参考に大幅に加筆修正を行ったものである。
2015年11月1日時点でメディア芸術データベースに存在する作品については、**madb_uri** に当該作品のメディア芸術データベースにおける URI が記載されている。

## ライセンス

本ソフトウェア（ソースコードおよびデータベース）の利用は[MIT ライセンス](https://github.com/anilogia/animedb/blob/master/LICENSE)に基づく。
また、[メディア芸術データベース利用規約](https://mediaarts-db.jp/user_terms.html)に準ずること。
