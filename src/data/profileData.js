import Profile from "../models/Profile";
import Project from "../models/Project";
import Skill from "../models/Skill";

const profile = new Profile(
  1,
  "Emmanuel D. Buenaventura",
  "Student Developer",
  "I'm a student learning web development with React.",
  "emmanueldejesus543@gmail.com"
);

profile.addSkill(new Skill(1, "React", "Beginner"));
profile.addSkill(new Skill(2, "Tailwind CSS", "Beginner"));
profile.addProject(new Project(1, "Portfolio Site", "My first React website."));
profile.addProject(new Project(2, "To-Do App", "A simple task tracker."));
profile.addProject(new Project(3, "Weather App", "Shows the forecast for any city."));

export default profile; 