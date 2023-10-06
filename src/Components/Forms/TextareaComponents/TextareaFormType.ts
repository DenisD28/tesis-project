export default interface TextareaFormProps {
    'title': string,
    'name': string,
    'placeholder': string,
    'value': string,
    'fnChange': React.Dispatch<React.SetStateAction<string>>,
}