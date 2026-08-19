/**
 * Vitest setup: jsdom does not implement ResizeObserver, which PrimeNG
 * components (e.g. p-tablist) rely on during ngAfterViewInit.
 */
class ResizeObserverStub implements ResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

globalThis.ResizeObserver ??= ResizeObserverStub;
