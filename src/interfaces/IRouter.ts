type TPath = "/" | "/todo";

interface IRoute {
  path: TPath;
  view: string;
}

export { TPath, IRoute };
