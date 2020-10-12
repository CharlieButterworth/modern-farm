const plants = [
    {
        type: "SoyBean",
        height: 20,
        output: 4
    },
    {
        type: "Corn",
        height: 180,
        output: 6
    },
    {
        type: "Sunflower",
        height: 380,
        output: 3
    },
    {
        type: "Asparagus",
        height: 24,
        output: 4
    },
    {
        type: "Wheat",
        height: 230,
        output: 6
    },
    {
        type: "Potato",
        height: 32,
        output: 2
    }
]

export const plantProperties = () => {
    return plants.slice()
}