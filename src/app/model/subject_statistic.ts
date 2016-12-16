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
c1: ComisionData;
c2: ComisionData;
c3: ComisionData;
c4: ComisionData;


  constructor(public subject: string,
              public noCursan: number,
              public yaCursaron: number,
              public horario: number){
    this.c1 = new ComisionData("C1", 0, '-');
    this.c2 = new ComisionData("C2", 0, '-');
    this.c3 = new ComisionData("C3", 0, '-');
    this.c4 = new ComisionData("C4", 0, '-');
              }
}

export class ComisionData{

  status: string;
  constructor(public comision: string, public percentage: number, public occupation: any){
    if (percentage > 90) { this.status = "warning"}
    else {this.status = "success"};
  }

}
