import KIcons from "../../constants/components/icons";
import BottomDialog from "../dialogs/bottom_dialog";

export default function NavigationMobDialog({ children, ariaLabel }: {
    children: React.ReactNode;
    ariaLabel: string
}): Component {
    return <BottomDialog
        buttonClassName="tablet:hidden flex"
        buttonIcon={<div className="bg-black dark:bg-gray-400 p-3 rounded-full">
            < KIcons.menu className="cursor-pointer text-white dark:text-black" />
        </div>}
        dialogClassName="h-max flex-col items-start self-end pb-5 pl-5 space-y-5 pt-4"
        arriaLabel={ariaLabel}>
        {children}
    </BottomDialog>
}