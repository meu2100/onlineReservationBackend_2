const express = require("express");
const router = express.Router();
const { Service, Staff, order } = require("../models");
const orderServices = require("../services/order");

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
      if (!service) throw new ERROR("Service do not exist!");
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

router.get('/orders/new', (req,res) =>{
  res.render("create-orders");
})

router.get("/orders", (req, res) => {
  return order
    .findAll({
      raw: true,
    })
    .then((orders) => {
      res.json(orders);
    })
    .catch(() => {
      res.status(500).json({ error: "Failed to read file" });
    });
});

router.post("/orders", orderServices.postOrder);

module.exports = router;
