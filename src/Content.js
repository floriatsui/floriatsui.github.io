import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Art } from "./Art";
import * as constants from './appConstants'; 

export const Content = ({ contentVar }) => {
    if (contentVar === constants.EXPERIENCE) {
        return <Experience />;
    } else if (contentVar === constants.PROJECTS)  {
        return <Projects />
    } else {
        return <Art />
    }
}