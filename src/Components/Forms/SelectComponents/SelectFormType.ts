export default interface SelectFormProps {
    'title': string,
    'name': string,
    'placeholder': string,
    'options': string[],
    'fnChange': React.Dispatch<React.SetStateAction<string>>,
}