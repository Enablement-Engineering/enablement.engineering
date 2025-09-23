import { forwardRef } from "react"
import TextareaAutosize from "react-textarea-autosize"

const AutogrowTextarea = forwardRef(({ className = "", ...props }, ref) => {
  const baseClasses = "input-base resize-none overflow-hidden"
  const combinedClasses = `${baseClasses} ${className}`.trim()

  return (
    <TextareaAutosize
      className={combinedClasses}
      ref={ref}
      minRows={4}
      maxRows={12}
      {...props}
    />
  )
})

AutogrowTextarea.displayName = "AutogrowTextarea"

export { AutogrowTextarea }