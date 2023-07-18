import puppeteer from "puppeteer";
import fs from "fs";

const getBoxingData = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://www.boxingscene.com/schedule");

  const data = await page.evaluate(() => {
    const scheduleFight = document.querySelectorAll(".schedule-fight");
    return Array.from(scheduleFight).map((fight) => {
      const fightDay = fight.querySelector(".fight-day").innerText;
      const fightDate = fight.querySelector(".fight-date").innerText;
      const fightTitle = fight.querySelector(".fight-title").innerText;
      const scheduleDetails = fight
        .querySelector(".schedule-details")
        .innerText.split("\n");
      return { fightDay, fightDate, fightTitle, scheduleDetails };
    });
  });

  console.log(data);

  // Write data to file
  const filePath = "src/data/scraperData.json";
  fs.writeFileSync(filePath, JSON.stringify(data));

  await browser.close();
};

// Export the function so that it can be accessed by the serverless function
export default getBoxingData;
