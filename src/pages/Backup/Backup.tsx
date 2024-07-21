import SectionComponent from "../../Components/Section/SectionComponent.tsx";
import BackupComponent from "../../Components/Backup/BackupComponents.tsx";
import ModalLoader from "../../Components/Modal/ModalLoader.tsx";
import useBackup from "../../hooks/Backup/useBackup.tsx";

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
        downloadBackup
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
                <div className={"w-full grid grid-cols-2 gap-2"}>
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