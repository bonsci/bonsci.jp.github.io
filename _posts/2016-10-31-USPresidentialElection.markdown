---
layout: post
title:  "2016年アメリカ大統領選挙"
date:   2016-10-31 10:51:47 +0530
categories: political
img: USPresidentialElection/USpresident.jpeg
categories: [one, two]
---

# テレビ討論会の会場（ネバダ大学ラスベガス校）で突撃街頭アンケート

## 概要
2016年10月19日、アメリカ大統領選挙のテレビ討論会の最終ラウンドがラスベガスのネバダ大学で開催されました。

前日の18日と当日の19日、キャンパス内を歩いている人々、候補者を応援している人々に話しかけ、街頭アンケートに答えてもらいました。


<div id="USPresidentialElection2016_respondents" style="width: 450px; height: 250px;"></div>

全部で集まった回答数は117人分。そのうち独自の意見を書き込んでくれた人は49人でした。
ネバダ大学（NVLV）で得られた回答、ウェブで得られた回答、初期入力の割合は上図のとおりです。
これらの中には、アメリカ国民以外も含まれています。

## 結果
論文準備中のため、まだあまり書けませんが、
オープンにしている結果はこちらへ：
[voteclustering.org](http://voteclustering.org/ "voteclusteringWebSite")


## 様子
![airport]({{site.baseurl}}/images/USPresidentialElection/Airport_Lasvegas.jpg)

## 実施・解析手法
- Data collection：投票クラスタリング (v0.2)
- Framework：Labeled stochastic blockmodelによるベイズ推論
- Algorithm: EM algorithm + Belief Propagation + Cross-validation ([graphBIX](https://github.com/tatsuro-kawamoto/graphBIX "labeledBIX"))

## 実施主体
このデータは、本サイトの運営者（川本）が、有給休暇をとって現地で収集しました。交通費、その他経費諸々は自費です。

---