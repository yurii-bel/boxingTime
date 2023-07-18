import getBoxingData from "./src/utils/getBoxingData.mjs";

(async () => {
  try {
    await getBoxingData();
    console.log("Scraping completed successfully.");
  } catch (error) {
    console.error("Error during scraping:", error);
  }
})();
