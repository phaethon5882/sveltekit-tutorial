import IGuide from '../../types/guide.interface';

export async function get({ params }: { params: Record<string, any> }) {
  const guides: IGuide[] = [
    { id: 1, title: 'some title', body: 'some body' },
    { id: 2, title: 'some title', body: 'some body' },
    { id: 3, title: 'some title', body: 'some body' },
    { id: 4, title: 'some title', body: 'some body' },
    { id: 5, title: 'some title', body: 'some body' },
  ];

  const guide = guides.find(({ id }) => id === +params.id);

  if (guide) {
    return {
      status: 200,
      body: { guide },
    };
  }

  return {
    status: 404,
  };
}
