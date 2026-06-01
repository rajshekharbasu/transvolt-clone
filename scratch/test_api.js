async function run() {
  const loginUrl = "https://dev-siteops-platform.transvolt.org/api/v1/auth/login";
  const params = new URLSearchParams();
  params.append("username", "admin");
  params.append("password", "admin123");

  try {
    console.log("Attempting login...");
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params
    });

    console.log("Login Status:", response.status);
    const resData = await response.json();
    
    if (resData && resData.data && resData.data.access_token) {
      const token = resData.data.access_token;
      console.log("Success! Token obtained.");

      // Onboarding counts
      const countsRes = await fetch("https://dev-siteops-platform.transvolt.org/api/v1/onboarding/counts", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      console.log("Counts Status:", countsRes.status);
      const countsData = await countsRes.json();
      console.log("Counts Data:", JSON.stringify(countsData, null, 2));

      // Recent activities
      const actRes = await fetch("https://dev-siteops-platform.transvolt.org/api/v1/onboarding/recent-activities", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      console.log("Activities Status:", actRes.status);
      const actData = await actRes.json();
      console.log("Activities Data:", JSON.stringify(actData, null, 2));
    } else {
      console.log("Unexpected response format:", resData);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
