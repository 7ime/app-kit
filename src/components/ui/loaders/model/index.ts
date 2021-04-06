import {IParentClass} from '@models/shared'

namespace ILoader {
    export interface Props extends IParentClass {
        type?: 'primary' | 'secondary'
        size?: 'small' | 'large'
    }
}

export default ILoader
