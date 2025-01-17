import fs from "fs-extra";
import path from "path";
const commonFromPath = "KSTableName";

let StartFunc = ({ inTablesCollection, inTo, inFrom, inEndPointsNeeded }) => {
    let LocalEndPointsNeeded = inEndPointsNeeded;
    let LocalTo = inTo;
    let LocalFrom = inFrom;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });

    LocalFirstLevelFolders.forEach(LoopSecond => {
        try {
            fs.cpSync(`${LocalFrom}/${commonFromPath}`, `${LocalTo}/${path.parse(LoopSecond.name).name}`, {
                recursive: true,
            });
        } catch (error) {
            console.log(error.message);
        };
    });
};

export { StartFunc };
