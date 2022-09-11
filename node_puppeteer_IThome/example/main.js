const puppeteer = require("puppeteer");
// const fs = require("fs/promises"); // not callback

async function start() {
  const browser = await puppeteer.launch({
    headless: false, // open browser for console
  });
  const page = await browser.newPage();
  await page.goto("https://learnwebcode.github.io/practice-requests/");

  /* 1. screenshot */
  await page.screenshot({ path: "ama.png" });

  /* 2. evaluate */
  const names = await page.evaluate(() => {
    // in browser scope, not node scope

    // node list, not array
    return Array.from(document.querySelectorAll(".info strong")).map(
      (x) => x.textContent
    );
  });
  await fs.writeFile("names.txt", names.join("\r\n"));

  /* 3. $$eval: evaluate的語法糖 */
  // const names = await page.$$eval(".info strong", (ele) =>
  //   ele.map((x) => x.textContent)
  // );
  // await fs.writeFile("names.txt", names.join("\r\n"));
  
  /* 4. $$eval: evaluate的語法糖 */
  const photos = await page.$$eval("img", (imgs) => {
    return imgs.map((x) => x.src);
  });

  // for (const photo of photos) {
  //   const imagepage = await page.goto(photo);
  //   await fs.writeFile(photo.split("/").pop(), await imagepage.buffer());
  // }


  /* 5. click */
  // await page.click("#clickme");
  // const clickedData = await page.$eval("#data", (el) => el.textContent);
  // console.log(clickedData);


  // await page.type("#ourfield", "blue");
  // await Promise.all([page.click("#ourform button"), page.waitForNavigation()]);
  // const info = await page.$eval("#message", (el) => el.textContent);

  // console.log(info);

  // await browser.close();
}

start();


/* cron */
// var cron = require('node-cron');

// cron.schedule('*/10 * * * * *', () => {
//   console.log('running a task every 10 sec');
// });