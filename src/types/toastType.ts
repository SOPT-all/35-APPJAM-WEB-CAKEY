export type ToastType = 'like' | 'save' | 'error' | 'check';

export interface ToastState {
  icon: ToastType;
  message: string;
  isButton?: boolean;
}
