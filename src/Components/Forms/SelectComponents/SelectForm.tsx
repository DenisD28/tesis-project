import SelectFormProps from "./SelectFormType"

export default function SelectForm({dataSelect}: {dataSelect: SelectFormProps}) {
  return (
    <div className="flex justify-center items-center flex-col p-2">
        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor={dataSelect.name}>{dataSelect.title}</label>
        <select onChange={(e) => dataSelect.fnChange(e.currentTarget.value)} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555] transition-all" name={dataSelect.name} id={dataSelect.name}>
            <option value="">{dataSelect.placeholder}</option>
            {dataSelect.options.map((option, index) => {
                return <option key={index} value={option.valor}>{option.texto}</option>
            }
            )}
        </select>
    </div>
  )
}
