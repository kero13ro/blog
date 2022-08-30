- [底層介紹](https://zhuanlan.zhihu.com/p/76237595)

## 下載PDF
- 必須在無頭模式 `headless: false` 才能用 `page.pdf`，否則為 `Printing is not available`
- 但 pdf 檔案的頁面，不能用 `headless: false`\
  it's a known bug in chromium, where you are unable to navigate to a pdf or a page embedded with pdf in `headless:true` mode.

```js
const browser = await puppeteer.launch({
    headless: false,
});

await page.goto(pdfs, {
  waitUntil: 'networkidle2'
});
await page.pdf({ path: 'aaa.pdf', format: 'A4' });
```