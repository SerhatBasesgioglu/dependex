import db from "../db/index.js";

export const getConcepts = async () => {
  const { rows } = await db.query("SELECT * FROM concepts");
  return rows;
};

export const addConcept = async (name) => {
  const { rows } = await db.query(
    "INSERT INTO concepts (name) VALUES($1) RETURNING *",
    [name],
  );
  return rows[0];
};
