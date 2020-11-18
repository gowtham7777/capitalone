import { of } from 'rxjs';

export class StepsServiceStub {
  getUserList() {
    return of({
      data: [
        {
        "id": "d11b10ba-1cd8-48f8-93eb-454b716fd5a0",
        "stepNumber": "2",
        "versionContent": [
        {
        "title": "Request A Delivery",
        "body": "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
        "effectiveDate": "2019-05-04T03:04:05.000Z"
        },
        {
        "title": "We Deliver",
        "body": "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
        "effectiveDate": "2019-04-04T05:04:05.000Z"
        }
        ]
        }],
    });
  }
}