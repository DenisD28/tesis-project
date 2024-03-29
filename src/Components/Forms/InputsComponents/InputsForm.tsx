import InputsFormProps from "./InputsFormType"

export default function InputsForm({ DataInputs }: { DataInputs: InputsFormProps }) {
  return (
    <div className="flex justify-center items-center flex-col p-2">
      <label className="w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2" htmlFor={DataInputs.name}>{DataInputs.title}{DataInputs.isRequire ? " *" : ""}</label>
      <input onChange={(e) => { DataInputs.fnChange(e.currentTarget.value) }} className="w-full h-10 rounded border-2 border-[#ddd] px-4 font-medium bg-slate-100 text-[#555]" value={DataInputs.value} type={DataInputs.type} name={DataInputs.name} placeholder={DataInputs.placeholder} min={0} required={DataInputs.isRequire} readOnly={DataInputs.isDisabled} />
    </div>
  )
}
