import requests

login_url = "https://dev-siteops-platform.transvolt.org/api/v1/auth/login"
payload = {
    "username": "admin",
    "password": "admin123"
}
headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}

try:
    print("Attempting login...")
    response = requests.post(login_url, data=payload, headers=headers)
    print("Status Code:", response.status_code)
    response_data = response.json()
    print("Response keys:", response_data.keys())
    
    if "data" in response_data and "access_token" in response_data["data"]:
        token = response_data["data"]["access_token"]
        print("Success! Token obtained.")
        
        # Now fetch onboarding counts
        auth_headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        print("\nFetching onboarding counts...")
        counts_res = requests.get("https://dev-siteops-platform.transvolt.org/api/v1/onboarding/counts", headers=auth_headers)
        print("Counts Status:", counts_res.status_code)
        print("Counts Data:", counts_res.json())
        
        print("\nFetching recent activities...")
        activities_res = requests.get("https://dev-siteops-platform.transvolt.org/api/v1/onboarding/recent-activities", headers=auth_headers)
        print("Activities Status:", activities_res.status_code)
        try:
            print("Activities Data:", activities_res.json())
        except Exception as e:
            print("Failed to parse activities json:", e)
            
    else:
        print("Response data structure:")
        print(response_data)
except Exception as e:
    print("Error:", e)
