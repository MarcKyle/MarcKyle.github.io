import { useState, useEffect } from 'react'

/**
 * Custom hook for managing modal state and keyboard interactions
 * @param {function} onClose - Optional callback to run when modal closes
 * @returns {Object} - Object containing modal state and control functions
 */
export function useModal(onClose) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeContent, setActiveContent] = useState(null)

  const openModal = (content) => {
    setActiveContent(content)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setActiveContent(null)
    if (onClose) onClose()
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return {
    isOpen,
    activeContent,
    openModal,
    closeModal
  }
}
