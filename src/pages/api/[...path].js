// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import puppeteer from "puppeteer";

export default async function photo(req, res) {
  // get the route from the request
  const route = req.query.path.join("/");

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1200,
      height: 630,
    },
  });
  try {
    const page = await browser.newPage();
    await page.goto(`http://${req.headers.host}/template/${route}`, {
      waitUntil: "networkidle0",
    });
    const image = await page.screenshot({ type: "png" });
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=86400, max-age=86400, stale-while-revalidate"
    );

    res.end(image);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  } finally {
    await browser.close();
  }
}
