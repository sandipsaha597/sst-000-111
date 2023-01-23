import { TextField } from '@mui/material'
import React, { useCallback, useEffect, useRef } from 'react'

const EditableText = React.memo(
  ({ editMode, text, whenDone, textColor = 'rgba(0, 0, 0, 0.87)' }) => {
    const inputRef = useRef()

    const handleKeyUp = useCallback(
      (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          const textarea = inputRef.current?.querySelector('textarea')
          const textValueAfterTrimEnd = textarea.value.trimEnd()
          textarea.value = textValueAfterTrimEnd
          if (textValueAfterTrimEnd === '')
            return alert(`can't save empty card`)
          whenDone(textValueAfterTrimEnd)
        }
      },
      [whenDone]
    )

    useEffect(() => {
      const textarea = inputRef.current?.querySelector('textarea')
      if (editMode) {
        textarea.focus()
        textarea.selectionStart = 1000000
        textarea.selectionEnd = 1000000
      }
      textarea?.addEventListener('keyup', handleKeyUp)
      return () => textarea?.removeEventListener('keyup', handleKeyUp)
    }, [editMode, handleKeyUp])

    return (
      <TextField
        ref={inputRef}
        disabled={!editMode}
        defaultValue={text}
        multiline
        fullWidth
        sx={{
          '.MuiInputBase-multiline': {
            color: textColor,
            p: 0,
            px: 1,
            fontSize: 'inherit',
            '.MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled': {
              color: textColor,
              cursor: 'text',
              WebkitTextFillColor: textColor,
            },
            '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          },
          textarea: {
            textAlign: 'inherit',
            fontFamily: 'inherit',
          },
        }}
      />
    )
  }
)

export default EditableText
