---
layout: post
title: 保健室・健康診断アンケート@千葉大学
img: ChibaMedicalCheckup/kenkoushindan_monshin.png
---


# 保健室を利用する・しない理由 / 健康診断を受ける・受けない理由はなんですか？

保健管理施設の利用と健康診断受診に関するアンケートです。
大学の保健管理施設と健康診断について、自由な意見を千葉大学の学生さんたちから募集し、その傾向を調査しました。
今後の保健管理施設運営や健康診断の実施に役立てればと考えています。

## 結果
### Q1. 基本情報
<div id="donutchart_gender" style="width: 450px; height: 250px;"></div>
<div id="dual_x_div_department" style="width: 250px; height: 250px;"></div>
<div id="dual_x_div_grade" style="width: 250px; height: 250px;"></div>

### Q2. 保健管理施設について
<div id="donutchart_1" style="width: 450px; height: 250px;"></div>
<dl>
  <dt>Q2-2. 「はい」と答えた方は、差し支えなければ、その内容を教えてください。</dt>
  <dd>統計的に有意な傾向なし。（確かに見たところ回答はバラバラ）</dd>
</dl>
<dl>
  <dt>Q2-3. 保健室を利用した理由・利用しない理由を書いてください。</dt>
  <dd>およそ３つの傾向が見てとれた：
  </dd>
</dl>

1. “無料だから”, “近いから”
2. “どのように利用すればいいかわからないから”
3. “特に体調不良がないため”

![Q2-3]({{site.baseurl}}/images/ChibaMedicalCheckup/Q2-3_Q2-1_true=blue_false_red_NULL=gray_Jul2017.png)

### Q3. 健康診断について
<div id="donutchart_2" style="width: 450px; height: 250px;"></div>
<dl>
  <dt>Q3-2. 健康診断を受診した・しない理由を書いてください。</dt>
  <dd>有意な傾向なし。（傾向はありそうだが、データが足りていない様子）</dd>
</dl>
<dl>
  <dt>Q3-3. 今までの学生定期健康診断では、糖尿病、慢性腎炎、肺結核、気胸などの 病気が判 明した学生さんがいます。健康診断を受けなかった場合、 自分自身にどのようなリ スクが生じると考えるか、書いてください。</dt>
  <dd>およそ2つの傾向が見てとれた：
  </dd>
</dl>
1. “病気発見が遅れる”
2. “元気だから大丈夫”

![Q3-3]({{site.baseurl}}/images/ChibaMedicalCheckup/Q3-3_Q3-1_Jul2017.png)

## 結論
まだ回答数が十分とは言えませんが、保健室の利用について、**“どのように利用すればいいかわからないから”**という回答群が自然に現れたのは重要です。
2014年に選択式アンケートで同様の調査が行われましたが、その際にはこれに類似する選択肢は用意されていなかったからです。

+ 千葉大学でのアンケート調査は、今後も継続していく予定です。関係者のみなさま、どうぞよろしくお願いします。

## 実施・解析手法
- Data collection：投票クラスタリング (v0.3)
- Framework：Stochastic blockmodelによるベイズ推論
- Algorithm: EM algorithm + Belief Propagation + Cross-validation ([graphBIX](https://github.com/tatsuro-kawamoto/graphBIX "sbmBIX"))

![voteclustering-v0.3]({{site.baseurl}}/images/ChibaMedicalCheckup/Q2-3-1.png)
![voteclustering-v0.3]({{site.baseurl}}/images/ChibaMedicalCheckup/Q3-1.png)

