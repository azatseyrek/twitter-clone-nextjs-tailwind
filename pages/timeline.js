import {useRouter} from 'next/router';
import Search from '../components/shared/Search';
import Navbar from '../components/shared/Navbar';
import supabase from '../lib/supabase';
import Trends from '../components/shared/Trends';

const Timeline = () => {
  const router = useRouter();

  const user = supabase.auth.user();
  console.log(user);
  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-12">
      <div className="col-span-2 pr-4">
        <Navbar />
      </div>
      <div className="col-span-6 border-l border-r">orta</div>
      <div className="col-span-4 space-y-4 py-4 pl-4">
        <Search />
        <Trends />
        {/* <WhoToFollow/> */}
      </div>
    </div>
  );
};

export default Timeline;
