import * as logger from "firebase-functions/logger";
import { onTaskDispatched } from "firebase-functions/v2/tasks";

export const tq = onTaskDispatched((req) => {
    logger.info("tq", req.data);
})