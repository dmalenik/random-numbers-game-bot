import type { GenerateRandNumFn } from '../types/GenerateRandNumFn'

const generateRandNum: GenerateRandNumFn = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min) + min)
}

export default generateRandNum
