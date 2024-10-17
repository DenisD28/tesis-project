import {AiOutlineCloudDownload} from "react-icons/ai";
import {VscTrash} from "react-icons/vsc";
import {TfiReload} from "react-icons/tfi";
import GetDateHelper from "../../helpers/GetDate.helper.ts";

interface BackupComponentProps {
    backup: {
        id: number,
        name: string,
        size: string,
        created_at: string
    },
    fnRestoreBackup: (request: any) => void,
    fnDeleteBackup: (request: any) => void,
    fnDownloadBackup: (request: any) => void
}

export default function BackupComponent({backup, fnDeleteBackup, fnRestoreBackup, fnDownloadBackup}: BackupComponentProps) {
    return (
        <div className={"w-full h-auto p-4 flex flex-col justify-start items-start gap-2 border-[1px] rounded-md text-sm text-zinc-500 font-medium text-muted-foreground"}>
            <h3 className={"text-black text-md"}>{backup.name}</h3>
            <h3>{backup.size} | {GetDateHelper.getDayMonthYear(backup.created_at)}</h3>
            <div className={"w-full flex flex-col md:flex-row justify-end gap-2"}>
                <button
                    onClick={() => fnDownloadBackup({backup_id: backup.id})}
                    className="bg-green-600 hover:bg-green-700 flex justify-start gap-1 items-center text-white font-bold py-2 px-4 rounded">
                    <AiOutlineCloudDownload className={"w-5 h-5 flex justify-start items-center"}/>
                    Descargar
                </button>
                <button
                    onClick={() => fnDeleteBackup({backup_id: backup.id})}
                    className="bg-red-600 hover:bg-red-700 text-white flex justify-start gap-1 items-center font-bold py-2 px-4 rounded">
                    <VscTrash className={"w-5 h-5 flex justify-start items-center"}/>
                    Eliminar
                </button>
                <button
                    onClick={() => fnRestoreBackup({backup_id: backup.id})}
                    className="bg-[#121212] hover:bg-zinc-800 text-white flex justify-start gap-2 items-center font-bold py-2 px-4 rounded">
                    <TfiReload className={"w-4 h-4 flex justify-start items-center"}/>
                    Restaurar
                </button>
            </div>
        </div>
    )
}