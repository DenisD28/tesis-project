import ApiServices from "../ApiServices.ts";

class BackupService{
    public getEndpoints = {
        getBackups: function () : Promise<any> {
            return ApiServices.get<[]>('/backup/list');
        },
        import: function (request: any) {
            return ApiServices.post<[]>('/backup/import', request);
        },
        delete: function (request: any) {
            return ApiServices.post<[]>('/backup/delete', request);
        },
        download: function (request: any) {
            return ApiServices.downloadFile('/backup/download', request, 'backup.sql', 'post');
        }
    }
}

const backupService = new BackupService();

export default backupService.getEndpoints;