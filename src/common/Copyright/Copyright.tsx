import {CopyrightProps} from '../types.ts'

import './copyright.scss'


const Copyright = ({ className }: CopyrightProps) => {

    return (
        <p className={`copyright ${className}`}>
            Copyright 2023-2024, TSFC. All Rights reserved.<br/>
            TSFC GmbH | Switzerland, Zugerstrasse 76A, 6340 Baar<br/>
            Entered into the Registrar of Companies under the number CHE343.086.388.
        </p>
    )
}

export default Copyright
