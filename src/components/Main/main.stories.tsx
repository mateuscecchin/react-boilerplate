import { Main, MainProps } from ".";
import {Meta, StoryObj} from "@storybook/react"

export default {
    title: "Main",
    component: Main,
   
} as Meta<StoryObj>

export const Basic: StoryObj = {
    args: {
        title: undefined
    }
} 