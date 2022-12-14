import { LightningElement, wire, api} from 'lwc';
import allEnrollments from '@salesforce/apex/GetAllClassEnrollment.gerEnrollments'

const columns = [
    { label: 'Subject', fieldName: 'name' },
    { label: 'Grade', fieldName: 'grade'}
];


export default class MyNewComponent extends LightningElement {
    @api recordId;
    columns = columns;
    @wire(allEnrollments, {recordId: '$recordId'}) dataEnrollments;
}