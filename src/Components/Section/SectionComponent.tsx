import HeaderSectionComponent from "./HeaderSectionComponents/HeaderSectionComponent.tsx";

interface SectionComponentProps {
    children: React.ReactNode;
    title?: string;
    url?: string;
    showButtonAdd?: boolean;
    showHeader?: boolean;
}

export default function SectionComponent({ children, title, url, showButtonAdd, showHeader }: SectionComponentProps) {
    return (
        <div className="my-4 mx-auto w-full max-w-[80rem] flex-col flex justify-center items-start">
            {
                showHeader !== false && (
                    <HeaderSectionComponent title={title ?? ""} url={url ?? ""} showButtonAdd={showButtonAdd ?? true}/>
                )
            }
            <div className="py-6 w-full overflow-x-auto scroll-style">
                {children}
            </div>
        </div>
    )
}