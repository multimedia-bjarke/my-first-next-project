export default async function UserDetail({ params }) {
  const { id } = await params;
  console.log("User ID:", id);

  return (
    <div className="page">
      <h1 className="font-bold flex justify-center text-2xl">
        User Detail page for user with ID: {id}
      </h1>
    </div>
  );
}
