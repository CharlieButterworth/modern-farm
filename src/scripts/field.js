var field = []

export const addPlant = (seedObj) => {

if (Array.isArray(seedObj) === true) {
    for (const arrayIndex of seedObj) {
        field.push(arrayIndex)
    }
}

else {
    field.push()
}


    field.push(seedObj)

    // return field
}

// addPlant()

export const usePlants = () => {
    return field.slice()

}

