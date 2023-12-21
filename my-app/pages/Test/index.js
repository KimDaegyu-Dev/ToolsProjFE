// import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';
import { TestComponent } from '../../components/TestComponent';

export default function Home() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <TestComponent />
    </div>
  );
}
