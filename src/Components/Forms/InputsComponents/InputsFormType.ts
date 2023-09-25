export default interface InputsFormProps {
    'title': string,
    'type': string,
    'name': string,
    'placeholder': string,
    'fnChange': React.Dispatch<React.SetStateAction<string>>,
}