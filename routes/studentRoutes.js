const express = require("express");
const router = express.Router();
const { getAllStudents, creatNewStudents, getSingleStudents ,updateStudents, deleteStudents} = require("../controllers/studentControllers");

// Define route handlers
router.route("/students").get(getAllStudents).post(creatNewStudents);

router.route("/students");
router.route("/students/:id").get(getSingleStudents).put(updateStudents).delete(deleteStudents);

module.exports = router;
