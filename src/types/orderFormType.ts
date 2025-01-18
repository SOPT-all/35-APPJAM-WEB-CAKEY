export type OrderFormData = {
  user: string;
  pickup: string;
  size: string;
  flavor: string;
};

export type OrderFormField = {
  id: keyof OrderFormData;
  label: string;
  placeholder: string;
};
