import {IParentClass} from '@models/shared'

namespace IAvatar {
    export type Initials = [string, string?]

    export interface Props extends IParentClass {
        bgImageUrl?: string
        bgColor?: string
        name?: string
    }
}

export default IAvatar
