import {render} from '@testing-library/react'
import { Main } from '.'

describe("<Main/>", () => {
    it("should be have color", () => {
        const {container} = render(<Main/>)

        expect(container.firstChild).toHaveStyle({"background-color": "rgb(6 9 43 / var(--tw-bg-opacity))"})
    })
})