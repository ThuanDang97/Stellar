// Components
import { ViewStyled } from '@components/styled-components'
import Badge from '@components/Badge'
import Button from '@components/Button'
import Link from '@components/Link'
import TableCell from '@components/TableCell'

// Mocks
import { MEDIA_IMAGES } from './mockData'

// Table add bill
export const ADD_BILL_LIST_ROW = [
  {
    description: <TableCell title="Netflix" imgUrl={MEDIA_IMAGES.netflix} />,
    amount: '$10',
    buttonControl: (
      <ViewStyled display="inline-flex" gap={10}>
        <Button title="Dismiss" variant="primary" onClick={() => undefined} />
        <Link
          href="/abc"
          text="Link"
          linkTypes="primaryLink"
          iconLeftUrl="/icons/link-45deg.svg"
          pTop={10}
          pBottom={10}
        />
      </ViewStyled>
    ),
  },
  {
    description: <TableCell title="Holo" imgUrl={MEDIA_IMAGES.hulu} />,
    amount: '$20',
    buttonControl: (
      <ViewStyled display="inline-flex" gap={10}>
        <Button title="Dismiss" variant="primary" onClick={() => undefined} />
        <Link
          href="/a"
          text="Link"
          linkTypes="primaryLink"
          iconLeftUrl="/icons/link-45deg.svg"
          pTop={10}
          pBottom={10}
        />
      </ViewStyled>
    ),
  },
]

// Table my goals
export const MY_GOALS_ROW = [
  {
    goal: <TableCell title="Buy a car" imgUrl={MEDIA_IMAGES.netflix} />,
    scoreNeeded: 'Need 40 score',
    pointNeeded: (
      <ViewStyled display="flex" justifyContent="center">
        <ViewStyled flex={1}>
          <Badge title="READY" isReady />
        </ViewStyled>

        <Button
          variant="icon"
          width={20}
          height={20}
          cursor="pointer"
          onClick={() => undefined}
          imgUrl="/icons/kebab.svg"
          data-testid="kebab"
        />
      </ViewStyled>
    ),
  },
  {
    goal: <TableCell title="Buy a house" imgUrl={MEDIA_IMAGES.hulu} />,
    scoreNeeded: 'Need 20 score',
    pointNeeded: (
      <ViewStyled display="flex" justifyContent="center">
        <ViewStyled flex={1}>
          <Badge title="23 PTS AWAY" />
        </ViewStyled>

        <Button
          variant="icon"
          width={20}
          height={20}
          cursor="pointer"
          onClick={() => undefined}
          imgUrl="/icons/kebab.svg"
          data-testid="kebab"
        />
      </ViewStyled>
    ),
  },
]

// Table linked bill
export const LINKED_BILL_LIST_ROW = [
  {
    description: <TableCell title="Netflix" imgUrl={MEDIA_IMAGES.netflix} />,
    amount: '$50',
    draftDate: '3rd',
    status: (
      <ViewStyled display="flex" justifyContent="center">
        <ViewStyled flex={1}>
          <Badge title="Unpaid" />
        </ViewStyled>

        <Button
          variant="icon"
          width={20}
          height={20}
          cursor="pointer"
          onClick={() => undefined}
          imgUrl="/icons/kebab.svg"
          data-testid="kebab"
        />
      </ViewStyled>
    ),
  },
  {
    description: <TableCell title="Hulu" imgUrl={MEDIA_IMAGES.hulu} />,
    amount: '$40',
    draftDate: '1st',
    status: (
      <ViewStyled display="flex" justifyContent="center">
        <ViewStyled flex={1}>
          <Badge title="Paid" isReady />
        </ViewStyled>

        <Button
          variant="icon"
          width={20}
          height={20}
          cursor="pointer"
          onClick={() => undefined}
          imgUrl="/icons/kebab.svg"
          data-testid="kebab"
        />
      </ViewStyled>
    ),
  },
]
