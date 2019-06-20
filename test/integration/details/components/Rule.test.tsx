import React from 'react'
import { mount } from 'enzyme'
import Rule from '../../../../src/details/components/Rule'

describe('Rule Component', () => {
  const deleteRuleMock = jest.fn()
  const deleteCriteriaMock = jest.fn()
  const addCriteriaMock = jest.fn()
  const updateCriteriaValuesMock = jest.fn()

  let wrapper

  beforeEach(() => {
    const props = {
      rule: { pokemon: ['pikachu', 'psyduck'] },
      path: ['feature', 0],
      deleteRule: deleteRuleMock,
      deleteCriteria: deleteCriteriaMock,
      addCriteria: addCriteriaMock,
      updateCriteriaValues: updateCriteriaValuesMock
    }

    wrapper = mount(<Rule {...props} />)
  })

  test('calls update criteria values handler', () => {
    wrapper.find('input').simulate('change', { target: { value: 'charizard' } })
    wrapper.find('input').simulate('keyUp', { keyCode: 13 })

    expect(updateCriteriaValuesMock).toHaveBeenCalledWith(
      ['feature', 0, 'pokemon'],
      ['pikachu', 'psyduck', 'charizard']
    )
  })
})
