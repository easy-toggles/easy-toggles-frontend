import { append, reduce, pipe, filter, includes } from 'ramda'
import { Option } from '../types/form'

const buildOptions = (featureName: string, allFeatures: string[], featuresToIgnore: string[]): Option[] => {
  const emptyItem = { value: '', label: '' }

  const ignoreFeatures = append(featureName, featuresToIgnore)
  const getOptions = (acc: Option[], feature: string) => append({ value: feature, label: feature }, acc)
  const includesFeature = (feature: string) => !includes(feature, ignoreFeatures)

  const options = pipe(
    filter(includesFeature),
    reduce(getOptions, [emptyItem])
  )(allFeatures)

  return options
}

export { buildOptions }