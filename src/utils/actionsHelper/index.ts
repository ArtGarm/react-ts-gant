function createAction(obj: any, parent = ""): Object {
  return Object.keys(obj).reduce(
    (acc: Object, item: string) => ({
      ...acc,
      [item]: obj[item]
        ? createAction(obj[item], `${parent}${item}_`)
        : `${parent}${item}`.toUpperCase(),
    }),
    {}
  );
}

export default createAction;
