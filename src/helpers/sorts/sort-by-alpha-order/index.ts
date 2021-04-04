import {sortBy} from 'lodash'

export const sortByAlphaOrder = <T>(source: T[], key: keyof T): T[] => {
    return sortBy(source, [(item) => item[key]])
}
