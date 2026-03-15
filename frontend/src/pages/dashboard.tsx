import RecentNotes from "../components/RecentNotes";
import Hero from "../components/Hero";
import ResourcesAndQueue from "../components/ResourcesAndQueue";
import AiPanel from "../components/AiPanel";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import StatsRow from "../components/StatsRow";

function Dashboard() {
  return (
    <div className="bg-bg">
      <div className="flex h-screen">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto gap-8 p-12">
          <div>
            <Topbar />
          </div>
          <Hero />
          <StatsRow />
          <RecentNotes />
          <AiPanel />
          <ResourcesAndQueue />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
