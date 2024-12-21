import { StartFunc as MastersAddOns } from '../CommonFuncs/MastersAddOns.js';

let StartFunc = async ({ inId }) => {
  let LocalId = parseInt(inId);

  let LocalMastersAddOnsData = MastersAddOns();
  let db = LocalMastersAddOnsData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.pk === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  };

  let LocalArrayAfterAlter = putObjectById({
    inCollection: LocalarrayOfObjects,
    inId: LocalId,
  });

  db.data = LocalArrayAfterAlter;
  db.write();

  return await true;
};

let putObjectById = ({ inCollection, inId }) => {
  let LocalCollection = inCollection;
  let LocalId = inId;

  LocalCollection.splice(
    LocalCollection.findIndex((a) => a.pk === LocalId),
    1
  );

  return LocalCollection;
};

export { StartFunc };
