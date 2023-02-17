const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const maxSize = 1024 * 1024 * 5;

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.includes("jpeg") && !file.mimetype.includes("png")) {
    return cb(null, false, new Error("Only images are allowed"));
  }
  cb(null, true);
};

const uplods = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
});

module.exports = { uplods };
