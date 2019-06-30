import { buildOptions } from '../../../src/libs/buildOptions'

describe('buildOptions', () => {
  test('builds a list of options', () => {
    const expectedResult = [{ label: '', value: '' }, { label: 'someFeature', value: 'someFeature' }]

    expect(buildOptions('testFeature', ['testFeature', 'someFeature', 'otherFeature'], ['otherFeature'])).toEqual(
      expectedResult
    )
  })
})
