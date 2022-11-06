import { useProviderStore } from '../stores/provider'

/**
 * Applies async function with loading bar.
 * @param func the function.
 * @returns the function result.
 */
export async function withLoadingBar<T>(func: () => Promise<T>): Promise<T> {
  // We don't need it to be responsive.
  const { loadingBar } = useProviderStore()
  try {
    loadingBar.start()
    const res = await func()
    loadingBar.finish()
    return res
  }
  catch (err) {
    loadingBar.error()
    throw err
  }
}
