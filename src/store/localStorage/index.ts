class LocalStorageProxy {

  public remove(name:string): void {
    window.localStorage.removeItem(name)
  }

  public save(name: string, data: unknown): void {
    window.localStorage.setItem(
      name,
      JSON.stringify(data),
    )
  }

  public restore(name: string) {
    const localStorageData = window.localStorage.getItem(
      name
    )
    return localStorageData ? JSON.parse(localStorageData) : null
  }
}

export const localStorageProxy = new LocalStorageProxy()
