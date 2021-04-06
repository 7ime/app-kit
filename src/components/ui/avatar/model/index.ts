import {IParentClass} from '@models/shared'

namespace IAvatar {
    export type Initials = [string, string?]

    export interface Props extends IParentClass {
        imageUrl?: string
        name?: string
    }
}

export default IAvatar
