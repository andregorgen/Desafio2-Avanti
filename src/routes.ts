import { Router } from "express";
import { createEventController, deleteController, listEventController, updateController } from "./controllers/CreateEventController";
import { CreateCategoryController, ListCategoryController } from "./controllers/CategoryController";
import { CreatePlaceController, ListPlaceController } from "./controllers/PlaceController";

const router = Router();

const createEvent = new createEventController();
router.post("/event", createEvent.handle);
const listEvent = new listEventController();
router.get("/event", listEvent.handle);

const updateList = new updateController();
router.put("/event", updateList.handle)
const delete_id = new deleteController();
router.delete("/event", delete_id.handle)

const createCategory = new CreateCategoryController();
router.post("/category", createCategory.handle);
const listCategory = new ListCategoryController();
router.get("/listCategory", listCategory.handle);

const createPlace = new CreatePlaceController();
router.post("/place", createPlace.handle);
const listPlace = new ListPlaceController();
router.get("/listPlace", listPlace.handle);



export { router };
 