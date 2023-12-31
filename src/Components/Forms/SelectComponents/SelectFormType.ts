export default interface SelectFormProps {
    'title': string,
    'name': string,
    'placeholder': string,
    'options': Array<options>,
    'fnChange': React.Dispatch<React.SetStateAction<string>>,
    'isRequerid': boolean | undefined,
    'value'?: string | number | undefined,
}

interface options {
    'valor': string | number,
    'texto': string,
}