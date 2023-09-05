export type Range = {
  min: number;
  max: number;
  name: RangeType;
};

export enum RangeType {
  LOW,
  MEDIUM,
  HIGH,
  CRITICAL,
}
