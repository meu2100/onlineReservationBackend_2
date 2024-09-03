const express = require("express");
const router = express.Router();
const { Service, Staff } = require("../models");

router.get("/:companyName/services", (req, res) => {
  return Service.findAll({
    raw: true,
  })
    .then((services) => {
      res.json(services);
    })
    .catch(() => {
      res.status(500).json({ error: "Failed to read file" });
    });
});

router.get("/:companyName/services/:id", (req, res) => {
  return Service.findByPk(req.params.id, {
    raw: true,
  })
    .then((service) => {
      if(!service) throw new ERROR ("Service do not exist!");
      res.json(service);
    })
    .catch(() => {
      res.status(500).json({ error: "Failed to read file" });
    });
});

router.get("/staff", (req, res) => {
  return Staff.findAll({
    raw: true,
  })
    .then((Staffs) => {
      res.json(Staffs);
    })
    .catch(() => {
      res.status(500).json({ error: "Failed to read file" });
    });
});

module.exports = router;
