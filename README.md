# WEBアクセシビリティを意識したマークアップ
## 目次

- 概要
- WEBアクセシビリティ

---

## WEBアクセシビリティとは

> コンピュータの機種や入出力機器、ソフトウェアの違いや、子どもや高齢者、障害者などの別によらず、なるべく多くの人がサイト内の情報を見つけ出し、ページにアクセスして内容のすべてに触れることができる状態のこと
([IT用語辞典 e-Words](http://e-words.jp/w/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3.html "IT用語辞典 e-Words"))

---

## WEBアクセシビリティの規格

- 2008年 W3CによりWCAG（Web Content Accessiblity Guidelines） 2.0が策定される
- 2012年 WCAG2.0がそのまま国際規格として承認される。（ISO/IEC 40500:2012）
- 2016年 JIS X 8341-3:2016 が 国際規格「ISO/IEC 40500:2012」の一致規格とすべく改定

⇒　これにより、W3C、国際規格、国内規格が統一されたことになる。
色々な企業や官公庁でウェブアクセシビリティの方針が策定されているが、国際規格及び国内企画でもあるWCAG2.0を基準にしているものが多い。

---

## WEBアクセシビリティ方針の事例

### パナソニック
ウェブアクセシビリティ方針：https://www.panasonic.com/jp/webaccessibility.html

### 内閣府
内閣府ウェブアクセシビリティ方針：https://www.cao.go.jp/notice/accessibility_guidelines.html

### サイバーエージェント
アクセシビリティへの取り組み：https://www.cyberagent.co.jp/way/csr/accessibility/

---

## WEBアクセシビリティを意識したマークアップ 

WCAG2.0には、デザイン、技術、コンテンツの面からWEBアクセシビリティを向上させるためにできる事が記載されているが、今回は主に技術面からできることをまとめる。

例：

- metaタグにuser-scable=noを入れない。（画面全体の拡大はできるようにする。）
- htmlタグにはlang属性を設定し、デフォルトの言語を指定する。
- ボタンの項目には、spanやdivタグを使用せず、buttonタグを使うこと。
- テキスト入力に使うinputのtype属性は適切なものを入れる。(typeがemail、text、url、telの場合、見た目は変わらないがフォーカスした時に表示されるキーボードのパターンは微妙に異なる。)

--- 

## WEBアクセシビリティを意識したマークアップ 

## WAI-ARIAとは
Web Accessibility Initiative - Accessible Rich Internet Applicationsの略。
アクセシビリティを向上させるHTML属性のこと。

## WAI-ARIAの主な機能

### ロール（Role）
その要素が何か、もしくは何をするかを定義する。
HTMLで適切なマークアップを行えば、役割を明示できる。
しかし、HTMLに用意されているタグでは限界がある。また同じマークアップ言語のSVG要素は図形描画が目的であるため、同じようにHTMLと同じようにその意味を与えてやることができない。

role属性にはHTMLよりも多くの役割が用意されており、またSVGを含めたあらゆる要素に付与することができる。


#### HTMLで代替可能なrole属性
```
<!-- navタグで-->
<div role="navigation">ナビゲーション</div>

```
`role="navigation"：<nav>`や`role="complementary":<aside>`





## 参考サイト

- ([ウェブアクセシビリティ基盤委員会](https://waic.jp/ "ウェブアクセシビリティ基盤委員会"))：https://waic.jp/
  - ([WCAG 2.0 解説書](https://waic.jp/docs/UNDERSTANDING-WCAG20/Overview.html#contents "WCAG 2.0 解説書"))：https://waic.jp/docs/UNDERSTANDING-WCAG20/Overview.html#contents
  - ([WCAG 2.0 達成方法集](https://waic.jp/docs/WCAG-TECHS/Overview.html "WCAG 2.0 達成方法集"))：https://waic.jp/docs/WCAG-TECHS/Overview.html
    - ([ARIA の達成方法](https://waic.jp/docs/WCAG-TECHS/aria.html "ARIA の達成方法"))：https://waic.jp/docs/WCAG-TECHS/aria.html
- ([Accessible Rich Internet Applications (WAI-ARIA) 1.2 日本語訳](https://momdo.github.io/wai-aria-1.2/ "Accessible Rich Internet Applications (WAI-ARIA) 1.2 日本語訳"))：https://momdo.github.io/wai-aria-1.2/
