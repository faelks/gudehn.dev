import { inferEnv } from "./util";

async function getIpAddress() {
  const ipinfoToken = "bd13d1a9226c74";
  const ipinfoUrl = `https://ipinfo.io/json?token=${ipinfoToken}`;
  const result = await fetch(ipinfoUrl);
  return await result.json();
}

async function sendDataToDb(data) {
  const url = "https://felix.gudehn.dev/api/send-analytics";
  const rawResponse = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await rawResponse.json();

  console.log("API Response", response);
}

export async function sendAnalytics() {
  const ipInfo = await getIpAddress();
  const { userAgent, platform } = navigator;

  const analyticsData = {
    ...ipInfo,
    userAgent,
    platform,
  };

  if (inferEnv() === "production") {
    await sendDataToDb(analyticsData);
  } else {
    console.log("Would have sent the following analytics to Db", analyticsData);
  }
}
