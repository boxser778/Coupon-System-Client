export class Coupon {
    public constructor(
      public id?: number,
      public amount?: number,
      public endDate?: number,
      public msg?: string,
      public price?: number,
      public startDate?: number,
      public title?: string,
      public type?: string
    ) {}
  }
