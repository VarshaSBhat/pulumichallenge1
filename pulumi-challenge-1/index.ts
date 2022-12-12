import { CdnWebsite } from "./cdnwebsite";

const website = new CdnWebsite("your-startup", {});

export const websiteUrl = website.url;

// Monitoring with Checkly
// Demonstrates Standard Package usage
import * as checkly from "@checkly/pulumi";
import * as fs from "fs";

new checkly.Check("index-page", {
  activated: true,
  frequency: 10,
  type: "BROWSER",
  locations: ["eu-west-2"],
  script: websiteUrl.apply((url) =>
    fs
      .readFileSync("checkly-embed.js")
      .toString("utf8")
      .replace("{{websiteUrl}}", url)
  ),
});

import { Swag } from "./swag-provider";

const swag = new Swag("your-startup", {
  name: "Varsha S Bhat",
  email: "varshasharathbhat@gmail.com",
  address: "#100, 1st main, 7th cross, Pavamana Nagar, JP Nagar 8th Phase, Bangalore, India",
  size: "S",
});