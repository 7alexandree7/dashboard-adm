import DashboardCard from "./Components/DashboardCard/DashboardCard";
import { Folder, MessageCircle, Newspaper, Users } from 'lucide-react'
import PostsTable from "./Components/Posts/PostsTable";


export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title="Posts" icon={<Newspaper className="text-slate-500" size={60} />} count={100} />
        <DashboardCard title="Categories" icon={<Folder className="text-slate-500" size={60} />} count={12} />
        <DashboardCard title="Users" icon={<Users className="text-slate-500" size={60} />} count={750} />
        <DashboardCard title="Comments" icon={<MessageCircle className="text-slate-500" size={60} />} count={1200} />
      </div>
      <PostsTable limit={5} title="Latest Posts" />
    </>
  );
}
