export class Subject {
    subject_name: string;
    date: string[];
    options: string[];
    general_options: string[]
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
    }

}