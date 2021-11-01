class LocalStorageProxy {
  private static getName (name: string): string {
    return `${name}`
  }

  public save(name: string, data: unknown): void {
    window.localStorage.setItem(
      LocalStorageProxy.getName(name),
      JSON.stringify(data),
    )
  }

  public restore(name: string) {
    const localStorageData = window.localStorage.getItem(
      LocalStorageProxy.getName(name),
    )
    return localStorageData ? JSON.parse(localStorageData) : null
  }
}

export const localStorageProxy = new LocalStorageProxy()
