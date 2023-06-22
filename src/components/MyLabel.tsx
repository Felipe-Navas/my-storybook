import './myLabel.css'

export interface Props {
  /**
   * This is to capitalize all the words
   */
  allCaps: boolean
  /**
   * This is the color of the button
   */
  color: 'primary' | 'secondary' | 'tertiary'
  /**
   * This is the color of the font
   */
  fontColor?: string
  /**
   * This is the message to show in the label
   */
  label: string
  /**
   * This is the size of the label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  fontColor = '',
  label = 'No Label',
  size = 'normal',
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
