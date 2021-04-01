let sessionCounter = 0;

export default (): number => {
    return Date.now() + sessionCounter++;
};