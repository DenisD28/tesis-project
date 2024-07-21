import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import BackupService from "../../api/services/Backup.service.ts";

export default function useBackup() {
    const navigator = useNavigate()
    const [Backups, setBackups] = useState<[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [Finish, setFinish] = useState<boolean>(false)
    const [TitleModal, setTitleModal] = useState<string>("")
    const [MessageModal, setMessageModal] = useState<string>("")
    const [fnFinish, setFnFinish] = useState<any>(() => () => {})

    function getBackups() {
        BackupService.getBackups()
            .then(response => {
                setBackups(response.backups)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getBackups()
    }, [])

    function restoreBackup(request: any) {
        setTitleModal("Restaurando copia de seguridad")
        setMessageModal("Por favor espere, estamos restaurando la copia de seguridad")
        setFinish(false)
        setFnFinish(() => () => {
            navigator("/")
        })
        setShowModal(true)
        BackupService.import(request)
            .then(() => {
                setFinish(true)
                setTitleModal("Copia de seguridad restaurada")
                setMessageModal("La copia de seguridad ha sido restaurada con éxito")
            })
            .catch(err => {
                setFinish(true)
                setTitleModal("Error al restaurar copia de seguridad")
                setMessageModal("Ha ocurrido un error al restaurar la copia de seguridad")
                console.error(err)
            })
    }

    function deleteBackup(request: any) {
        setTitleModal("Eliminando copia de seguridad")
        setMessageModal("Por favor espere, estamos eliminando la copia de seguridad")
        setFinish(false)
        setFnFinish(() => () => {
            getBackups()
            setShowModal(false)
        })
        setShowModal(true)
        BackupService.delete(request)
            .then(() => {
                setFinish(true)
                setTitleModal("Copia de seguridad eliminada")
                setMessageModal("La copia de seguridad ha sido eliminada con éxito")
            })
            .catch(err => {
                setFinish(true)
                setTitleModal("Error al eliminar copia de seguridad")
                setMessageModal("Ha ocurrido un error al eliminar la copia de seguridad")
                console.error(err)
            })
    }

    function downloadBackup(request: any) {
        BackupService.download(request)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return {
        Backups,
        showModal,
        Finish,
        TitleModal,
        MessageModal,
        fnFinish,
        restoreBackup,
        deleteBackup,
        downloadBackup,
        setShowModal
    }
}