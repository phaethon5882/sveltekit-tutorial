export default interface IError<T extends Error = Error> {
  status: number;
  error: string | T;
}
