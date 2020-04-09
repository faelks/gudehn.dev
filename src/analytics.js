import { inferEnv } from "./util";

async function getIpAddress() {
  const ipinfoToken = "bd13d1a9226c74";
  const ipinfoUrl = `https://ipinfo.io/json?token=${ipinfoToken}`;

  try {
    const result = await fetch(ipinfoUrl);
    return await result.json();
  } catch (e) {
    return Promise.resolve({
      message: `Failed to fetch ip data: ${e.message}`,
    });
  }
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
  await rawResponse.json();
}

function getNavigatorData() {
  if (typeof navigator !== "undefined") {
    const { userAgent, platform } = navigator;
    return {
      userAgent,
      platform,
    };
  } else {
    return {};
  }
}

export async function sendAnalytics() {
  const ipInfo = await getIpAddress();
  const navigatorData = getNavigatorData();

  const analyticsData = {
    ...ipInfo,
    ...navigatorData,
  };

  if (inferEnv() === "production") {
    await sendDataToDb(analyticsData);
  } else {
    console.log("Would have sent the following analytics to Db", analyticsData);
  }
}
