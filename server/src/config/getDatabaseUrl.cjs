const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/under-the-sea_development",
      test: "postgres://postgres:postgres@localhost:5432/under-the-sea_test",
      e2e: "postgres://postgres:postgres@localhost:5432/under-the-sea_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
