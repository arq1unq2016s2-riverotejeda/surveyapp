/**
 * Created by mar on 23/11/16.
 */

export class SubjectStatistic {

  status: string;

  constructor(public subject: string,
    public comision: string,
    public occupation: number,
    public percentage: number) {

    if (percentage > 90) { this.status = "warning" }
    else { this.status = "success" };
  }


}




export class Statistic {


  constructor(public subject: string,
    public not_yet: number,
    public approved: number,
    public bad_schedule: number,
    public c1:ComisionData,
    public c2:ComisionData,
    public c3:ComisionData,
    public c4:ComisionData) {
  }
}

export class ComisionData {

  status: string;
  constructor(public comision: string, public occupation: any, public quota: any) {
    status = "success";
    if ((quota - occupation) < 3) { this.status = "warning" }
    else { this.status = "success" };
    if (quota == 0){
      this.occupation= "-";
      this.quota= "-";
    }
  //  console.log(comision+'  '+status);
  }

}
