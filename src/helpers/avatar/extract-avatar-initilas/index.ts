import IAvatar from '@components/ui/avatar/model'
import {DEFAULT_AVATAR_INITIAL} from '@constants/avatar'

export const extractAvatarInitials = (source: string): IAvatar.Initials => {
    const result: IAvatar.Initials = [DEFAULT_AVATAR_INITIAL]
    const [firstChunk, secondChunk] = source.split(' ')

    if (firstChunk) {
        result[0] = firstChunk.charAt(0).toLocaleUpperCase()
    }

    if (secondChunk) {
        result[1] = secondChunk.charAt(0).toLocaleUpperCase()
    }

    return result
}
