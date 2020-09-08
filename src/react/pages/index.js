import Home from "./Home";
import Main from "./Main";
import Profile from "./Profile";
import NotFound from "./NotFound";
import CreateAKweetForm from "./CreateAKweetForm";
import Settings from "./Settings";

export default {
  Home: { path: "/", component: Home },
  SignUp: { path: "/signup", component: Home},
  CreateAKweetForm: {path: "/create", component: CreateAKweetForm},
  Main: { path: "/main", component: Main},
  Profile: { path: "/profile/:username", component: Profile },
  Settings: {path: "/settings", component: Settings},
  NotFound: { path: "*", component: NotFound }
  
};