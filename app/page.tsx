import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Saas Ai</h1>
      <Link href="/sign-in">
        <Button>SignIn</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
    </main>
  );
};

export default Home;
