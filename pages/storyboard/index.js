import Link from "next/link";
import StoryBoard from "../../comps/components/StoryBoard";

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   return {
//     props: { data: data },
//   };
// };

const Main = () => {
  return (
    <>
      <StoryBoard />
    </>
  );
};

export default Main;
