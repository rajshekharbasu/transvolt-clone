async function run() {
  const loginUrl = "https://dev-siteops-platform.transvolt.org/api/v1/auth/login";
  const params = new URLSearchParams();
  params.append("username", "admin");
  params.append("password", "admin123");

  try {
    console.log("Logging in...");
    const loginRes = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params
    });

    const loginData = await loginRes.json();
    const token = loginData.data.access_token;
    console.log("Login Success!");

    console.log("Fetching onboarding/sites...");
    const sitesRes = await fetch("https://dev-siteops-platform.transvolt.org/api/v1/onboarding/sites", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    console.log("Status:", sitesRes.status);
    const sitesData = await sitesRes.json();
    console.log("Sites Data:", JSON.stringify(sitesData, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
