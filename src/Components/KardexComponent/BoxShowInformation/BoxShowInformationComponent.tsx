export default function BoxShowInformationComponent({title, value}: {title: string, value: string}) {
    return (
        <div className={"flex flex-col justify-start items-start"}>
            <p className="text-md font-medium text-gray-500">{title}</p>
            <p className="text-lg font-bold">{value}</p>
        </div>
    )
}