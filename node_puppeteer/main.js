const puppeteer = require('puppeteer');
const TARGET_URL = 'https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(TARGET_URL);

  await page.click("#ctl00_holderContent_ibtnFull")
  await page.waitForTimeout(500);
  await page.type("#ctl00_holderContent_txtCategoryName", "圖書資訊管理")
  await page.waitForTimeout(500);
  await page.click("#ctl00_holderContent_btnQuery")
  await page.waitForTimeout(500);
  await page._client().send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: './downloads' });


  await page.$$eval("a.exam-question-ans[title$='試題(Pdf檔)']", (arr) => {
    console.log(arr.map(el => el.href))

    arr.forEach(ele => {
      const link = document.createElement("a");
      link.setAttribute("download", "data.pdf");
      document.body.appendChild(link);
      link.setAttribute("href", ele.href);
      link.click();
    })
  });
  await page.waitForTimeout(5000);

  // 爬取 考試名稱 選單
  // const photos = await page.$$eval("#ctl00_holderContent_ddlExamCode option", (arr) => {
  //   return arr.map(ele => ({ value: ele.value, title: ele.textContent }))
  // });
  // console.log(photos)

  // await browser.close();
})();


