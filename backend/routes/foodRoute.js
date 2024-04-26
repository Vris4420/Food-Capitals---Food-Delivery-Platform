import experess from 'express'
import { addFood } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = experess.Router();


foodRouter.post("/add", addFood)



export default foodRouter;