export default interface InputsFormProps {
    'title': string,
    'type': string,
    'name': string,
    'placeholder': string,
    'value': string | number,
    'fnChange': React.Dispatch<React.SetStateAction<string>>,
    'isRequire': boolean | undefined,
}