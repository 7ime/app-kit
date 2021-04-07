import {IParentClass} from '@models/shared'

namespace IModal {
    export interface Props extends IParentClass {
        in: boolean
        parentContentClass?: string
        onOutsideClick(): unknown
        onExited?(node: HTMLElement): unknown
    }
}

export default IModal
