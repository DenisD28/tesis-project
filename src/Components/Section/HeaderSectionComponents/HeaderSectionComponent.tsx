import TitleSectionComponent from "../TitleComponents/TitleSectionComponent.tsx";
import ButtonSectionComponent from "../../Forms/ButtonComponents/ButtonSection/ButtonSectionComponent.tsx";

export default function HeaderSectionComponent({ title, url, showButtonAdd }: { title: string, url: string, showButtonAdd: boolean}) {
    return (
        <div className="w-full flex justify-between items-center">
            <TitleSectionComponent title={title} />
            {
                showButtonAdd &&
                <div className="flex space-x-2">
                    <ButtonSectionComponent title={title} url={url} />
                </div>
            }
        </div>
    )
}