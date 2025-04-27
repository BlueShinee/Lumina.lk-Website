import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const user = await currentUser();
if (!user) {
      redirect('/signin')
  }
  return (
    <div>
      <h1>Welcome to the LMS</h1>
      <p>Start Learning Now!</p>
    </div>
  );
};

export default HomePage;
