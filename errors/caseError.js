class caseError extends Error {
    constructor(name, message, statuscode){
        super(name, message, statuscode);

        this.name = name;
        this.message = message;
        this.statuscode = statuscode;
       


    }

    
}


export default caseError;