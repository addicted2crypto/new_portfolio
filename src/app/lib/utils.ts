//helper function to not need to repeat for email and message field
export const validateEmailString = (value: unknown, maxNumber: number) => {
    if (!value || typeof value !== 'string' || value.length > maxNumber) {
        return false;
    }

    return true;
};

export const getErrorMessageHelper = (error: unknown): string => {
    let message: string;
     if (error instanceof Error){
         message = error.message;
         
         } else if(error && typeof error === 'object' && 'message' in error) {
             message = String(error);
         } else if (typeof error === 'string'){
             message = error;
         } else {
             message = 'Something went wrong, please try again'
         }
      
      return message;
 };
 