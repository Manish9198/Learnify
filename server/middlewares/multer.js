import multer from "multer";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({ //diskStorae == file server folder me store hogi
  destination(req, file, cb) {       //memoryStorae == ram me store hogi
    cb(null, "uploads");            //cb(error, value)
  },
  filename(req, file, cb) {
    const id = uuid();

    const extName = file.originalname.split(".").pop();

    const fileName = `${id}.${extName}`;

    cb(null, fileName);
  },
});

export const uploadFiles = multer({ storage }).single("file");