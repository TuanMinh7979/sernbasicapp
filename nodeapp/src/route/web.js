import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  //get all
  router.get("/get-crud", homeController.showCRUD);

  //edit
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);

  //delete
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.hdlLogin);

  router.get("/api/get-all-user", userController.hdlGetAllUser);

  router.post("/api/create-user", userController.hdlCreateNewUser);

  router.get("/allcode", userController.getAllCode);
  return app.use("/", router);
};

module.exports = initWebRoutes;
