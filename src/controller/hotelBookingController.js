const hotelBookingModel = require("../model/hotelBookingModel");

//============= Create Hotel Bookings ==============
const createHotelBooking = async function (req, res) {
  try {
    let hotel = req.body;
    const {
      hotelName,
      startDate,
      endDate,
      room,
      nights,
      localId,
      maritalStatus,
    } = hotel;
    if (!hotelName) {
      return res
        .status(400)
        .send({ status: false, message: "Hotel name is mandatory" });
    }
    if (!startDate) {
      return res
        .status(400)
        .send({ status: false, message: "Start date is mandatory" });
    }
    if (!endDate) {
      return res
        .status(400)
        .send({ status: false, message: "End date is mandatory" });
    }
    if (!room) {
      return res
        .status(400)
        .send({ status: false, message: "Room is mandatory field" });
    }
    if (room != "Single" && room != "Double") {
      return res.status(400).send({
        status: false,
        msg: "Rooms can only be avilable as Single or Double",
      });
    }
    if (!nights) {
      return res
        .status(400)
        .send({ status: false, message: "Night is mandatory field" });
    }
    if (!localId) {
      return res
        .status(400)
        .send({ status: false, message: "Local Id is mandatory field" });
    }
    if (!maritalStatus) {
      return res
        .status(400)
        .send({ status: false, message: "Marital Status is mandatory field" });
    }
    if (maritalStatus != "Single" && maritalStatus != "Married") {
      return res.status(400).send({
        status: false,
        msg: "Marital Status can only be Singel or Marrried",
      });
    }

    const hotelData = await hotelBookingModel.create(hotel);
    return res.status(201).send({ staus: true, data: hotelData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

//============= Get Hotel Bookings ==============
const getHotelBookings = async function (req, res) {
  try {
    const {
      room,
      nights,
      localId,
      petAllowed,
      maritalStatus,
      alcoholAllowed,
      bachelorAllowed,
    } = req.query;
    const query = {};
    if (room) {
      query.room = room;
    }
    if (nights) {
      query.nights = nights;
    }
    if (localId) {
      query.localId = localId;
    }
    if (petAllowed) {
      query.petAllowed = petAllowed;
    }
    if (maritalStatus) {
      query.maritalStatus = maritalStatus;
    }
    if (alcoholAllowed) {
      query.alcoholAllowed = alcoholAllowed;
    }
    if (bachelorAllowed) {
      query.bachelorAllowed = bachelorAllowed;
    }

    const saveData = await hotelBookingModel.find(query);
    if (saveData.length == 0) {
      return res
        .status(404)
        .send({ status: false, msg: "Hotel is not available" });
    } else {
      return res.status(200).send({ status: true,count:saveData.length, data: saveData });
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: "error message" });
  }
};
module.exports = { createHotelBooking, getHotelBookings };
