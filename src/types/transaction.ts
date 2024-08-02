export interface Transaction {
  id: string;
  type: string;
  category?: string;
  sum: number;
  date: Date;
  comment: string;
}
