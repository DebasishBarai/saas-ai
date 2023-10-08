import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Home = () => {
  const user = auth();

  if (user) {
    redirect('/dashboard');
  }
  return (
    <main>
      <h1>Saas Ai</h1>
      <Link href='/sign-in'>
        <Button>SignIn</Button>
      </Link>
      <Link href='/sign-up'>
        <Button>Register</Button>
      </Link>
    </main>
  );
};

export default Home;
