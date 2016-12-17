export class Survey {
    constructor(
    public student_name: string,
    public legajo: string,
    public token: string,
    public selected_subjects: SelectedSubject[],
    public school_year: string) {  }
}

export class SelectedSubject {
    constructor(
        public subject: string,
        public status: string
    ){}
}
