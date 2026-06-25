/** Базовый контракт для всех 3D-сцен CLM */
export interface Scene3DOptions {
  reducedMotion?: boolean
  lowPower?: boolean
}

export interface Scene3D {
  init(): void
  play(): void
  pause(): void
  destroy(): void
  trigger(actionName: string): void
}

export type SceneFactory<T extends Scene3DOptions = Scene3DOptions> = (
  container: HTMLElement,
  options?: T,
) => Scene3D
