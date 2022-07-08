import { response } from "express";
import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  let data = await db.User.findAll();

  return res.render("homepage.ejs", {
    data: JSON.stringify(data),
  });
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  //create new user
  let message = await CRUDService.createNewUser(req.body);
  //create new user
  console.log(message);
  return res.send("post crud form server");
};
let showCRUD = async (req, res) => {
  ///ham return 1 promise thi nen bao o ngoai mot async await
  let data = await CRUDService.getAllUser();
  return res.render("show-crud.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    return res.render("edit-crud.ejs", { user: userData });
  } else {
    return res.send("User id not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let isTrue = await CRUDService.updateUserData(data);
  if (isTrue) {
    return res.redirect("/get-crud");
  } else {
    return res.send("update data failed");
  }
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  let isTrue = await CRUDService.deleteUserById(id);
  if (isTrue) {
    return res.redirect("/get-crud");
  } else {
    return res.send("delete data failed");
  }
};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  showCRUD: showCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
