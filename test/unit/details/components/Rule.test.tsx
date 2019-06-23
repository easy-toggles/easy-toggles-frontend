import React from 'react'
import { shallow } from 'enzyme'
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
      updateCriteriaValues: updateCriteriaValuesMock,
      renameCriteria: jest.fn()
    }

    wrapper = shallow(<Rule {...props} />)
  })

  test('renders a list of criteria', () => {
    expect(wrapper.find('th > EditableText').prop('text')).toBe('pokemon')
  })

  test('calls delete rule handler', () => {
    wrapper.find('.delete-rule-button').simulate('click')

    expect(deleteRuleMock).toHaveBeenCalledWith(['feature', 0])
  })

  test('calls add criteria handler', () => {
    wrapper.find('.add-criteria-button').simulate('click')

    expect(addCriteriaMock).toHaveBeenCalledWith(['feature', 0])
  })

  test('calls delete criteria handler', () => {
    wrapper.find('IconButton').simulate('click')

    expect(deleteCriteriaMock).toHaveBeenCalledWith(['feature', 0, 'pokemon'])
  })
})
