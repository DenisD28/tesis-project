import SectionComponent from "../../Components/Section/SectionComponent.tsx";
import BackupComponent from "../../Components/Backup/BackupComponents.tsx";
import ModalLoader from "../../Components/Modal/ModalLoader.tsx";
import useBackup from "../../hooks/Backup/useBackup.tsx";
import TitleSectionComponent from "../../Components/Section/TitleComponents/TitleSectionComponent.tsx";

export default function Backup() {
    const {
        Backups,
        showModal,
        TitleModal,
        MessageModal,
        Finish,
        fnFinish,
        restoreBackup,
        deleteBackup,
        downloadBackup,
        exportBackup
    } = useBackup()

    return (
        <>
            <ModalLoader
                title={TitleModal}
                message={MessageModal}
                icon={""}
                show={showModal}
                finish={Finish}
                fnFinish={fnFinish}
            />
            <SectionComponent
                showHeader={false}
            >
                <span className={"flex flex-col md:flex-row justify-between items-center"}>
                    <TitleSectionComponent title={"Copias de seguridad"} />
                    <button onClick={() => {exportBackup()}} className={"md:w-auto w-full h-12 float-right my-4 bg-[#007bff] hover:bg-blue-600 gap-2 text-white font-bold py-2 px-4 rounded flex justify-start items-center"}>
                        Generar copia de seguridad
                    </button>
                </span>
                <div className={"w-full grid grid-cols-1 xl:grid-cols-2 gap-2"}>
                    {
                        Backups.map((backup: any) => (
                            <BackupComponent
                                key={backup.id}
                                backup={backup}
                                fnRestoreBackup={restoreBackup}
                                fnDeleteBackup={deleteBackup}
                                fnDownloadBackup={downloadBackup}
                            />
                        ))
                    }
                </div>
            </SectionComponent>
        </>
    )
}