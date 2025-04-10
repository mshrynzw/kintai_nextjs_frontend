export type StampType = 'clock_in' | 'break_in' | 'break_out' | 'clock_out';

export interface Stamp {
  id: number;
  user_id: number;
  type: StampType;
  stamped_at: string;
  created_at: string;
  updated_at: string;
}
