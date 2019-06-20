import React from 'react'
import { mount } from 'enzyme'
import Rule from '../../../../src/details/components/Rule'

describe('Rule Component', () => {
  const deleteRuleMock = jest.fn()
  const deleteCriteriaMock = jest.fn()
  const addCriteriaMock = jest.fn()
  const updateCriteriaValuesMock = jest.fn()
  const renameCriteriaMock = jest.fn()

  let wrapper

  beforeEach(() => {
    const props = {
      rule: { pokemon: ['pikachu', 'psyduck'] },
      path: ['feature', 0],
      deleteRule: deleteRuleMock,
      deleteCriteria: deleteCriteriaMock,
      addCriteria: addCriteriaMock,
      updateCriteriaValues: updateCriteriaValuesMock,
      renameCriteria: renameCriteriaMock
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

  test('calls rename criteria handler', () => {
    wrapper.find('EditableText label').simulate('click')

    const input = wrapper.find('EditableText input')
    input.getDOMNode().value = 'other-value'
    input.simulate('change')
    input.simulate('keyUp', { keyCode: 13 })

    expect(renameCriteriaMock).toHaveBeenCalledWith(['feature', 0, 'pokemon'], 'other-value')
  })
})
