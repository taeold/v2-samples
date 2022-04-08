import * as logger from "firebase-functions/logger";
import { onCall, onRequest } from "firebase-functions/v1/https";

export const oncall = onCall((data) => {
    logger.info(data);
})

export const onReq = onRequest((req, res) => {
    logger.info("onreq");
    res.send(200);
})