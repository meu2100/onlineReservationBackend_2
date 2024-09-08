const { where } = require("sequelize");
const { order } = require("../models");

const orderServices = {
  postOrder: (req, res) => {
    const { serviceId, timestamp, name, gender, phone, email, remark, staff } =
      req.body;
    return order.count({ where: { timestamp, staff } }).then((rowCount) => {
      if (rowCount > 0) {
        res.status(409).json({ error: "該時段該員工已有預約" });
        return;
      }
      return order
        .create({
          serviceId,
          timestamp,
          name,
          gender,
          phone,
          email,
          remark,
          staff,
        })
        .then(() => {
          res.redirect("/orders");
        });
    });
  },
};

module.exports = orderServices;
