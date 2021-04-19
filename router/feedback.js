const express = require("express");
const feedback = require("../models/Feedback");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newFeedback = new feedback({
      ...req.body,
    });
    const response = await newFeedback.save();
    res.send({ response, msg: "feedback added" });
  } catch (error) {
    res.status(400).send({ msg: "can not save this feedback" });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await feedback.find();
    res.send({ response: result, msg: "getting all feedbacks was succ" });
  } catch (error) {
    res.status(400).send({ msg: "can't get all feedbacks" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await await feedback
      .findOne({ _id: req.params.id })
      .populate("iduser");
    res.send({ response: result, msg: "getting feedback was succ" });
  } catch (error) {
    res.status(400).send({ msg: "there is no matching feedback" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await feedback.findOneAndDelete({ _id: req.params.id });
    result === null
      ? res.send({ msg: "feedback is already deleted" })
      : res.send({ msg: "one feedback is deleted" });
  } catch (error) {
    res.status(400).send({ msg: "there is no such a feedback to delete" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await feedback.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.send({ msg: "feedback updated" })
      : res.send({ msg: "already updated" });
  } catch (error) {
    res.status(400).send({ msg: "there's no such a feedback to update" });
  }
});

module.exports = router;
