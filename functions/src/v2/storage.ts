import * as logger from "firebase-functions/logger";
import { onObjectFinalized } from "firebase-functions/v2/storage"

export const onfinalized = onObjectFinalized((event) => {
    logger.info(event);
})