import * as d3 from 'd3';

export const getKeys = (keys: string[], type: string) => {
    const xIndex = 0;
    const yIndex = 1;
    const zIndex = 2;

    const x = keys[xIndex];
    const y = keys[yIndex];
    const z = keys[zIndex];

    // Use the 'type' parameter to determine the behavior
    if (type === 'x') {
        return { x };
    }
    if (type === 'xy') {
        return { x, y };
    }
    if (type === 'xyz') {
        return { x, y, z };
    }
    if (type === 'n') {
        return keys;
    }
}


// get the value in the object based on a dynamic key
export const getValue = (data: any, key: string) => data[key]

// get the a signle domain of the data based on a dynamic key
export const getDomain = (data: any, key: string) => d3.extent(data, (d: any) => getValue(d, key))

// get all the domains of the data based on standard dynamic keys
export const getDomains = (data: string[], keys: any[], type: string) => {
    if (type === 'x') {
        return {
            x: getDomain(data, keys.x)
        };
    }
    if (type === 'xy') {
        return {
            x: getDomain(data, keys.x),
            y: getDomain(data, keys.y)
        };
    }
    if (type === 'xyz') {
        return {
            x: getDomain(data, keys.x),
            y: getDomain(data, keys.y),
            z: getDomain(data, keys.z)
        };
    }
    if (type === 'n') {
        return {

        };
    }
}

export const getUniqueIds = (data: any, id: string) => [...new Set(data.map((item: any) => item[id]))];
