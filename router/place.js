const express = require("express");
const Place = require("../models/Place");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 2);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/", upload.array("placeImage", 4), async (req, res) => {
  try {
    if (!req.body.name) {
      res.status(400).send({ msg: "name is required" });
      return;
    }
    const newPlace = new Place({
      name: req.body.name,
      placeImage: [
        req.files[0].path,
        req.files[1].path,
        req.files[2].path,
        req.files[3].path,
      ],
      idfeedback: req.body.idfeedback,
      gouvernorate: req.body.gouvernorate,
      rating: req.body.rating,
    });
    const response = await newPlace.save();
    res.send({ response, msg: "place added" });
  } catch (error) {
    res.status(400).send({ msg: "can not save this place", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Place.find();
    res.send({ response: result, msg: "getting all places was succ" });
  } catch (error) {
    res.status(400).send({ msg: "can't get all places" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await Place.findOne({ _id: req.params.id }).populate(
      "idfeedback"
    );
    res.send({
      response: result,
      msg: "getting place was succ",
    });
  } catch (error) {
    res.status(400).send({ msg: "there is no matching place" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Place.findOneAndDelete({ _id: req.params.id });
    result === null
      ? res.send({ msg: "place is already deleted" })
      : res.send({ msg: "one place is deleted" });
  } catch (error) {
    res.status(400).send({ msg: "there is no such a place to delete" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await Place.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.send({ msg: "place updated" })
      : res.send({ msg: "already updated" });
  } catch (error) {
    res.status(400).send({ msg: "there's no such a place to update" });
  }
});

module.exports = router;
