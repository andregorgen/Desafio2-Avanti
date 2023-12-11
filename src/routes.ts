import { Router } from "express";
import { createEventController, deleteController, listEventController, updateController, ListEventIdController, listEventByCategoryController, listEventByPlaceController, listEventByDateController } from "./controllers/EventController";
import { CreateCategoryController, ListCategoryController, deleteCategoryController, updateCategoryController } from "./controllers/CategoryController";
import { CreatePlaceController, DeletePlaceController, ListPlaceController, UpdatedPlaceController } from "./controllers/PlaceController";
import { FindByCategoryController, FindByPlaceController, FindByDateController, FindByEventController } from "./controllers/SearchController";
import { LoginUser, createUser } from "./controllers/user";
import { auth } from "./auth/authorization";
import { validationLoginFields, validationUserFields } from "./middleware/validation";

const router = Router();

const user = new createUser();
const login = new LoginUser();
router.post('/register', validationUserFields, user.handle)
router.post('/login', validationLoginFields, login.handle)

// router.use(auth);

const createEvent = new createEventController();
router.post("/event", createEvent.handle);
const listEvent = new listEventController();
router.get("/event", listEvent.handle);
const listIdEvent = new ListEventIdController();
router.get("/event/:id", listIdEvent.handle);
const updateList = new updateController();
router.put("/event/:id", updateList.handle)
const delete_id = new deleteController();
router.delete("/event/:id", delete_id.handle)

const createCategory = new CreateCategoryController();
router.post("/category", createCategory.handle);
const listCategory = new ListCategoryController();
router.get("/category", listCategory.handle);
const updateCategory = new updateCategoryController();
router.put("/category/:id", updateCategory.handle)
const deleteCategory = new deleteCategoryController();
router.delete("/category/:id", deleteCategory.handle)

const createPlace = new CreatePlaceController();
router.post("/place", createPlace.handle);
const listPlace = new ListPlaceController();
router.get("/listPlace", listPlace.handle);
const updatePlace = new UpdatedPlaceController();
router.put("/place/:id", updatePlace.handle);
const deletePlace = new DeletePlaceController();
router.delete("/place/:id", deletePlace.handle);

const findByCategory = new FindByCategoryController();
router.get("/categories/:category_id", findByCategory.handle);
const findByPlace = new FindByPlaceController();
router.get("/places/:place_id", findByPlace.handle);
const findByDate = new FindByDateController();
router.get("/dates/:date", findByDate.handle);
const findByEvent = new FindByEventController();
router.get("/events/:id", findByEvent.handle);

const findEventByCategory = new listEventByCategoryController();
router.get("/eventsByCategory/:name", findEventByCategory.handle);
const findEventByPlace = new listEventByPlaceController();
router.get("/eventsByPlace/:name", findEventByPlace.handle);
const findEventByDate = new listEventByDateController();
router.get("/eventsByDate/:date", findEventByDate.handle);


export { router };
