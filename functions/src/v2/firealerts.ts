import * as logger from "firebase-functions/logger";
import { onAlertPublished } from "firebase-functions/v2/alerts";

const appId = "1:670638177871:web:a40a973a2146207a7c343a";

export const newanr = onAlertPublished({ alertType: "crashlytics.newAnrIssue", appId }, (event) => {
  logger.info(event);
});

export const newfatal = onAlertPublished({ alertType: "crashlytics.newFatalIssue", appId }, (event) => {
  logger.info(event);
});

export const newnonfatal = onAlertPublished({ alertType: "crashlytics.newNonfatalIssue" }, (event) => {
  logger.info(event);
});

export const regression = onAlertPublished({ alertType: "crashlytics.regression" }, (event) => {
  logger.info(event);
});

export const stability = onAlertPublished({ alertType: "crashlytics.stabilityDigest", appId }, (event) => {
  logger.info(event);
});

export const velocity = onAlertPublished({ alertType: "crashlytics.velocity" }, (event) => {
  logger.info(event);
});

export const planupdate = onAlertPublished({ alertType: "billing.planUpdate" }, (event) => {
  logger.info(event);
});

export const planautoupdate = onAlertPublished({ alertType: "billing.planAutomatedUpdate" }, (event) => {
  logger.info(event);
});

export const newtester = onAlertPublished({ alertType: "appDistribution.newTesterIosDevice", appId }, (event) => {
  logger.info(event);
});
