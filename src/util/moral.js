import Moralis from "moralis";
const Pool = Moralis.Object.extend("Pool");

export const savePool = async prop => {
  delete prop["id"];
  const keys = Object.keys(prop);

  const obj = new Pool();
  keys.forEach(k => {
    obj.save(k, prop[k]);
  });
  console.log("save", prop);
  return await obj.save();
};

// https://docs.moralis.io/moralis-server/database/queries
export const getPool = async cid => {
  const query = new Moralis.Query(Pool);
  query.equalTo("cid", cid);
  const results = await query.find();
  return results;
};

export const getPools = async (skip, limit) => {
  limit = limit || 25;
  skip = skip || 0;

  const query = new Moralis.Query(Pool);
  query.skip(skip);
  query.withCount();
  const { results } = await query.find();
  const pools = results.map(x => x.attributes);
  console.log("pools", pools);
  return pools;
};