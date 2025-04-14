import { createContext, useContext } from 'react';

// Load the JSON data
const aboutMeJsonData = require('../assets/data/about-me.json');

interface aboutMeData {
    aboutme: string;
}

const AboutMeContext = createContext<aboutMeData>({
    aboutme: ""
});

function DataManager() {
    return useContext(AboutMeContext);
}

export default { AboutMeContext, DataManager };