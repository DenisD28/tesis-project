import TextareaFormProps from "./TextareaFormType"

export default function TextareaForm({dataTextarea}: {dataTextarea: TextareaFormProps}) {
  return (
    <div className="flex justify-center items-center flex-col p-2">
        <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor={dataTextarea.name}>{dataTextarea.title}</label>
        <textarea value={dataTextarea.value} onChange={(e) => dataTextarea.fnChange(e.currentTarget.value)} className="w-full h-36 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" name={dataTextarea.name} id={dataTextarea.name} placeholder={dataTextarea.placeholder}></textarea>
    </div>
  )
}
