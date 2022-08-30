const puppeteer = require("puppeteer-extra")

const TARGET_URL = 'https://wwwq.moex.gov.tw/exam/wFrmExamQandASearch.aspx';
const UserPreferencesPlugin = require("puppeteer-extra-plugin-user-preferences");

const downloadImageDirectoryPath = process.cwd();

puppeteer.use(
  UserPreferencesPlugin({
    userPrefs: {
      download: {
        prompt_for_download: false,
        open_pdf_in_system_reader: true,
        default_directory: downloadImageDirectoryPath,
        // automatic_downloads: 1,
      },
      plugins: {
        always_open_pdf_externally: true,
      },
      // disable allow-multiple-downloads popup
      profile: {
        default_content_setting_values: {
          automatic_downloads: 1,
        },
      },
    },
  })
);

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(TARGET_URL);

  await page.click("#ctl00_holderContent_ibtnFull")
  await page.waitForTimeout(300);
  await page.type("#ctl00_holderContent_txtCategoryName", "圖書資訊管理")
  await page.waitForTimeout(300);
  await page.click("#ctl00_holderContent_btnQuery")
  await page.waitForTimeout(300);
  await page._client().send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: './downloads' });


  const urls = await page.$$eval("a.exam-question-ans[title$='試題(Pdf檔)']", (arr) => {
    return arr.map(el => el.href)
  });

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      await page.goto(`${url}`);
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
    } catch (error) {
      // net::ERR_ABORTED
    }
  }
  await page.waitForTimeout(5000);

  // 爬取 考試名稱 選單
  // const photos = await page.$$eval("#ctl00_holderContent_ddlExamCode option", (arr) => {
  //   return arr.map(ele => ({ value: ele.value, title: ele.textContent }))
  // });
  // console.log(photos)

  await browser.close();
})();


