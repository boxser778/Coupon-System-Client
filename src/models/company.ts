import { Coupon } from './coupon';

export class Company {
  public constructor(public id?: number, public password?: string, public email?: string, public comp_Name?: string, public coupons?: Coupon[]) {}
}
