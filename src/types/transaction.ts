export interface Transaction {
  type: string;
  category?: string;
  sum: number;
  date: Date;
  comment: string;
}
