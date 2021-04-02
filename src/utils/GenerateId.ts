let sessionCounter = 0;

export const generateId = (): number => {
    return Date.now() + sessionCounter++;
};