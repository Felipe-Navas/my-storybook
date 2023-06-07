import './myLabel.css'

export interface Props {
  /**
   * This is the message to show in the label
   */
  label: string
  /**
   * This is the size of the label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
}

export const MyLabel = ({ label = 'No Label', size = 'normal' }: Props) => {
  return <span className={`${size}`}>{label}</span>
}
