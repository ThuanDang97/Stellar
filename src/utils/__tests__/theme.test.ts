import { pxToRem } from '@utils/theme'

describe('Format pixel to rem value function', () => {
  it('Should return to rem string value', () => {
    const formatPxToReam = pxToRem(96)

    expect(formatPxToReam).toEqual('6rem')
  })
})
