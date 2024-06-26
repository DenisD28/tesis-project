import ButtonFormProps from "./ButtonFormType"

export default function ButtonForm({ dataButton }: { dataButton: ButtonFormProps }) {
  return (
    <div className="flex justify-center items-center flex-col p-2 mt-4">
      <button onClick={dataButton.fnClick} className={`w-full h-14 rounded-md border-2 border-[#ddd] px-4 font-medium bg-${dataButton.color}-600 text-white`} type={dataButton.type}>{dataButton.title}</button>
    </div>
  )
}