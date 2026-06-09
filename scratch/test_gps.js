async function run() {
  const url = "https://twins.transvolt.org/latest_points?limit=1&vendor=&spv=";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0cmFuc3ZvbHRfaXQiLCJleHAiOjE4MTA2NTgwNDZ9.5qOiCCey50LJoblcTIrAD-lcvi4Kd4FX29Q2D1YongY";

  try {
    console.log("Fetching live GPS points...");
    const res = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Response text:", text.slice(0, 500));
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
