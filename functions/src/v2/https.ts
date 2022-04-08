import * as logger from "firebase-functions/logger";
import { onCall, onRequest } from "firebase-functions/v2/https";

export const oncall = onCall((req) => {
    logger.info(req.data);
})

export const onreq = onRequest((req, res) => {
    logger.info("onreq");
    res.send(200);
})