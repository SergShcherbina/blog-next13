import * as React from "react"
import { SVGProps } from "react"
const GoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill={'currentColor'}
        {...props}
    >
        <path
            stroke={'currentColor'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 11 11 1m0 0H1m10 0v10"
        />
    </svg>
)
export default GoIcon
