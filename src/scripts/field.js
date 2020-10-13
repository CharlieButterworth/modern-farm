var field = []

export const addPlant = (seedObj) => {
    field.push(seedObj)

    // return field
}

addPlant()

export const usePlants = () => {
    return field.slice()


}

