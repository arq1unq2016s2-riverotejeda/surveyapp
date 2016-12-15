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




export class Statistic {

  constructor(public subject: string,
              public c1: ComisionData,
              public c2: ComisionData,
              public c3: ComisionData,
              public c4: ComisionData,
              public noCursan: number,
              public yaCursaron: number,
              public horario: number){}
}

export class ComisionData{

  status: string;
  constructor(public comision: string, public percentage: number, public occupation: number){
    if (percentage > 90) { this.status = "warning"}
    else {this.status = "success"};
  }

}

