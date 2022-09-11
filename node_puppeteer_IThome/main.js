const puppeteer = require("puppeteer");
const { writeFileSync } = require("fs");

async function loopTitle() {
  const pageIndex = [0, 1, 2, 3];

  const list = await Promise.all(
    pageIndex.map(async (index) => {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto(
        `https://ithelp.ithome.com.tw/users/20129318/ironman/4165?page=${index}`
      );

      const targetPath =
        index === 0 ? "h3.qa-list__title--ironman" : ".qa-list__title-link";
      const daily = await page.$$eval(targetPath, (arr) =>
        arr.map((ele) => ele.innerText)
      );

      await browser.close();
      return daily;
    })
  );

  return list.flatMap((el) => el);
}

async function start() {
  // const a = await loopTitle();
  // console.log(a);

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    `https://ithelp.ithome.com.tw/2020-12th-ironman/signup/list?page=1`
  );

  const hrefList = await page.$$eval(".contestants-list__title", (arr) =>
    arr.map((ele) => ({href: ele.href, title:ele.innerText}))
  );
  // for (const href of hrefList) {
  //   await page.goto(href);
  //   const readCount = await page.$eval(
  //     ".ir-profile-content > div:nth-child(3) > div.profile-list__condition > a:nth-child(3) > span.qa-condition__count",
  //     (ele) => ele.innerText
  //   );
  //   console.log(readCount, href);
  //   // await fs.writeFile(href.split("/").pop(), await imagepage.buffer());
  // }

  // console.log(hrefList);
  await browser.close();

  writeFileSync("./category.json", JSON.stringify(hrefList, null, 2), "utf8");
}

start();
