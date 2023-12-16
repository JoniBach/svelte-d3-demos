import * as d3 from 'd3';

export const demoScatterConnected = (newData: string, config: object): void => {
    // set the dimensions and margins of the graph
    const margin = config.margin,
        width = config.size.width - margin.left - margin.right,
        height = config.size.height - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#scatter-connected")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    //Read the data
    d3.csv(newData,
        // When reading the csv, I must format variables:
        function (d) {
            return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value }
        }).then(
            // Now I can use this dataset:
            function (data) {
                // Add X axis --> it is a date format
                const x = d3.scaleTime()
                    .domain(d3.extent(data, d => d.date))
                    .range([0, width]);
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));
                // Add Y axis
                const y = d3.scaleLinear()
                    .domain([8000, 9200])
                    .range([height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(y));
                // Add the line
                svg.append("path")
                    .datum(data)
                    .attr("fill", "none")
                    .attr("stroke", "#69b3a2")
                    .attr("stroke-width", 1.5)
                    .attr("d", d3.line()
                        .x(d => x(d.date))
                        .y(d => y(d.value))
                    )
                // Add the points
                svg
                    .append("g")
                    .selectAll("dot")
                    .data(data)
                    .join("circle")
                    .attr("cx", d => x(d.date))
                    .attr("cy", d => y(d.value))
                    .attr("r", 5)
                    .attr("fill", "#69b3a2")
            })

}
