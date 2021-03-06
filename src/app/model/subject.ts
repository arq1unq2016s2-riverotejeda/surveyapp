import {Survey} from "./survey";

export class SurveyModel {
  student_name: string;
  legajo: string;
  options: Subject[];
  completed_survey: Survey
}

export class Subject {
    subject_name: string;
    date: string[];
    options: string[];
    general_options: string[];
    group: string
}


export class SubjectStatusTranslator{
    private static NOT_YET = "Aún no la voy a cursar";
    private static APPROVED = "Ya la aprobé";
    private static BAD_SCHEDULE =  "No puedo cursar en ese horario";

    public static subjectStatusMessage = {
        not_yet: SubjectStatusTranslator.NOT_YET,
        approved: SubjectStatusTranslator.APPROVED,
        bad_schedule: SubjectStatusTranslator.BAD_SCHEDULE,
    };

    public static getSubjectStatusCodeByMessage(message: string): string{
        if(message == SubjectStatusTranslator.APPROVED){
            return "approved";
        }

        if(message == SubjectStatusTranslator.BAD_SCHEDULE){
            return "bad_schedule";
        }

        if(message == SubjectStatusTranslator.NOT_YET){
            return "not_yet";
        }
        else return message;
    }

    public static getStatusMessage(message:string):string{
      if(message == "approved"){
        return SubjectStatusTranslator.APPROVED;
      }

      if(message == "bad_schedule"){
        return SubjectStatusTranslator.BAD_SCHEDULE;
      }

      if(message == "not_yet"){
        return SubjectStatusTranslator.NOT_YET;
      }
      else return message;
    }

}
