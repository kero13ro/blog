const fs = require('fs');
const PDFParser = require("pdf2json");

// new version
const pdfParser = new PDFParser(this, 1); // 沒有文件
pdfParser.on("readable", meta => console.log("PDF Metadata", meta));
pdfParser.on("data", page => {
  fs.writeFileSync("./F1040EZ.json", pdfParser.getRawTextContent())
});
pdfParser.on("error", err => console.error("Parser Error", err));


// old version

// const pdfParser = new PDFParser(this, 1);
// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
// pdfParser.on("pdfParser_dataReady", (pdfData) => {
//   console.log(pdfData.Meta)
//   fs.writeFileSync("./F1040EZ.json", pdfParser.getRawTextContent());
// });

pdfParser.loadPDF("./111090_30320.pdf");


// const fs = require('fs');
// const { PdfReader } = require("pdfreader");

// async function parse() {
//   return new Promise((resolve, reject) => {
//     let arr = []
//     new PdfReader().parseFileItems("./111090_30320.pdf", (err, item) => {
//       if (err) reject(err)

//       if (!item) {
//         resolve(arr.join(''))
//       } else if (item.text) {
//         arr.push(item.text)
//       }
//     });
//   })
// }

// parse().then((res) => {
//   fs.writeFile("./content.txt", res, () => { console.log("Done."); });
// })


/* 
架構：
{
  原始資料：
  全稱：111年公務人員高等考試三級考試
  年度：111
  級等：三級
  類科：[客家事務行政、社會行政、勞工行政、法律廉政、財經廉政]
  科目：社會學
  代號：30320、3092031020、3272032820 (每年對應的類科都不ㄧ樣)
  是否要嵌入PDF：（部分題目要顯示圖片）
  題目：[
    試舉例說明在新冠肺炎（COVID-19）疫情爆發下，可能出現的健康與醫療差距或不平等現象，並分析其形成原因。（25分）
    學者指出，相對於早期的「舊經濟」，臺灣的發展在1980年代中期邁入一個新的階段，朝著「新經濟」的生產體系前進。新經濟具有什麼特徵？試至少舉例一個臺灣產業加以說明。（25分）
    1999年底，在世界貿易組織（WTO）舉行「千禧年回合」會談期間，來自世界各地五萬多人走上西雅圖街頭抗議，發起「全球正義」（globaljustice）運動，其影響力延續至今並擴大當中。何謂全球正義？試從這項抗議活動的組成分子、抗議理由及訴求主張說明之。（25分）
    恐怖主義（terrorism）是什麼？它與現代國家的性質有何異同？恐怖主義的行動通常具有那些目標？試舉例加以說明。（25分）
  ]
  
  ===不使用===
  [考試時間：2小時]
  [座號：]
  [※注意：禁止使用電子計算器。不必抄題，作答時請將試題題號及答案依照順序寫在試卷上，於本試題上作答者，不予計分。本科目除專門名詞或數理公式外，應使用本國文字作答。]
}


{
  origin: string
  fullName: string
  year: number
  rank:
}
*/