import Link from "next/link";

const firstPosts = () => {
  return (
    <div>
      <h1>最初の投稿</h1>
      <h2><Link href="/">トップに戻る</Link></h2>
    </div>
  );
};

export default firstPosts;
