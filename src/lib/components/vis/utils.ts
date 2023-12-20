import * as d3 from 'd3';

export const getKeys = (keys: string[], type: string) => {
    const xIndex = 0;
    const yIndex = 1;
    const zIndex = 2;

    const x = type !== 'n' && keys[xIndex];
    const y = type !== 'n' && keys[yIndex];
    const z = type !== 'n' && keys[zIndex];

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
export const getDomain = (data: any[], key: string) => {
    const sorted = data.sort((a, b) => Number(getValue(a, key)) - Number(getValue(b, key)))
    const values = data.map((d: any) => Number(getValue(d, key)));
    const min = Math.min(...values);
    const max = Math.max(...values);
    console.log({ min, max, key, data, sorted })
    return [min, max];
}

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
export const createSVG = ({ id, width, height, margin }) => d3
    .select(`#${id}`)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// Function to compute density
export function kernelDensityEstimator(kernel, X) {
    return function (V) {
        return X.map(function (x) {
            return [
                x,
                d3.mean(V, function (v) {
                    return kernel(x - v);
                })
            ];
        });
    };
}
export function kernelEpanechnikov(k) {
    return function (v) {
        return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0;
    };
}

export const createPlot = ({ data, x, y, svg, color }) => svg
    .append('path')
    .attr('class', 'mypath')
    .datum(data)
    .attr('fill', color)
    .attr('opacity', '.6')
    .attr('stroke', '#000')
    .attr('stroke-width', 1)
    .attr('stroke-linejoin', 'round')
    .attr(
        'd',
        d3
            .line()
            .curve(d3.curveBasis)
            .x(function (d) {
                return x(d[0]);
            })
            .y(function (d) {
                return y(d[1]);
            })
    );
