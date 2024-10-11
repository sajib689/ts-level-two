

const searchName = (value: string | null) => {
    if(value === null) {
        console.log('Nothing find in search')
    } else {
        console.log('searching')
    }
}

searchName(null)

const getBikeSpeed = (speed: unknown) => {
    if(typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600
        console.log(convertedSpeed) 
    } else {
        console.log(speed)
    }
}
getBikeSpeed(40)