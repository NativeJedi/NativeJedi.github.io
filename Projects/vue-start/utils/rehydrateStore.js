export default (key, storage) => {
  try {
    // parse persisted state and restore to vuex store
    const state = JSON.parse(storage.getItem('state'))

    return state
  } catch (err) { return undefined }
}