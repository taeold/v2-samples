import * as logger from "firebase-functions/logger";
import { onMessagePublished } from "firebase-functions/v2/pubsub";

export const onmsg = onMessagePublished("my-topic", (event) => {
    logger.info(event);
})