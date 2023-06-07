import { StoryFn, Meta } from '@storybook/react'
import { MyLabel } from '../../components/MyLabel'

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs']
} as Meta<typeof MyLabel>;

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
  size: 'normal'
}

export const AllCaps = Template.bind({})

export const Secondary = Template.bind({})
