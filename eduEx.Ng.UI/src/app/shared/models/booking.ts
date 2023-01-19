export class Booking{
  id!:string;
  courseId!:string;
  userId!:string;
  date!:Date;
  sessionLength!:number;
  bookingDate!:Date;
  priceByHour!:number;
  priceForSession!:number;
  siteFees!:number;
  amountPaid!:number;
  state!:boolean; // confirmed || waiting...
  //isRefund!:boolean;
  //cancelDate!:Date;
  //refundPaid!:number;
  //transactionId!:string;
}
