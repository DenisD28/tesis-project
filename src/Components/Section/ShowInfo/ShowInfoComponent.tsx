import LoadingComponent from "../../Loading/LoadingComponent.tsx";
import TableEmptyComponent from "../../Message/TableEmptyComponent.tsx";
import { Tablev2 } from "../../Tablev2/Tablev2.tsx";
import PaginationComponent from "../../Pagination/PaginationComponent.tsx";
import { HeadType } from "../../Tablev2/types/HeadType.ts";
import { SetStateAction } from "react";

interface ShowInfoComponentProps {
    headers: HeadType[];
    data: [];
    setData: React.Dispatch<React.SetStateAction<object>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
    loading: boolean;
}

export default function ShowInfoComponent({ headers, data, currentPage, totalPages, loading, setCurrentPage, setData, setIsOpen }: ShowInfoComponentProps) {
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const vermas = (dat: SetStateAction<object>) => {
        setData(dat)
        setIsOpen(true)
    }

    return (
        <>
            {loading
                ? <LoadingComponent />
                : (
                    data && data.length === 0
                        ? (
                            <TableEmptyComponent />
                        ) : (
                            <>
                                <Tablev2
                                    headers={headers}
                                    data={data}
                                    fnClick={vermas}
                                />
                                <PaginationComponent
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </>
                        )
                )
            }
        </>
    )
}