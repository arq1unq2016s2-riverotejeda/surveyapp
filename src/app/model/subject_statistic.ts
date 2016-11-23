/**
 * Created by mar on 23/11/16.
 */

export class SubjectStatistic {

  status: string;

  constructor(public subject: string,
              public comision: string,
              public occupation: number,
              public percentage: number){

          if (percentage > 90) { this.status = "warning"}
              else {this.status = "success"};
  }


}




