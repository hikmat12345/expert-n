export  type InputProps ={
    label:string,
    primary?:Boolean,
    type?:any,
    placeholder?:string,
    value ?:string ,
    getValue?:(str: string) => any,
    error?: (str: any) => any,
    errorMessage?:string,
    isRequired?:boolean , 
    rest?:any
 }
 export type CountryPhoneProps = {
   
    primary:boolean ,
    shadowBoxProps?:string,
    isRequired?:boolean,
    label?:string,
    getValue?: void,
    value?:string,
    disabled?:string,
    countryCode?:string, 
 }

 export type VerificationInput ={
   justify?:string,
   align?:string,
   className?:string, 
   type?:string,
   fields?:number,
   inputStyle?:any,
   getValue?:(e:any) => any, 
  }