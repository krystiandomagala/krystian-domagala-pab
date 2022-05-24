import mongooseTable from "./Table.js";
import mongooseEmployee from "./Employee.js";
import mongooseDish from "./Dish.js";
const mongoose = require("mongoose");
const Table = require("./Table");
const Employee = require("./Employee");
const Dish = require("./Dish");

const OrderStatus = {
  zlozone: 1,
  wRealizacji: 2,
  zrealizowane: 3,
  rachunek: 4,
};

Object.freeze(OrderStatus);

const orderSchema = mongoose.Schema({
  pracownik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  pozycje: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dish",
  },
  statusZamowienia: {
    type: OrderStatus,
    required: true,
  },
  stolik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
    required: true,
  },
  kwota: Number,
});

export const tableOrder = orderSchema.discriminator(
  "tableOrder",
  mongooseTable
);
export const employeeOrder = orderSchema.discriminator(
  "employeeOrder",
  mongooseEmployee
);
export const dishOrder = orderSchema.discriminator("dishOrder", mongooseDish);
module.exports = mongoose.model('Order', orderSchema)
