import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Modal from '../components/Modal'

// Mocks
import { TOOLTIP_LOREM } from '../__mocks__/mockData'

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Click to open modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {args.children}
      </Modal>
    </>
  )
}

export const DefaultModal = Template.bind({})

DefaultModal.args = {
  children: <p>{TOOLTIP_LOREM}</p>,
}
