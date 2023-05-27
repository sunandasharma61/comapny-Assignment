const express = require("express");
const router = express.Router();

const hotelBookingController = require("../controller/hotelBookingController");

router.post("/hotel", hotelBookingController.createHotelBooking);

router.get("/hotelBookings", hotelBookingController.getHotelBookings);


router.all("/*", function (req, res) {
  res.status(400).send({ status: false, message: "Invalid HTTP Request" });
});

module.exports = router;