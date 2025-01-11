const CommonPressingScanFilterKey = "PressingScan";
const CommonPressingReWashScanFilterKey = "PressingReWashScan";
const CommonCompletionScanFilterKey = "CompletionScan";



const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonPressingScanFilterKey] === true &&
            element[CommonPressingReWashScanFilterKey] === false &&
            element[CommonCompletionScanFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
