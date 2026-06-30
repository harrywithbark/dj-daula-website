import { Router } from "express";
import { logger } from "../lib/logger";

const inquiryRouter = Router();

inquiryRouter.post("/inquiry", (req, res) => {
  const { name, partnerName, weddingDate, venue, events, guestCount, referralSource } = req.body;

  if (!name || !weddingDate || !events || !Array.isArray(events) || events.length === 0) {
    return res.status(400).json({
      error: "Missing required fields: name, weddingDate, events",
    });
  }

  logger.info(
    {
      inquiry: {
        name,
        partnerName,
        weddingDate,
        venue,
        events,
        guestCount,
        referralSource,
        receivedAt: new Date().toISOString(),
      },
    },
    "New booking inquiry received"
  );

  return res.status(200).json({
    success: true,
    message: "Inquiry received. Daula will be in touch within 24 hours.",
  });
});

export default inquiryRouter;
