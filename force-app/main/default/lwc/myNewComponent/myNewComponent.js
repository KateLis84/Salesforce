import { LightningElement } from 'lwc';
import STUDENT_OBJECT from '@salesforce/schema/Student__c';
import STUDENT_NAME from '@salesforce/schema/Student__c.Name__c';
import STUDENT_SCHOLARSHIP from '@salesforce/schema/Student__c.Scholarship__c';

export default class MyNewComponent extends LightningElement {
    objectApiName=STUDENT_OBJECT;
    fields = [STUDENT_NAME, STUDENT_SCHOLARSHIP];

    handleSuccess(event){
        const toastEvent=new ShowToastEvent({
            title: 'Student Created!', 
            message: "Student created: " + event.details.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
        
    }
}