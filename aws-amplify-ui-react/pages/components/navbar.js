import Link from "next/link";
import "../../configureAmplify";
import { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";

const Navbar = () => {
  const [signedUser, setSignedUser] = useState(false);
  useEffect(() => {
    authListener();
  }, []);

  async function authListener() {
    Hub.listen("auth", (data) => {
      console.log({...data})
      switch (data.payload.event) {
        case "signIn":
          return setSignedUser(true);
        case "signOut":
          return setSignedUser(false);
      }
    });
    try {
      const res = await Auth.currentAuthenticatedUser();
      console.log(res)
      setSignedUser(true);
    } catch (err) { }
  }

  return (
    <nav className='flex justify-center py-2 space-x-4 bg-green-500 border-gray-300'>
      {[
        ["Home", "/"],
        ["Create Post", "/create-post"],
        ["Profile", "/profile"],
      ].map(([title, url], index) => (
        <Link href={url} key={index}>
          <a className='rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>
            {title}
          </a>
        </Link>
      ))}

      {signedUser && (
        <Link href='/my-posts'>
          <a className='rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>
            My Post
          </a>
        </Link>
      )}
    </nav>
  );
};
export default Navbar;