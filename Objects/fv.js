// Required – Specifies that a form field needs to be filled before submission.
//          The required attribute is supported by text, search, url, tel, email,
//          password, date, month, week, time, datetime-local, number, checkbox,
//          radio, and file <input> types, along with the <select> and <textarea>
//          form control elements.
//
//
// Minlength and Maxlength – Specifies the minimum/maximum length of text data.
//          The minlength attribute defines the minimum number of characters
//          (as UTF-16 code units) the user can enter into an <input> or <textarea>.
//          This must be an integer value of 0 or higher. If no minlength is specified,
//          or an invalid value is specified, the input has no minimum length.
//          
//          The minlength value must be less than or equal to the value of maxlength; 
//          otherwise, the value will never be valid, as it is impossible to meet both criteria.
//          
//          The maxlength attribute defines the maximum number of characters 
//          (as UTF-16 code units) the user can enter into an <input> or <textarea>. 
//          This must be an integer value of 0 or higher.
//
//
// Min and Max – Specifies the minimum/maximum values of numerical input types.
//          min attribute defines the minimum value that is acceptable and valid
//          for the input containing the attribute.If the value of the element is
//          less than this, the element fails constraint validation. This value must
//          be less than or equal to the value of the max attribute.
//
//          max attribute defines the maximum value that is acceptable and valid for 
//          the input containing the attribute. If the value of the element is greater
//          than this, the element fails constraint validation. This value must be greater
//          than or equal to the value of the min attribute.
//
//
// Type – Specifies that the data needs to be text, a number, an email address, 
// or some other specific preset data type.
//
//
// Pattern – Specifies a regular expression that defines a pattern the entered data needs to follow.
//          The pattern attribute specifies a regular expression that the form control's value should match. 
//          If a non-null value does not conform to the constraints set by the pattern value, the ValidityState 
//          object's read-only patternMismatch property will be true, and the input will be rejected with an 
//          error message.