export interface APIResponse {
  value: Value[];
}

export interface Value {
  PartitionKey: string;
  RowKey: string;
  Timestamp: Date;
  title: string;
  content: string;
}
