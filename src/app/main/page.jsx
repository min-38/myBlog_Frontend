import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import License from "./sections/License";
import WorkExp from "./sections/WorkExp";
// import Activity from "./sections/Activity";

export default function MainPage() {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="items-center ">
                <div className="space-y-10">
                    {/* <Profile /> */}
                    <ul>
                        <li><Skills /></li>
                        {/* <li><License /></li> */}
                        {/* <li><WorkExp /></li> */}
                        {/* <li><Activity /></li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
