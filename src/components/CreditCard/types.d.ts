export type CreditCardType = React.FC<{
  card: 'visa' | 'mastercard';
  digits: number | string;
  onChecked: () => void;
  isChecked: boolean;
}>;
