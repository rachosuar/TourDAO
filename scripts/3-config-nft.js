import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop(
  "0xA33ED7a54CFcaed4FaE3B5921E20c16f442c4416"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "ewol NFT",
        description: "This NFT will give you access to TuristDAO!",
        image: readFileSync("scripts/assets/ewol_logo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
