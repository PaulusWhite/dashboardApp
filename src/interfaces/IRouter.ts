type TPath = "/" | "/todo" | "/todo/list/" | "/forecast";

interface IRoute {
  path: TPath;
  view: string;
}

export { TPath, IRoute };
