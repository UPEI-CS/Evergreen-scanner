export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const bookId = (await params).bookId;
  return <div>{bookId}</div>;
}

