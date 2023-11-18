import React from "react";

interface FileInputComponentProps {
  label: string,
  name: string,
  isRequired: boolean,
  isDisabled: boolean,
  fnChange: Function,
  url_image: string | undefined
}

export default function FileInputComponent({ label, name, isRequired, isDisabled, fnChange, url_image }: FileInputComponentProps) {
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      fnChange(e.target.files[0]);
    }
  };
  return (
    <div className='w-full col-span-full h-auto grid lg:grid-cols-2 gap-2 px-2'>
      <section className="flex justify-start items-center gap-8">
        {
          url_image !== "" && url_image !== undefined && url_image !== null
            ? <img src={url_image} alt="Logo" className="w-40 h-40 object-cover" />
            : <img src="/sin_imagen.png" alt="Logo" className="w-40 h-40 object-cover" />
        }
        <span className="flex justify-center items-start flex-col">
          <p className='text-zinc-500 font-medium text-sm'>Tamaño recomendado: 200x200</p>
          <p className='text-zinc-500 font-medium text-sm'>Formatos permitidos: JPG, PNG, SVG</p>
          <p className='text-zinc-500 font-medium text-sm'>Tamaño máximo: 2MB</p>
        </span>
      </section>
      <section>
        <label htmlFor={name} className='w-full h-10 flex justify-start items-center text-zinc-500 font-medium text-sm pl-2'>{label}</label>
        <input type="file" name={name} id={name} className="cursor-pointer" accept='.jpg, .jpeg, .png, .svg' required={isRequired} disabled={isDisabled} onChange={handleLogoChange} />
      </section>
      <section>
      </section>
    </div>
  )
}
