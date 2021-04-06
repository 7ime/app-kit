import {AVATAR_COLORS} from '@constants/avatar'
import {reduceNumberByDivisionToMaxSize} from '@helpers/reduce-number-by-division-to-max-size'

export const getAvatarBgColor = (initial: string): string => {
    const charCode = initial.charCodeAt(0)
    const bgColors = Array.from(AVATAR_COLORS.values())

    const index = Math.floor(reduceNumberByDivisionToMaxSize(charCode, bgColors.length - 1))

    return bgColors[index]
}
