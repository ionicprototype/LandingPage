// Utilities
import experienceList from '../utilities/experience';
import educationList from '../utilities/education';
import projectList from '../utilities/projects';
import skillList from '../utilities/skills';

const combinedLists = [
  { type: "education", list: educationList},
  { type: "experience", list: experienceList},
  { type: "project", list: projectList},
  { type: "skills", list: skillList}
];

export default combinedLists;