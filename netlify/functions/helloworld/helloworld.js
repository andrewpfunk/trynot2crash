const handler = async (event) => {
  // only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
    }
  }

  try {

    const results = {"hello":"world"};

    return {
      statusCode: 200,
      body: results,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
