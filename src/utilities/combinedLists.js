// Utilities
import experienceList from '../utilities/experience';
import educationList from '../utilities/education';
import projectList from '../utilities/projects';
import skillList from '../utilities/skills';

const combinedLists = [
  { type: "experience", list: [ experienceList, educationList ] },
  { type: "projects", list: projectList},
  { type: "skills", list: skillList}
];

export default combinedLists;