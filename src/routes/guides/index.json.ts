import IGuide from '../../types/guide.interface';

export async function get() {
  // connect to db & get data 라 가정
  const guides: IGuide[] = [
    { id: 1, title: 'some title', body: 'some body' },
    { id: 2, title: 'some title', body: 'some body' },
    { id: 3, title: 'some title', body: 'some body' },
    { id: 4, title: 'some title', body: 'some body' },
    { id: 5, title: 'some title', body: 'some body' },
  ];

  return {
    status: 200,
    body: { guides },
  };
}
