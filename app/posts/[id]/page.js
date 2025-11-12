export default async function PostDetail({ params }) {
  const { id } = params;
  console.log("Post ID:", id);

  return (
    <div className="page">
      <h1 className="font-bold flex justify-center text-2xl">
        Post Detail page for ID: {id}
      </h1>
    </div>
  );
}
