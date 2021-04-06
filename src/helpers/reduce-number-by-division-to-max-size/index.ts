import {invariant} from '@helpers/invariant'

export const reduceNumberByDivisionToMaxSize = (source: number, maxSize: number): number => {
    invariant(maxSize > 0, `reduceNumberToMaxSize: The maximum size must be greater than 0. Current value: ${maxSize}`)

    if (source <= maxSize) return source

    return reduceNumberByDivisionToMaxSize(source / 2, maxSize)
}
