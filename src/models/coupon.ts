
export class Coupon {
  public constructor(
    public id?: number,
    public title?: string,
    public amount?: number,
    public startDate?: string,
    public endDate?: string,
    public msg?: string,
    public price?: number,
    public type?: string
  ) {}
}
