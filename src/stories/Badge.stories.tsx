import React from 'react'

// Components
import Badge from '../components/Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
}

export const BadgeDefaultComponent = () => <Badge title="23 PTS Away" />
export const BadgeWithReadyComponent = () => <Badge title="Ready" isReady />
