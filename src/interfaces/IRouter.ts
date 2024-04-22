type TPath = "/" | "/todo" | "/todo/list/";

interface IRoute {
  path: TPath;
  view: string;
}

export { TPath, IRoute };
