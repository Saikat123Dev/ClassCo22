import {Router} from "express"

import {upload} from "../middleware/multer.middleware.js"
import {verifyJWT} from "../middleware/auth.middleware.js"
import { loginUser, logoutUser, registerTeacher } from "../controllers/teacher.controllers.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        }
    ]),
    registerTeacher
)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,  logoutUser)

export default router