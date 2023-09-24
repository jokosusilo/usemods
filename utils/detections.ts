export function getDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

export function getActiveBrowser(): boolean {
  return document.hidden
}

export function getColorScheme(): string {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getBrowser(): string {
  return navigator.userAgent.toLowerCase()
}

export function getOS(): string {
  const userAgent = navigator.userAgent.toLowerCase()
  switch (true) {
    case userAgent.indexOf('win') !== -1:
      return 'Windows'
    case userAgent.indexOf('mac') !== -1:
      return 'Mac'
    case userAgent.indexOf('linux') !== -1:
      return 'Linux'
    case userAgent.indexOf('x11') !== -1:
      return 'UNIX'
    default:
      return 'Unknown'
  }
}

export function getBrowserLanguage(): string {
  return navigator.language
}

export function getGeolocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export function getDeviceOrientation(): string {
  return window.screen.orientation.type
}

export function getDeviceMotion(): Promise<DeviceMotionEvent> {
  return new Promise((resolve, reject) => {
    window.addEventListener('devicemotion', resolve, { once: true })
    setTimeout(reject, 5000)
  })
}

export function getDeviceLight(): Promise<number> {
  return new Promise((resolve, reject) => {
    window.addEventListener(
      'devicelight',
      (evt: Event) => {
        resolve((evt as any).value)
      },
      { once: true }
    )
    setTimeout(reject, 5000)
  })
}

export function getDeviceProximity(): Promise<number> {
  return new Promise((resolve, reject) => {
    window.addEventListener(
      'deviceproximity',
      (evt: Event) => {
        resolve((evt as any).value)
      },
      { once: true }
    )
    setTimeout(reject, 5000)
  })
}

export function getWindowSize(): { width: number; height: number } {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export function getScreenSize(): { width: number; height: number } {
  return {
    width: window.screen.width,
    height: window.screen.height
  }
}

export function getTailwindBreakpoint(): string {
  const width = window.innerWidth
  switch (true) {
    case width < 640:
      return 'xs'
    case width < 768:
      return 'sm'
    case width < 1024:
      return 'md'
    case width < 1280:
      return 'lg'
    case width < 1536:
      return 'xl'
    default:
      return '2xl'
  }
}

export function getTailwindContainerBreakpoint(id: string): string {
  const width = getContainerSize(id).width
  switch (true) {
    case width < 320:
      return '@xs'
    case width < 384:
      return '@sm'
    case width < 448:
      return '@md'
    case width < 512:
      return '@lg'
    case width < 576:
      return '@xl'
    case width < 672:
      return '@2xl'
    case width < 768:
      return '@3xl'
    case width < 896:
      return '@4xl'
    case width < 1024:
      return '@5xl'
    case width < 1152:
      return '@6xl'
    case width < 1280:
      return '@7xl'
    default:
      return '@7xl'
  }
}

// get tailwind container breakpoint
export function getContainerBreakpoint(id: string): string {
  const width = getContainerSize(id).width
  switch (true) {
    case width < 640:


export function getScrollPosition(): { x: number; y: number } {
  return {
    x: window.scrollX,
    y: window.scrollY
  }
}

export function getMousePosition(e: MouseEvent) {
  return {
    x: e.pageX,
    y: e.pageY
  }
}

export function getRelativeMousePosition(id: string, e: MouseEvent) {
  const element = document.getElementById(id)
  if (!element) return { x: 0, y: 0 }
  const rect = element.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

export function getScreenOrientation(): string {
  return window.screen.orientation.type
}

export function getNetworkStatus(): string {
  return navigator.onLine ? 'Online' : 'Offline'
}

export function getBatteryStatus() {}

export function getMemoryStatus(): { totalJSHeapSize: number; usedJSHeapSize: number; jsHeapSizeLimit: number } {
  return {
    totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
    usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
    jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
  }
}

export function getPerformance(): Promise<PerformanceNavigationTiming> {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', () => {
      resolve(performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)
    })
    setTimeout(reject, 5000)
  })
}

export function getStorage(): { localStorage: number; sessionStorage: number } {
  return {
    localStorage: JSON.stringify(localStorage).length,
    sessionStorage: JSON.stringify(sessionStorage).length
  }
}

export function getCookie(name: string) {
  const value = '; ' + document.cookie
  const parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

export function getLocalStorage(name: string) {
  const item = localStorage.getItem(name)
  if (item) return JSON.parse(item)
}

export function getSessionStorage(name: string) {
  const item = sessionStorage.getItem(name)
  if (item) return JSON.parse(item)
}

export function getURLParameters(url: string, param?: string) {
  const params = (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a: any, v: any) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {})

  if (param) {
    return params[param] || null
  }

  return params
}

export function getURLHashParameters() {
  return getURLParameters(window.location.hash)
}

export function getURLSearchParameters() {
  return getURLParameters(window.location.search)
}

export function getURL() {
  return window.location.href
}

export function getDomain() {
  return window.location.hostname
}

export function getIP() {
  return window.location.host
}

export function getProtocol() {
  return window.location.protocol
}

export function getPort() {
  return window.location.port
}

export function getReferrer() {
  return document.referrer
}