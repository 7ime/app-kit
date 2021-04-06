import {AVATAR_COLORS} from '@constants/avatar'
import {reduceNumberToMaxSize} from '@helpers/reduce-number-to-max-size'

export const getAvatarBgColor = (initial: string): string => {
    const charCode = initial.charCodeAt(0)
    const bgColors = Array.from(AVATAR_COLORS.values())

    const index = Math.floor(reduceNumberToMaxSize(charCode, bgColors.length - 1))

    return bgColors[index]
}
