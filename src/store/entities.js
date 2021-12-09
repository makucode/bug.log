import { combineReducers } from "redux";
import projects from "./projects";
import tickets from "./tickets";
import users from "./users";
import comments from "./comments";

const entitiesReducer = combineReducers({ projects, tickets, users, comments });

export default entitiesReducer;
