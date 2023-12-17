
export const data = [
    {
        category: "distribution",
        graphs: [
            {
                key: "histogram",
                title: 'Sales Performance',
                value:
                    "data/distribution/histogram.json",
            },
            {
                key: "histogram-double",
                title: 'Sales Performance',
                value:
                    "data/distribution/histogram-double.json",
            },

            {
                key: "density",
                title: 'Sales Performance',
                value:
                    "data/distribution/histogram.json",
            },
            {
                key: "density-double",
                title: 'Density double',
                value: "data/distribution/density-double.json",
            },
            {
                key: "density-double-b2b",
                title: 'Density double back to back',
                value:
                    "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_doubleHist.csv",
            },
            {
                key: "ridgeline",
                title: 'Mental Health',
                value:
                    "data/distribution/ridgeline.json",
            },
            {
                key: "ridgeline-advanced",
                title: 'Mental Health',
                value:
                    "data/distribution/ridgeline.json",
            },
        ],
    },
    {
        category: "correlation",
        graphs: [
            {
                key: "scatter",
                title: 'Stock Performance',
                value:
                    "data/correlation/scatter.json",
            },
            {
                key: "heatmap",
                title: 'Employeee Performance',
                value:
                    "data/correlation/heatmap.json",
            },
            {
                key: "heatmap-advanced",
                title: 'Employeee Performance',
                value:
                    "data/correlation/heatmap.json",
            },
            {
                key: "correlogram",
                title: 'Health and Lifestyle',
                value:
                    "data/correlation/correlogram.json",
            },
            {
                key: "bubble",
                title: 'Near Earth Objects',
                value:
                    "data/correlation/bubble.json",
            },
            {
                key: "bubble-advanced",
                title: 'Near Earth Objects',
                value:
                    "data/correlation/bubble.json",
            },
            {
                key: "scatter-connected",
                title: 'Scatter connected',
                value:
                    "data/correlation/scatter-connected.json",
            },
            {
                key: "scatter-connected-multi",
                title: 'Time Sales Expenses Proffit',
                value:
                    "data/correlation/scatter-connected-multi.json",

            },
            {
                key: "scatter-connected-smoothe",
                title: 'Scatter connected smothe',
                value:
                    "data/correlation/scatter-connected.json",
            },
            {
                key: "density-shaded",
                value:
                    "data/correlation/density-shaded.json",
            },
        ],
    },
    {
        category: "ranking",
        graphs: [
            {
                key: "bar",
                title: 'Pokemon evolution level',
                value:
                    "data/ranking/bar.json",
            },
            {
                key: "bar-horizontal",
                title: 'Pokemon evolution level',
                value:
                    "data/ranking/bar.json",
            },
            {
                key: "bar-stacked",
                value:
                    "data/ranking/bar-stacked.json",

            },
            {
                key: "parallel",
                value:
                    "data/ranking/parallel.json",
            },
            {
                key: "lolipop",
                value:
                    "data/ranking/bar.json",
            },
            {
                key: "lolipop-horizontal",
                value:
                    "data/ranking/bar.json",
            },
            {
                key: "lolipop-cleveland",
                title: 'Athletes performance',
                value:
                    "data/ranking/lolipop-cleveland.json",
            },
            {
                key: "bar-circular",
                title: 'Energy consumption',
                value:
                    "data/ranking/bar-circular.json",

            },
            {
                key: "bar-circular-labels",
                title: 'Energy consumption',
                value:
                    "data/ranking/bar-circular.json",

            },
            {
                key: "bar-circular-labels-double",
                title: 'Energy consumption vs green energy production',
                value:
                    "data/ranking/bar-circular-double.json",

            },
        ],
    },
    {
        category: "comparison",
        graphs: [

            {
                key: "treemap",
                title: 'Academia',
                value:
                    "data/comparison/treemap.json",
            },
            {
                key: "treemap-circular",
                title: 'Tech revinue',
                value:
                    "data/comparison/treemap-circular.json",
                // "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/11_SevCatOneNumNestedOneObsPerGroup.csv",
            },
            {
                key: "dendrogram",
                value:
                    "data/comparison/dendrogram.json",
            },
            {
                key: "doughnut",
                value: { a: 9, b: 20, c: 30, d: 8, e: 12, f: 3, g: 7, h: 14 },
            },
            {
                key: "pie",
                value: { a: 9, b: 20, c: 30, d: 8, e: 12, f: 3, g: 7, h: 14 },
            },
        ],
    },
    {
        category: "flow",
        graphs: [
            {
                key: "arc",
                title: 'Engineering team flow',
                value:
                    "data/flow/arc.json",
            },
            {
                key: "network",
                title: 'Reasearch team network',
                value:
                    "data/flow/network.json",
            },
            {
                key: "chord",
                title: 'courntry export connections',
                value: [
                    [0, 35, 50, 25],  // Exports from Country A to B, C, D
                    [40, 0, 30, 20],  // Exports from Country B to A, C, D
                    [45, 25, 0, 30],  // Exports from Country C to A, B, D
                    [20, 40, 35, 0]   // Exports from Country D to A, B, C
                ]
            },
        ],
    },
];