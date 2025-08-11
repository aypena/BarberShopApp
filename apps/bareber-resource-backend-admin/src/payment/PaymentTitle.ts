import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "metodoPago";

export const PaymentTitle = (record: TPayment): string => {
  return record.metodoPago?.toString() || String(record.id);
};
