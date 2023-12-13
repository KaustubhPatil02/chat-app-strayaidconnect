import getCurr_user from "@/app/actions_users/getCurrent_user";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooterComponent from "./MobileFooterComponent";

async function Sidebar({children}:{
    children: React.ReactNode;
}){
    const curr_user = await getCurr_user();
    return(
        <div className="h-full">
            <DesktopSidebar currentUser = {curr_user}/>
            <MobileFooterComponent />
            <main className="lg:pl-20 h-full">
             {children}
            </main>
        </div>
    )
}
export default Sidebar;
