const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('[Action type] ->', action.type)
  const nextValue = next(action)
  console.log('[New State] ->', store.getState())
  console.groupEnd()

  return nextValue
}

export default logger
